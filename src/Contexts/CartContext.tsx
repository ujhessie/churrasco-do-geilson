import { createContext, useContext, useState,  useEffect } from "react";

type ItemCarrinho = {
  id: number;
  nome: string;
  imgUrl?: string;
  valor: number;
  quantidade: number;
};

type CarrinhoContextType = {
  itens: ItemCarrinho[];
  adicionarAoCarrinho: (produto: Omit<ItemCarrinho, 'quantidade'>) => void;
  removerDoCarrinho: (id: number) => void;
  atualizarQuantidade: (id: number, quantidade: number) => void;
  limparCarrinho: () => void;
  totalItens: number;
  valorTotal: number;
};

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined);

// Chave para o LocalStorage
const CARRINHO_STORAGE_KEY = "carrinho_compras";

export const CarrinhoProvider = ({ children }: { children: React.ReactNode }) => {
  // Carrega do LocalStorage ao inicializar
  const [itens, setItens] = useState<ItemCarrinho[]>(() => {
    if (typeof window !== 'undefined') {
      const carrinhoSalvo = localStorage.getItem(CARRINHO_STORAGE_KEY);
      return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
    }
    return [];
  });

  // Atualiza o LocalStorage sempre que os itens mudarem
  useEffect(() => {
    localStorage.setItem(CARRINHO_STORAGE_KEY, JSON.stringify(itens));
  }, [itens]);

  const adicionarAoCarrinho = (produto: Omit<ItemCarrinho, 'quantidade'>) => {
    setItens(prevItens => {
      const itemExistente = prevItens.find(item => item.id === produto.id);
      let novosItens;
      
      if (itemExistente) {
        novosItens = prevItens.map(item =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        novosItens = [...prevItens, { ...produto, quantidade: 1 }];
      }
      
      return novosItens;
    });
  };

  const removerDoCarrinho = (id: number) => {
    setItens(prevItens => prevItens.filter(item => item.id !== id));
  };

  const atualizarQuantidade = (id: number, quantidade: number) => {
    if (quantidade <= 0) {
      removerDoCarrinho(id);
      return;
    }

    setItens(prevItens =>
      prevItens.map(item =>
        item.id === id ? { ...item, quantidade } : item
      )
    );
  };

  const limparCarrinho = () => {
    setItens([]);
  };

  const totalItens = itens.reduce((total, item) => total + item.quantidade, 0);
  const valorTotal = itens.reduce((total, item) => total + (item.valor * item.quantidade), 0);

  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        adicionarAoCarrinho,
        removerDoCarrinho,
        atualizarQuantidade,
        limparCarrinho,
        totalItens,
        valorTotal,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error('useCarrinho deve ser usado dentro de um CarrinhoProvider');
  }
  return context;
};
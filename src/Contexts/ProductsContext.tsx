import { createContext, useState, useEffect } from "react";
import type { IProduto } from "../Data/Produtos";


// Tipo do contexto
interface ProdutosContextData {
  produtos: IProduto[];
}

// Criar o contexto
export const ProdutosContext = createContext<ProdutosContextData>(
  {} as ProdutosContextData
);

// Tipo das props do Provider
interface ProdutosProviderProps {
  children: React.ReactNode;
}

// Criar o Provider
export const ProdutosProvider = ({ children }: ProdutosProviderProps) => {
  const [produtos, setProdutos] = useState<IProduto[]>([]);

  useEffect(() => {
    async function buscarProdutos() {
      try {
        const resposta = await fetch("/data/data_api.json");
        const dados = await resposta.json();
        setProdutos(dados.produtos);
      } catch (erro) {
        console.error("Erro ao buscar produtos:", erro);
      }
    }

    buscarProdutos();
  }, []);

  return (
    <ProdutosContext.Provider value={{ produtos }}>
      {children}
    </ProdutosContext.Provider>
  );
};

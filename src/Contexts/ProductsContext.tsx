import { createContext } from "react";
import { produtos, type IProduto } from "../Data/Produtos";

interface ProdutosContextData {
  produtos: IProduto[];
  getProdutosPorCategoria: (categoria: string) => IProduto[];
}

export const ProdutosContext = createContext<ProdutosContextData>(
  {} as ProdutosContextData
);

export const ProdutosProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const getProdutosPorCategoria = (categoria: string) => {
    return produtos.filter((produto) => produto.categoria === categoria);
  };

  return (
    <ProdutosContext.Provider value={{ produtos, getProdutosPorCategoria }}>
      {children}
    </ProdutosContext.Provider>
  );
};

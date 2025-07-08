import { createContext } from "react";
import { produtos, type IProduto } from "../Data/Produtos";

// 1. Define a interface do contexto
interface ProdutosContextData {
  produtos: IProduto[];
}

// 2. Cria o contexto
export const ProdutosContext = createContext<ProdutosContextData>(
  {} as ProdutosContextData
);

// 3. Define as props do Provider
interface ProdutosProviderProps {
  children: React.ReactNode; // ReactNode permite colocar JSX como filhos
}

// 4. Cria o Provider
export const ProdutosProvider = ({ children }: ProdutosProviderProps) => {
  return (
    <ProdutosContext.Provider value={{ produtos }}>
      {children}
    </ProdutosContext.Provider>
  );
};

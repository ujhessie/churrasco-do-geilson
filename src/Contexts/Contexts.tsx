import { ProdutosProvider } from "./ProductsContext";

export const Contexts = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProdutosProvider>{children}</ProdutosProvider>
    </>
  );
};

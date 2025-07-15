import { CarrinhoProvider } from "./CartContext";
import { ProdutosProvider } from "./ProductsContext";

export const Contexts = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CarrinhoProvider>
        <ProdutosProvider>{children}</ProdutosProvider>
      </CarrinhoProvider>
    </>
  );
};

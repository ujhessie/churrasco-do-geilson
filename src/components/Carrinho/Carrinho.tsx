// Carrinho.tsx
import { useCarrinho } from "../../Contexts/CartContext";
import { CardItemCarrinho } from "./components/CardItemCarrinho";

import { FooterCarrinho } from "./components/FooterCarrinho";
import { HeaderCarrinho } from "./components/HeaderCarrinho";

export const Carrinho = () => {
  const {
    itens,
    removerDoCarrinho,
    atualizarQuantidade,
    totalItens,
    valorTotal,
    limparCarrinho,
  } = useCarrinho();

  const handleCheckout = () => {
    // Lógica para finalizar compra
    console.log("Finalizando compra...");
  };

  if (totalItens === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="divide-y divide-gray-200">
      <HeaderCarrinho totalItems={totalItens} onClearCart={limparCarrinho} />
      <h3 className="text-lg font-medium text-center py-4">
        Seus Itens ({totalItens})
      </h3>
      <div className="divide-y divide-gray-200">
        {itens.map((item) => (
          <CardItemCarrinho
            key={item.id}
            item={item}
            onRemove={removerDoCarrinho}
            onUpdateQuantity={atualizarQuantidade}
          />
        ))}
      </div>

      <FooterCarrinho total={valorTotal} onCheckout={handleCheckout} />
    </div>
  );
};

const EmptyCart = () => (
  <>

    <div className="p-6 text-center">
      <h3 className="text-lg font-medium text-gray-600">
        Seu carrinho está vazio
      </h3>
      <p className="text-gray-500 mt-2">Adicione produtos para continuar</p>
      <a href="/">Ver cardápio</a>
    </div>
  </>
);

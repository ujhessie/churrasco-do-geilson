// components/CartFooter.tsx
type CartFooterProps = {
  total: number;
  onCheckout: () => void;
};

export const FooterCarrinho = ({ total, onCheckout }: CartFooterProps) => (
  <div className="p-4 bg-gray-50">
    <div className="flex justify-between items-center mb-2">
      <span className="font-medium">Total:</span>
      <span className="font-bold text-lg">
        R$ {total.toFixed(2).replace(".", ",")}
      </span>
    </div>

    <button 
      onClick={onCheckout}
      className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-medium transition"
    >
      Finalizar Compra
    </button>
  </div>
);
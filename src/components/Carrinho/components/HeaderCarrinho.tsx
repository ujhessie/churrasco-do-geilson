import { ChevronLeft } from "lucide-react";

// components/CartHeader.tsx
type CartHeaderProps = {
  totalItems: number;
  onClearCart: () => void;
};

export const HeaderCarrinho = ({ onClearCart }: CartHeaderProps) => (
  <div className="p-4 flex justify-between items-center bg-gray-50">
    <a href="/" className="div-icon-back"><ChevronLeft /></a>
    
    <button
      onClick={onClearCart}
      className="text-sm text-red-500 hover:text-red-700"
    >
      Limpar tudo
    </button>
  </div>
);
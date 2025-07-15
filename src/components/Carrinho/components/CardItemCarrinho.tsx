// components/CartItem.tsx
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

type CartItemProps = {
  item: {
    id: number;
    nome: string;
    valor: number;
    quantidade: number;
    imgUrl?: string;
  };
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
};

export const CardItemCarrinho = ({ item, onRemove, onUpdateQuantity }: CartItemProps) => (
  <div className="p-4 flex gap-4">
    <div className="w-20 h-20 rounded-md overflow-hidden bg-gray-100">
      <img
        src={item.imgUrl || "https://via.placeholder.com/150"}
        alt={item.nome}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="flex-1">
      <h4 className="font-medium text-gray-800">{item.nome}</h4>
      <p className="text-gray-600">R$ {item.valor.toFixed(2).replace(".", ",")}</p>

      <div className="mt-2 flex items-center gap-3">
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantidade - 1)}
          className="text-gray-500 hover:text-orange-500"
        >
          <FaMinus size={12} />
        </button>

        <span className="w-8 text-center">{item.quantidade}</span>

        <button
          onClick={() => onUpdateQuantity(item.id, item.quantidade + 1)}
          className="text-gray-500 hover:text-orange-500"
        >
          <FaPlus size={12} />
        </button>
      </div>
    </div>

    <div className="flex flex-col items-end justify-between">
      <p className="font-medium">
        R$ {(item.valor * item.quantidade).toFixed(2).replace(".", ",")}
      </p>
      <button
        onClick={() => onRemove(item.id)}
        className="text-gray-400 hover:text-red-500"
      >
        <FaTrash size={14} />
      </button>
    </div>
  </div>
);
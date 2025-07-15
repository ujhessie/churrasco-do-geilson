import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useCarrinho } from "../../Contexts/CartContext";


export const Carrinho = () => {
  const {
    itens,
    removerDoCarrinho,
    atualizarQuantidade,
    totalItens,
    valorTotal,
    limparCarrinho,
  } = useCarrinho();

  if (totalItens === 0) {
    return (
      <div className="p-6 text-center">
        <h3 className="text-lg font-medium text-gray-600">Seu carrinho está vazio</h3>
        <p className="text-gray-500 mt-2">Adicione produtos para continuar</p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-200">
      <div className="p-4 flex justify-between items-center bg-gray-50">
        <h3 className="text-lg font-medium">Carrinho ({totalItens})</h3>
        <button
          onClick={limparCarrinho}
          className="text-sm text-red-500 hover:text-red-700"
        >
          Limpar tudo
        </button>
      </div>

      <div className="divide-y divide-gray-200">
        {itens.map((item) => (
          <div key={item.id} className="p-4 flex gap-4">
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
                  onClick={() => atualizarQuantidade(item.id, item.quantidade - 1)}
                  className="text-gray-500 hover:text-orange-500"
                >
                  <FaMinus size={12} />
                </button>

                <span className="w-8 text-center">{item.quantidade}</span>

                <button
                  onClick={() => atualizarQuantidade(item.id, item.quantidade + 1)}
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
                onClick={() => removerDoCarrinho(item.id)}
                className="text-gray-400 hover:text-red-500"
              >
                <FaTrash size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-gray-50">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium">Total:</span>
          <span className="font-bold text-lg">
            R$ {valorTotal.toFixed(2).replace(".", ",")}
          </span>
        </div>

        <button className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-medium transition">
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};
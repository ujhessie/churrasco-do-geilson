import { useContext, useState } from "react";
import { ProdutosContext } from "../../Contexts/ProductsContext";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

type CardProdutoProps = {
  id: number;
  tipo?: "primario" | "secundario";
};

export const CardProduto = ({ id, tipo = "primario" }: CardProdutoProps) => {
  const [modalAberto, setModalAberto] = useState(false);
  const { produtos } = useContext(ProdutosContext);
  const produto = produtos.find((p) => p.id === id);

  if (!produto) {
    return <p className="text-gray-500">Produto não encontrado</p>;
  }

  const { nome, imgUrl, descricao, valor } = produto;

  // Função para alternar o modal
  const toggleModal = () => setModalAberto(!modalAberto);

  // Subcomponentes internos
  const Imagem = () => (
    <img
      className="w-full h-full object-cover"
      src={imgUrl || "https://via.placeholder.com/150"}
      alt={nome}
      loading="lazy"
    />
  );

  const Titulo = ({ className = "" }: { className?: string }) => (
    <h4 className={`text-gray-600 font-bold text-base mb-2 ${className}`}>
      {nome}
    </h4>
  );

  const Descricao = ({ className = "" }: { className?: string }) => (
    <p className={`text-gray-500 text-sm ${className}`}>
      {descricao}
    </p>
  );

  const Valor = ({ className = "" }: { className?: string }) => (
    <p className={`font-bold text-gray-600 ${className}`}>
      R$ {valor?.toFixed(2).replace(".", ",")}
    </p>
  );

  const BotaoPedido = () => (
    <button className="group flex items-center gap-2 p-1 font-medium text-orange-400 hover:bg-orange-500 bg-orange-100 hover:text-white rounded-full transition">
      <span className="ml-2 text-sm">Pedir Agora</span>
      <FaWhatsapp className="w-4 h-4 transition-opacity opacity-80 group-hover:opacity-100" />
    </button>
  );

  const baseClasses =
    tipo === "primario"
      ? "shadow rounded-md overflow-clip flex gap-2 p-2 min-h-[100px] border border-gray-50 cursor-pointer hover:shadow-md transition-shadow"
      : "shadow flex flex-col rounded-xl p-4 overflow-clip relative h-full cursor-pointer hover:shadow-md transition-shadow";

  // Componente do Modal
  const ModalProduto = () => (
    <div className="fixed inset-0 bg-black/80  flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-md max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <Titulo className="text-3xl" />
            <button 
              onClick={toggleModal}
              className="text-gray-500 hover:text-gray-700"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <Imagem />
            </div>
            
            <div>
              <Valor className="text-xl mb-4" />
              <Descricao className="mb-6" />
              
              {/* {detalhes && (
                <div className="mb-6">
                  <h5 className="font-bold text-gray-700 mb-2">Detalhes:</h5>
                  <p className="text-gray-600">{detalhes}</p>
                </div>
              )} */}
              
              <div className="flex justify-between items-center">
                <BotaoPedido />
                <button 
                  onClick={toggleModal}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition"
                >
                  Voltar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className={baseClasses} onClick={toggleModal}>
        <div
          className={
            tipo === "primario"
              ? "max-w-[30%] w-full rounded-md overflow-clip"
              : "aspect-[4/3] rounded-xl overflow-hidden"
          }
        >
          <Imagem />
        </div>

        <div
          className={
            tipo === "primario"
              ? "p-2 flex flex-col grow"
              : "flex flex-col justify-between rounded-md bg-white"
          }
        >
          <div className={tipo === "primario" ? "grow" : "mt-4"}>
            <Titulo />
            <Descricao className="line-clamp-2" />
          </div>

          <div className="flex justify-between items-center">
            <Valor />
            <BotaoPedido />
          </div>
        </div>
      </div>

      {modalAberto && <ModalProduto />}
    </>
  );
};
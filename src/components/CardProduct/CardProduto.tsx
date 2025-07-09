import { useContext } from "react";
import { ProdutosContext } from "../../Contexts/ProductsContext";
import { FaWhatsapp } from "react-icons/fa";

export const CardProduto = ({
  id,
  tipo = "primario",
}: {
  id: number;
  tipo?: "primario" | "secundario";
}) => {
  const { produtos } = useContext(ProdutosContext);

  // 1. Buscar o produto pelo id
  const produto = produtos.find((p) => p.id === id);

  // 2. Se não encontrar o produto, mostrar uma mensagem de erro ou nada
  if (!produto) {
    return <p>Produto não encontrado</p>;
  }

  // 3. Componente do título
  const Titulo = () => {
    return (
      <h4 className="text-gray-600 font-bold text-[16px] leading-[100%] mb-2">
        {produto.nome}
      </h4>
    );
  };

  const Img = () => {
    return (
      <img
        className="w-full h-full object-cover"
        src={
          produto.imgUrl
            ? produto.imgUrl
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVcIhglanMSJ4RxCCYcW_a8_aKlGMw2iQ9vw&s"
        }
        alt={produto.nome}
      />
    );
  };

  const Desc = () => {
    return (
      <p className="line-clamp-2 overflow-hidden w-full leading-[105%] text-gray-500 text-[12px]  mb-3">
        {produto.descricao}
      </p>
    );
  };

  const Valor = () => {
    return (
      <p className=" font-bold inline-block text-[14px] text-gray-600">
        R$ {produto.valor?.toFixed(2)}
      </p>
    );
  };

  const AddButton = () => {
    return (
      <div className="group flex items-center gap-2 p-1  font-medium text-orange-400 text-nowrap hover:bg-orange-500 bg-orange-100 hover:text-white rounded-full transition cursor-pointer">
        <p className="ml-2 text-[14px]">Pedir Agora</p>
        <div className="text-orange-400 group-hover:text-white">
          <FaWhatsapp className="w-4 h-4 transition-opacity opacity-80 group-hover:opacity-100 -z-10" />
        </div>
      </div>
    );
  };

  return tipo === "primario" ? (
    <div className="card-produto shadow rounded-md overflow-clip flex gap-2 p-2 min-h-[100px]">
      <div className="div-img-produto max-w-[30%] w-full rounded-md">
        <Img />
      </div>

      <div className="div-info-produto p-2  flex flex-col grow">
        <div className="grow">
          <Titulo />
          <Desc />
        </div>
        <div className="flex justify-between items-center">
          <Valor />
          <AddButton />
        </div>
      </div>
    </div>
  ) : (
    // Aqui você pode adicionar o layout para o tipo "secundário"
    <div className=" shadow flex flex-col rounded-xl p-4 overflow-clip relative h-full">
      <div className="aspect-[4/3] rounded-xl overflow-hidden  ">
        <Img />
      </div>
      <div className="flex flex-grow flex-col justify-between rounded-md   bg-white ">
        <div className="mt-4">
          <Titulo />
          <Desc />
        </div>
        <div className="flex justify-between gap-4 items-center flex-grow ">
          <Valor />
          <AddButton />
        </div>
      </div>
    </div>
  );

  // return tipo === "secundario" ? ():
};

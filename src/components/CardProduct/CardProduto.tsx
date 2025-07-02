import type { IProduto } from "../../Data/Produtos";

export const CardProduto = ({ produto }: { produto: IProduto }) => {
  return (
    <div className="card-produto shadow rounded-2xl overflow-clip flex">
      <div className="div-img-produto max-w-[30%] w-full">
        <img
          className="w-full h-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVcIhglanMSJ4RxCCYcW_a8_aKlGMw2iQ9vw&s"
          alt={produto.nome}
        />
      </div>

      <div className="div-info-produto p-4">
        <h4 className="text-gray-600 font-bold text-[18px] mb-1">
          {produto.nome}
        </h4>

        {produto.categoria === "espeto" && (
          <div className="tags-produto mb-2">
            <span className="leading-[110%] text-red-400 text-[12px] font-medium bg-red-50 py-1 px-3 rounded-md inline-block">
              Sem acompanhamento
            </span>
          </div>
        )}

        <p className="line-clamp-2 overflow-hidden w-full leading-[110%] text-gray-600 text-[14px] mb-3">
          {produto.descricao}
        </p>

        <div>
          <p className="text-orange-500 font-bold inline-block text-[16px]">
            R$ {produto.valor?.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};
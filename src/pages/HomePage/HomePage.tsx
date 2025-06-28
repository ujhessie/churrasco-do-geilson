interface iProdutos {
  nome: string;
  descricao?: string;
  valor?: number;
  imgUrl?: string;
  categoria: "churrasco_completo" | "espeto" | "bebida" | "batata_frita";
}

const produtos: iProdutos[] = [
  {
    nome: "Churrasco Misto",
    descricao:
      "Espeto de carne, frango e toscana + arroz, salada, feijão, purê e vatapá.",
    valor: 25.0,
    categoria: "churrasco_completo",
  },
  {
    nome: "Churrasco de Alcatra",
    descricao: "Alcatra assada + arroz, feijão tropeiro, vinagrete e farofa.",
    valor: 30.0,
    categoria: "churrasco_completo",
  },
  {
    nome: "Espeto de Carne",
    descricao: "Espeto de carne bovina temperada na brasa.",
    valor: 10.0,
    categoria: "espeto",
  },
  {
    nome: "Espeto de Frango",
    descricao: "Espeto de frango marinado no alho e ervas.",
    valor: 8.0,
    categoria: "espeto",
  },
  {
    nome: "Espeto de Linguiça Toscana",
    descricao: "Espeto de linguiça toscana assada na brasa.",
    valor: 9.0,
    categoria: "espeto",
  },
  {
    nome: "Coca-Cola 2L",
    descricao: "Refrigerante Coca-Cola garrafa 2 litros.",
    valor: 10.0,
    categoria: "bebida",
  },
  {
    nome: "Guaraná Antártica Lata",
    descricao: "Refrigerante guaraná 350ml gelado.",
    valor: 5.0,
    categoria: "bebida",
  },
  {
    nome: "Suco Natural de Laranja",
    descricao: "Suco natural feito na hora, 300ml.",
    valor: 7.0,
    categoria: "bebida",
  },
  {
    nome: "Batata Frita Pequena",
    descricao: "Porção de batata frita crocante (200g).",
    valor: 8.0,
    categoria: "batata_frita",
  },
  {
    nome: "Batata Frita Grande",
    descricao: "Porção grande de batata frita crocante (400g).",
    valor: 14.0,
    categoria: "batata_frita",
  },
];

const CardProduto = ({ produto }: { produto: iProdutos }) => {
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

const Categoria = ({
  categoria,
  href,
}: {
  categoria: string;
  href: string;
}) => {
  return (
    <a
      href={href}
      className="tag gap-2 items-center p-1 bg-gray-100 rounded-full inline-flex hover:bg-gray-200 transition-colors"
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVcIhglanMSJ4RxCCYcW_a8_aKlGMw2iQ9vw&s"
        alt={categoria}
        className="w-[35px] aspect-square object-cover rounded-full"
      />
      <span className="text-gray-600 text-[14px] font-medium mr-3">
        {categoria}
      </span>
    </a>
  );
};

export const HomePage = () => {
  return (
    <>
      <div className="banners p-2">
        <div className="banner bg-orange-500 aspect-[4/3] shadow rounded-3xl text-white p-8 flex flex-col justify-end">
          <h2 className="font-bold text-3xl">Estamos de cara nova</h2>
          <p className="mb-4">
            Venha aproveitar nossas promoções com 0% de cashback
          </p>
          <div>
            <a
              href="#churrascos"
              className="cta bg-white text-gray-800 font-normal text-xl rounded-full py-2 px-6 inline-block shadow"
            >
              Pedir agora
            </a>
          </div>
        </div>
      </div>
      <div className="categorias p-4 ">
        <h2 className="text-2xl font-medium text-gray-600 mb-4">Categorias</h2>
        <div className="tags-categorias flex gap-2 flex-wrap  px-4 ">
          <Categoria categoria="Churrascos" href="#churrascos" />
          <Categoria categoria="Espetos" href="#espetos" />
          <Categoria categoria="Bebidas" href="#bebidas" />
          <Categoria categoria="Batatas Fritas" href="#batatas-fritas" />
        </div>
      </div>

      <div className="main-produtos p-4">
        {/* Seção de Churrascos */}
        <div id="churrascos" className="mb-12">
          <h2 className="text-2xl font-medium text-gray-600 mb-4">
            Churrascos
          </h2>
          <div className="produtos flex flex-col gap-4">
            {produtos
              .filter((produto) => produto.categoria === "churrasco_completo")
              .map((produto) => (
                <CardProduto key={produto.nome} produto={produto} />
              ))}
          </div>
        </div>

        {/* Seção de Espetos */}
        <div id="espetos" className="mb-12">
          <h2 className="text-2xl font-medium text-gray-600 mb-4">Espetos</h2>
          <div className="produtos flex flex-col gap-4">
            {produtos
              .filter((produto) => produto.categoria === "espeto")
              .map((produto) => (
                <CardProduto key={produto.nome} produto={produto} />
              ))}
          </div>
        </div>

        {/* Seção de Bebidas */}
        <div id="bebidas" className="mb-12">
          <h2 className="text-2xl font-medium text-gray-600 mb-4">Bebidas</h2>
          <div className="produtos flex flex-col gap-4">
            {produtos
              .filter((produto) => produto.categoria === "bebida")
              .map((produto) => (
                <CardProduto key={produto.nome} produto={produto} />
              ))}
          </div>
        </div>

        {/* Seção de Batatas Fritas */}
        <div id="batatas-fritas" className="mb-12">
          <h2 className="text-2xl font-medium text-gray-600 mb-4">
            Batatas Fritas
          </h2>
          <div className="produtos flex flex-col gap-4">
            {produtos
              .filter((produto) => produto.categoria === "batata_frita")
              .map((produto) => (
                <CardProduto key={produto.nome} produto={produto} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

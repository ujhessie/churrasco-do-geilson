import { CircleUser, Grip, House, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { CardProduto } from "../../components/CardProduct/CardProduto";
import { produtos } from "../../Data/Produtos";

// interface iProdutos {
//   nome: string;
//   descricao?: string;
//   valor?: number;
//   imgUrl?: string;
//   categoria: "churrasco_completo" | "espeto" | "bebida" | "batata_frita";
// }

// const produtos: iProdutos[] = [
//   {
//     nome: "Churrasco Misto",
//     descricao:
//       "Espeto de carne, frango e toscana + arroz, salada, feijão, purê e vatapá.",
//     valor: 25.0,
//     categoria: "churrasco_completo",
//   },
//   {
//     nome: "Churrasco de Alcatra",
//     descricao: "Alcatra assada + arroz, feijão tropeiro, vinagrete e farofa.",
//     valor: 30.0,
//     categoria: "churrasco_completo",
//   },
//   {
//     nome: "Espeto de Carne",
//     descricao: "Espeto de carne bovina temperada na brasa.",
//     valor: 10.0,
//     categoria: "espeto",
//   },
//   {
//     nome: "Espeto de Frango",
//     descricao: "Espeto de frango marinado no alho e ervas.",
//     valor: 8.0,
//     categoria: "espeto",
//   },
//   {
//     nome: "Espeto de Linguiça Toscana",
//     descricao: "Espeto de linguiça toscana assada na brasa.",
//     valor: 9.0,
//     categoria: "espeto",
//   },
//   {
//     nome: "Coca-Cola 2L",
//     descricao: "Refrigerante Coca-Cola garrafa 2 litros.",
//     valor: 10.0,
//     categoria: "bebida",
//   },
//   {
//     nome: "Guaraná Antártica Lata",
//     descricao: "Refrigerante guaraná 350ml gelado.",
//     valor: 5.0,
//     categoria: "bebida",
//   },
//   {
//     nome: "Suco Natural de Laranja",
//     descricao: "Suco natural feito na hora, 300ml.",
//     valor: 7.0,
//     categoria: "bebida",
//   },
//   {
//     nome: "Batata Frita Pequena",
//     descricao: "Porção de batata frita crocante (200g).",
//     valor: 8.0,
//     categoria: "batata_frita",
//   },
//   {
//     nome: "Batata Frita Grande",
//     descricao: "Porção grande de batata frita crocante (400g).",
//     valor: 14.0,
//     categoria: "batata_frita",
//   },
// ];

const SecBanners = () => {
  return (
    <div className="banners banner  bg-orange-500 aspect-[4/3] shadow-md text-gray-400 p-8  bg-[url('/images/capa.png')] bg-cover">
      <header className="flex justify-end">
        <div className="icon-menu p-2 bg-white rounded-xl shadow-2xl">
          <Grip className="text-black w-[30px] h-[30px]" />
        </div>
      </header>
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
      className="tag relative gap-2 flex justify-center  items-center  rounded-xl overflow-clip flex-shrink-0 w-[40%] text-gray-600  aspect-[21/9] bg-amber-500 p-4 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVcIhglanMSJ4RxCCYcW_a8_aKlGMw2iQ9vw&s')] bg-cover bg-center"
    >
      <div className="div-overlayer absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <p className="block text-gray-200 font-medium z-10 text-xl  text-center">
        {categoria}
      </p>
    </a>
  );
};

const SecMain = () => {
  return (
    <>
      <div className="categorias px-4 py-8">
        <h2 className="text-2xl font-medium  text-gray-600 mb-4 ">
          Categorias
        </h2>
        <div className="tags-categorias flex gap-2 w-full   overflow-x-auto">
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

const Navigation = () => {
  const [active, setActive] = useState("home");

  const NavItem = ({
    icon: Icon,
    label,
    value,
  }: {
    icon: React.ElementType;
    label: string;
    value: string;
  }) => {
    const isActive = active === value;

    return (
      <button
        onClick={() => setActive(value)}
        className={`rounded-full px-4 py-3 flex items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out
          ${isActive ? "bg-orange-600" : "bg-gray-700"}`}
      >
        <Icon className="text-gray-100 shrink-0" />
        <span
          className={`text-gray-100 font-bold text-nowrap transition-all duration-300 ease-in-out overflow-hidden block
            ${
              isActive
                ? "max-w-[200px] opacity-100 ml-1"
                : "max-w-0 opacity-0 ml-0 hidden"
            }`}
        >
          {label}
        </span>
      </button>
    );
  };

  return (
    <div className="p-4 sticky left-0 bottom-0  z-10 w-full">
      <div className="p-4 bg-gray-800 shadow-2xs rounded-full flex justify-between gap-4 mx-auto w-min">
        <NavItem icon={House} label="Início" value="home" />
        <NavItem icon={ShoppingCart} label="Carrinho" value="cart" />
        <NavItem icon={CircleUser} label="Minha Conta" value="account" />
      </div>
    </div>
  );
};

export const HomePage = () => {
  return (
    <>
      <div className="relative overflow-visible">
        <section className="-mb-8 sticky top-0">
          <SecBanners />
        </section>
        <section className=" sticky top-0 bg-white rounded-t-4xl">
          <SecMain />
        </section>
      </div>

      <Navigation />
    </>
  );
};

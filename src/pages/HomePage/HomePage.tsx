import { Grip } from "lucide-react";
import { Navigation } from "../../components/Navigation/Navigation";
import { SecProdutos } from "./components/SecProdutos";
import { SecCategorias } from "./components/SecCategorias";

const SecBanner = () => {
  return (
    <section className="banners banner   bg-orange-500 aspect-[4/3] lg:aspect-[16/9] shadow-md text-gray-400 p-8  bg-[url('/images/capa.png')] bg-center bg-cover">
      <header className="flex justify-end"></header>
    </section>
  );
};

const Header = () => {
  return (
    <header className="h-[60px] bg-white  z-20 fixed w-full">
      <div className=" p-2 flex justify-between items-center">
        <p>Churrasco do Geilson</p>
        <div className="icon-menu p-2 bg-white rounded-xl shadow-2xl">
          <Grip className="text-black w-[30px] h-[30px] " />
        </div>
      </div>
    </header>
  );
};

export const HomePage = () => {
  return (
    <div className=" scroll-smooth max-w-[1400px] mx-auto">
      <div>
        <Header />
      </div>
      <SecBanner />
      <main className=" top-0 bg-white rounded-t-xl pt-6 overflow-clip z-10">
        {/* <h2 className="text-2xl font-medium  text-gray-600  px-4">
          Categorias
        </h2> */}

        <div className="  bg-white z-20  px-4 py-2  overflow-clip sticky top-[58px]">
          <SecCategorias />
        </div>

        <SecProdutos />
        <Navigation />
      </main>
    </div>
  );
};

import { Grip } from "lucide-react";
import { Navigation } from "../../components/Navigation/Navigation";
import { SecProdutos } from "./components/SecProdutos";
import { SecCategorias } from "./components/SecCategorias";

const SecBanner = () => {
  return (
    <section className="banners banner   bg-orange-500 aspect-[4/3] lg:aspect-[16/9] shadow-md text-gray-400 p-8  bg-[url('/images/capa.png')] bg-center bg-cover">
      <header className="flex justify-end">
        <div className="icon-menu p-2 bg-white rounded-xl shadow-2xl">
          <Grip className="text-black w-[30px] h-[30px] " />
        </div>
      </header>
    </section>
  );
};

export const HomePage = () => {
  return (
    <div className=" scroll-smooth max-w-[1400px] mx-auto">
      <SecBanner />
      <main className=" top-0 bg-white rounded-t-xl pt-6 overflow-clip z-10">
        {/* <h2 className="text-2xl font-medium  text-gray-600  px-4">
          Categorias
        </h2> */}

        <div className="  bg-white z-20  px-4 py-4 shadow overflow-clip sticky -top-[2px]">
          <SecCategorias />
        </div>

        <SecProdutos />
        <Navigation />
      </main>
    </div>
  );
};

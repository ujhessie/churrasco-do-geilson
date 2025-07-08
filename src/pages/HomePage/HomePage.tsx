import { Grip } from "lucide-react";
import { Navigation } from "../../components/Navigation/Navigation";
import { SecProdutos } from "./components/SecProdutos";
import { SecCategorias } from "./components/SecCategorias";

const SecBanner = () => {
  return (
    <section className="banners banner -mb-8 sticky top-0  bg-orange-500 aspect-[4/3] lg:aspect-[16/9] shadow-md text-gray-400 p-8  bg-[url('/images/capa.png')] bg-center bg-cover">
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
    <div className="relative overflow-visible scroll-smooth max-w-[1400px] mx-auto">
      <SecBanner />
      <div className="sticky top-0 bg-white rounded-t-4xl">
        <SecCategorias />
        <SecProdutos />
        <Navigation />
      </div>
    </div>
  );
};

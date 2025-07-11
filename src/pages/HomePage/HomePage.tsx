import { SecProdutos } from "./components/SecProdutos";
import { SecCategorias } from "./components/SecCategorias";
// import { Header } from "../../components/Header/Header";
import { SecBanner } from "./components/SecBanner";
import { AnimatedPageLoad } from "../../components/AnimatedPageLoad/AnimatedPageLoad";

export const HomePage = () => {
  return (
    <AnimatedPageLoad>
      <div className=" scroll-smooth max-w-[1400px] mx-auto">
        <SecBanner />
        <main className=" top-0 bg-white rounded-t-xl pt-6  z-10">
          <div className="  bg-white z-20  px-4 py-3  sticky  top-0 -my-1">
            <SecCategorias />
          </div>

          <SecProdutos />
        </main>
      </div>
    </AnimatedPageLoad>
  );
};

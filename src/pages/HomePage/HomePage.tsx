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
        <SecCategorias />
        <SecProdutos />
      </div>
    </AnimatedPageLoad>
  );
};

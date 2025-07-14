import { SecProdutos } from "./components/SecProdutos";
import { SecCategorias } from "./components/SecCategorias";
// import { Header } from "../../components/Header/Header";
import { SecBanner } from "./components/SecBanner";
import { AnimatedPageLoad } from "../../components/AnimatedPageLoad/AnimatedPageLoad";
import { Header } from "../../components/Header/Header";

export const HomePage = () => {
  return (
    <AnimatedPageLoad>
      <div className=" scroll-smooth max-w-[1400px] mx-auto pt-[70px]">
        <Header/>
        <SecBanner />
        <SecCategorias />
        <SecProdutos />
      </div>
    </AnimatedPageLoad>
  );
};

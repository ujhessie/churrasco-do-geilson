import { ChevronLeft } from "lucide-react";
import { AnimatedPageLoad } from "../../components/AnimatedPageLoad/AnimatedPageLoad";
import { Button } from "../../components/Button/Button";

const CardCarrinho = () => {
  return <div className="p-4 bg-white rounded-md shadow min-h-[100px]"></div>;
};

export const CarrinhoPage = () => {
  return (
    <AnimatedPageLoad>
      <div className="content px-4 pb-20">
        <div className="header flex justify-between items-center py-4">
          <ChevronLeft />
          <h3 className="">Página do carrinho po</h3>
        </div>

        <h2 className="text-center mb-4">Seus produtos</h2>

        <div className="div-produtos flex flex-col gap-2">
          <CardCarrinho />
          <CardCarrinho />
          <CardCarrinho />
          <CardCarrinho />
        </div>

        <div className="div.infos mt-4">
          <div className="flex justify-between">
            <p>Total</p> <p>R$ 150.00</p>
          </div>
        </div>

        <div className="buttons flex justify-between mt-4">
          <a href="/">
            <Button>Continuar comprando</Button>
          </a>
          <Button>Finalizar compra</Button>
        </div>
      </div>
    </AnimatedPageLoad>
  );
};

const Categoria = ({
  categoria,
  href,
  img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVcIhglanMSJ4RxCCYcW_a8_aKlGMw2iQ9vw&s",
}: {
  categoria: string;
  href: string;
  img?: string;
}) => {
  return (
    <a
      href={href}
      style={{
        backgroundImage: `url(${img})`,
      }}
      className="tag relative gap-2 flex justify-center items-center rounded-xl overflow-clip flex-shrink-0 w-[40%] text-gray-600 aspect-[2.39/1] bg-amber-500 bg-cover bg-center"
    >
      <div className="div-overlayer absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <p className="block text-gray-200 font-medium z-10 text-xl text-center">
        {categoria}
      </p>
    </a>
  );
};

export const SecCategorias = () => {
  return (
    <div className="tags-categorias flex gap-2 w-full overflow-x-scroll ">
      <Categoria
        categoria="Churrascos"
        href="#churrascos"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXIDNvdmZITZtlAgTddYGBBgbetira9hCG-g&s"
      />
      <Categoria
        categoria="Espetos"
        href="#espetos"
        img="https://www.qdeliciaespeto.com.br/loja/wp-content/uploads/2016/06/frango.jpg"
      />
      <Categoria
        categoria="Bebidas"
        href="#bebidas"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdXJ1wuzIxz7FZnRI8uXcGgTHQv3LdiWluQ&s"
      />
      <Categoria
        categoria="Batatas Fritas"
        href="#batatas-fritas"
        img="https://www.pintoburguer.com.br/wp-content/uploads/2021/09/fritas-1.jpg"
      />
    </div>
  );
};

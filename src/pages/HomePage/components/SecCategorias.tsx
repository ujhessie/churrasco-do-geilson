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
      className="tag relative gap-2 flex justify-center  items-center  rounded-xl overflow-clip flex-shrink-0 w-[40%] text-gray-600  aspect-[2.39/1] bg-amber-500 p-4 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVcIhglanMSJ4RxCCYcW_a8_aKlGMw2iQ9vw&s')] bg-cover bg-center"
    >
      <div className="div-overlayer absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <p className="block text-gray-200 font-medium z-10 text-xl  text-center">
        {categoria}
      </p>
    </a>
  );
};

export const SecCategorias = () => {
  return (
    <>
      <div className="tags-categorias flex gap-2 w-full   overflow-x-scroll ">
        <Categoria categoria="Churrascos" href="#churrascos" />
        <Categoria categoria="Espetos" href="#espetos" />
        <Categoria categoria="Bebidas" href="#bebidas" />
        <Categoria categoria="Batatas Fritas" href="#batatas-fritas" />
      </div>
    </>
  );
};

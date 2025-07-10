import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Importa o estilo base


const Categoria = ({
  categoria,
  href,
  img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVcIhglanMSJ4RxCCYcW_a8_aKlGMw2iQ9vw&s",
}: {
  categoria: string;
  href: string;
  img?: string;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // impede o comportamento padrão do link
    const id = href.replace('/#', ''); // tira o "/#" e fica só com o id
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -20; // define o quanto acima do elemento você quer parar (ex: -100px)
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <a
      onClick={handleClick}
      style={{
        backgroundImage: `url(${img})`,
      }}
      className="tag cursor-pointer relative gap-2 flex justify-center items-center rounded-md overflow-clip flex-shrink-0  text-gray-600 h-full w-full bg-amber-500 bg-cover bg-center"
    >
      <div className="div-overlayer absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <p className="block text-gray-200 font-medium z-10 text-[14px] text-center">
        {categoria}
      </p>
    </a>
  );
};


export const SecCategorias = () => {
  return (
    <Swiper
      spaceBetween={8}
      slidesPerView={3.3}
      className="w-full"
    >
      <SwiperSlide className='aspect-[2.39/1]'>
        <Categoria
          categoria="Churrascos"
          href="churrascos"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXIDNvdmZITZtlAgTddYGBBgbetira9hCG-g&s"
        />
      </SwiperSlide>
      <SwiperSlide className='aspect-[2.39/1]'>
        <Categoria
          categoria="Espetos"
          href="espetos"
          img="https://www.qdeliciaespeto.com.br/loja/wp-content/uploads/2016/06/frango.jpg"
        />
      </SwiperSlide>
      <SwiperSlide className='aspect-[2.39/1]'>
        <Categoria
          categoria="Bebidas"
          href="bebidas"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdXJ1wuzIxz7FZnRI8uXcGgTHQv3LdiWluQ&s"
        />
      </SwiperSlide>
      <SwiperSlide className='aspect-[2.39/1]'>
        <Categoria
          categoria="Batatas Fritas"
          href="batatas-fritas"
          img="https://www.pintoburguer.com.br/wp-content/uploads/2021/09/fritas-1.jpg"
        />
      </SwiperSlide>
    </Swiper>
  );
};

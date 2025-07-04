export type CategoriaProduto =
  | "churrasco_completo"
  | "espeto"
  | "bebida"
  | "batata_frita";

export interface IProduto {
  nome: string;
  descricao?: string;
  valor?: number;
  imgUrl?: string;

  categoria: CategoriaProduto;
}

export const produtos: IProduto[] = [
  {
    nome: "Churrasco Misto",
    descricao:
      "Espeto de carne, frango e toscana + arroz, salada, feijão, purê e vatapá.",
    valor: 25.0,
    categoria: "churrasco_completo",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXIDNvdmZITZtlAgTddYGBBgbetira9hCG-g&s",
  },
  {
    nome: "Churrasco de Alcatra",
    descricao: "Alcatra assada + arroz, feijão tropeiro, vinagrete e farofa.",
    valor: 30.0,
    categoria: "churrasco_completo",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIFVB5TSwIIiVgEbf7tenLdHkfqCp8M0ElaQ&s",
  },
  {
    nome: "Espeto de Carne",
    descricao: "Espeto de carne bovina temperada na brasa.",
    valor: 10.0,
    categoria: "espeto",
    imgUrl:
      "https://espetinhodesucesso.com/wp-content/uploads/2018/09/espetinho-de-costela.jpg",
  },
  {
    nome: "Espeto de Frango",
    descricao: "Espeto de frango marinado no alho e ervas.",
    valor: 8.0,
    categoria: "espeto",
    imgUrl:
      "https://www.qdeliciaespeto.com.br/loja/wp-content/uploads/2016/06/frango.jpg",
  },
  {
    nome: "Espeto de Linguiça Toscana",
    descricao: "Espeto de linguiça toscana assada na brasa.",
    valor: 9.0,
    categoria: "espeto",
    imgUrl: "https://i.ytimg.com/vi/oZL38b8EKgY/maxresdefault.jpg",
  },
  {
    nome: "Coca-Cola 2L",
    descricao: "Refrigerante Coca-Cola garrafa 2 litros.",
    valor: 10.0,
    categoria: "bebida",
    imgUrl: "https://thepetitpizzaria.com.br/gramado/wp-content/uploads/2021/06/Pet-2-Litros-Coca-Cola-PNG.png"
  },
  {
    nome: "Guaraná Antártica Lata",
    descricao: "Refrigerante guaraná 350ml gelado.",
    valor: 5.0,
    categoria: "bebida",
    imgUrl: "https://brf.file.force.com/servlet/servlet.ImageServer?id=015U600000025zh&oid=00D410000012TJa&lastMod=1703691077000"
  },
  {
    nome: "Suco Natural de Laranja",
    descricao: "Suco natural feito na hora, 300ml.",
    valor: 7.0,
    categoria: "bebida",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdXJ1wuzIxz7FZnRI8uXcGgTHQv3LdiWluQ&s"
  },
  {
    nome: "Batata Frita Pequena",
    descricao: "Porção de batata frita crocante (200g).",
    valor: 8.0,
    categoria: "batata_frita",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHh2s4IG1-6FiXpjLb-Y7qhr0Bu8PAaxe-APbj3nv8z5POSpi3eQn9LevTORZVf_TiXrc&usqp=CAU"
  },
  {
    nome: "Batata Frita Grande",
    descricao: "Porção grande de batata frita crocante (400g).",
    valor: 14.0,
    categoria: "batata_frita",
    imgUrl:
      "https://www.pintoburguer.com.br/wp-content/uploads/2021/09/fritas-1.jpg",
  },
];

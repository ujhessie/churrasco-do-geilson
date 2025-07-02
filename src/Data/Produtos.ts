export type CategoriaProduto = "churrasco_completo" | "espeto" | "bebida" | "batata_frita";

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
  },
  {
    nome: "Churrasco de Alcatra",
    descricao: "Alcatra assada + arroz, feijão tropeiro, vinagrete e farofa.",
    valor: 30.0,
    categoria: "churrasco_completo",
  },
  {
    nome: "Espeto de Carne",
    descricao: "Espeto de carne bovina temperada na brasa.",
    valor: 10.0,
    categoria: "espeto",
  },
  {
    nome: "Espeto de Frango",
    descricao: "Espeto de frango marinado no alho e ervas.",
    valor: 8.0,
    categoria: "espeto",
  },
  {
    nome: "Espeto de Linguiça Toscana",
    descricao: "Espeto de linguiça toscana assada na brasa.",
    valor: 9.0,
    categoria: "espeto",
  },
  {
    nome: "Coca-Cola 2L",
    descricao: "Refrigerante Coca-Cola garrafa 2 litros.",
    valor: 10.0,
    categoria: "bebida",
  },
  {
    nome: "Guaraná Antártica Lata",
    descricao: "Refrigerante guaraná 350ml gelado.",
    valor: 5.0,
    categoria: "bebida",
  },
  {
    nome: "Suco Natural de Laranja",
    descricao: "Suco natural feito na hora, 300ml.",
    valor: 7.0,
    categoria: "bebida",
  },
  {
    nome: "Batata Frita Pequena",
    descricao: "Porção de batata frita crocante (200g).",
    valor: 8.0,
    categoria: "batata_frita",
  },
  {
    nome: "Batata Frita Grande",
    descricao: "Porção grande de batata frita crocante (400g).",
    valor: 14.0,
    categoria: "batata_frita",
  },
];

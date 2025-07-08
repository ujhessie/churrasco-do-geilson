import { useContext } from "react";
import { ProdutosContext } from "../../../Contexts/ProductsContext";
import { CardProduto } from "../../../components/CardProduct/CardProduto";

interface Categoria {
  id: string;
  nome: string;
  chave: string;
}

const CATEGORIAS: Categoria[] = [
  { id: "churrascos", nome: "Churrascos", chave: "churrasco_completo" },
  { id: "espetos", nome: "Espetos", chave: "espeto" },
  { id: "bebidas", nome: "Bebidas", chave: "bebida" },
  { id: "batatas-fritas", nome: "Batatas Fritas", chave: "batata_frita" },
];

export const SecProdutos = () => {
  const { produtos } = useContext(ProdutosContext);

  return (
    <div className="div-produtos p-4">
      {CATEGORIAS.map((categoria) => {
        // Filtra os produtos que pertencem a essa categoria
        const produtosDaCategoria = produtos.filter(
          (produto) => produto.categoria === categoria.chave
        );

        // Se não tiver produtos nessa categoria, não mostra nada
        if (produtosDaCategoria.length === 0) return null;

        return (
          <section className="mb-8 " key={categoria.id}>
            <h2 className="text-2xl font-medium text-gray-600 mb-4">
              {categoria.nome}
            </h2>
            <div className=" gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-auto-rows: 1fr">
              {produtosDaCategoria.map((produto) => (
                <CardProduto
                  tipo="secundario"
                  key={produto.id}
                  id={produto.id}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

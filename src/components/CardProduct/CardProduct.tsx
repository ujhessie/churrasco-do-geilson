// src/components/CardProduct.tsx
interface ProductProps {
  product: {
    Título: string;
    Descrição: string;
    Valor: number;
    Categoria: string;
  };
}

export const CardProduct = ({ product }: ProductProps) => {
  return (
    <div className="card-product">
      <div className="div-img">{/* Aqui você pode colocar uma imagem no futuro */}</div>
      <div className="div-info">
        <div className="part-1">
          <p><strong>{product.Título}</strong></p>
          <p>{product.Descrição}</p>
        </div>
        <div className="part-2">
          <p><strong>R$ {product.Valor}</strong></p>
        </div>
      </div>
    </div>
  );
};

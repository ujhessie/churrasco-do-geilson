// src/pages/HomePage.tsx
import { useMenu } from "../../contexts/MenuContext";
import { CardProduct } from "../../components/CardProduct/CardProduct";

export const HomePage = () => {
  const { menu } = useMenu();

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Página Inicial</h1>
      <p>Cardápio Digital responsivo</p>

      <div style={{ display: "grid", gap: "1rem" }}>
        {menu.map((item, index) => (
          <CardProduct key={index} product={item} />
        ))}
      </div>
    </div>
  );
};

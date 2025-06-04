import { useMenu } from "../../contexts/MenuContext";

export const HomePage = () => {

  const { menu } = useMenu(); // Pegando o menu com nosso hook

  return (
    <>
      <h1>Página Inicial </h1>
      <p>Cardápio Digital responsivo</p>

        <ul>
        {menu.map((item, index) => (
          <li key={index} style={{ marginBottom: "1rem" }}>
            <strong>{item.Título}</strong> — R${item.Valor}<br />
            <small>{item.Descrição}</small><br />
            <em>{item.Categoria}</em>
          </li>
        ))}
      </ul>
    </>
  );
};

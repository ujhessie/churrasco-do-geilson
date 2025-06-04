import React, { createContext, useContext, useEffect, useState } from "react";

interface MenuItem {
  Título: string;
  Descrição: string;
  Valor: number;
  Categoria: string;
}

interface MenuContextType {
  menu: MenuItem[];
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  // Carrega do localStorage primeiro (mais rápido)
  useEffect(() => {
    const localData = localStorage.getItem("menu-data");
    if (localData) {
      try {
        setMenu(JSON.parse(localData));
      } catch (e) {
        console.warn("Erro ao ler localStorage:", e);
      }
    }
  }, []);

  // Busca a versão mais nova da API
  useEffect(() => {
    fetch("https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLiztSrZlFinFz6UHDCtcO65H8KtaZ2EI-wqiBUIubK_ShyaTQ9P6ZQMDGvqDYW3CKz-I6PmBYENgJveYVC3S_7qCcLoa6veNkotqNv9u0BjhPCciLATBca7k-BCVUMJJbCJaKQusgmXEj632-FGX1l6GN72-gr5eaOLCJj-nOm98px0KXKzOj8hG45FKCGXVfOGzOjiXnd_ZVZQcjfOg4YXWIAtQhL4Tev4YZLOondQEZ81gyEYU-1P0PAxvjBdXY2KSwVrH5wOkb4b2UWprBm-U_eb3A&lib=MkpLl0FKCN3QdCyK0uXbSLNwti6VF2dMb")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        localStorage.setItem("menu-data", JSON.stringify(data));
      })
      .catch((err) => console.error("Erro ao buscar menu:", err));
  }, []);

  return (
    <MenuContext.Provider value={{ menu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu deve ser usado dentro de um MenuProvider");
  }
  return context;
};

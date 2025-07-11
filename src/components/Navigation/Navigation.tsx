import { CircleUser, House, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Atualiza o estado com base na rota atual
  const [active, setActive] = useState(() => {
    if (location.pathname === "/") return "inicio";
    if (location.pathname === "/carrinho") return "carrinho";
    if (location.pathname === "/minha-conta") return "minha-conta";
    return "";
  });

  const NavItem = ({
    icon: Icon,
    label,
    value,
    path,
  }: {
    icon: React.ElementType;
    label: string;
    value: string;
    path: string;
  }) => {
    const isActive = active === value;

    const handleClick = () => {
      setActive(value);
      navigate(path);
    };

    return (
      <button
        onClick={handleClick}
        className={`rounded-full px-4 py-3 flex items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out
          ${isActive ? "bg-orange-500" : ""}`}
      >
        <Icon className="text-gray-100 shrink-0" />
        <span
          className={`text-gray-100 text-[14px] font-bold text-nowrap transition-all duration-300 ease-in-out overflow-hidden block
            ${
              isActive
                ? "max-w-[200px] opacity-100 ml-1"
                : "max-w-0 opacity-0 ml-0 hidden"
            }`}
        >
          {label}
        </span>
      </button>
    );
  };

  return (
    <div className="px-2 fixed left-0 bottom-0 z-10 w-full bg-gray-800">
      <div className="px-4 py-2 w-full shadow-2xs rounded-full flex justify-between gap-4 mx-auto">
        <NavItem icon={House} label="Início" value="inicio" path="/" />
        <NavItem icon={ShoppingCart} label="Carrinho" value="carrinho" path="/carrinho" />
        <NavItem icon={CircleUser} label="Minha Conta" value="minha-conta" path="/minha-conta" />
      </div>
    </div>
  );
};

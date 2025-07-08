import { CircleUser, House, ShoppingCart } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [active, setActive] = useState("home");

  const NavItem = ({
    icon: Icon,
    label,
    value,
  }: {
    icon: React.ElementType;
    label: string;
    value: string;
  }) => {
    const isActive = active === value;

    return (
      <button
        onClick={() => setActive(value)}
        className={`rounded-full px-4 py-3 flex items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out
          ${isActive ? "bg-orange-600" : "bg-gray-700"}`}
      >
        <Icon className="text-gray-100 shrink-0" />
        <span
          className={`text-gray-100 font-bold text-nowrap transition-all duration-300 ease-in-out overflow-hidden block
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
    <div className="p-4 sticky left-0 bottom-0  z-10 w-full">
      <div className="p-4 bg-gray-800 shadow-2xs rounded-full flex justify-between gap-4 mx-auto w-min">
        <NavItem icon={House} label="Início" value="home" />
        <NavItem icon={ShoppingCart} label="Carrinho" value="cart" />
        <NavItem icon={CircleUser} label="Minha Conta" value="account" />
      </div>
    </div>
  );
};

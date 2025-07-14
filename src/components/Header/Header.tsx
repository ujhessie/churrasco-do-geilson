import { CircleUser, Grip } from "lucide-react";
import { Button } from "../Button/Button";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Rolando para baixo - esconde
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Rolando para cima - mostra
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-20 w-full shadow transition-transform duration-200 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="p-2 py-4 flex justify-between items-center bg-white">
        <p className="text-gray-500 font-extrabold leading-[100%]">
          CHURRASCO <br /> DO GEILSON
        </p>
        <div className="flex gap-1 items-center">
          <a href="/login_cadastro">
            <Button icon={<CircleUser />}>LOGIN</Button>
          </a>
          <div className="icon-menu p-1 bg-white hover:bg-orange-500 rounded-md cursor-pointer hover:text-white">
            <Grip className="text-gray-600 w-[24px] h-[24px]" />
          </div>
        </div>
      </div>
    </header>
  );
};
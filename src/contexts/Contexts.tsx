
import { MenuProvider } from "./MenuContext";




export const Contexts = ({children} : {children: React.ReactNode}) => {
  return (
    <MenuProvider>
      {/* Adicione aqui outros Providers se quiser */}
      {children}
    </MenuProvider>
  );
};

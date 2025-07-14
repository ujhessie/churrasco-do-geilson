import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { CarrinhoPage } from "../pages/CarrinhoPage/CarrinhoPage";
import { Navigation } from "../components/Navigation/Navigation";
import { MinhaContaPage } from "../pages/MinhaContaPage/MinhaContaPage";
import { AuthPage } from "../pages/AuthPage/AuthPage";


export const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/carrinho" element= {<CarrinhoPage/>}/>
        <Route path="/minha-conta" element= {<MinhaContaPage/>}/>
        <Route path="/login_cadastro" element= {<AuthPage/>}/>
        <Route path="*" element={<HomePage />} />
      </Routes>
        
        <Navigation />
    </Router>
  );
};

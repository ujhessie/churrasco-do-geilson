import { Button } from "../../components/Button/Button";

export const AuthPage = () => {
  return (
    <div>
      <div className="content flex flex-col justify-end">
        <h2>Bem vindo(a)!</h2>
        <p>
          Faça login ou se cadastre para realizar e acompanhar seus pedidos em
          tempo real.
        </p>
        <form action="#">
          <div>
            <label htmlFor="">Número de telefone</label>
            <input type="text" placeholder="Ex: 98 9999-9999" />
          </div>
          <div>
            <label htmlFor="">Senha</label>
            <input type="text" placeholder="Senha de acesso" />
          </div>
          <Button>Entrar</Button>
          <div>
            <p>AInda</p>
          </div>
        </form>



      </div>
    </div>
  );
};

import Logo from "../assets/Logo.png";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="bg-white rounded-t-2xl md:rounded-tl-2xl flex flex-col items-center p-10 md:p-20 gap-10 min-h-[calc(100vh-40px)] md:mt-5">
      <img src={Logo} alt="Logo" />

      <div className="border border-[#E3E5E8] rounded-xl p-10 w-[400px]">
        <div className="mb-10 space-y-2">
          <h1 className="font-bold text-2xl">Acesse o portal</h1>
          <p>Entre usando seu e-mail e senha cadastrados</p>
        </div>
        <form className="flex flex-col gap-5">
          <label>
            <p className="uppercase text-[#535964] text-[12px]">E-mail</p>
            <input
              type="email"
              placeholder="exemplo@mail.com"
              className="border-b border-[#E3E5E8] p-2 w-full focus:outline-none"
            />
          </label>

          <label>
            <p className="uppercase text-[#535964] text-[12px]">Senha</p>
            <input
              type="password"
              placeholder="digite sua senha"
              className="border-b border-[#E3E5E8] p-2 w-full focus:outline-none"
            />
          </label>

          <button className="bg-[#1E2024] text-white p-3 rounded-lg font-bold cursor-pointer hover:bg-[#3E4045] transition-colors mt-4">
            Entrar
          </button>
        </form>
      </div>

      <div className="border border-[#E3E5E8] rounded-xl p-10 space-y-5 w-[400px]">
        <div>
          <h1 className="font-bold text-2xl">Ainda não tem uma conta?</h1>
          <p>Cadastre agora mesmo</p>
        </div>
        <Link
          to="/register"
          className="bg-[#E3E5E8] text-[#1E2024] font-bold p-3 rounded-lg inline-block w-full text-center cursor-pointer"
        >
          Criar conta
        </Link>
      </div>
    </div>
  );
};

export default Login;

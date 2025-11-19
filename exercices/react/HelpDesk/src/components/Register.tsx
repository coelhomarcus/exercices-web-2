import { Link } from "react-router";
import Logo from "../assets/Logo.png";

const Register = () => {
  return (
    <div className="bg-white rounded-t-2xl md:rounded-tl-2xl flex flex-col items-center p-10 md:p-20 gap-10 min-h-[calc(100vh-40px)] md:mt-5">
      <img src={Logo} alt="Logo" />

      <div className="border border-[#E3E5E8] rounded-xl p-10 w-[400px]">
        <div className="mb-10 space-y-2">
          <h1 className="font-bold text-2xl">Crie sua conta</h1>
          <p>Informe seu nome, e-mail e senha</p>
        </div>

        <form className="flex flex-col gap-5">
          <label>
            <p className="uppercase text-[#535964] text-[12px]">Nomel</p>
            <input
              type="text"
              placeholder="digite seu nome completo"
              className="border-b border-[#E3E5E8] p-2 w-full focus:outline-none"
            />
          </label>

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
            <p className="text-[#797f8c] text-[12px] pt-0.5 italic">
              Minimo 6 digitos
            </p>
          </label>

          <Link
            to="/login"
            className="bg-[#1E2024] text-white p-3 rounded-lg font-bold cursor-pointer hover:bg-[#3E4045] transition-colors mt-4 text-center"
          >
            Cadastrar
          </Link>
        </form>
      </div>

      <div className="border border-[#E3E5E8] rounded-xl p-10 space-y-5 w-[400px]">
        <div>
          <h1 className="font-bold text-2xl">Já tem uma conta?</h1>
          <p>Entre agora mesmo</p>
        </div>
        <Link
          to="/login"
          className="bg-[#E3E5E8] text-[#1E2024] font-bold p-3 rounded-lg inline-block w-full text-center cursor-pointer"
        >
          Acessar conta
        </Link>
      </div>
    </div>
  );
};

export default Register;

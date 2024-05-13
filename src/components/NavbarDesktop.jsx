import Logo from "../../public/header/LOGO.svg";

function NavbarDesktop() {
  return (
    <div className="lg:invisible w-full flex justify-evenly h-20 items-center flex-row bg-green-black fixed z-30">
      <a href="#">
        <img
          src={Logo}
          alt="logo com as iniciais do meu nome (O M)"
          className="w-32 "
        />
      </a>
      <nav className="flex">
        <li className="list-none">
          <a
            href="#inicio"
            className="text-white font-bold text-lg px-6 pb-6 hover:border-b-4 hover:border-green-blue"
          >
            INICIO
          </a>
        </li>
        <li className="list-none">
          <a
            href="#projetos"
            className="text-white font-bold text-lg px-6 pb-6 hover:border-b-4 hover:border-green-blue"
          >
            PROJETOS
          </a>
        </li>
        <li className="list-none">
          <a
            href="#competencias"
            className="text-white font-bold text-lg px-6 pb-6 hover:border-b-4 hover:border-green-blue"
          >
            COMPETÊNCIAS
          </a>
        </li>
        <li className="list-none">
          <a
            href="#sobre"
            className="text-white font-bold text-lg px-6 pb-6 hover:border-b-4 hover:border-green-blue"
          >
            SOBRE
          </a>
        </li>
      </nav>
    </div>
  );
}

export default NavbarDesktop;

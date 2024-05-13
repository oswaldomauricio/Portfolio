import { useState } from "react";
import Logo from "../../public/header/LOGO.svg";
import Menu from "../../public/header/menu.svg";
import { TfiClose } from "react-icons/tfi";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (

    <div>
      <div className="container mx-auto px-7 w-screen bg-green-black fixed -top-2 z-30 lgm:invisible">
        <div className="lgm:invisible">
          <div className="w-full h-20 flex items-center justify-between">
            <a href="https://portfolio-oswaldo-react.vercel.app">
              <img
                src={Logo}
                alt="logo com as iniciais do meu nome (O M)"
                className="w-32 "
              />
            </a>
            <div onClick={() => setOpen(!open)}>
              {open ? (
                <TfiClose className="text-green-blue text-4xl" />
              ) : (
                <img src={Menu} className="text-green-blue text-4xl" />
              )}
            </div>
          </div>
        </div>
        </div>
        <div>
          {open && (
            <nav className="w-full h-auto flex items-end flex-col bg-green-black fixed top-[70px] rounded-bl-3xl z-30 lgm:invisible">
              <li className="list-none">
                <a
                  href="#inicio"
                  className="text-white font-bold text-lg px-6 hover:border-b-2 hover:border-green-blue"
                >
                  INICIO
                </a>
              </li>
              <li className="list-none">
                <a
                  href="#projetos"
                  className="text-white font-bold text-lg px-6 hover:border-b-2 hover:border-green-blue"
                >
                  PROJETOS
                </a>
              </li>
              <li className="list-none">
                <a
                  href="#competencias"
                  className="text-white font-bold text-lg px-6 hover:border-b-2 hover:border-green-blue"
                >
                  COMPETÊNCIAS
                </a>
              </li>
              <li className="list-none">
                <a
                  href="#sobre"
                  className="text-white font-bold text-lg px-6 hover:border-b-2 hover:border-green-blue"
                >
                  SOBRE
                </a>
              </li>
            </nav>
          )}
        </div>
    </div>
    
  );
}

export default Navbar;

import { FaGithub, FaLinkedin } from "react-icons/fa";
import imgVectorMain from "../../public/img-vector.svg";

function MainHero() {
  return (
    <main id="inicio" className="bg-green-main">
      <div className="flex lg:justify-center justify-evenly items-end ">
        <div className="lg:m-8 m-32 sm:pt-40 pt-20 flex lg:items-center items-start flex-col">
          <span className="text-white text-xl font-semibold">
            Olá, eu sou o
          </span>
          <h1 className="text-green-blue text-3xl font-bold pt-1 flex">
            Oswaldo Mauricio
            <span className="animate-pulse z-0">|</span>
          </h1>
          <p className="text-white text-lg pt-8 pb-16 font-medium items-center">
            DESENVOLVEDOR FRONT-END
          </p>
          <div className="text-white flex items-center gap-6">
            <a
              href="https://github.com/oswaldomauricio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 border-2 border-green-button py-3 px-5 rounded-lg hover:border-white shadow-lg hover:shadow-cyan-500/50">
                GitHub <FaGithub />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/oswaldo-mauricio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 border-2 border-green-button py-3 px-5 rounded-lg hover:border-white shadow-md hover:shadow-cyan-500/50">
                LinkedIn <FaLinkedin />
              </button>
            </a>
          </div>
        </div>
        <img
          src={imgVectorMain}
          className="lg:hidden pr-32 pt-20 w-[500px] h-[500px] animate-floating"
        />
      </div>
      <div className="sm:mt-32 mt-10 w-full h-20 bg-green-black"></div>
    </main>
  );
}
export default MainHero;

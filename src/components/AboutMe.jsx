import imgAboutMe from "../../public/img2-aboutMe.png";
// import curriculo from "../../public/oswaldo mauricio.pdf - desenvolvedor.pdf";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

// import { FaDownload, FaEnvelope } from "react-icons/fa";

function AboutMe() {
  return (
    <div id="sobre" className="container mx-auto px-7 ">
      <div className="container flex flex-col items-center">
        <h2 className="font-semibold text-2xl leading-10 text-green-blue pt-10 pb-2">
          SOBRE MIM
        </h2>
        <div className="flex transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-100 items-start">
          <div className="w-1 h-60 bg-green-blue"></div>
          <img
            src={imgAboutMe}
            alt="Foto sobre mim"
            className="w-60 h-60 z-0"
          />
        </div>

        <h3 className="font-semibold text-lg leading-10 text-white pt-2 pb-6">
          Manaus, Amazonas
        </h3>
        <p className="container font-medium text-lg text-gray-text text-center leading-9 w-3/5 h-full pb-10">
          Entusiasta da tecnologia e aficionado pela arte da programação, estou
          sempre animado com a oportunidade de criar soluções inovadoras.
          Atualmente, estou imerso no aprimoramento das minhas habilidades em
          desenvolvimento, especialmente em tecnologias como React, Angular,
          Node, Express, e muito mais. Estou entrando no universo do
          desenvolvimento de sites como freelancer, e meu compromisso é oferecer
          não apenas qualidade técnica, mas uma experiência excepcional ao
          cliente. Sou um programador dedicado, apaixonado por desafios e pronto
          para colaborar de maneira ágil e eficiente com você, garantindo que
          cada projeto seja uma jornada de sucesso mútuo.
        </p>

        <div className="text-white flex items-center gap-6 h-full pb-8 flex-col xlm:flex-row">
          {/* <a href={curriculo} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 border-2 border-green-button py-3 px-5 rounded-lg hover:border-white shadow-lg hover:shadow-cyan-500/50">
              Curriculo <FaDownload />
            </button>
          </a> */}
          <a
            href="https://www.instagram.com/oswaldo.mauriciio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 border-2 border-green-button py-3 px-5 rounded-lg hover:border-white shadow-lg hover:shadow-cyan-500/50">
              Instagram <FaInstagram />
            </button>
          </a>
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
            <button className="flex items-center gap-2 border-2 border-green-button py-3 px-5 rounded-lg hover:border-white shadow-lg hover:shadow-cyan-500/50">
              Linkedin <FaLinkedin />
            </button>
          </a>
          <a
            href="mailto:oswaldomauricio6@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 border-2 border-green-button py-3 px-5 rounded-lg hover:border-white shadow-lg hover:shadow-cyan-500/50">
              E-mail <FaEnvelope />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

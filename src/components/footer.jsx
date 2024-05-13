import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




export default function Footer() {
  return (
    <div id="competencias" className="w-3/5 mx-auto px-7 my-32 text-gray-50">
        <div className="flex justify-center items-center">
            @2024 Oswaldo Mauricio
        </div>
        <div className="flex gap-8 text-4xl justify-center items-center my-8">
            <a href="https://www.linkedin.com/in/oswaldo-mauricio/">
                <FaLinkedin />
            </a>
            <a href="https://github.com/oswaldomauricio">
                <FaGithub  />
            </a>
            <a href="https://www.instagram.com/oswaldo.mauriciio/">
                <FaInstagram />
            </a>
        </div>
    </div>
  );
}

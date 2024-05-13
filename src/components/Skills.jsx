import { FaGithub, FaServer } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import CpnSkillsCards from "./Skills_cards/cpn.skills.card";
import CardsApi from "./Skills_cards/cards.json";
import { useState } from "react";

function Skills() {
  const [competencia, setCompetencia] = useState("");
  const [competenciaData, setCompetenciaData] = useState([]);

  const onCliqueCompetencias = (categoria) => {
    setCompetencia(categoria);
    setCompetenciaData(Object.entries(CardsApi[0][categoria]));
  };

  return (
    <div id="competencias" className="w-3/5 mx-auto px-7 ">
      <div>
        <h2 className="container font-semibold text-2xl leading-10 text-green-blue pt-10 pb-2  ">
          COMPETÊNCIAS:
        </h2>
        <p className="container font-medium text-lg text-gray-text leading-9 w-full h-full pb-10">
          Clique Abaixo, e veja as minhas principais competências profissionais. Estou buscando cada
          vez mais aprimorar meus conhecimentos na área de desenvolvimento.
        </p>
      </div>
      <div className="flex flex-col items-center grid-rows-3 gap-4 w-full justify-between xlm:flex-row ">
        <button
          className={`box-border rounded-lg h-60 w-60 p-4 hover:bg-green-blue-hover bg-green-button ${competencia === "frontEnd" ? 'bg-emerald-800' : ''} text-zinc-50 flex flex-col justify-center text-2xl items-center`}
          type="button"
          onClick={() => onCliqueCompetencias("frontEnd")}
        >
          <MdComputer className="text-6xl" />
          <h2 className=" font-bold text-xl">DESENVOLVIMENTO FRONT-END</h2>
        </button>
        <button
          className={`box-border rounded-lg h-60 w-60 p-4  hover:bg-green-blue-hover bg-green-button  ${competencia === "BackEnd" ? 'bg-emerald-800' : ''} text-zinc-50 flex flex-col justify-center text-2xl items-center`}
          type="button"
          onClick={() => onCliqueCompetencias("BackEnd")}
        >
          <FaGithub className="text-6xl" />
          <h2 className=" font-bold  text-xl">DESENVOLVIMENTO BACK-END</h2>
        </button>
        <button
          className={`box-border rounded-lg h-60 w-60 p-4 hover:bg-green-blue-hover bg-green-button ${competencia === "Banco de Dados" ? 'bg-emerald-800' : ''} text-zinc-50 flex flex-col justify-center text-2xl items-center`}
          type="button"
          onClick={() => onCliqueCompetencias("Banco de Dados")}
        >
          <FaServer className="text-6xl" />
          <h2 className=" font-bold  text-xl">BANCO DE DADOS</h2>
        </button>
      </div>
      <div className="grid grid-cols-1 gap-3 w-full justify-between justify-items-center my-12 xlm:grid-cols-3">
        {competenciaData.map(([skill, data]) => (
          <CpnSkillsCards key={skill} texto={data.texto} titulo={data.titulo} />
        ))}
      </div>
    </div>
  );
}

export default Skills;

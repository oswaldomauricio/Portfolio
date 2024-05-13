import { MdComputer } from "react-icons/md";
import PropTypes from "prop-types";

export default function CpnSkillsCards(props) {
  return (
    <div>
      <div className="border-2 border-white hover:border-teal-400 rounded-lg w-60 h-60 ">
        <div className="box-border rounded-lg h-60 w-100 p-4 text-zinc-50 hover:text-teal-200 flex flex-col justify-center items-center">
          <MdComputer className="text-6xl" />
          <h2 className="font-bold text-center">{props.titulo}</h2>
          <p className="text-xs text-center">{props.texto}</p>
        </div>
      </div>
    </div>
  );
}

CpnSkillsCards.propTypes = {
    titulo: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
  };
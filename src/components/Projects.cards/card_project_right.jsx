import PropTypes from "prop-types";

export default function CardProjectRight(props) {
  return (
    <div className="flex flex-col items-center grid-rows-3 gap-4 w-full justify-between xlm:flex-row ">
      <div>
        <h2 className="font-bold text-2xl text-white mb-4 text-left lg:text-center">
          {props.titulo}
        </h2>
        <p className=" font-bold text-lg text-gray-text text-left lg:text-center">
          {props.texto}
        </p>
        <a href={props.link}>{props.tituloLink}</a>
      </div>
      <div>
        <iframe
          width="400"
          height="215"
          src={props.video}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          frameBorder="0"
          referrerPolicy="strict-origin-when-cross-origin" 
        ></iframe>
      </div>
    </div>
  );
}

CardProjectRight.propTypes = {
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tituloLink: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
};

import PropTypes from "prop-types";

export default function CardProjectLeft(props) {
  return (
    <div className="flex items-center grid-rows-3 gap-4 w-full justify-between xlm:flex-row flex-col-reverse ">
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
      <div>
        <h2 className=" font-bold text-2xl text-white mb-4  text-left lg:text-center">
          {props.titulo}
        </h2>
        <p className=" font-bold text-lg text-gray-text  text-left lg:text-center">
          {props.texto}
        </p>
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 text-base decoration-dotted"
        >
          {props.tituloLink}
        </a>
      </div>
    </div>
  );
}

CardProjectLeft.propTypes = {
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tituloLink: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
};

import React from "react";
import PropTypes from "prop-types";

function Project({ name, description, image, link }) {
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="relative h-72 mt-4 border rounded-md"
      >
        <div className="absolute w-full h-full  bg-black opacity-80 text-center p-16 hover:hidden transition-all duration-500">
          <h3 className="text-yellow-400 font-black text-xl md:text-3xl mb-2">
            {name}
          </h3>
          <p className="text-yellow-100 font-bold sm:text-xs text-base">
            {description}
          </p>
        </div>

        <img className="rounded-md w-full h-full" src={image} alt={name} />
      </a>
    </>
  );
}
Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Project;

import React from "react";
import PropTypes from "prop-types";

const ChipElement = (text) =>{
  return (
    <div className="flex flex-wrap justify-center space-x-2">
    <span
      className="px-10 py-2 rounded text-white bg-blue-300 font-semibold text-sm flex  w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
      <p>{text}</p>
    </span>

  </div>
  )
}

Chip.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ChipElement;
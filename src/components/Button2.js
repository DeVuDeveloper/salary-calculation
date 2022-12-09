import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Button2 = ({ 
  id,
  onClick,
  className,
  type
 }) => {

  useEffect(() => {
    const buttonValue = "IncomeDetails".split("").join("<br/>")
    const el = document.querySelector("#vert-btn1")
    el.innerHTML = buttonValue.replace(/([A-Z])/g, "<br/> $1")
  }, [])

  return (
    <div>
      <button
        id={id}
        onClick={onClick}
        className={className}
        type={type}
  
      ></button>
    </div>
  )
}

Button2.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button2;

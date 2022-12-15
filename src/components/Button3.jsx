import React, {  useEffect } from "react";
import PropTypes from "prop-types";

const Button3 = ({
   id,
   type,
   onClick,
   className,
   disabled
   
  }) => {

  useEffect(() => {
    const buttonValue = "income".split("").join("<br/>");
    const el = document.querySelector("#vert-btn2");
    el.innerHTML = buttonValue;
  }, [])

  return (
    <div>
      <button
        id={id}
        type={type}
        onClick={onClick}
        className={className}
        disabled={disabled}
      ></button>
    </div>
  )
}

Button3.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,

  
  
};

export default Button3;

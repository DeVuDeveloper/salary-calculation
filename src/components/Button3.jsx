import React, {  useEffect } from "react";
import PropTypes from "prop-types";

const Button3 = ({
   id,
   type,
   onClick,
   className,
   
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
       
      ></button>
    </div>
  )
}

Button3.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  
};

export default Button3;

import React from "react";
import PropTypes from "prop-types";

const RadioButton = ({
   id,
   type,
   name,
   label,
   value,
   checked,
   required,
   onChange }) => {

  return (
    <div className="main flex rounded-full overflow-hidden select-none">
      <label htmlFor={id} className="flex radio cursor-pointer">
        <input
          className="my-auto transform scale-125 mt-1 ml-5"
          id={id}
          type={type}
          label={label}
          name={name}
          required={required}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <div className="title mx-3 hover:text-blue-300">{label}</div>
      </label>
    </div>
  )
}

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired,
};

export default RadioButton;

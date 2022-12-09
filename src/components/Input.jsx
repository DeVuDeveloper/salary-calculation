import React from "react";
import PropTypes from "prop-types";

const Input = ({
  id,
  type,
  name,
  className,
  required,
  value,
  placeholder,
  onChange,
}) => {
  
  return (
    <div className="relative z-0  p-0 m-0 w-full group">
      <label
        htmlFor="salary"
        className="font-mono uppercase font-bold  text-[11px]  mobile-input text-white
    bg-neutral-900 relative px-1  top-2 left-8 w-auto group-focus-within:text-blue-300 "
      >
        Total income
      </label>
      <input
        id={id}
        type={type}
        name={name}
        className={className}
        required={required}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  )
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired,
}

export default Input;


import React from 'react';
import PropTypes from "prop-types";


const RadioButton = ((props ) => (

    <div className="main flex rounded-full overflow-hidden select-none">
      <label htmlFor={props.id} className="flex radio cursor-pointer">
        <input
          className="my-auto transform scale-125 mt-1 ml-5"
          
          {...props}
        />
        <div className="title mx-3 hover:text-blue-300">{props.label}</div>
      </label>
    </div>
  ))

RadioButton.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
}

export default RadioButton;

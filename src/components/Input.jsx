import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

const Input = forwardRef((props, ref) => (
  <div className='relative z-0  p-0 m-0 w-full group'>
  <label
    htmlFor='salary'
    className='font-mono uppercase font-bold  text-[11px]  mobile-input text-white
bg-neutral-900 relative px-1  top-2 left-8 w-auto group-focus-within:text-blue-300 '
  >
    Total income
  </label>
  <input
    style={{ height: '45px' }}
    ref={ref}
    {...props}
    className='h-9 text-10  mobile-input2 bg-transparent  py-55-rem border-0 border-b-2 border-stone-600
    hover:border-white focus:outline-none text-white text-sm rounded 
    focus:border-2 focus:border-blue-300   w-full p-2 dark:bg-gray-700 dark:border-gray-400 placeholder-gray-400'
  />
  </div>
))

Input.displayName = 'Input'
Input.propTypes = {
  className: PropTypes.string,
}

export default Input;


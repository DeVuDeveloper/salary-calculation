import React, {useRef, useEffect} from 'react';

const Button3 = () => {
  const ref = useRef(null);

  useEffect(() => {
    const buttonValue='Income'.split("").join("<br/>")
    const el = document.querySelector('#vert-btn2');
    el.innerHTML=buttonValue
  }, []);
  
  return (
    <div class="">
 
      <button class="text-sm mt-10 w-7 text-white font-bold py-2 border-b-2 border-blue-500 rounded" ref={ref} id="vert-btn2"></button>
          
    </div>
  )
}
export default Button3;

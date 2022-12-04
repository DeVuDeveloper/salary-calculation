import React, {useRef, useEffect} from 'react';

const Button2 = () => {
  const ref = useRef(null);

  useEffect(() => {
    const buttonValue='IncomeDetails'.split("").join("<br/>");
    const el = document.querySelector('#vert-btn1');
    el.innerHTML=buttonValue.replace(/([A-Z])/g, '<br/> $1')

  }, []);
  
  return (
    <div class="w-10 p-0 m-0">
 
      <button class="w-7 text-sm text-center  text-white font-bold pb-4 bg-blue-300 border-b-2 border-blue-500 hover:text-blue-400 rounded" ref={ref} id="vert-btn1"></button>
          
    </div>
  )
}
export default Button2;

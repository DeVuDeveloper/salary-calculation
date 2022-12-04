import React from "react"

const Inputa = () => {
  return (
  

    <div class="relative z-0  px-1 w-full group">
    <label for="salary" class="font-mono uppercase font-bold  text-[11px]  text-white
    bg-stone-800 relative px-1  top-2 left-3 w-auto group-focus-within:text-blue-300 ">
    Salary Income
    </label>
    <input type="number" name="salary" id="salary" class="h-9 text-10  bg-transparent border py-55-rem border border-stone-600
      hover:border-white focus:outline-none text-white text-sm rounded 
      focus:border-2 focus:border-blue-300  block w-full p-1.5 dark:bg-gray-700 dark:border-gray-400 placeholder-gray-400"
    required="" placeholder="$" />
    </div>
  )
}

export default Inputa;
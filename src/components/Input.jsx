import React from "react"

const Inputa = () => {
  return (
  

    <div class="relative z-0  px-2 w-full group">
    <label for="first_name" class="font-mono uppercase font-bold  text-[11px]  text-white
    bg-black relative px-1  top-2 left-3 w-auto group-focus-within:text-blue-300 ">
    Salary Income
    </label>
    <input type="number" name="salary" id="salary" class="h-8 text-10  bg-black border py-55-rem border-gray-300 text-white text-sm rounded-lg focus:ring-blue-400 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    required="" placeholder="salary income" />
    </div>
  )
}

export default Inputa;
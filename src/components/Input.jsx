import React from "react"

const Input = () => {
  return (
  

    <div class="relative z-0  px-2 w-full group">
    <label for="salary-input" class="font-mono uppercase font-bold  text-[11px]  text-gray-900 dark:text-gray-300
    bg-white relative px-1  top-2 left-3 w-auto group-focus-within:text-red-600 ">
    Salary income
    </label>
    <input type="number" name="salary" id="salary-input" class="h-8 text-10  bg-gray-50 border py-55-rem border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    required="" placeholder="Enter salary please" />
    </div>
  )
}

export default Input;
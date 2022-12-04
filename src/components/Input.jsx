import React from "react"

const Input = () => {
  return (
    <div class="relative z-0  p-0 m-0 w-full group">
      <label
        for="salary"
        class="font-mono uppercase font-bold  text-[11px]  text-white
    bg-neutral-900 relative px-1  top-2 left-8 w-auto group-focus-within:text-blue-300 "
      >
        Total Income
      </label>
      <input
        type="number"
        name="salary"
        id="salary"
        class="h-9 text-10  bg-transparent  py-55-rem border-0 border-b-2 border-stone-600
      hover:border-white focus:outline-none text-white text-sm rounded 
      focus:border-2 focus:border-blue-300   w-full p-2 dark:bg-gray-700 dark:border-gray-400 placeholder-gray-400"
        required=""
        placeholder="$"
      />
    </div>
  )
}

export default Input;

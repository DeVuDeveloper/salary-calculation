import React from "react"

const RadioButton = () => {
  return (
  

    <div class="main flex rounded-full overflow-hidden my-3 select-none">
      <div class="title py-0 my-auto px-2 bg-blue-400 text-white text-sm font-semibold mr-3">Type</div>
      <label class="flex radio  cursor-pointer">
        <input class="my-auto transform scale-125" type="radio" name="sfg" />
        <div class="title mx-2 my-4">Gross</div>
      </label>
    
      <label class="flex radio  cursor-pointer">
        <input class="my-auto transform scale-125" type="radio" name="sfg" />
        <div class="title mx-2 my-4">Net</div>
      </label>
    
    </div>
  )
}

export default RadioButton

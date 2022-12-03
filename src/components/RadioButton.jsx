import React from "react"

const RadioButton = () => {
  return (
  

    <div class="main flex border rounded-full overflow-hidden m-4 select-none">
      <div class="title py-3 my-auto px-5 bg-blue-400 text-white text-sm font-semibold mr-3">Sallary</div>
      <label class="flex radio p-2 cursor-pointer">
        <input class="my-auto transform scale-125" type="radio" name="sfg" />
        <div class="title px-2">Gross</div>
      </label>
    
      <label class="flex radio p-2 cursor-pointer">
        <input class="my-auto transform scale-125" type="radio" name="sfg" />
        <div class="title px-2">Net</div>
      </label>
    
    </div>
  )
}

export default RadioButton

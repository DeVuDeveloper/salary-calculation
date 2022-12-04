import React from "react"

const RadioButton = () => {
  return (
    <div className="grid grid-rows-2 mt-4">
      <div class="font-mono uppercase font-bold text-[11px] text-white ml-6">
        Income Type
      </div>

      <div class="main flex rounded-full overflow-hidden select-none">
        <label class="flex radio cursor-pointer">
          <input
            class="my-auto transform scale-125"
            checked
            type="radio"
            name="sfg"
          />
          <div class="title mx-2 hover:text-blue-300">Gross</div>
        </label>

        <label class="flex radio  cursor-pointer">
          <input class="my-auto transform scale-125" type="radio" name="sfg" />
          <div class="title mx-2 hover:text-blue-300">Net</div>
        </label>
      </div>
    </div>
  )
}

export default RadioButton

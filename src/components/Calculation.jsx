import React from "react"
import RadioButton from "./RadioButton"
import Selector from "./Selector"
import Input from "./Input"
import Button from "./Button"

const Calculation = () => {
  return (
    <div class="p-10">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class="grid grid-cols-2 gap-4">
          <RadioButton />
          <Input />
          <Selector />
        </div>
        
        <Button />
      </div>
    </div>
  )
}

export default Calculation

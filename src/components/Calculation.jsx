import React from "react"
import RadioButton from "./RadioButton"
import Selector from "./Selector"
import Input from "./Input"
import Button from "./Button"
import Button2 from "./Button2"
import Button3 from "./Button3"
import Display from "./Display"
import Logo from "../images/logo.png"

const Calculation = () => {
  return (
    <div class="grid  grid-flow-col">
      <div className="row-span-2 w-10 m-0 p-0">

        <div className="p-0 m-0 w-10">
          <Button2 />
        </div>

        <div className="p-0 m-0 w-10">
          <Button3 />
        </div>
      </div>

      <div className="flex flex-row place-content-center py-5 h-20 border-b-2 border-stone-400">
        <img src={Logo} className="object-contain h-34 w-12 red" alt="..." />
        <h2 className="indent-8 font-medium text-xl text-center tracking-wide text-blue-300">
          Income tax calculator
        </h2>
      </div>

      <div className=" grid grid-rows-2">
        <div className="grid grid-cols-3 gap-8 px-10">

          <div>
            <RadioButton />
          </div>

          <div>
            <Input />
          </div>

          <div>
            <Selector />
          </div>
        </div>

        <div className="mx-auto mt-20">
          <Button />
        </div>

      </div> 

     

      </div>
  )
}

export default Calculation

import React from "react"
import RadioButton from "./RadioButton"
import Selector from "./Selector";
import Input from "./Input";
import Button from "./Button";
import Button2 from "./Button2";
import Button3 from "./Button3";
import Display from "./Display";
import Logo from "../images/logo.png";

const Calculation = () => {
  return (
    <section className="grid grid-cols-12 gap-4">

      <div className="col-span-1">
        <Button2 />
        <Button3 />
      </div>

    <div class="flex w-full flex-col col-span-11">
    

      <div className="flex flex-row place-content-center py-5 h-20 border-b-2 border-stone-400 h-20">
        <img src={Logo} className="object-contain h-34 w-12 red mr-5" alt="..." />
        <h2 className="font-medium text-xl text-center tracking-wide text-blue-300">
          Income tax calculator
        </h2>
      </div>

     <div className=" grid grid-rows-2">
        
        <div className="grid grid-cols-3 gap-5">

          <div>
            <RadioButton />
          </div>

          <div className="mr-10">
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
     
      </section>
  )
}

export default Calculation

import React from "react"
import RadioButton from "./RadioButton"
import Selector from "./Selector";
import Input from "./Input";
import Button from "./Button";
import Button2 from "./Button2";
import Button3 from "./Button3";
import { Card } from "@mui/material";
import Logo from "../images/logo.png";

const Calculation = () => {
  return (
    <div class="grid grid-rows-3 grid-flow-col gap-4">

      <div className="row-span-3 h-3/4">

        <div className="">
        <Button2 />
        </div>

        <div className="">
        <Button3 />
        </div>
        
      </div>

      <div className="flex flex-row place-content-center my-auto py-5 border-b-2 border-stone-400">
        <img src={Logo} className="object-contain h-34 w-12 red" alt="..." />
        <h2 className="indent-8 font-medium text-xl text-center tracking-wide py-2 text-blue-300">
          Income tax calculator
        </h2>
      </div>

    
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

        <div className="m-auto">
          <Button />
        </div>
      </div>
    
  )
}

export default Calculation;

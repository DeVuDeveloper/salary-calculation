import React from "react"
import RadioButton from "./RadioButton"
import Selector from "./Selector"
import Input from "./Input"
import Button from "./Button"
import { Card } from "@mui/material"
import Logo from "../images/logo.png"

const Calculation = () => {
  return (
    <Card sx={{ margin: 0 }}>

      <div className="flex flex-row place-content-center py-5 m-auto border-b-2 border-stone-400">
        <img src={Logo} className="object-contain h-34 w-12 red" alt="..." />
        <h2 className="indent-8 font-medium text-xl text-center tracking-wide py-2 text-blue-300">
          Income tax calculator
        </h2>
      </div>

      <div className=" grid grid-rows-2 gap-4 place-items-start rounded overflow-hidden shadow-lg py-5">
        <div className="grid grid-cols-3 gap-8 px-5">
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
    </Card>
  )
}

export default Calculation

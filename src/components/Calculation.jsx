import React from "react"
import RadioButton from "./RadioButton"
import Selector from "./Selector"
import Input from "./Input"
import Button from "./Button"
import { Card } from "@mui/material"

const Calculation = () => {
  return (
    <Card sx={{ margin: 0 }}>
      <h2 className="uppercase indent-8 font-bold text-xl py-4 text-center tracking-wide text-blue-400">Salary Calculator</h2>
      <div className=" grid grid-rows-2 gap-4 place-items-start rounded overflow-hidden shadow-lg">

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

        <div className="m-auto" >
          <Button />
        </div>

      </div>
    </Card>
  )
}

export default Calculation

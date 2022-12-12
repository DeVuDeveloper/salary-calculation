import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Button from "./Button"
import Selector from "../components/common/Selector"
import Input from "./Input"
import RadioButton from "./RadioButton"
import { Calculations } from "../utils/calculations"

const Calculation = ({ handleDisplay, setTax, setNet, setGross }) => {
  const [data, setData] = useState({
    amount: "",
    frequency: "",
    incomeType: "",
  })

  const handleChange = (event) => {
    setData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      }
    })
  }

  useEffect(() => {
    const calculate = (amount, frequency, incomeType) => {
      Calculations(setGross, setNet, setTax, amount, frequency, incomeType)
    }

    calculate(data.amount, data.frequency, data.incomeType)
    localStorage.setItem("data", JSON.stringify(data))
  }, [data])

  const handleSubmit = (event) => {
    event.preventDefault()
    handleDisplay()
  }

  return (
    <div className="grid grid-col-3">
      <form onSubmit={handleSubmit}>
        <div className=" grid grid-rows-3 mt-20">
          <div className="grid grid-cols-3 gap-5 mobile-view">
            <div className="grid grid-rows-2 p-0 m-0 ">
              <div className="font-mono uppercase font-bold text-[11px] text-white ml-6 pt-4 m-0">
                incomeType Type
              </div>
              <div className="flex -mt-4 mobile-radio">
                <RadioButton
                  id="gross"
                  label="Gross"
                  name="incomeType"
                  type="radio"
                  required
                  value="gross"
                  checked={data.incomeType === "gross"}
                  onChange={handleChange}
                />
                <RadioButton
                  id="net"
                  label="Net"
                  name="incomeType"
                  type="radio"
                  required
                  value="net"
                  checked={data.incomeType === "net"}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mr-10">
              <Input
                className="h-9 text-10  mobile-input2 bg-transparent  py-55-rem border-0 border-b-2 border-stone-600
                hover:border-white focus:outline-none text-white text-sm rounded 
                focus:border-2 focus:border-blue-300   w-full p-2 dark:bg-gray-700 dark:border-gray-400 placeholder-gray-400"
                id="amount"
                type="string"
                name="amount"
                required
                value={data.amount}
                onChange={handleChange}
                placeholder="$"
              />
            </div>

            <div>
              <Selector
                id="frequency"
                name="frequency"
                required
                value={data.frequency}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mx-auto mt-20">
            <Button id="calculate" type="submit" onSubmit={handleSubmit} />
          </div>
        </div>
      </form>
    </div>
  )
}

Calculation.propTypes = {
  handleDisplay: PropTypes.func.isRequired,
  setGross: PropTypes.func.isRequired,
  setNet: PropTypes.func.isRequired,
  setGross: PropTypes.func.isRequired,
}

export default Calculation

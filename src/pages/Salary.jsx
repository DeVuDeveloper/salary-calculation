import React, { useState, useEffect } from "react"
import { Box } from "@mui/material"
import Calculation from "../components/Calculation"
import Display from "../components/Display"
import Button2 from "../components/Button2"
import Button3 from "../components/Button3"
import Logo from "../images/logo.png"
const Salary = () => {
  const items = JSON.parse(localStorage.getItem("data"))
  const [activeTab, setActiveTab] = useState("calculation")

  const handleDisplay = () => {
    setActiveTab("display")
  }

  const [gross, setGross] = useState({
    weekly: 0,
    fortnightly: 0,
    monthly: 0,
    annually: 0,
  })

  const [net, setNet] = useState({
    weekly: 0,
    fortnightly: 0,
    monthly: 0,
    annually: 0,
  })

  const [tax, setTax] = useState({
    weekly: 0,
    fortnightly: 0,
    monthly: 0,
    annually: 0,
  })

  return (
    <Box flex={4} py={2}>
      <div className="flex flex-row place-content-center py-5 h-20 border-b-2 border-stone-400 h-20 ">
        <img src={Logo} className="object-contain h-34 w-12 red mr-5" alt="..." />
        <h2 className="font-medium text-xl text-center tracking-wide text-blue-300">
          Income tax calculator
        </h2>
      </div>

      <section className="grid grid-cols-12  bg-black">
        <div className="col-span-1 w-10">
          <Button2
            className={
              "text-sm w-10 text-center text-white font-bold pb-4  border-b-2 border-blue-500 hover:text-blue-400 rounded " +
              (activeTab === "calculation"
                ? "text-white bg-blue-300"
                : "text-white") +
              " "
            }
            onClick={(e) => {
              e.preventDefault()
              setActiveTab("calculation")
            }}
            id="vert-btn1"
          />

          <Button3
            className={
              "text-sm mt-10 w-10 text-white font-bold py-2 border-b-2 border-blue-500 hover:text-blue-400 rounded " +
              (activeTab === "display" ? "text-white bg-blue-300" : "text-white") +
              " "
            }
            onClick={(e) => {
              e.preventDefault()
              if (items.amount !== 0) {
                setActiveTab("display")
              }
            }}
            id="vert-btn2"
            type="button"
            disabled={!net.weekly}
          />
        </div>

        <div className="flex w-full flex-col col-span-11">
          {activeTab === "calculation" ? (
            <Calculation
              handleDisplay={handleDisplay}
              setGross={setGross}
              setNet={setNet}
              setTax={setTax}
            />
          ) : (
            <Display gross={gross} net={net} tax={tax} />
          )}
        </div>
      </section>
    </Box>
  )
}

export default Salary

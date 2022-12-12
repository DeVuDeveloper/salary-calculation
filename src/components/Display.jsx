import React, { useEffect, useState } from "react";
import Selector from "../components/common/Selector";

const Display = ({ gross, net, tax }) => {
  
  const [income, setIncome] = useState("")
  const handleChange = (event) => {
    const { value } = event.target
    setIncome(value)
  }

  const [netIncome, setNetIncome] = useState(Math.floor(net.weekly))
  useEffect(() => {
    if (income === "weekly") {
     setNetIncome(Math.floor(net.weekly))
    } else if (income === "fortnightly") {
     setNetIncome(Math.floor(net.fortnightly))
    } else if (income === "monthly") {
     setNetIncome(Math.floor(net.monthly))
    } else if (income === "annually") {
     setNetIncome(Math.floor(net.annually))
    }
  }, [income])

  return (

    <div className="flex flex-col w-full bg-neutral-900 pt-5 pb-20 px-5 mt-16">
      <div className="flex gap-5 table-mob">
        <div className="chip-tbl">
          <span className="px-10 py-2 rounded text-white bg-blue-300 font-semibold text-sm flex  table-txt w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
            {netIncome}
          </span>
        </div>
      <div className ='flex gap-5 selector-table'>
        <div className="">
          <h2 className="text-lg text-gray-400 font-medium">your net</h2>
        </div>
        <div className="flex gap-5 p-0 -mt-10">
          <Selector
            id="selector-btn-2"
            name="selectedIncome"
            value={income}
            onChange={handleChange}
          />
          <p className ="mt-10 text-lg text-gray-400">income</p>
        </div>
        </div>

      </div>

      <div className="flex flex-col mt-6">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full text-sm text-gray-400">
                <thead className="bg-gray-800 text-xs uppercase font-medium table-txt">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left tracking-wider">
                      Frequency
                    </th>
                    <th scope="col" className="px-6 py-3 text-left tracking-wider">
                      Gross income
                    </th>
                    <th scope="col" className="px-6 py-3 text-left tracking-wider">
                      Tax
                    </th>
                    <th scope="col" className="px-6 py-3 text-left tracking-wider">
                      Net income
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800">
                  <tr className="bg-black bg-opacity-20">
                    <td className="pl-6">Weekly</td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      {Math.floor(gross.weekly)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {Math.floor(tax.weekly)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {Math.floor(net.weekly)}
                    </td>
                  </tr>

                  <tr>
                    <td className="pl-6">Fortnightly</td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      {Math.floor(gross.fortnightly)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {Math.floor(tax.fortnightly)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {Math.floor(net.fortnightly)}
                    </td>
                  </tr>
                  <tr className="bg-black bg-opacity-20">
                    <td className="pl-6">Monthly</td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      {Math.floor(gross.monthly)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {Math.floor(tax.monthly)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {Math.floor(net.monthly)}
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-6">Annually</td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      {Math.floor(gross.annually)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {Math.floor(tax.annually)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {Math.floor(net.annually)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Display;
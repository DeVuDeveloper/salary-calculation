import React, { useEffect, useState } from "react";
import Selector from "./Selector";

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

    <div class="flex flex-col w-full bg-neutral-900 pt-5 pb-20 px-5 mt-16">
      <div className="flex gap-5 table-mob">
        <div class="">
          <span class="px-10 py-2 rounded text-white bg-blue-300 font-semibold text-sm flex  table-txt w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
            {netIncome}
          </span>
        </div>
      <div className='flex gap-5 selector-table'>
        <div class="">
          <h2 class="text-lg text-gray-400 font-medium">your net</h2>
        </div>
        <div class="flex gap-5 p-0 -mt-10">
          <Selector
            id="selector-btn-2"
            name="selectedIncome"
            value={income}
            onChange={handleChange}
          />
          <p className="mt-10 text-lg text-gray-400">income</p>
        </div>
        </div>

      </div>

      <div class="flex flex-col mt-6">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden sm:rounded-lg">
              <table class="min-w-full text-sm text-gray-400">
                <thead class="bg-gray-800 text-xs uppercase font-medium table-txt">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left tracking-wider">
                      Frequency
                    </th>
                    <th scope="col" class="px-6 py-3 text-left tracking-wider">
                      Gross income
                    </th>
                    <th scope="col" class="px-6 py-3 text-left tracking-wider">
                      Tax
                    </th>
                    <th scope="col" class="px-6 py-3 text-left tracking-wider">
                      Net income
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-gray-800">
                  <tr class="bg-black bg-opacity-20">
                    <td class="pl-6">Weekly</td>

                    <td class="px-6 py-4 whitespace-nowrap">
                      {Math.floor(gross.weekly)}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      {Math.floor(tax.weekly)}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      {Math.floor(net.weekly)}
                    </td>
                  </tr>

                  <tr>
                    <td class="pl-6">Fortnightly</td>

                    <td class="px-6 py-4 whitespace-nowrap">
                      {Math.floor(gross.fortnightly)}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      {Math.floor(tax.fortnightly)}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      {Math.floor(net.fortnightly)}
                    </td>
                  </tr>
                  <tr class="bg-black bg-opacity-20">
                    <td class="pl-6">Monthly</td>

                    <td class="px-6 py-4 whitespace-nowrap">
                      {Math.floor(gross.monthly)}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      {Math.floor(tax.monthly)}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      {Math.floor(net.monthly)}
                    </td>
                  </tr>
                  <tr>
                    <td class="pl-6">Annually</td>

                    <td class="px-6 py-4 whitespace-nowrap">
                      {Math.floor(gross.annually)}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      {Math.floor(tax.annually)}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
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

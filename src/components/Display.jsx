import React from "react"
import ChipElement from "./ChipElement"
import Selector from "./Selector"

const Display = () => {
  return (
    <div class="flex flex-col w-full bg-neutral-900 pt-5 pb-20 px-5">

      <div className="flex gap-5">

        <div class="">
          <ChipElement />
        </div>

        <div class="">
          <h2 class="text-lg text-gray-400 font-medium">your net</h2>
        </div>
        <div class="flex gap-5 p-0 -mt-6">
          <Selector /><p className="mt-6 text-lg text-gray-400">-income</p>
        </div>
        

      </div>

      <div class="flex flex-col mt-6">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden sm:rounded-lg">
              <table class="min-w-full text-sm text-gray-400">
                <thead class="bg-gray-800 text-xs uppercase font-medium">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left tracking-wider">
                      Frequency
                    </th>
                    <th scope="col" class="px-6 py-3 text-left tracking-wider">
                      Gross Income
                    </th>
                    <th scope="col" class="px-6 py-3 text-left tracking-wider">
                      Tax
                    </th>
                    <th scope="col" class="px-6 py-3 text-left tracking-wider">
                      Net Income
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-gray-800">
                  <tr class="bg-black bg-opacity-20">
                    <td class="pl-6">Weekly</td>

                    <td class="px-6 py-4 whitespace-nowrap">1798</td>
                    <td class="px-6 py-4 whitespace-nowrap">1145</td>
                    <td class="px-6 py-4 whitespace-nowrap">376</td>
                  </tr>
                  <tr>
                    <td class="pl-6">Fortnightly</td>

                    <td class="px-6 py-4 whitespace-nowrap">17</td>
                    <td class="px-6 py-4 whitespace-nowrap">9</td>
                    <td class="px-6 py-4 whitespace-nowrap">6</td>
                  </tr>
                  <tr class="bg-black bg-opacity-20">
                    <td class="pl-6">Monthly</td>

                    <td class="px-6 py-4 whitespace-nowrap">17</td>
                    <td class="px-6 py-4 whitespace-nowrap">10</td>
                    <td class="px-6 py-4 whitespace-nowrap">2</td>
                  </tr>
                  <tr>
                    <td class="pl-6">Annually</td>

                    <td class="px-6 py-4 whitespace-nowrap">17</td>
                    <td class="px-6 py-4 whitespace-nowrap">10</td>
                    <td class="px-6 py-4 whitespace-nowrap">2</td>
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

export default Display

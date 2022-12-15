import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Selector from '../../components/common/Selector';
import MenuItem from '@mui/material/MenuItem';
import { FREQUENCIES } from '../../constants/tax';
import { useIncomeTax } from '../../hooks/use-income-tax';
import { TableRow } from './Table';
import { formatNumber } from '../../utils/numbers';

const listFrequencies = Object.values(FREQUENCIES)

export const IncomeResult = ( {handleDisplay} ) => {
  const location = useLocation()
  const { state } = location

  const navigate = useNavigate()

  const { calculation: taxCalculation } = useIncomeTax()
  const incomeTaxFrequencyCalculation = taxCalculation.find(
    (item) => item.frequency === state.frequency
  )
 
const handleFrequencyChange = (event) => {
    const frequency = event.target.value
   navigate('', {
      state: {
        ...state,
        frequency
      }
    })
    handleDisplay()
  }

  return (
    <div className='flex flex-col w-full bg-neutral-900 pt-5 pb-20 px-5 mt-16'>
      <div className='flex gap-5 table-mob'>
        <div className='chip-tbl'>
          <span className='px-10 py-2 rounded text-white bg-blue-300 font-semibold text-sm flex  table-txt w-max cursor-pointer active:bg-gray-300 transition duration-300 ease'>
            {formatNumber(incomeTaxFrequencyCalculation?.netIncome)}
          </span>
        </div>

        <div className='flex gap-5 selector-table'>
          <div className=''>
            <h2 className='text-lg text-gray-400 font-medium'>your net</h2>
          </div>

          <div className='flex gap-5 p-0 -mt-10'>
            <Selector
              className='capitalize'
              defaultValue={state?.frequency}
              onChange={handleFrequencyChange}
            >
              {listFrequencies.map((frequency) => (
                <MenuItem key={frequency} value={frequency}>
                  {frequency}
                </MenuItem>
              ))}
            </Selector>
            <p className='mt-10 text-lg text-gray-400'>income</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col mt-6'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden sm:rounded-lg'>
              <table className='min-w-full text-sm text-gray-400'>
                <thead className='bg-gray-800 text-xs uppercase font-medium table-txt'>
                  <tr>
                    <th scope='col' className='px-6 py-3 text-left tracking-wider'>
                      Frequency
                    </th>
                    <th scope='col' className='px-6 py-3 text-left tracking-wider'>
                      Gross income
                    </th>
                    <th scope='col' className='px-6 py-3 text-left tracking-wider'>
                      Tax
                    </th>
                    <th scope='col' className='px-6 py-3 text-left tracking-wider'>
                      Net income
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-gray-800'>
                  {taxCalculation.map((item) => (
                    <TableRow key={item.frequency} item={item} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

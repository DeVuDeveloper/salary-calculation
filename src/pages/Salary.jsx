import React, { useState } from 'react';
import { Box } from '@mui/material';
import { CalculateIncome } from '../features'
import { IncomeResult } from '../features/IncomeResult/index'
import Button2 from '../components/Button2';
import Button3 from '../components/Button3';
import Logo from '../images/logo.png';
import { useLocation } from 'react-router-dom';

const Salary = () => {

const [activeTab, setActiveTab] = useState('calculation')
  const handleDisplay = () => {
    setActiveTab('display')
  }
  
const location = useLocation()
 

  return (
    <Box flex={4} py={2}>
      <div className='flex flex-row place-content-center py-5 h-20 border-b-2 border-stone-400 h-20 '>
        <img src={Logo} className='object-contain h-34 w-12 red mr-5' alt='...' />
        <h2 className='font-medium text-xl text-center tracking-wide text-blue-300'>
          Income tax calculator
        </h2>
      </div>

      <section className='grid grid-cols-12  bg-black'>
        <div className='col-span-1 w-10'>
          <Button2
            className={
              'text-sm w-10 text-center text-white font-bold pb-4  border-b-2 border-blue-500 hover:text-blue-400 rounded ' +
              (activeTab === 'calculation'
                ? 'text-white bg-blue-300'
                : 'text-white') +
              ' '
            }
            onClick={(e) => {
              e.preventDefault()
              setActiveTab('calculation')
            }}
            id='vert-btn1'
          />

          <Button3
            className={
              'text-sm mt-10 w-10 text-white font-bold py-2 border-b-2 border-blue-500 hover:text-blue-400 rounded ' +
              (activeTab === 'display' ? 'text-white bg-blue-300' : 'text-white') +
              ' '
            }
            onClick={(e) => {
              e.preventDefault()
             
                setActiveTab('display')
              
            }}
            id='vert-btn2'
            type='button'
            disabled={!location.state}
          />
        </div>

        <div className='flex w-full flex-col col-span-11'>
          {activeTab === 'calculation' ? (
            <CalculateIncome
            handleDisplay={handleDisplay}
            />
          ) : (
              <IncomeResult />
          )}
        </div>
      </section>
    </Box>
  )
}

export default Salary;

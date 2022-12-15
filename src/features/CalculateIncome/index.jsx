import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import RadioButton from '../../components/RadioButton';
import Selector from '../../components/common/Selector';
import MenuItem from "@mui/material/MenuItem";
import { FREQUENCIES, INCOME_TYPE } from '../../constants/tax'
import { formatNumber, onlyNumbers } from '../../utils/numbers';

const listFrequencies = Object.values(FREQUENCIES);

export const CalculateIncome = ( {handleDisplay} ) => {
  const navigate = useNavigate()
  const { register, handleSubmit, watch, setValue, formState } = useForm({
    defaultValues: {
      income: 0,
      frequency: FREQUENCIES.weekly,
      incomeType: '',
    },
  })
  const incomeTypeWatch = watch('incomeType', '')
  const incomeWatch = watch('income', 0)

  const isIncomeTypeGross = incomeTypeWatch === INCOME_TYPE.grossIncome
  const isIncomeTypeNet = incomeTypeWatch === INCOME_TYPE.netIncome

  useEffect(() => {
    const incomeFormatted = formatNumber(onlyNumbers(incomeWatch))
    setValue('income', incomeFormatted)
  }, [incomeWatch, setValue])

  const submit = ({ income, frequency, incomeType }) => {
    navigate('', {
      state: {
        income,
        frequency,
        incomeType,
      },
    })
    handleDisplay()
  }

  return (
    <div className='grid grid-col-3'>
    <form onSubmit={handleSubmit(submit)}>
    <div className=' grid grid-rows-3 mt-20'>
          <div className='grid grid-cols-3 gap-5 mobile-view'>
            <div className='grid grid-rows-2 p-0 m-0 '>
              <div className='font-mono uppercase font-bold text-[11px] text-white ml-6 pt-4 m-0'>
                income Type
              </div>

              <div className='flex -mt-4 mobile-radio'>
              <RadioButton
                  id='gross'
                  label='Gross'
                  name='incomeType'
                  type='radio'
                  required
                  value='gross'
                  {...register('incomeType', { required: true })}
                  
                  onChange={() => setValue('incomeType', INCOME_TYPE.grossIncome)}
                />
                <RadioButton
                  id='net'
                  label='Net'
                  name='incomeType'
                  type='radio'
                  required
                  value='net'
                  {...register('incomeType', { required: true })}
                  
                  onChange={() => setValue('incomeType', INCOME_TYPE.netIncome)}
                />
              </div>
              {formState.errors.incomeType?.type === 'required' && (
            <p className="text-sm text-red-400 absolute -bottom-5">
              Incoming type is a required field.
            </p>
          )}
            </div>

            <div className='mr-10'>
         
            <Input
                className="mt-2 w-full"
                {...register('income', {
                  required: true,
                  validate: (value) => onlyNumbers(value) > 0,
                })}
                inputMode="numeric"
              />
           
            {formState.errors.income?.type === 'validate' && (
              <p className="text-sm text-red-400 absolute -bottom-5">
                The income value needs to be more than 0.
              </p>
            )}
          </div>

         <div>
          <Selector {...register('frequency')}>
            {listFrequencies.map((frequency) => (
              <MenuItem key={frequency} value={frequency}>
                {frequency}
              </MenuItem>
            ))}
          </Selector>
        </div>
        </div>

          

        <div className='mx-auto mt-20'>
            <Button id='calculate' type='submit'/>
          </div>
        </div>
      </form>
    </div>
  )
}

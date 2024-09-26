import Image from 'next/image';
import React from 'react'
import { ACCORDIAN_ITEMS } from '@/app/constants';
import { Card, Accordion } from '@/app/elements'

export const FAQSection = () => {

  return (
    <Card withShadow={true} cardStyle="p-4 flex flex-col gap-4 justify-start items-start overflow-auto h-full">
      <Card withShadow={false} cardStyle="bg-gray-10 border border-1 border-gray-30 overflow-auto py-2 px-4 w-full">
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between items-center'>
            <h1 className='font-bold '>Document Answer</h1>
            <div className='flex gap-2 items-center'>
              <div className='flex gap-1 items-center'>
                <Image src='/icons/verified.svg' alt='verify' height={16} width={16} />
                <h6 className="text-xs">88%</h6>
              </div>
              <div className='flex gap-1 items-center'>
                <Image src='/icons/remove.svg' alt='remove' height={16} width={16} />
                <h6 className="text-xs">12%</h6>
              </div>
              <Image src='/icons/reload.svg' alt='reload' height={16} width={16} />
            </div>
          </div>
          <div>
            <p className="text-sm">
              Order to help you locate the correct parts and repair information, we will need more information about the problem you are facing. Please submit a new question with more details, and we will be happy to help you.
            </p>
          </div>
        </div>
      </Card>
      <Card withShadow={false} cardStyle="bg-gray-10 border border-1 border-gray-30 py-2 overflow-auto px-4 w-full">
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between items-center'>
            <h1 className='font-bold '>Archived Questions</h1>
            <h6 className='text-primary text-xs'>88% Similar</h6>
          </div>
          <div className='flex gap-1 flex-col'>
            <p className='text-sm font-bold'>Q: Order to help you locate the correct parts and repair</p>
            <p className='text-sm'>
              <span className='font-bold'>A:</span> Order to help you locate the correct parts and repair information, we will need more information about the problem you are facing. Please submit a new question with more details, and we will be happy to help you.
            </p>
          </div>
        </div>
      </Card>
      <Accordion items={ACCORDIAN_ITEMS} />
    </Card>
  )
}

export default FAQSection;
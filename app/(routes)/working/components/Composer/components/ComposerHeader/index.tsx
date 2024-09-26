import { Avatar } from '@/app/elements'
import moment from 'moment'
import React from 'react'

export const ComposerHeader = () => {
  return (
    <div className="flex gap-6 px-6">
      <Avatar
        alt="MN"
        size="lg"
      />
      <div className="flex flex-col justify-center">
        <div className="flex gap-2 items-center">
          <p>
            Muddasir Nisar
          </p>
          <p className="text-[#0f143b] font-light text-sm" >
            {moment().subtract(4, 'months').format('MM/DD/YYYY')}
          </p>
        </div>
        <p className="text-primary font-bold ">
          This is a new Ticket
        </p>
      </div>
    </div>
  )
}

export default ComposerHeader
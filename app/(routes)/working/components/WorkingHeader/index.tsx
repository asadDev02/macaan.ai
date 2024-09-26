import React from 'react'
import Image from 'next/image'
import { Card, DropDown, Avatar } from '@/app/elements'

export const WorkingHeader = () => {
  return (
    <Card withShadow={true} cardStyle="w-full flex flex-col sm:flex-row sm:items-center justify-between p-3">
      <DropDown
        options={[
          { value: 'customerSupport', label: 'Customer Support' },
          { value: 'customerSupport1', label: 'Customer Support 1' }
        ]}
      />
      <div className="flex items-center gap-2 justify-end">
        <div className="shadow-md rounded-full w-9 h-9 items-center flex justify-center">
          <Image
            src='/icons/indicator.svg'
            alt='indicator'
            height={20}
            width={20}
          />
        </div>
        <div className="shadow-md rounded-full w-9 h-9 items-center flex justify-center">
          <Image
            src='/icons/settings-black.svg'
            alt='settings'
            height={20}
            width={20}
          />
        </div>
        <Avatar
          src='/images/avatar.png'
          alt='avatar'
          size='md'
        />
      </div>
    </Card>
  )
}
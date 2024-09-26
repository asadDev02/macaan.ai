import { Card, Button } from '@/app/elements'
import React from 'react'

export const Escalation = () => {
  return (
    <Card withShadow={true} cardStyle="p-4 flex flex-col gap-6 justify-center  max-h-full">
      <Card withShadow={false} cardStyle="px-3 w-full py-2 bg-red-100 border border-1 border-red-200 flex justify-between items-center">
        <p className="text-red-600 font-normal ">
          Unsolvable Question
        </p>
        <Button variant="danger" type="button" >
          Escalate Ques
        </Button>
      </Card>
      <Card withShadow={false} cardStyle="px-3 border border-1 border-gray-30 w-full py-2 gap-2 flex flex-col">
        <div className="flex flex-col space-y-1 w-full">
          <div className="flex items-center mb-1">
            <label htmlFor={'reason'} className="text-gray-500 ">
              Reason for Escalation
            </label>
          </div>
          <input
            id={'reason'}
            className="border border-1 border-gray-30 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-gray-30 "
          />
        </div>
        <div className="flex justify-end gap-2 mt-2">
          <Button variant="secondary" type="button" >
            Cancel
          </Button>
          <Button variant="primary" type="button" >
            Submit
          </Button>
        </div>
      </Card>
    </Card>
  )
}
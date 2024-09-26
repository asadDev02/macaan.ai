import { Card } from '@/app/elements'
import React from 'react'
import Image from 'next/image'

export const Preview = () => {
  return (
    <Card cardStyle="bg-gray-10 border border-1 border-gray-30 px-6 " withShadow={false}>
      <div className="whitespace-pre-wrap">
        {`
Agent at Mar 28, 2024
Hello Mudassir,
Thank you for reaching out.
              

In order to help you locate the correct parts and repair information, we will need more information about the problem you are facing. Please submit a new question with more details, and we will be happy to help you.
Looking forward to hearing from you!

              `}
        <div className="flex gap-4 mb-2">
          {
            [1, 2].map((_, index) => (
              <div key={index} className='flex gap-1'>
                <Image
                  src='/icons/video.svg'
                  alt='video'
                  height={20}
                  width={20}
                />
                <a rel="noopener noreferrer" href="https://www.youtube.com/watch?v=jNQXAC9IVRw&ab_channel=jawed" target="_blank" className="text-primary">Watch video</a>
              </div>
            ))
          }
        </div>
        {`Realted Parts: 123 35

                `}
      </div>
    </Card>
  )
}

export default Preview
'use client'

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Card } from '@/app/elements';
import { AccordionProps } from './props';

export const Accordion = ({ items }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <Card key={index} withShadow={false} cardStyle="bg-gray-10 border border-1 border-gray-30 mb-2">
          <button
            className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
            onClick={() => toggleItem(index)}
          >
            <span className={`font-bold text-sm ${openIndex !== index && 'truncate'}  `}>{`Q: ${item.question}`}</span>
            {openIndex !== index && (
              <Plus className="w-5 h-5 text-primary" />
            )}
          </button>
          {openIndex === index && (
            <div className="px-4 pb-2 bg-gray-50">
              <p>{`A: ${item.answer}`}</p>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};

export default Accordion;
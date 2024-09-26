'use client'

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const DropDown = ({ options }: { options: { value: string, label: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionClick = (option: { value: string, label: string }) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center items-center w-full rounded-md border border-[#bbccff] shadow-sm px-4 py-2 bg-[#e3ecff] text-sm font-medium text-gray-700 hover:bg-[#e3ecff"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption.label}
          <ChevronDown className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option, index) => (
              <div key={index} onClick={() => handleOptionClick(option)} className="block px-4 py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
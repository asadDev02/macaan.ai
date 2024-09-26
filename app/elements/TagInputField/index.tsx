import { Controller } from 'react-hook-form';
import Image from 'next/image';
import { TagInputFieldProps } from './props';
import { Card } from '@/app/elements'
import { X } from 'lucide-react';

export const TagInputField = ({
  name,
  label,
  iconPath,
  endIconPath,
  startIconPath,
  control,
  tags,
  onEndIconClick,
  handleRemoveTag,
  onStartIconClick,
  ...restProps
}: TagInputFieldProps) => {
  return (
    <div className="flex flex-col space-y-1">
      <div className="flex items-center mb-2">
        {iconPath && (
          <div className="mr-2 w-4 h-4 relative">
            <Image src={iconPath} alt="icon" layout="fill" objectFit="contain" />
          </div>
        )}
        <label htmlFor={name} className="text-gray-500 text-sm">
          {label}
        </label>
      </div>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <div className="relative">
            {startIconPath && (
              <button
                title='start icon'
                onClick={onStartIconClick}
                className="absolute inset-y-0 left-0 pl-3 flex items-center"
              >
                <div className="w-4 h-4 relative">
                  <Image src={startIconPath} alt="start icon" layout="fill" objectFit="contain" />
                </div>
              </button>
            )}
            <input
              {...field}
              {...restProps}
              id={name}
              className={`border border-1 border-gray-30 rounded-md p-2 w-full focus:outline-none focus:ring-1 ${error ? 'ring-red-500' : 'focus:ring-gray-30'
                } ${startIconPath ? 'pl-10' : ''} ${endIconPath ? 'pr-10' : ''
                }`}
            />
            {endIconPath && (
              <button
                title='end icon'
                onClick={onEndIconClick}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <div className="w-4 h-4 relative">
                  <Image src={endIconPath} alt="end icon" layout="fill" objectFit="contain" />
                </div>
              </button>
            )}
            <div className='flex flex-wrap items-center justify-start gap-2 my-2'>
              {tags?.map((item, index) => (
                <Card key={index} cardStyle='flex bg-gray-10 border border-1 border-gray-30 p-2 ' withShadow={false}>
                  <p >{item}</p>
                  <X onClick={() => handleRemoveTag(item)} cursor='pointer' color='gray' />
                </Card>
              ))}
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default TagInputField;
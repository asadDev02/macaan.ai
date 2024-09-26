import { Controller } from 'react-hook-form';
import Image from 'next/image';
import { InputAreaProps } from './props';

export const InputArea = ({
  name,
  label,
  iconPath,
  endIconPath,
  startIconPath,
  control,
  onEndIconClick,
  onStartIconClick,
  ...restProps
}: InputAreaProps) => {
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
            <textarea
              {...field}
              {...restProps}
              id={name}
              draggable={false}
              rows={4}
              className={` resize-none border border-1 border-gray-30 rounded-md p-2 w-full focus:outline-none focus:ring-1 ${error ? 'ring-red-500' : 'focus:ring-gray-30'
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
          </div>
        )}
      />
    </div>
  );
};

export default InputArea;
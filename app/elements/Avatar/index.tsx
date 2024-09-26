import React from 'react';
import Image from 'next/image';

export const Avatar = ({ src, alt, size = 'md' }: { src?: string; alt: string; size?: 'md' | 'sm' | 'lg' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base',
  };

  return (
    <div className={`relative overflow-hidden rounded-full ${sizeClasses[size]}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-gray-20 text-gray-30">
          {alt}
        </div>
      )}
    </div>
  );
};

export default Avatar;
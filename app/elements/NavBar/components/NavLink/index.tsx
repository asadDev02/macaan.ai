'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/app/constants';
import { Divider } from '@/app/elements';

export function NavLinks() {
  const pathName = usePathname()
  const [activePage, setActivePage] = useState<number>(pathName === '/' ? 0 : 1);

  return (
    <div className="w-full space-y-2">
      {ROUTES.map((link) => (
        <div key={link.id} className="w-full">
          <Link
            href={link.href}
            onClick={() => setActivePage(link.id)}
            className={`flex h-[48px] rounded w-full items-center gap-4 px-6 text-sm font-medium transition-colors duration-200 
              ${activePage === link.id ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}
            `}
          >
            <Image
              src={link.icon}
              alt={`${link.title}-image`}
              width={20}
              height={20}
              className="text-gray-500"
            />
            <p className="block">{link.title}</p>
          </Link>
          {link.hasDivider && <Divider />}
        </div>
      ))}
    </div>
  );
}

export default NavLinks
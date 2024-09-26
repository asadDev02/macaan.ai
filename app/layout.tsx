'use client'

import React, { useState } from 'react';
import '@/app/globals.css'
import { NavBar } from '@/app/elements';
import { Menu, X } from 'lucide-react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <html lang="en">
      <body>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className={`w-64 bg-white shadow-md fixed inset-y-0 left-0 transform ${isNavOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out md:w-1/6 z-30`}>
            <NavBar />
          </div>
          <div className="flex-1 flex flex-col md:ml-0">
            <div className="md:hidden p-4 fixed top-0 left-0 z-40">
              <button
                onClick={toggleNav}
                className={`p-2 ${!isNavOpen && 'bg-white'} rounded-md shadow-md`}
                aria-label={isNavOpen ? "Close menu" : "Open menu"}
              >
                {isNavOpen ? <X color='white' size={24} /> : <Menu size={24} />}
              </button>
            </div>
            <div className={`flex-grow md:overflow-y-auto ${!isNavOpen && 'md:p-0'}`}>
              {children}
            </div>
          </div>
          {isNavOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
              onClick={toggleNav}
            ></div>
          )}
        </div>
      </body>
    </html>
  );
}
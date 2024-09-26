import React from 'react';
import { WorkingHeader } from './components';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <WorkingHeader />
      <main className="flex-grow p-4 sm:p-6 md:p-6">
        {children}
      </main>
    </div>
  );
}
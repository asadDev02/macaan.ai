import Link from 'next/link';
import { NavLinks } from './components';
import { MacaanLogo } from '@/app/elements';

export function NavBar() {
  return (
    <div className="flex h-full flex-col px-3 bg-dark md:w-full md:px-2">
      <Link
        className="mb-4 flex h-16 items-center justify-center md:h-20"
        href="/"
      >
        <MacaanLogo height={100} width={100} />
      </Link>
      <div className="flex flex-col px-3 md:flex-row justify-between space-y-2 md:space-y-0 md:space-x-2">
        <NavLinks />
      </div>
    </div>
  );
}
export default NavBar
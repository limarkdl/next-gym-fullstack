import Logo from '@/components/Logo';
import { Navbar } from '@/components/Navbar';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { Popover, PopoverTrigger } from '@/components/ui/popover';
import {  UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs';
import { PopoverContent } from '@/components/ui/popover';
import Link from 'next/link';
import { TbMenu, TbMenuDeep, TbSettings } from 'react-icons/tb';

async function Layout({ children }: { children: React.ReactNode }) {
  const user = await currentUser();

  return (
      <>
          <div className='flex h-[60px] bg-background items-center gap-3 justify-between px-3 py-1'>
            <div className='flex gap-2 font-extralight items-center text-2xl'>
              <Link className='flex gap-2 items-center' href={'/app'}>
                <Logo />
                <p className='hidden md:block xl:block 2xl:block'>WingSpan</p>
              </Link>

              <Navbar />
            </div>
            <div className='flex gap-4 items-center text-primary'>
              <Popover>
                <PopoverTrigger>
                  <TbMenuDeep size={28} className='text-primary' />
                </PopoverTrigger>
                <PopoverContent className='w-fit flex flex-col items-center text-muted-foreground gap-2'>
                  <div className='bg-white w-full flex justify-end rounded-md p-2'>
                    <UserButton afterSignOutUrl='/' showName />
                  </div>
                  <div className="w-full bg-muted flex justify-center rounded-md">
                    <ThemeSwitcher /> 
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className='max-w-screen-2xl mx-auto'>{children}</div>
  </>
  );
}

export default Layout;

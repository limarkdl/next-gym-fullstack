"use client";

import Logo from '@/components/Logo';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Link from 'next/link';
import { TbSettings } from 'react-icons/tb';
import { Expletus_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';

const expletus_sans = Expletus_Sans({ subsets: ['latin'] })


interface HeaderProps {
  withAuth: Boolean;
  onClickLink?: string;
}

const Header = (props: HeaderProps) => {
  const {withAuth = true, onClickLink = "/"} = props;
  return (
    <div className='absolute w-full flex h-[60px] items-center gap-3 justify-between px-3 py-1'>
      <a href={onClickLink}>
      <div className='flex gap-2 font-extralight items-center  text-2xl'>
        <Logo /> 
        WingSpan 
        <span className={cn(expletus_sans.className, 'text-xs mb-3 text-muted-foreground')}>Alpha</span>
    </div>
      </a>
      <div className='flex gap-3'>
        <Popover>
          <PopoverTrigger>
            <TbSettings size={28} />
          </PopoverTrigger>
          <PopoverContent className='w-fit'>
            <ThemeSwitcher />
          </PopoverContent>
        </Popover>
        {withAuth && <Link href='/app'>
          <Button variant='outline'>Log in</Button>
        </Link> }
        
      </div>
    </div>
  );
};

export default Header;

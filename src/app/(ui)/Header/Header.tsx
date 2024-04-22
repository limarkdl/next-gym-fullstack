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



interface HeaderProps {
  withAuth: Boolean;
  onClickLink?: string;
}

const Header = (props: HeaderProps) => {
  const {withAuth = true, onClickLink = "/"} = props;
  return (
    <div className='flex h-[60px] bg-background items-center gap-3 justify-between px-3 py-1'>
      <a href={onClickLink}>
      <div className='flex gap-2 font-extralight items-center  text-2xl'>
        <Logo /> 
        WingSpan <span className='font-K2D text-sm text-muted-foreground'>{'(α)'}</span>
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

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

const Header = () => {
  return (
    <div className='flex h-[60px] bg-background items-center gap-3 justify-between px-3 py-1'>
      <div className='flex gap-2 font-extralight font-Unbounded items-center text-2xl'>
        <Logo />
        GYMSPARR
      </div>

      <div className='flex gap-3'>
        <Popover>
          <PopoverTrigger>
            <TbSettings size={28} />
          </PopoverTrigger>
          <PopoverContent className='w-fit'>
            <ThemeSwitcher />
          </PopoverContent>
        </Popover>
        <Link href='/app'>
          <Button variant='outline'>Log in</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

import Logo from '@/components/Logo';
import { Navbar } from '@/components/Navbar';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className='flex  h-[60px] bg-background items-center gap-3 justify-between px-3 py-1'>
        <div className='flex gap-2 font-extralight font-Unbounded items-center text-2xl'>
          <Logo />
          GYMSPARR
        </div>
        
        <div className='flex gap-3'>
          <ThemeSwitcher />
          <Link href='/dashboard'>
          <Button variant='outline'>Log in</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

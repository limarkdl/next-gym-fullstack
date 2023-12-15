import Logo from '@/components/Logo';
import { Navbar } from '@/components/Navbar';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { ClerkProvider, UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs';
import Link from 'next/link';

async function Layout({ children }: { children: React.ReactNode }) {
  const user = await currentUser();

  return (
    <ClerkProvider afterSignInUrl='/dashboard' afterSignUpUrl='/dashboard'>
      {user ? (
        <>
          <div className='flex h-[60px] bg-background items-center gap-3 justify-between px-3 py-1'>
            <div className='flex gap-2 font-extralight font-Unbounded items-center text-2xl'>
              <Link className='flex gap-2 items-center' href={'/dashboard'}>
                <Logo />
                <p className='hidden md:block xl:block 2xl:block'>GYMSPARR</p>
              </Link>

              <Navbar />
            </div>
            <div className='flex gap-4 items-center text-primary'>
              <ThemeSwitcher />
              <UserButton afterSignOutUrl='/' />
            </div>
          </div>

          <div className=''>{children}</div>
        </>
      ) : (
        <div className='flex bg-background h-screen w-screen items-center justify-center'>
          {children}
        </div>
      )}
    </ClerkProvider>
  );
}

export default Layout;

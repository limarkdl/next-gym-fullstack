import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return <div className='flex flex-col h-screen w-screen'>
      <div className='flex h-[60px] bg-background items-center gap-3 justify-between px-3 py-1'>
        <div className='flex gap-2 font-extralight font-Unbounded items-center text-2xl'>
          <Logo />
          GYMSPARR
        </div>
        <ThemeSwitcher />
        </div>
      <div className='flex flex-col h-full items-center justify-center'>
        <SignUp />
      </div>
</div>;
}
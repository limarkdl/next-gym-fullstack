import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { SignUp } from "@clerk/nextjs";
import Header from "@/app/(ui)/header/header"; 

export default function Page() {
  return <div className='flex flex-col h-screen w-screen'>
      <Header withAuth={false}/>
      <div className='flex flex-col h-full items-center justify-center'>
        <SignUp />
      </div>
</div>;
}
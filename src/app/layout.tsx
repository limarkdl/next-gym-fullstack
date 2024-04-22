import type { Metadata } from 'next';
import { Inter, K2D } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import {ClerkProvider} from "@clerk/nextjs";
const inter = Inter({ subsets: ['latin'] });

const k2d = K2D({weight: "500" ,subsets: ['latin']});



export const metadata: Metadata = {
  title: 'WingSpan',
  description: "Ultimate workout manager. Ivan Kostin's pet project.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  

  return (
      <html lang='en'>
      <ClerkProvider afterSignInUrl='/app' afterSignUpUrl='/app'>

      <body className={k2d.className + 'overflow-x-hidden font-K2D'}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
          >
            {children}
          </ThemeProvider>
        </body>
          </ ClerkProvider>
      </html>
  );
}

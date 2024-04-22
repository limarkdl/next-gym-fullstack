"use client";

import Image from 'next/image';
import LOGOSVG from '../../public/LOGO.svg';
import LOGOSVG_LIGHT from '../../public/LOGO_LIGHT.svg';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';


interface LogoProps {
  width?: number;
  height?: number;
}

export default function Logo(props: LogoProps) {
  const {width = 48, height = 48} = props;

  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className='h-[48px] w-[48px]' /> ;
  }

  const logoSrc = resolvedTheme === 'dark' ? LOGOSVG : LOGOSVG_LIGHT;

  return (
    <Image
      src={logoSrc}
      alt='Swole Pigeon Logo'
      width={width}
      height={height}
    />
  );
}

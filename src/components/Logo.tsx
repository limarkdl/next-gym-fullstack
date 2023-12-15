"use client";

import Image from 'next/image';
import LOGOSVG from '../../public/LOGO.svg';
import LOGOSVG_LIGHT from '../../public/LOGO_LIGHT.svg';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Logo() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (resolvedTheme === 'dark') {
    return (
      <Image src={LOGOSVG} alt='Swole Pigeon Logo' width={50} height={50} />
    );
  }

  if (resolvedTheme === 'light') {
    return (
      <Image
        src={LOGOSVG_LIGHT}
        alt='Swole Pigeon Logo'
        width={50}
        height={50}
      />
    );
  }

  // Fallback to light logo if theme is not resolved
  return (
    <Image src={LOGOSVG_LIGHT} alt='Swole Pigeon Logo' width={50} height={50} />
  );
}

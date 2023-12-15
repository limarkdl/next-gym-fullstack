'use client';

import { use, useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { useTheme } from 'next-themes';
import { DesktopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';

type Props = {};

function ThemeSwitcher({}: Props) {
  const { theme, setTheme } = useTheme();
  const [mountedComponent, setMountedComponent] = useState(false);

  useEffect(() => {
    setMountedComponent(true);
  }, []);

  if (!mountedComponent) return null;
  return (
    <Tabs value={theme}>
      <TabsList>
        <TabsTrigger onClick={() => setTheme('system')} value={'system'}>
          <DesktopIcon />
        </TabsTrigger>
        <TabsTrigger onClick={() => setTheme('light')} value={'light'}>
          <SunIcon />
        </TabsTrigger>
        <TabsTrigger onClick={() => setTheme('dark')} value={'dark'}>
          <MoonIcon />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default ThemeSwitcher;

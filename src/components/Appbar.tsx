'use client';

import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import logo from '../../public/assets/logo.png';
import { Button } from './ui/button';

export const navLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'events',
    path: '/events',
  },
  {
    name: 'teams',
    path: '/teams',
  },
  {
    name: 'resources',
    path: '/resources',
  },
  {
    name: 'Connect with us',
    path: '/connect',
  },
];

export default function Appbar() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;

      // Detect scroll direction
      setScrollingDown(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`sticky bg-primary w-full h-16 flex items-center justify-between px-4 lg:px-16 py-2 top-0 z-[100] transition-transform duration-300 delay-100 ease-in-out border-b-[1px] border-background ${
        scrollingDown ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <Link
        href="/"
        className="flex justify-center items-center overflow-hidden"
      >
        <Image
          src={logo}
          alt="logo"
          className="lg:logo w-full h-[2rem] lg:h-[2.5rem]"
        />
      </Link>

      <div className="hidden lg:flex lg:items-center gap-[3rem]">
        {navLinks.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className="relative text-primary-foreground capitalize text-lg font-medium navLink overflow-hidden"
            >
              <div className="link">{link.name}</div>
            </Link>
          );
        })}
      </div>

      <Button variant="ghost" className={`lg:hidden`} asChild>
        <div className="relative">
          <Menu style={{ width: '2rem', height: '2rem' }} />
        </div>
      </Button>
    </div>
  );
}

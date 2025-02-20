'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
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

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const menuVariants = {
    initial: {
      x: '100%',
    },
    animate: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      x: '100%',
      transition: {
        duration: 0.3,
        ease: [0.12, 0, 0.39, 1],
      },
    },
  };

  const menuItemVariants = {
    initial: {
      x: 350,
      opacity: 1,
    },

    animate: (index: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.12, 0, 0.39, 0],
      },
    }),
    exit: {
      x: 50,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.12, 0, 0.39, 1],
      },
    },
  };

  return (
    <>
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

        <Button
          variant="ghost"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="relative">
            {isMenuOpen ? (
              <X style={{ width: '2rem', height: '2rem' }} />
            ) : (
              <Menu style={{ width: '2rem', height: '2rem' }} />
            )}
          </div>
        </Button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-primary z-50 lg:hidden p-12"
          >
            <div className="flex flex-col items-end justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  variants={menuItemVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  custom={index}
                >
                  <Link
                    href={link.path}
                    className="text-primary-foreground text-3xl font-medium uppercase"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

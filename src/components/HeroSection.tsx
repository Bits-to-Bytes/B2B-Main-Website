'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import localFont from 'next/font/local';

const calSans = localFont({ src: '../../public/fonts/CalSans.otf' });
const cremeCake = localFont({ src: '../../public/fonts/CreamCake.ttf' });

export default function HeroSection() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      gsap.to('.mainHeading', { y: -scrollY * 0.3, ease: 'power4.out' });
      gsap.to('.subHeading', { y: -scrollY * 0.2, ease: 'power4.out' });
      gsap.to('.button', { y: -scrollY * 0.2, ease: 'power4.out' });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="h-[90vh] w-full flex items-center justify-center flex-col gap-8 relative">
      <div className={`${calSans.className} text-center`}>
        <div className="overflow-hidden">
          <h1 className="mainHeading text-secondary lg:text-[7rem]">
            bitstobytes
          </h1>
        </div>
        <div className="text-[2rem] lg:text-[5rem] text-center lg:leading-[5.2rem]">
          <div className="overflow-hidden">
            <h2 className="subHeading">harnessing the power of</h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="subHeading">
              <span
                className={`text-secondary lg:text-[6rem] ${cremeCake.className}`}
              >
                technology
              </span>{' '}
              and{' '}
              <span
                className={`text-secondary lg:text-[6rem] ${cremeCake.className}`}
              >
                education
              </span>
            </h2>
          </div>
        </div>
      </div>
      <button className="z-10 bg-secondary py-4 px-8 text-primary-foreground text-2xl font-semibold rounded-lg button">
        Join Us
      </button>
    </div>
  );
}

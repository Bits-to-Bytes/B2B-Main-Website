'use client';

import gsap from 'gsap';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const mainHeadingRef = useRef(null);
  const subHeadingRef1 = useRef(null);
  const subHeadingRef2 = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Initial entrance animations
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo(
      mainHeadingRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
    )
      .fromTo(
        subHeadingRef1.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '-=0.8',
      )
      .fromTo(
        subHeadingRef2.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '-=0.8',
      )
      .fromTo(
        buttonRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '-=0.6',
      );

    // Scroll animations
    function handleScroll() {
      const scrollY = window.scrollY;

      gsap.to('.mainHeading', {
        y: -scrollY * 0.7,
        ease: 'power4.out',
        duration: 0.8,
      });
      gsap.to('.subHeading', {
        y: -scrollY * 0.4,
        ease: 'power4.out',
        duration: 0.8,
      });
      gsap.to('.button', {
        y: -scrollY * 0.4,
        ease: 'power4.out',
        duration: 0.8,
      });
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="h-screen flex w-full flex-col items-center justify-center text-primary font-calSans bg-[#111]">
      <div className="overflow-hidden">
        <h1
          ref={mainHeadingRef}
          className="mainHeading text-[#42B6E3] text-[4rem] lg:text-[8rem] transform"
        >
          bitstobytes
        </h1>
      </div>
      <div className="text-[#F2F2F2] text-[2rem] lg:text-[5rem] text-center lg:leading-[5.2rem]">
        <div className="overflow-hidden">
          <h1 ref={subHeadingRef1} className="subHeading transform">
            harnessing the power of
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 ref={subHeadingRef2} className="subHeading transform">
            <span className="text-[#42B6E3] font-CalSans lg:text-[6rem] font-creamCake">
              technology
            </span>{' '}
            and{' '}
            <span className="text-[#42B6E3] font-CalSans lg:text-[6rem] font-creamCake">
              education
            </span>
          </h1>
        </div>
      </div>
      <Link
        ref={buttonRef}
        className="bg-[#42B6E3] hover:bg-[#3fa1da] lg:py-[1.2rem] lg:px-[1.5rem] py-[0.9rem] px-[1rem] rounded-[2.5rem] mt-[3rem] button transform transition-colors duration-300"
        href="https://chat.whatsapp.com/LkhAtPwlWLbH34qB0xWYVe"
        target="_blank"
      >
        <span className="text-[#F2F2F2] lg:text-[1.5rem] font-bold text-[1rem] font-poppins">
          Become a Member
        </span>
      </Link>
    </div>
  );
}

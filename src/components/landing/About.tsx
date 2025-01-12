'use client';

import demoAbout from '../../../public/assets/demoAbout.jpg';
import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();

        const isMobile = window.innerWidth < 768;
        const factorHeading = isMobile ? 0.05 : 0.15;
        const factorContent = isMobile ? 0.05 : 0.1;
        const factorButton = isMobile ? 0.025 : 0.05;

        gsap.to('.aboutHeading', {
          y: rect.top * factorHeading,
          duration: 0.3,
        });
        gsap.to('.aboutContent', {
          y: rect.top * factorContent,
          duration: 0.3,
        });
        gsap.to('.aboutButton', { y: rect.top * factorButton, duration: 0.3 });
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={aboutRef}
      className="w-full bg-[#42B6E3] flex flex-col items-center py-[2rem] lg:py-[4rem] lg:gap-[2rem]"
    >
      <div className="overflow-hidden p-1">
        <h1
          className="p-1 aboutHeading text-transparent text-[4.5rem] lg:text-[10rem] font-calSans
        uppercase leading-[4.5rem] lg:leading-[10.5rem] tracking-[0.5rem] lg:tracking-[1rem] text-stroke-dark lg:flex lg:gap-[2rem]"
        >
          about <span className="hidden lg:block">us</span>
        </h1>
      </div>

      <div className="overflow-hidden flex w-[100%] items-center justify-center">
        <div className="aboutContent flex flex-col lg:flex-row w-[85%] gap-[2rem] items-center justify-between overflow-hidden">
          <div className="text-center w-full lg:w-[50%] lg:px-[2rem]">
            <h2 className="text-[2rem] font-calSans">What is bitstobytes?</h2>
            <p className="text-[1rem] lg:text-[1.7rem] font-poppins">
              Being a programming club, we assure pretty much everything you ask
              for! From inspiring events and workshops to captivating lectures
              and talks, as well as iconic hackathons and coding contests well
              known for encouraging innovation and pushing limits. Our community
              of like-minded individuals is always willing to lend a helping
              hand in any way we can.
            </p>
          </div>
          <div className="wi-full lg:w-[50%]">
            <Image src={demoAbout} alt="aboutImage" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

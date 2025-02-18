'use client';

import { teamMembers } from '@/data/team';
import { motion, useAnimationControls } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Doodle from '../../../public/assets/doodle.png';

export default function Team() {
  const pageRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  // Initialize the continuous animation
  useEffect(() => {
    controls.start({
      x: '-50%',
      transition: {
        duration: 45,
        ease: 'linear',
        repeat: Infinity,
      },
    });
  }, [controls]);

  // Smooth scroll animations
  useEffect(() => {
    const handleScroll = () => {
      if (pageRef.current) {
        const rect = pageRef.current.getBoundingClientRect();

        const isMobile = window.innerWidth < 768;
        const factorHeading = isMobile ? 0.05 : 0.1;
        const factorContent = isMobile ? 0.03 : 0.05;
        const factorButton = isMobile ? 0.025 : 0.025;

        gsap.to('.teamHeading', { y: rect.top * factorHeading, duration: 0.3 });
        gsap.to('.teamContent', { y: rect.top * factorContent, duration: 0.3 });
        gsap.to('.teamButton', { y: rect.top * factorButton, duration: 0.3 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="w-full min-h-screen bg-[#F2F2F2] flex flex-col items-center py-8 lg:py-16 lg:gap-8"
      ref={pageRef}
    >
      <div className="overflow-hidden p-1">
        <h1 className="teamHeading text-background text-[4rem] lg:text-[10rem] font-calSans uppercase leading-[4.5rem] lg:leading-[10.5rem] tracking-[0.5rem] lg:tracking-[1rem]">
          team
        </h1>
      </div>

      <div className="flex flex-col items-center text-[1.5rem] lg:text-[2.5rem] w-[80%] lg:w-[60%] text-center font-poppins relative teamContent">
        <p>
          We have an{' '}
          <span className="relative">
            entire
            <Image
              src={Doodle}
              alt="doodle"
              width={100}
              height={100}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.6]"
            />
          </span>{' '}
          team of passionate people
        </p>
        <p>who can help you excel in the tech industry.</p>
      </div>

      <div className="relative w-screen max-w-full overflow-hidden">
        <div className="flex relative w-fit">
          <motion.div
            className="flex gap-4"
            animate={controls}
            onHoverStart={() => controls.stop()}
            onHoverEnd={() => {
              controls.start({
                x: '-50%',
                transition: {
                  duration: 45,
                  ease: 'linear',
                  repeat: Infinity,
                },
              });
            }}
          >
            {teamMembers.map((member, index) => {
              if (index >= 10 || member.image === null) return null;
              return (
                <motion.div
                  key={index}
                  className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] flex-shrink-0 transform transition-all duration-300 relative grayscale hover:grayscale-0 bg-gray-200"
                  whileHover={{ cursor: 'pointer' }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    layout="fill"
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white py-2 px-4 flex flex-col items-center">
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </motion.div>
              );
            })}

            {teamMembers.map((member, index) => {
              if (index >= 10 || member.image === null) return null;
              return (
                <motion.div
                  key={index}
                  className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] flex-shrink-0 transform transition-all duration-300 relative grayscale hover:grayscale-0 bg-gray-200"
                  whileHover={{ cursor: 'pointer' }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    layout="fill"
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white py-2 px-4 flex flex-col items-center">
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

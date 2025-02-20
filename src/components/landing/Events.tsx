'use client';

import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

// Event Photos
import demoEvent from '../../../public/assets/demoEvent.jpg';
// import exploringItHorizons from '/public/events/exploring-it-horizons.png';
// import cybersec101 from '/public/events/cybersec-101.png';
// import pathwayToPlacement from '/public/events/pathway-to-placement.png';

const timelineData = [
  {
    date: 'September 2024',
    title: 'Exploring IT Horizons',
    description:
      'This orientation introduced students to the expansive world of IT, covering career opportunities, emerging technologies, and essential skills. Organized by BitsToBytes, the event inspired students to explore the digital landscape with confidence and curiosity.',
    image: demoEvent,
  },
  {
    date: 'December 2024',
    title: 'CyberSec 101',
    description:
      "An engaging introduction to the fundamentals of cybersecurity, this event offered insights into career opportunities, live demonstrations, and practical applications. Students left with a greater understanding of cybersecurity's role in protecting the digital world.",
    image: demoEvent,
  },
  {
    date: 'December 2024',
    title: 'Pathway to Placement',
    description:
      'Designed to guide students on their placement journey, this event featured practical tips and inspiring experiences from alumni. Participants gained valuable knowledge on resume building, interview preparation, and strategies for career success.',
    image: demoEvent,
  },
];

export default function Events() {
  const eventsRef = useRef<HTMLDivElement>(null);

  function handleScroll() {
    if (eventsRef.current) {
      const rect = eventsRef.current.getBoundingClientRect();

      const isMobile = window.innerWidth < 768;
      const factorHeading = isMobile ? 0.05 : 0.15;
      const factorContent = isMobile ? 0.05 : 0.1;
      const factorButton = isMobile ? 0.025 : 0.0075;

      gsap.to('.eventsHeading', { y: rect.top * factorHeading, duration: 0.3 });
      gsap.to('.eventsContent', { y: rect.top * factorContent, duration: 0.3 });
      gsap.to('.eventsButton', { y: rect.top * factorButton, duration: 0.3 });
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="w-full bg-[#F2F2F2] flex flex-col items-center py-8 lg:py-12 lg:gap-8 overflow-x-hidden"
      ref={eventsRef}
    >
      <div className="overflow-hidden p-1">
        <h1 className="eventsHeading text-background text-[4rem] lg:text-[10rem] font-calSans uppercase leading-[4.5rem] lg:leading-[10.5rem] tracking-[0.5rem] lg:tracking-[1rem]">
          Events
        </h1>
      </div>

      <div className="relative w-full max-w-6xl px-4 md:px-8">
        <div className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-background h-full" />

        <div className="relative py-8">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      <Link
        href="/events"
        className="eventsButton bg-background text-[#f2f2f2] text-xl p-2 px-4 md:p-4 md:px-6 rounded-lg hover:bg-background/80"
      >
        More Events
      </Link>
    </div>
  );
}

interface TimelineItemProps {
  item: {
    date: string;
    title: string;
    description: string;
    image: StaticImageData;
  };
  index: number;
}

const TimelineItem = ({ item, index }: TimelineItemProps) => {
  const isEven = index % 2 === 0;
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScrollItem = () => {
      const rect = itemRef.current?.getBoundingClientRect();
      if (rect) {
        if (rect.top >= window.innerHeight * 0.8) {
          gsap.to(itemRef.current, {
            opacity: 0,
            x: isEven ? 50 : -50,
            duration: 0.5,
          });
        } else if (rect.top < window.innerHeight * 0.8) {
          gsap.to(itemRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.5,
          });
        }
      }
    };

    window.addEventListener('scroll', handleScrollItem);
    return () => {
      window.removeEventListener('scroll', handleScrollItem);
    };
  }, [isEven]);

  return (
    <div className="relative mb-8 md:mb-16 w-full">
      <div className="absolute left-1/2 top-4 -translate-x-1/2 w-4 h-4 bg-background rounded-full z-10" />
      <div
        className={`flex flex-col md:flex-row items-center md:items-start justify-center md:gap-12`}
      >
        <motion.div
          ref={itemRef}
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`w-full md:w-[45%] lg:w-[45%] ${isEven ? 'md:order-2 md:ml-auto' : 'md:order-1 md:mr-auto'}`}
        >
          <div className="bg-white rounded-lg p-6 lg:p-8 shadow-lg relative">
            <div className="absolute -top-3 left-4 bg-background text-white px-4 py-1 rounded-full text-sm">
              {item.date}
            </div>
            <div className="mt-4">
              <Image
                src={item.image}
                alt={`${item.title} landscape`}
                className="rounded-lg w-full h-auto object-cover mb-4"
                width={450}
                height={150}
              />
            </div>

            <div>
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 lg:text-base">
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    title: 'CEO',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, cumque!',
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'CTO',
    text: 'Ipsum dolor sit amet consectetur adipisicing elit. Quae, developer!',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    title: 'Designer',
    text: 'Amet consectetur adipisicing elit. Quae, creative design!',
  },
  {
    id: 4,
    name: 'Sarah Wilson',
    title: 'Manager',
    text: 'Consectetur adipisicing elit. Quae, team leader!',
  },
  {
    id: 5,
    name: 'Tom Brown',
    title: 'Developer',
    text: 'Adipisicing elit consectetur. Quae, code master!',
  },
];

export default function Testimonials() {
  const pageRef = useRef<HTMLDivElement>(null);

  function handleScroll() {
    if (pageRef.current) {
      const rect = pageRef.current.getBoundingClientRect();
      const isMobile = window.innerWidth < 768;
      const factorHeading = isMobile ? 0.05 : 0.2;
      const factorContent = isMobile ? 0.05 : 0.1;
      const factorButton = isMobile ? 0.025 : 0.05;
      gsap.to('.testimonialsHeading', {
        y: rect.top * factorHeading,
        duration: 0.3,
      });
      gsap.to('.testimonialsContent', {
        y: rect.top * factorContent,
        duration: 0.3,
      });
      gsap.to('.testimonialsButton', {
        y: rect.top * factorButton,
        duration: 0.3,
      });
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
      className="w-full bg-background flex flex-col items-center p-8 lg:p-16 lg:gap-8"
      ref={pageRef}
    >
      <div className="overflow-hidden p-1">
        <h1
          className="p-1 testimonialsHeading text-transparent text-[4.5rem] lg:text-[10rem] font-calSans
          uppercase leading-[4.5rem] lg:leading-[10.5rem] tracking-[0.5rem] lg:tracking-[1rem] text-stroke-light lg:flex lg:gap-[2rem]"
        >
          <span className="hidden lg:block">Testimonials</span>
          <span className="block lg:hidden">Reviews</span>
        </h1>
      </div>

      <section className="testimonialsContent flex flex-col items-center gap-6">
        <div className="flex flex-col text-primary items-center text-[1.5rem] lg:text-[2.5rem] w-[80%] lg:w-[60%] text-center font-poppins relative">
          <p>Public Cheers for Us!</p>
        </div>

        <Carousel
          className="w-full max-w-xs md:max-w-3xl lg:max-w-7xl"
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent className="flex items-center">
            {testimonials.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-white shadow-md rounded-lg p-6">
                    <CardContent className="flex flex-col items-center justify-center">
                      <p className="text-center italic text-gray-700 mb-4 text-lg">
                        {item.text}
                      </p>
                      <div className="mt-4 text-center">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </div>
  );
}

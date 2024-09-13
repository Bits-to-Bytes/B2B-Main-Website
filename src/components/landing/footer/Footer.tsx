import Image from 'next/image';
import React from 'react';

import atTheRate from '../../../../public/assets/atTheRate.png';
import location from '../../../../public/assets/location.png';
import phone from '../../../../public/assets/phone.png';

import facebook from '../../../../public/assets/facebook.png';
import github from '../../../../public/assets/github.png';
import instagram from '../../../../public/assets/instagram.png';
import linkedin from '../../../../public/assets/linkedin.png';
import twitter from '../../../../public/assets/twitter.png';
import youtube from '../../../../public/assets/youtube.png';

import localFont from 'next/font/local';
import Link from 'next/link';

import profile from '../../../../public/assets/profile.jpg';

const calSans = localFont({ src: '../../../../public/fonts/CalSans.otf' });
const poppins = localFont({ src: '../../../../public/fonts/Poppins.ttf' });

export default function Footer(): React.ReactNode {
  const socialIcons = [
    { src: instagram, href: 'https://www.instagram.com/bits.to.bytes/' },
    { src: linkedin, href: 'https://linkedin.com/company/bitstobytes-gecbvn' },
    { src: github, href: 'https://github.com/Bits-to-Bytes' },
    { src: twitter, href: 'https://twitter.com/BitstobytesGec' },
    { src: youtube, href: 'https://www.youtube.com/@BitstoBytes' },
    { src: facebook, href: 'https://www.facebook.com/bitstobytesgecbvn' },
  ];

  return (
    <footer className="bottom-0 bg-background pt-[5rem] w-full flex flex-col items-center">
      <div className="px-4 md:px-8 lg:px-16 w-full flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="lg:px-12 flex flex-col gap-4">
          <h1
            className={`text-secondary text-3xl md:text-4xl lg:text-6xl ${calSans.className}`}
          >
            bitstobytes
          </h1>
          <div className="flex gap-4">
            <Image src={location} alt="location" className="w-6 h-6 mt-1" />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Government+Engineering+College+Bhavnagar+Nr+Sir+BPTI+Campus+Vidhyanagar+Bhavnagar+Gujarat+364002+India"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl lg:w-[70%]"
            >
              Government Engineering College, Bhavnagar, Nr. Sir BPTI Campus,
              Vidhyanagar, Bhavnagar, Gujarat 364002, India
            </a>
          </div>
          <div className="flex gap-4">
            <Image src={atTheRate} alt="email" className="w-6 h-6 mt-1" />
            <a
              href="mailto:bitstobytesgecbvn@gmail.com"
              className="text-lg md:text-xl"
            >
              bitstobytesgecbvn@gmail.com
            </a>
          </div>
          <div className="flex gap-4">
            <Image src={phone} alt="phone" className="w-6 h-6 mt-1" />
            <a href="tel:+912782525354" className="text-lg md:text-xl">
              +91 278 252 5354
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1
            className={`text-secondary text-3xl md:text-4xl lg:text-5xl ${calSans.className}`}
          >
            Follow us @
          </h1>
          <div className="grid grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {socialIcons.map((icon, index) => (
              <Link
                key={index}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src={icon.src}
                  alt="socialIcon"
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-16 py-8 w-full flex flex-col items-center">
        <h1
          className={`text-secondary text-lg md:text-2xl lg:text-3xl ${calSans.className}`}
        >
          Designed and Developed by:
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 mt-4">
          <Link
            href={`https://www.linkedin.com/in/priyansh-patel-1570b0251/`}
            target="_blank"
            className="flex flex-col items-center gap-4 my-4"
          >
            <Image
              src={profile}
              alt="developer"
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full"
            />
            <span
              className={`text-md md:text-lg lg:text-xl text-secondary ${calSans.className}`}
            >
              Priyansh Patel
            </span>
          </Link>
          {/* <Link href={`https://www.linkedin.com/in/kenil-kanani-5ab300219/`} target='_blank' className="flex flex-col items-center gap-4">
            <Image src={profile} alt='developer' className='w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full' />
            <span className={`text-md md:text-lg lg:text-xl text-secondary ${calSans.className}`}>Kenil Kanani</span>
          </Link>
          <Link href={`https://www.linkedin.com/in/vivek-jadav-python-developer/`} target='_blank' className="flex flex-col items-center gap-4">
            <Image src={profile} alt='developer' className='w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full' />
            <span className={`text-md md:text-lg lg:text-xl text-secondary ${calSans.className}`}>Vivek Jadav</span>
          </Link> */}
        </div>
        <span
          className={`${poppins.className} text-sm md:text-md lg:text-lg mt-4`}
        >
          Copyright © 2024 All rights reserved | bitstobytes
        </span>
      </div>
    </footer>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { ElementType } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

interface ContactMethod {
  title: string;
  description: string;
  icon: ElementType | string;
  link: string;
  gradient: string;
}

const ContactCard = ({
  title,
  description,
  icon: Icon,
  link,
  gradient,
}: ContactMethod) => (
  <Link href={link} target={title === 'Phone' ? '_self' : '_blank'}>
    <motion.div
      className="relative group overflow-hidden rounded-xl h-full"
      whileHover={{ scale: 1.02 }}
      variants={cardVariants}
    >
      <div
        className={`p-8 ${gradient} transition-all duration-300 group-hover:shadow-md h-full`}
      >
        {typeof Icon === 'string' ? (
          <img
            src={`${Icon}`}
            alt={title}
            className="w-10 h-10 text-white/90 mb-6"
          />
        ) : (
          <Icon className="w-10 h-10 text-white/90 mb-6" />
        )}
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-white/80 line-clamp-3">{description}</p>
      </div>
    </motion.div>
  </Link>
);

export default function ConnectPage() {
  const contactMethods = [
    {
      title: 'WhatsApp Community',
      description:
        'Join our tech community on WhatsApp for updates and discussions',
      icon: '/assets/whatsapp.png',
      link: 'https://chat.whatsapp.com/LkhAtPwlWLbH34qB0xWYVe',
      gradient: 'bg-gradient-to-br from-green-500 to-green-600',
    },
    {
      title: 'Email Us',
      description: 'Reach out via email for any queries or collaborations',
      icon: Mail,
      link: 'mailto:bitstobytesgecbvn@gmail.com',
      gradient: 'bg-gradient-to-br from-blue-500 to-purple-600',
    },
    {
      title: 'Phone',
      description: 'Call us during business hours (9 AM - 6 PM)',
      icon: Phone,
      link: 'tel:+912782525354',
      gradient: 'bg-gradient-to-br from-red-500 to-pink-600',
    },
    {
      title: 'Visit Us',
      description: 'Drop by our office for a face-to-face meeting',
      icon: MapPin,
      link: 'https://www.google.com/maps/search/?api=1&query=Government+Engineering+College,+Bhavnagar,+Nr.+Sir+BPTI+Campus,+Vidhyanagar,+Bhavnagar,+Gujarat+364002,+India',
      gradient: 'bg-gradient-to-br from-yellow-500 to-red-600',
    },
    {
      title: 'GitHub',
      description: 'Check out our open-source projects and contributions',
      icon: '/assets/github-dark.png',
      link: 'http://github.com/Bits-to-Bytes/',
      gradient: 'bg-gradient-to-br from-gray-700 to-gray-900',
    },
    {
      title: 'LinkedIn',
      description: 'Connect with us professionally on LinkedIn',
      icon: '/assets/linkedin-dark.png',
      link: 'https://www.linkedin.com/company/bitsto-bytes/',
      gradient: 'bg-gradient-to-br from-blue-600 to-blue-800',
    },
  ];

  return (
    <div className="h-[calc(100vh-4rem)] bg-[#F2F2F2] flex items-center">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Connect with Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our community and stay connected through various channels
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {contactMethods.map((method, index) => (
            <ContactCard key={index} {...method} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

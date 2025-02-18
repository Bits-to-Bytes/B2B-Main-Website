'use client';

import { motion } from 'framer-motion';
import { Binary, BookOpen, Code, Database, Shield } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

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

interface Resource {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  gradient: string;
}

const ResourceCard = ({
  title,
  description,
  icon: Icon,
  href,
  gradient,
}: Resource) => (
  <Link href={href}>
    <motion.div
      className="relative group overflow-hidden rounded-2xl"
      whileHover={{ scale: 1.02 }}
      variants={cardVariants}
    >
      <div
        className={`p-8 h-64 ${gradient} transition-all duration-300 group-hover:shadow-lg`}
      >
        <Icon className="w-12 h-12 text-white mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/80">{description}</p>
      </div>
    </motion.div>
  </Link>
);

export default function ResourcePage() {
  const resources = [
    {
      title: 'Web Development',
      description:
        'Master modern web technologies, frameworks, and best practices for building responsive web applications.',
      icon: Code,
      href: '/resources/web-development',
      gradient: 'bg-gradient-to-br from-blue-500 to-purple-600',
    },
    {
      title: 'Blockchain Development',
      description:
        'Learn blockchain fundamentals, smart contracts, and decentralized application development.',
      icon: Binary,
      href: '/resources/blockchain',
      gradient: 'bg-gradient-to-br from-red-800 to-pink-600',
    },
    {
      title: 'Cyber Security',
      description:
        'Explore security principles, threat detection, and protection strategies for digital assets.',
      icon: Shield,
      href: '/resources/cyber-security',
      gradient: 'bg-gradient-to-br from-green-500 to-teal-600',
    },
    {
      title: 'DSA',
      description:
        'Deep dive into Data Structures and Algorithms with practical implementations and problem-solving.',
      icon: BookOpen,
      href: '/resources/dsa',
      gradient: 'bg-gradient-to-br from-yellow-500 to-red-600',
    },
    {
      title: 'Data Science',
      description:
        'Discover data analysis, machine learning, and statistical modeling techniques.',
      icon: Database,
      href: '/resources/data-science',
      gradient: 'bg-gradient-to-br from-purple-500 to-indigo-600',
    },
    {
      title: 'Devops',
      description:
        'Learn continuous integration, deployment pipelines, containerization, and infrastructure automation for scalable systems.',
      icon: Shield,
      href: '/resources/devops',
      gradient: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
            Learning Resources
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive collection of resources to master
            different domains of technology
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

'use client';

import { teamMembers } from '@/data/team';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function TeamPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4">
      {/* Header Section */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
          We are the people who make up{' '}
          <span className="font-calSans text-background">bitstobytes</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Our approach is simple: bring together passionate tech minds, provide
          them with opportunities, and create an impact.
        </p>
      </motion.div>

      {/* Team Grid */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {teamMembers.map((member, index) => {
          if (member.image === null) return null;

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative group"
              onHoverStart={() => setHoveredId(index)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden rounded-2xl border-background border-[1.5px] h-[28rem]">
                <motion.div
                  className="absolute inset-0 z-0"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredId === index ? 0.8 : 0,
                    background:
                      hoveredId === index
                        ? [
                            'linear-gradient(45deg, #818cf8 0%, #ec4899 50%, #f59e0b 100%)',
                          ]
                        : 'none',
                  }}
                  transition={{
                    background: {
                      duration: 8,
                      ease: 'linear',
                    },
                    opacity: {
                      duration: 0.5,
                    },
                  }}
                />

                <div className="relative h-full flex flex-col">
                  <div className="relative w-full h-72">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="object-cover"
                    />
                  </div>

                  <motion.div
                    className="p-6 mt-auto bg-white backdrop-blur-sm select-none"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h2 className="text-xl font-bold text-gray-800 mb-1">
                      {member.name}
                    </h2>
                    <p className="text-gray-600">{member.role}</p>

                    <div className="mt-4 flex gap-4">
                      {member.linkedin && (
                        <Link
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </Link>
                      )}
                      {member.twitter && (
                        <Link
                          href={`https://twitter.com/${member.twitter}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        </Link>
                      )}
                      {member.instagram && (
                        <Link
                          href={`https://instagram.com/${member.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-pink-500 transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                          </svg>
                        </Link>
                      )}
                      {member.github && (
                        <Link
                          href={`https://github.com/${member.github}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-800 transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.757-1.334-1.757-1.09-.744.083-.729.083-.729 1.204.085 1.837 1.238 1.837 1.238 1.07 1.833 2.807 1.304 3.49.997.108-.776.42-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.45 11.45 0 013.002-.404c1.018.005 2.045.137 3.002.404 2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.241 2.873.117 3.176.768.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.922.431.372.814 1.103.814 2.22 0 1.605-.014 2.898-.014 3.29 0 .32.192.693.8.575C20.565 21.795 24 17.298 24 12c0-6.628-5.372-12-12-12z" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

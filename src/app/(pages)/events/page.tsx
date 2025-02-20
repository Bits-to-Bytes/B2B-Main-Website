'use client';

import { motion } from 'framer-motion';

// interface Event {
//   title: string;
//   description: string;
//   image: string;
// }

// const events: Event[] = [
//   {
//     title: 'Event 1',
//     description: 'Description for Event 1',
//     image: '/path/to/event1.jpg',
//   },
//   {
//     title: 'Event 2',
//     description: 'Description for Event 2',
//     image: '/path/to/event2.jpg',
//   },
//   {
//     title: 'Event 3',
//     description: 'Description for Event 3',
//     image: '/path/to/event3.jpg',
//   },
// ];

export default function EventsPage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4">
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
          Explore Events
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Our events bring together tech enthusiasts, innovators, and industry
          leaders to share knowledge, build connections, and create lasting
          impact.
        </p>
      </motion.div>
    </div>
  );
}

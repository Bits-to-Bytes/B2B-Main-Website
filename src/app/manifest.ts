import type { MetadataRoute } from 'next';

const { appName, description } = {
  appName: 'bitstobytes',
  description:
    'Bits to Bytes is a student-run tech club offering hands-on learning, workshops, and events to help you build skills and excel in the tech industry.',
};

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: appName,
    short_name: appName,
    description,
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}

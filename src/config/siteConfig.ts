import { Metadata } from 'next';

const TITLE = 'BitstoBytes - Harnessing the power of Education and Technology';
const DESCRIPTION =
  'Bits to Bytes is a student-run tech club offering hands-on learning, workshops, and events to help you build skills and excel in the tech industry.';
const BASE_URL = 'https://www.bitstobytes.tech';

const siteConfig: Metadata = {
  title: {
    default: TITLE,
    template: `${TITLE}`,
  },
  description: DESCRIPTION,
  icons: {
    icon: '/favicon.ico',
  },
  applicationName: TITLE,
  creator: 'Bits to Bytes',
  category: 'Tech Club, Student Development',
  alternates: {
    canonical: BASE_URL,
  },
  keywords: [
    'Tech Club',
    'College Events',
    'Workshops',
    'Hackathons',
    'Career Development',
    'Student Community',
    'Tech Skills',
  ],
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: BASE_URL,
    images: [
      {
        url: 'https://www.bitstobytes.tech/opengraph-image.png',
        width: 1200,
        height: 630,
      },
    ],
    siteName: TITLE,
    locale: 'en-US',
    type: 'website',
  },
};

export default siteConfig;

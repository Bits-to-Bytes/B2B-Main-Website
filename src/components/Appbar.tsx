import Image from 'next/image';
import logo from '../../public/assets/logo.png';
import Link from 'next/link';

export default function Appbar() {
  const navLinks: { link: string; name: string }[] = [
    {
      link: '/events',
      name: 'Events',
    },
    {
      link: '/teams',
      name: 'Teams',
    },
    {
      link: '/resources',
      name: 'Resources',
    },
    {
      link: '/contact',
      name: 'Contact Us',
    },
  ];

  return (
    <div className="sticky z-50 bg-primary text-primary-foreground w-full h-[10vh] top-0 py-5 px-10 flex justify-between items-center border-b-2 border-black">
      <Link href="/">
        <Image src={logo} alt="logo" className="w-20" />
      </Link>
      <div className="flex gap-8">
        {navLinks.map((link, index) => (
          <div key={index}>
            <Link href={link.link} className="relative text-xl link">
              <div>{link.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

import About from '@/components/landing/About';
import Events from '@/components/landing/Events';
import Hero from '@/components/landing/Hero';
import Team from '@/components/landing/Team';
import Testimonials from '@/components/landing/Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen w-full select-none">
      <Hero />
      <About />
      <Events />
      <Team />
      <Testimonials />
    </div>
  );
}

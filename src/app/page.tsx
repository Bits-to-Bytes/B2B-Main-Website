import About from '@/components/landing/About';
import Hero from '@/components/landing/Hero';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
    </div>
  );
}

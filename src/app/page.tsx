import NavBar from '@/components/sections/NavBar';
import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero';
import Mission from '@/components/sections/Mission';
import Perspective from '@/components/sections/Perspective';
import Motivation from '@/components/sections/Motivation';
import Stats from '@/components/sections/Stats';
import Technologies from '@/components/sections/Technologies';
import FAQ from '@/components/sections/FAQ';

export default function Page() {
  return (
    <>
      <NavBar />
      <Hero />
      <Mission />
      <Perspective />
      <Motivation />
      <Stats />
      <Technologies />
      <FAQ />
      <Footer />
    </>
  );
}

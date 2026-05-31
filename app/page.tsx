'use client'

import Hero from '@/components/Hero';
import StorySection from '@/components/StorySection';

import Gallery from '@/components/Gallery';
import RSVP from '@/components/RSVP';
import Footer from '@/components/Footer';
import Instructions from '@/components/Instructions';
import BackgroundMusic from '@/components/BackgroundMusic';
import { useSearchParams } from 'next/navigation';

export default function HomePage() {

  return (
    <main className="bg-white text-[#2b2b2b] overflow-hidden">
      <BackgroundMusic />

      <Hero />
      <RSVP />
      <Instructions />
      <StorySection />
      <Gallery />
      {/* <Music/> */}
      <Footer />
    </main>
  );
}
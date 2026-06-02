'use client'

import Hero from '@/components/Hero';
import StorySection from '@/components/StorySection';

import Gallery from '@/components/Gallery';
import RSVP from '@/components/RSVP';
import Footer from '@/components/Footer';
import Instructions from '@/components/Instructions';
import BackgroundMusic from '@/components/BackgroundMusic';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [isNotGuest, setIsNotGuest] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setIsNotGuest((params.get("row") === null) && (params.get("code") === null))
  }, [])

  return (
    <main className="bg-white text-[#2b2b2b] overflow-hidden">
      <BackgroundMusic />

      <Hero />
      <RSVP isNotGuest={isNotGuest} />
      <Instructions isNotGuest={isNotGuest} />
      <StorySection />
      <Gallery />
      <Footer />
    </main>
  );
}
'use client';

import { useEffect, useState } from 'react';

export default function Countdown() {
  const weddingDate = new Date('2026-08-15T06:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    hrs: 0,
    min: 0,
    seg: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      setTimeLeft({
        dias: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((distance / (1000 * 60 * 60)) % 24),
        min: Math.floor((distance / 1000 / 60) % 60),
        seg: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [weddingDate]);

  return (
    <section className="text-center mt-4">
      <div className="mx-auto grid max-w-4xl px-6 grid-cols-4">
        {Object.entries(timeLeft).map(([key, value]) => (
          <div
            key={key}
            className={`${key === 'dias'? 'border-e': key === 'seg'?'border-s':'border-x'} border-[#d9c7aa] bg-white p-3`}
          >
            <p className="text-3xl text-[#e6a291]">{value}</p>
            <p className="mt-2 uppercase text-sm text-gray-500">
              {key}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';
import img2 from '@/public/photos/img-2.jpeg';
import Image from 'next/image';

export default function StorySection() {
  return (
    <section className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="relative h-125 md:h-auto">
        <Image src={img2} alt='img-1' loading='eager' className="h-full w-full object-cover"/>
      </div>

      <div className="flex items-center justify-center px-8 py-20 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <p className="mb-4 uppercase tracking-[0.4rem] text-[#b08d57]">
            Nuestra Historia
          </p>

          <h2 className="font-cormorant font-bold text-5xl mb-8 ">
            Un amor escrito por el destino
          </h2>

          <p className="text-lg leading-9 text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius amet earum quisquam dolor quo qui quae a distinctio laborum deleniti, ex delectus quibusdam tempora blanditiis vitae, sint dolores, unde porro!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam adipisci provident optio dignissimos unde aliquam, quaerat asperiores recusandae omnis tempora a repellat at! Quae, pariatur sit cum fuga minus debitis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fuga doloremque velit in deleniti saepe, modi praesentium voluptates perferendis excepturi dolore aliquid reiciendis expedita magnam aliquam, perspiciatis eius enim a?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sapiente dolore error quae adipisci perspiciatis vel! Fuga mollitia deserunt culpa iste rerum ex cum, molestias magnam dolore aliquid quasi vitae?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fuga doloremque velit in deleniti saepe, modi praesentium voluptates perferendis excepturi dolore aliquid reiciendis expedita magnam aliquam, perspiciatis eius enim a?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sapiente dolore error quae adipisci perspiciatis vel! Fuga mollitia deserunt culpa iste rerum ex cum, molestias magnam dolore aliquid quasi vitae?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
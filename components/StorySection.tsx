'use client';

import { motion } from 'framer-motion';
import img2 from '@/public/photos/gallery/img-5.png';
import Image from 'next/image';

export default function StorySection() {
  return (
    <section className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="relative h-125 md:h-auto">
        <Image src={img2} alt='img-1' loading='eager' className="h-full w-full object-cover" />
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
            Un amor escrito
          </h2>

          <p className="text-lg leading-9 text-gray-700">
            Todo comenzó con una simple palabra: hola. Una palabra sencilla que apenas se pronunció, acompañada de sonrisas tímidas, miradas discretas y corazones que aún no imaginaban todo lo que estaba por venir. Aunque el silencio parecía ocupar la mayor parte de nuestros encuentros, había algo más que hablaba por nosotros: una conexión especial que se abría paso entre las sonrisas, las coincidencias y los amigos en común.

            Con el paso del tiempo, cada encuentro, cada conversación y cada visita se fue convirtiendo en un momento esperado. Sin darnos cuenta, nuestros corazones comenzaron a llenarse de ilusión, y aquello que al principio era solo una amistad empezó a transformarse en algo mucho más profundo. Las palabras ya no eran necesarias para expresar lo que sentíamos; nuestras miradas, nuestras sonrisas y los latidos acelerados de nuestros corazones hablaban por nosotros.

            Descubrimos que compartíamos mucho más que momentos. Compartíamos sueños, metas, valores e ideales. Nos emocionaban las mismas cosas, nos inspiraban los mismos propósitos y encontrábamos alegría en construir juntos una visión de futuro. Poco a poco, cada coincidencia se convirtió en una razón más para agradecer por habernos encontrado.

            La distancia llegó como una prueba, pero nunca como un obstáculo. Aunque los kilómetros nos separaban, nuestros corazones permanecían cada vez más unidos. Aprendimos que el amor verdadero no se mide por la cercanía física, sino por la fuerza con la que dos personas deciden caminar en la misma dirección. Cada mensaje, cada llamada y cada reencuentro fortalecían la certeza de que Jehová estaba escribiendo una hermosa historia para nosotros.

            Y así, lo que comenzó con un tímido "hola" se convirtió en una historia llena de amor, fe y esperanza. Una historia en la que dos vidas se encontraron para acompañarse, apoyarse y crecer juntas. Hoy miramos hacia el futuro con gratitud, soñando con formar una familia, servir juntos a nuestro Creador y seguir escribiendo cada capítulo de esta hermosa aventura que apenas comienza.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
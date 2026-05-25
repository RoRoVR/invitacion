'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import { IoClose } from 'react-icons/io5';

type RCVPModalProp = {
    openModal: boolean
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

export default function RSVPModal({openModal, setOpenModal}:RCVPModalProp) {
  const [response, setResponse] = useState<
    'accepted' | 'declined' | null
  >(null);

  if (!openModal) return null;

  return (
    <div
      className=" fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
    >
      <div
        className=" relative w-full max-w-lg rounded-4xl bg-[#f8f4ef] p-8 shadow-2xl"
      >
        <button onClick={() => setOpenModal(false)} className=" absolute right-5 top-5 text-gray-500 transition hover:text-black"
        ><IoClose /></button>

        {/* Contenido */}
        <div className="text-center">
          <p
            className=" mb-3 uppercase tracking-[0.4rem] text-[#b08d57] text-sm"
          >
            Confirmación de asistencia
          </p>

          <h2
            className=" font-title text-5xl font-light text-[#2b2b2b] mb-6"
          >
            ¿Nos acompañarán?
          </h2>

          <p
            className=" text-gray-600 leading-8 mb-8"
          >
            Nos haría muchísima ilusión compartir este día tan
            especial junto a ustedes. Esperamos contar con su
            presencia para celebrar nuestra boda.
          </p>

          {/* Invitados */}
          <div
            className="
              mb-8
              rounded-3xl
              bg-white
              p-6
              shadow-sm
              border
              border-[#eadfce]
            "
          >
            <p className="text-sm uppercase tracking-[0.3rem] text-[#b08d57] mb-3">
              Invitados
            </p>

            <h3 className="text-2xl font-semibold text-[#2b2b2b]">
              Familia Velasco
            </h3>

            <p className="mt-3 text-gray-600">
              Cantidad de pases:
            </p>

            <p className="text-4xl font-light mt-2 text-[#399179]">
              4
            </p>
          </div>

          {/* Botones */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setResponse('accepted')}
              className={`
                rounded-full
                py-4
                text-white
                font-semibold
                transition
                ${
                  response === 'accepted'
                    ? 'bg-[#399179]'
                    : 'bg-[#399179]/80 hover:bg-[#399179]'
                }
              `}
            >
              Sí, asistiremos
            </button>

            <button
              onClick={() => setResponse('declined')}
              className={`
                rounded-full
                py-4
                font-semibold
                transition
                border
                ${
                  response === 'declined'
                    ? 'border-red-500 text-red-500'
                    : 'border-gray-300 text-gray-600 hover:border-gray-500'
                }
              `}
            >
              No podremos asistir
            </button>
          </div>

          {/* Fecha límite */}
          <p
            className="
              mt-8
              text-sm
              text-gray-500
              tracking-wide
            "
          >
            Fecha límite de confirmación:
            <span className="font-semibold text-[#2b2b2b]">
              {' '}
              01 de Agosto de 2026
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
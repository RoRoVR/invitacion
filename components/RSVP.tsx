'use client'

import Image from "next/image";
import waveSectionTextTop from "@/public/img/wave-section-text-top.svg";
import { LuMap } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import RSVPModal from "./RSVPModal";
import { useState } from "react";
import { TbBrandZoom } from "react-icons/tb";

type RSVPProp = {
  isNotGuest: boolean
}

export default function RSVP({ isNotGuest }: RSVPProp) {
  const [openModal, setOpenModal] = useState(false);

  const speechStartDate = '20260815T143000';
  const speechEndDate = '20260815T153000';

  const speechCalendarUrl = `
    https://calendar.google.com/calendar/render?action=TEMPLATE
    &text=Conferencia+bíblica+-+Marcos+y+Cintia
    &dates=${speechStartDate}/${speechEndDate}
    &details=Te+esperamos+en+nuestro+gran+dia!%0A%0AUbicacion:%0Ahttps://maps.app.goo.gl/ZjdXcjyNvSmFJfXB6
    &location=Salón+del+reino+de+los+testigos+de+Jehová
  `.replace(/\s/g, '');

  const partyStartDate = '20260815T170000';
  const partyEndDate = '20260815T220000';

  const partyCalendarUrl = `
    https://calendar.google.com/calendar/render?action=TEMPLATE
    &text=Banquete+-+Marcos+y+Cintia
    &dates=${partyStartDate}/${partyEndDate}
    &details=Te+esperamos+en+nuestro+gran+dia!%0A%0AUbicacion:%0Ahttps://maps.app.goo.gl/9J1rhAvpaAa9GCnx9
    &location=Salón+de+eventos+VIP+Madison
  `.replace(/\s/g, '');

  return (
    <section className="bg-[#fffcfa] pt-50 sm:pt-80">

      <RSVPModal openModal={openModal} setOpenModal={setOpenModal} />

      <div className={`${isNotGuest ? "hidden" : ""} relative mx-auto max-w-3xl text-center z-30 px-4`}>
        <p className="mb-4 uppercase tracking-[0.4rem]">
          Confirma tu asistencia a la boda
        </p>

        <h2 className="section-title mb-8">
          ¿Nos acompañas?
        </h2>

        <p className="mb-10 text-lg">
          Esperamos compartir este momento tan especial contigo.
        </p>

        <button className="rounded-full border text-[#e6a291] border-[#e6a291] px-5 sm:px-10 py-4 uppercase tracking-[0.3rem] transition hover:bg-[#e6a291] hover:text-white" onClick={() => setOpenModal(true)}>
          Confirmar asistencia
        </button>
        <h2 className="text-gray-500 text-sm mt-2">Pulsa el botón para confirmar o rechazar tu asistencia</h2>
      </div>

      <div className={`${isNotGuest ? "hidden" : ""} w-full flex justify-center mt-10 px-4`}>
        <div className="w-[90%] flex flex-col md:flex-row gap-10 md:gap-0">
          <div className="w-full md:w-1/2 text-center flex flex-col gap-4 text-xl">
            <h1 className="font-bold text-3xl">Conferencia bíblica</h1>

            <div>
              <h2 className="font-medium text-3xl mb-2">Día</h2>
              <p>15 agosto 2026, 02:30 p. m.</p>
            </div>

            <div>
              <h2 className="font-medium text-3xl mb-2">Lugar</h2>
              <p>Salón del Reino de los Testigos de Jehová</p>
            </div>

            <div>
              <h2 className="font-medium text-3xl mb-2">Dirección</h2>
              <p>Barrio Tabladita, Av. 6 de Agosto y Entre Rios</p>
            </div>

            <div className="flex flex-col justify-center items-center text-[16px] font-semibold">
              <a href="https://maps.app.goo.gl/ZjdXcjyNvSmFJfXB6" target="_black" rel="noopener noreferrer" className="bg-[#399179] opacity-80 hover:opacity-100 flex gap-2 items-center text-white py-3 px-5 rounded-full"> <LuMap className="text-xl" /> Ver en mapa</a>
            </div>

            <div className="flex flex-col justify-center items-center text-[16px] font-semibold">
              <a href={speechCalendarUrl} target="_blank" rel="noopener noreferrer" className=" hover:bg-[#39917a10] flex gap-2 items-center text-[#399179] py-3 px-5 rounded-full"> <CiCalendar className="text-xl" />Añadir al calendario</a>
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center flex flex-col gap-4 text-xl">
            <h1 className="font-bold text-3xl">Banquete</h1>

            <div>
              <h2 className="font-medium text-3xl mb-2">Día</h2>
              <p>15 agosto 2026, 05:00 p. m.</p>
            </div>

            <div>
              <h2 className="font-medium text-3xl mb-2">Lugar</h2>
              <p>Vip Madison</p>
            </div>

            <div>
              <h2 className="font-medium text-3xl mb-2">Dirección</h2>
              <p>Entre La Caja y Violín Chapaco</p>
            </div>

            <div className="flex flex-col justify-center items-center text-[16px] font-semibold">
              <a href="https://maps.app.goo.gl/9J1rhAvpaAa9GCnx9" target="_black" rel="noopener noreferrer" className="bg-[#399179] opacity-80 hover:opacity-100 flex gap-2 items-center text-white py-3 px-5 rounded-full"> <LuMap className="text-xl" /> Ver en mapa</a>
            </div>

            <div className="flex flex-col justify-center items-center text-[16px] font-semibold">
              <a href={partyCalendarUrl} target="_blank" rel="noopener noreferrer" className=" hover:bg-[#39917a10] flex gap-2 items-center text-[#399179] py-3 px-5 rounded-full"> <CiCalendar className="text-xl" /> Añadir al calendario</a>
            </div>
          </div>


        </div>
      </div>

      <div className="relative w-full flex flex-col justify-center items-center text-2xl mt-3 z-30">
        <a
          href="https://jworg.zoom.us/j/81974468044?pwd=qTBRxcsxHSVx9botgrS2pOkvL7FC50.1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0c60c8] flex justify-center items-center text-white px-10 sm:px-16 py-4 rounded-full opacity-80 hover:opacity-100"
        >
          <TbBrandZoom className="me-2 text-2xl" />
          Entrar por ZOOM
        </a>

        <div className="text-lg text-center mt-4 text-gray-500">
          <p className="font-bold">Id de la reunión: <span className="font-normal">819 7446 8044</span> </p>
          <p className="font-bold">Contraseña: <span className="font-normal">boda2026</span></p>
        </div>

      </div>


      <div className="w-full">
        <Image src={waveSectionTextTop} alt="waveSectionTextBottom" className="w-full h-auto" />
      </div>
    </section>
  );
}
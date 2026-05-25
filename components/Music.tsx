
import footerSeparator from "@/public/img/footer-separator.svg";
import Image from "next/image";

export default function Music() {
  return (
    <section className="w-full flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl mt-10 mb-5 font-cormorant font-bold">La música de nuestra boda</h1>
      <p className="text-center text-xl">Hagamos una fiesta única, escucha nuestra playlist de forma adelantada</p>

      <div className="w-full h-150 max-w-xl mx-auto mt-10">
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/playlist/73GK9NW77dfUcuDhW1BT6v?utm_source=generator"
          width="100%"
          height="600"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>

      <div className="w-full">
        <Image src={footerSeparator} alt="waveSectionTextBottom" className="w-full h-auto" />
      </div>
    </section>
  );
}
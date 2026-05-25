
import waveSectionTextBottom from "@/public/img/wave-section-text-bottom.svg";
import Image from "next/image";

export default function Instructions() {
  return (
    <section className="relative w-full flex flex-col justify-center items-center bg-[#6e7f75] text-white text-center mb-60">
      <h1 className="text-5xl mt-10 md:mb-5 font-cormorant px-4">Instrucciones para disfrutar de nuestra boda</h1>
      <div className="max-w-200 text-xl flex flex-col gap-4 text-justify my-20 px-10">
        <p>Queremos que este día sea una celebración inolvidable y muy especial para todos, por eso les pedimos tomar en cuenta las siguientes recomendaciones:</p>
        <p>- Agradecemos asistir con vestimenta formal y una presentación adecuada para la ocasión. </p>
        <p>- Cada invitación cuenta con una cantidad específica de personas autorizadas. Les pedimos respetar el número indicado, ya que no será posible admitir invitados adicionales.</p>
        <p>- Deseamos compartir una noche llena de alegría, respeto y armonía, por lo que agradecemos mantener siempre una actitud cordial y evitar cualquier situación incómoda o conflicto con otros invitados.</p>
        <p>- Lo más importante para nosotros es disfrutar juntos este momento tan especial en un ambiente agradable y familiar.</p>
        <p>¡Gracias por ser parte de nuestra celebración y acompañarnos en este día tan importante!</p>
      </div>

      <div className="absolute -bottom-13 sm:-bottom-20 md:-bottom-30 lg:-bottom-40 xl:-bottom-50 2xl:-bottom-60 w-full">
        <Image src={waveSectionTextBottom} alt="waveSectionTextBottom" className="w-full h-auto" />
      </div>
    </section>
  );
}
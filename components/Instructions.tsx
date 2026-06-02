
import waveSectionTextBottom from "@/public/img/wave-section-text-bottom.svg";
import Image from "next/image";

type InstructionProp = {
  isNotGuest: boolean
}

export default function Instructions({ isNotGuest }: InstructionProp) {
  return (
    <section className="relative w-full flex flex-col justify-center items-center bg-[#6e7f75] text-white text-center mb-60">
      <h1 className="text-5xl mt-10 md:mb-5 font-cormorant px-4">Instrucciones para disfrutar de nuestra boda</h1>

      {isNotGuest ?
        <div className="max-w-200 text-xl flex flex-col gap-4 text-justify my-20 px-10">
          <p>Queremos que quienes nos acompañen de manera virtual también formen parte de este momento tan especial. Por ello, les pedimos tomar en cuenta las siguientes recomendaciones:</p>
          <p>- Les agradecemos conectarse unos minutos antes del inicio de la ceremonia para verificar que su conexión funcionen correctamente.</p>
          <p>- Al ingresar a la reunión, les pedimos mantener el micrófono silenciado para evitar interrupciones durante la transmisión.</p>
          <p>- Si desean activar su cámara, serán bienvenidos; sin embargo, les recomendamos hacerlo desde un lugar tranquilo y con una presentación adecuada para la ocasión.</p>
          <p>- Les agradecemos evitar compartir el enlace de acceso con personas no invitadas, para mantener la reunión organizada y segura.</p>
          <p>- Durante la ceremonia, les pedimos evitar interrupciones, ruidos o actividades que puedan distraer a los demás participantes.</p>
          <p>- En caso de experimentar problemas de conexión, pueden volver a ingresar utilizando el mismo enlace de acceso.</p>
          <p>- Lo más importante para nosotros es poder compartir este momento con ustedes, sin importar la distancia, y sentir su cariño y compañía durante esta celebración.</p>
          <p>¡Gracias por acompañarnos y ser parte de este día tan importante para nosotros!</p>
        </div>
        :
        <div className="max-w-200 text-xl flex flex-col gap-4 text-justify my-20 px-10">
          <p>Queremos que este día sea una celebración inolvidable y muy especial para todos, por eso les pedimos tomar en cuenta las siguientes recomendaciones:</p>
          <p>- Agradecemos asistir con vestimenta formal y una presentación adecuada para la ocasión. </p>
          <p>- Cada invitación cuenta con una cantidad específica de personas autorizadas. Les pedimos respetar el número indicado, ya que no será posible admitir invitados adicionales.</p>
          <p>- Deseamos compartir una noche llena de alegría, respeto y armonía, por lo que agradecemos mantener siempre una actitud cordial y evitar cualquier situación incómoda o conflicto con otros invitados.</p>
          <p>- Lo más importante para nosotros es disfrutar juntos este momento tan especial en un ambiente agradable y familiar.</p>
          <p>¡Gracias por ser parte de nuestra celebración y acompañarnos en este día tan importante!</p>
        </div>
      }

      <div className="absolute -bottom-13 sm:-bottom-20 md:-bottom-30 lg:-bottom-40 xl:-bottom-50 2xl:-bottom-60 w-full">
        <Image src={waveSectionTextBottom} alt="waveSectionTextBottom" className="w-full h-auto" />
      </div>
    </section>
  );
}
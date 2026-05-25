export default function EventSection() {
  return (
    <section className="bg-[#ede3d5] px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-4 uppercase tracking-[0.4rem] text-[#b08d57]">
          Evento
        </p>

        <h2 className="section-title mb-16">
          Celebra con nosotros
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-4xl bg-white p-10 shadow-sm">
            <h3 className="mb-4 text-3xl font-light">Ceremonia</h3>
            <p className="mb-2 text-gray-600">5:00 PM</p>
            <p className="text-gray-600">Parroquia San Miguel</p>
          </div>

          <div className="rounded-4xl bg-white p-10 shadow-sm">
            <h3 className="mb-4 text-3xl font-light">Recepción</h3>
            <p className="mb-2 text-gray-600">8:00 PM</p>
            <p className="text-gray-600">Salón Los Jardines</p>
          </div>
        </div>
      </div>
    </section>
  );
}
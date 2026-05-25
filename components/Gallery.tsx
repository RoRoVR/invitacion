export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop',
  ];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-cormorant font-bold text-5xl mb-14 text-center"> Galería</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-4xl"
            >
              <img
                src={image}
                alt="Gallery"
                className="h-125 w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default function Gallery() {
  const images = [
    'photos/gallery/img-1.png',
    'photos/gallery/img-2.jpeg',
    'photos/gallery/img-3.jpeg',
    'photos/gallery/img-4.png',
    'photos/gallery/img-5.png',
    'photos/gallery/img-6.jpeg',
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
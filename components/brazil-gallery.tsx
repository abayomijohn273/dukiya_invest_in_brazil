export default function BrazilGallery() {
  const images = [
    {
      src: "/christ-the-redeemer-statue-rio-de-janeiro-brazil-a.jpg",
      alt: "Christ the Redeemer, Rio de Janeiro",
    },
    {
      src: "/gallery_3.webp",
      alt: "São Paulo Skyline",
    },
    {
      src: "/copacabana-beach-rio-de-janeiro-brazil-aerial-view.jpg",
      alt: "Copacabana Beach, Rio de Janeiro",
    },
    {
      src: "/bras-lia-modern-architecture-oscar-niemeyer-buildi.jpg",
      alt: "Brasília Architecture",
    },
  ]

  return (
    <section className="w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square overflow-hidden h-[28rem] lg:h-[30rem] w-full">
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

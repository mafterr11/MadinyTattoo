import Image from "next/image";
import React from "react";

const images = [
  {
    title: "Poza tatuaje",
    path: "/gallery/tattoo1.webp",
  },
  {
    title: "Poza tatuaje",
    path: "/gallery/tattoo2.webp",
  },
  {
    title: "Poza tatuaje",
    path: "/gallery/tattoo3.webp",
  },
  {
    title: "Poza tatuaje",
    path: "/gallery/tattoo4.webp",
  },

  {
    title: "Poza tatuaje",
    path: "/gallery/tattoo5.webp",
  },
  {
    title: "Poza tatuaje",
    path: "/gallery/tattoo6.webp",
  },
  {
    title: "Poza tatuaje",
    path: "/gallery/tattoo7.webp",
  },
  {
    title: "Poza tatuaje",
    path: "/gallery/tattoo8.webp",
  },

  {
    title: "Poza tatuaje",
    path: "/gallery/tattoo9.webp",
  },
  {
    title: "Poza tatuaje",
    path: "/gallery/tattoo10.webp",
  },
  {
    title: "Poza tatuaje",
    path: "/gallery/tattoo11.webp",
  },
  {
    title: "Poza tatuaje",
    path: "/gallery/tattoo12.webp",
  },

  {
    title: "Poza tatuaje",
    path: "/gallery/tattoo13.webp",
  },
  {
    title: "Poza tatuaje",
    path: "/gallery/tattoo14.webp",
  },
  {
    title: "Poza tatuaje",
    path: "/gallery/tattoo15.webp",
  },
  {
    title: "Poza tatuaje",
    path: "/gallery/tattoo16.webp",
  },

  {
    title: "Poza tatuaje",
    path: "/gallery/tattoo17.webp",
  },
  {
    title: "Poza tatuaje",
    path: "/gallery/tattoo18.webp",
  },
  {
    title: "Poza tatuaje",
    path: "/gallery/tattoo19.webp",
  },
  {
    title: "Poza tatuaje",
    path: "/gallery/tattoo20.webp",
  },

  {
    title: "Poza tatuaje",
    path: "/gallery/tattoo21.webp",
  },
  {
    title: "Poza tatuaje",
    path: "/gallery/tattoo22.webp",
  },
  {
    title: "Poza tatuaje",
    path: "/gallery/tattoo23.webp",
  },
  {
    title: "Poza tatuaje",
    path: "/gallery/tattoo24.webp",
  },
];

const NewGallery = () => {
  return (
    <div className="custom-scrollbar grid max-md:h-[200vh] h-[100vh] max-xl:w-[95vw] grid-cols-1 gap-4 overflow-auto md:grid-cols-3 xl:min-w-[1240px]">
      {images.map((image, index) => (
        <div key={index} className="relative aspect-square">
          <Image src={image.path} fill alt={image.title} />
        </div>
      ))}
    </div>
  );
};

export default NewGallery;

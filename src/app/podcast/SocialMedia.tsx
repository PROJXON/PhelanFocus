"use client";
import Image from "next/image";

interface ListenOn {
  href: string;
  src: string;
  alt: string;
}

const listenOn: ListenOn[] = [
  {
    href: "https://www.tiktok.com/@the.phelan.focus",
    src: "/podcast/tiktok.png",
    alt: "TikTok logo",
  },
  {
    href: "https://www.youtube.com/@ThePhelanFocus",
    src: "/podcast/youtube.png",
    alt: "YouTube logo",
  },
  {
    href: "https://open.spotify.com/show/1hsQ9TSkvmuzkbnrE27ho7?si=95e611acecfa4385",
    src: "/podcast/spotify.png",
    alt: "Spotify logo",
  },
  {
    href: "https://www.instagram.com/The.Phelan.Focus/",
    src: "/podcast/Instagram.png",
    alt: "Instagram logo",
  },
];

const SocialCarousel = () => {
  return (
    <section
      className="z-10 relative w-full h-[50vh] flex flex-col items-center justify-center text-white"
      style={{ backgroundColor: "#0b1727" }}
    >
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center">
        Listen wherever you find your favorite podcasts
      </h2>

      {/* 4-Item Carousel Layout */}
      <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
        {listenOn.map((place, i) => (
          <a
            key={i}
            href={place.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110 hover:shadow-2xl rounded-lg"
          >
            <Image
              src={place.src}
              alt={place.alt}
              width={200}
              height={60}
              className="mx-auto"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialCarousel;

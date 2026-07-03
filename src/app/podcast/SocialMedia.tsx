"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface ListenOn {
  href: string;
  src: string;
  alt: string;
}

const listenOn: ListenOn[] = [
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
      className="z-10 relative w-full py-20 px-6 flex flex-col items-center justify-center text-white"
      style={{ backgroundColor: "#0b1727" }}
    >
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center">
        Listen wherever you find your favorite podcasts
      </h2>

      {/* Platform Layout */}
      <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
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
        <a
          href="https://www.linkedin.com/company/the-phelan-focus/?viewAsMember=true"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-110 flex items-center justify-center gap-3 text-white"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-5xl" />
          <span className="text-xl font-semibold">LinkedIn</span>
        </a>
      </div>
    </section>
  );
};

export default SocialCarousel;

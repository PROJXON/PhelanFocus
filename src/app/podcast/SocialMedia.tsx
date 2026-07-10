"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faSpotify,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const platforms: { href: string; label: string; icon: IconDefinition; color: string }[] = [
  {
    href: "https://www.youtube.com/@ThePhelanFocus",
    label: "YouTube",
    icon: faYoutube,
    color: "#FF0000",
  },
  {
    href: "https://open.spotify.com/show/1hsQ9TSkvmuzkbnrE27ho7?si=95e611acecfa4385",
    label: "Spotify",
    icon: faSpotify,
    color: "#1DB954",
  },
  {
    href: "https://www.instagram.com/The.Phelan.Focus/",
    label: "Instagram",
    icon: faInstagram,
    color: "#E1306C",
  },
  {
    href: "https://www.linkedin.com/company/the-phelan-focus/?viewAsMember=true",
    label: "LinkedIn",
    icon: faLinkedin,
    color: "#0A66C2",
  },
];

const SocialCarousel = () => {
  return (
    <section
      className="z-10 relative w-full py-20 px-6 flex flex-col items-center text-white"
      style={{ backgroundColor: "#0b1727" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Listen wherever you find your favorite podcasts
      </h2>

      <div className="w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-8">
        {platforms.map((p) => (
          <a
            key={p.label}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={p.label}
            className="group flex flex-col items-center gap-3"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white/10">
              <FontAwesomeIcon icon={p.icon} className="text-3xl" style={{ color: p.color }} />
            </span>
            <span className="text-sm font-medium text-white/80 group-hover:text-white">
              {p.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialCarousel;

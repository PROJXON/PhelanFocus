import React from "react";

const FeaturedPodcast = ({ embedSrc }) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="mb-4">
        <iframe
          title="Podcast Player"
          src={embedSrc}
          allowtransparency="true"
          style={{ border: "none", minWidth: "100%", height: "300px" }}
          loading="lazy"
          allowFullScreen
          width="100%"
          height="300"
        />
      </div>
    </div>
  );
};

export default function PodcastVideo() {
  const podbeanEmbedSrc =
    "https://www.podbean.com/player-v2/?from=embed&i=v3h3u-18f2618-pb&square=1&share=1&download=1&fonts=Verdana&skin=1b1b1b&font-color=auto&rtl=0&logo_link=podcast_page&btn-skin=ff6d00&size=300";

  return (
    <FeaturedPodcast
      embedSrc={podbeanEmbedSrc}
    />
  );
}

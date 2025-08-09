import React from "react";

const TPFEpisode = ({ embedSrc }) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="mb-4">
        <iframe
          title="Podcast Player"
          src={embedSrc}
          style={{ border: "none", borderRadius: "12px", minWidth: "100%", height: "351px" }}
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          width="624"
          height="351"
          data-testid="embed-iframe"
        />
      </div>
    </div>
  );
};

export default function FirstEpisode() {
  const spotifyEmbedSrc =
    "https://open.spotify.com/embed/episode/0RFqaTngo8JSXrVBlhIGaV/video?utm_source=generator&t=0";

  return (
    <TPFEpisode
      embedSrc={spotifyEmbedSrc}
    />
  );
}

import React from 'react';

export default function FeaturedPodcast({
  embedSrc,
  allow,
  width,
  height,
  dataTestid,
}: {
  embedSrc: URL;
  allow?: string;
  width: number | `${number}%`;
  height: number | `${number}%`;
  dataTestid?: string;
}) {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="mb-4">
        <iframe
          title="Podcast Player"
          src={embedSrc.toString()}
          style={{ border: 'none', minWidth: '100%' }}
          loading="lazy"
          allow={allow || undefined}
          allowFullScreen
          width={width}
          height={height}
          data-testid={dataTestid || undefined}
        />
      </div>
    </div>
  );
}

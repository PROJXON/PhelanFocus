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
  const numericWidth = typeof width === 'number' ? width : undefined;
  const numericHeight = typeof height === 'number' ? height : undefined;
  const aspectRatio = numericWidth && numericHeight ? `${numericWidth} / ${numericHeight}` : undefined;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="mb-4">
        <iframe
          title="Podcast Player"
          src={embedSrc.toString()}
          style={{ border: 'none', width: '100%', height: numericHeight ?? height, aspectRatio }}
          loading="lazy"
          allow={allow || undefined}
          allowFullScreen
          data-testid={dataTestid || undefined}
        />
      </div>
    </div>
  );
}

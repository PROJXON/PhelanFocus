import { ReactNode } from 'react';

export function EmailTemplate({
  heading,
  paragraphs,
  lastMarginTop,
}: {
  heading: string;
  paragraphs: ReactNode[];
  lastMarginTop: boolean;
}) {
  return (
    <div className="font-[Arial, sans-serif] p-[20px] border border-solid border-[#ddd] rounded-[8px] max-w-[500px]">
      <h1 className="text-[#333]">{heading},</h1>
      {paragraphs.map((p, i) => (
        <p
          key={i}
          className={`text-[16px] text-[#555]${lastMarginTop && i === paragraphs.length - 1 ? 'mt-[10px]' : ''}`}
        >
          {p}
        </p>
      ))}
    </div>
  );
}

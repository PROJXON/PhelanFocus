"use client";
import Image from "next/image";

const PodcastHero = () => {
  return (
    <div className="w-full bg-[#f7f5f0] py-20 flex flex-col items-center justify-center text-center">
      <Image
        src="/podcast/phelanfocus.png"
        alt="Phelan Focus logo"
        width={360}
        height={360}
        priority
        className="mb-2"
      />
    </div>
  );
};

export default PodcastHero;

'use client';
import Image from 'next/image';
import { FaSpotify, FaPlay, FaBackward, FaForward, FaRandom, FaRedo } from 'react-icons/fa';

const SpotifyPhoneMockup = () => {
  return (
    <div className="relative w-[260px] h-[540px] rounded-[2.5rem] border-[10px] border-black bg-black shadow-2xl overflow-hidden">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-20" />

      {/* Screen */}
      <div className="w-full h-full bg-[#121212] flex flex-col items-center px-6 pt-14 pb-8">
        <div className="flex items-center gap-2 text-white/70 text-xs font-semibold tracking-wide mb-8">
          <FaSpotify className="text-[#1DB954] text-base" />
          PLAYING FROM PODCAST
        </div>

        <div className="w-44 h-44 rounded-xl overflow-hidden shadow-lg mb-8">
          <Image
            src="/podcast/cover-art.png"
            alt="The Phelan Focus podcast cover art"
            width={176}
            height={176}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full text-left mb-6">
          <p className="text-white font-bold text-base leading-snug line-clamp-2">
            Agile Unfiltered: Why Frameworks Fail &amp; Certifications Don&apos;t Fix Broken Culture
          </p>
          <p className="text-white/60 text-sm mt-1">The Phelan Focus</p>
        </div>

        <div className="w-full mb-4">
          <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-white rounded-full" />
          </div>
          <div className="flex justify-between text-[10px] text-white/50 mt-1">
            <span>19:23</span>
            <span>57:00</span>
          </div>
        </div>

        <div className="w-full flex items-center justify-between text-white/80">
          <FaRandom className="text-sm" />
          <FaBackward className="text-lg" />
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <FaPlay className="text-black text-base ml-0.5" />
          </div>
          <FaForward className="text-lg" />
          <FaRedo className="text-sm" />
        </div>
      </div>
    </div>
  );
};

export default SpotifyPhoneMockup;

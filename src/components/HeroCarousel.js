// components/HeroCarousel.js
export const HeroCarousel = () => (
  <section className="">
    <div className="text-[calc(6vw+.11vh)] leading-none font-bold tracking-widest text-white top-[calc(21vw)] left-[calc(8vw)] absolute max-w-full sm:text-[calc(4vw+.1vh)]">
      <h1 className="border-l-[3vw] border-cyan-500 sm:border-l-[2vw]">PHELAN</h1>
      <h1 className="border-l-[3vw] border-neutral-800 sm:border-l-[2vw]">FOCUS</h1>
    </div>

    <div className="sm:min-h-[66vw] h-[66vw] overflow-hidden max-h-[600px] sm:max-h-[400px]">
      <video autoPlay loop muted playsInline className="w-full object-cover -mt-[12vw] sm:-mt-[8vw]">
        <source src="/PhelanFocus/herobanner.mp4" type="video/mp4" />
      </video>
    </div>
  </section>



  );
  
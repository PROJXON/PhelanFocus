// components/HeroCarousel.js
export const HeroCarousel = () => (
  <section className="">
      <div className="text-[calc(6vw+.11vh)] leading-none font-bold tracking-widest text-white top-[calc(8vw)] left-[calc(8vw)] absolute">
        <h1 className="border-l-[3vw] border-cyan-800">PHELAN</h1>
        <h1 className="border-l-[3vw] border-cyan-800">FOCUS</h1>
      </div>
    <div className="min-h-[66vh] h-[66vh] overflow-hidden">
      <video autoPlay loop muted playsinline className="w-full object-cover -mt-[12vh]">
        <source src="/herobanner.mp4" type="video/mp4" />
      </video>
    </div>
  </section>

  );
  
// components/HeroCarousel.js
export const HeroCarousel = () => (
  <section className="">
    <div className="text-[calc(6vw+.11vh)] leading-none font-bold tracking-widest text-white top-[calc(21vw)] left-[calc(8vw)] absolute max-w-full sm:text-[calc(4vw+.1vh)]">
      <h1 className="border-l-[3vw] border-cyan-500 sm:border-l-[2vw]">PHELAN</h1>
      <h1 className="border-l-[3vw] border-neutral-800 sm:border-l-[2vw]">FOCUS</h1>
    </div>

    <div className="h-auto">
      <video autoPlay loop muted playsInline className="w-full object-cover -mt-[12vw] sm:-mt-[8vw]">
        <source src="/PhelanFocus/herobanner.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="hero-container flex overflow-auto sm:h-[33vw] h-[333px]  sm:absolute sm:w-[55vw] bg-sky-50/75 top-[calc(6vw)] right-[calc(8vw)] rounded-lg shadow-lg shadow-sky-500/50 p-8 mx-4 my-4">
      Hello World!<br></br> This is test content<br></br>Hello World!<br></br> This is test content<br></br>
      Hello World!<br></br> This is test content<br></br>Hello World!<br></br> This is test content<br></br>
      Hello World!<br></br> This is test content<br></br>Hello World!<br></br> This is test content<br></br>
      Hello World!<br></br> This is test content<br></br>Hello World!<br></br> This is test content<br></br>
    </div>
  </section>



  );
  
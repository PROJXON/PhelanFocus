// components/HeroCarousel.js
export const HeroCarousel = () => (
<section className="relative">
  <div className="relative w-full h-auto">
    <video autoPlay loop muted playsInline className="w-full object-cover h-[33vw] min-h-[333px] opacity-50">
      <source src="/PhelanFocus/herobanner.mp4" type="video/mp4" />
    </video>

    {/* Floating Div using the Golden Ratio and Responsive Width */}
    <div className="absolute top-1/2 left-[5%] -translate-y-1/2 bg-black/50 text-white p-6 rounded-lg 
                    w-[90%] sm:w-[38.2%]">
      <h2 className="text-2xl font-bold">Golden Ratio Overlay</h2>
      <p className="text-sm">This box follows the golden ratio on larger screens and scales to 90% on smaller screens.</p>
    </div>
  </div>
</section>
  );
  
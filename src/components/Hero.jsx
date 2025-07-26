import Image from "next/image";

const Hero = ({ sectionClass, bgImage, header, alt = "Hero background" }) => {
  return (
    <section className={`${sectionClass} relative overflow-hidden`}>
      <Image
        src={bgImage}
        alt={alt}
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="overlay absolute inset-0 bg-black/50 z-10"></div>
      <div className="hero-content relative z-20">
        <h1>{header}</h1>
      </div>
    </section>
  );
}

export default Hero;
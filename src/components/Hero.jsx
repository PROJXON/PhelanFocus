import Image from "next/image";

const Hero = ({ sectionClass, bgImage, header, alt = "Hero background" }) => {
  return (
    <section className={`${sectionClass} relative overflow-hidden bg-gray-200`}>
      <Image
        src={bgImage}
        alt={alt}
        fill
        priority
        quality={75}
        sizes="100vw"
        className="object-cover object-center"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />
      <div className="overlay absolute inset-0 bg-black/40 z-10"></div>
      <div className="hero-content relative z-20">
        <h1>{header}</h1>
      </div>
    </section>
  );
}

export default Hero;
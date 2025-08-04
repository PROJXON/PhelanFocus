import Image from "next/image";

const Hero = ({ bgImage, header, alt = "Hero background" }) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-[50vh] z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <Image
          src={bgImage}
          alt={alt}
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/..."
          style={{ zIndex: 0, position: 'absolute' }}
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <h1 className="relative z-20 text-white text-4xl text-center px-4 max-w-4xl">
          {header}
        </h1>
      </div>
      <div style={{ height: '50vh' }} />
    </>
  );
};

export default Hero;

const Hero = ({ sectionClass, bgImage, header }) => {
  return (
    <section className={sectionClass} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>{header}</h1>
      </div>
    </section>
  );
}

export default Hero;
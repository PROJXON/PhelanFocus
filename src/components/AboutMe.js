// components/AboutMe.js
export const AboutMe = () => (
    <section className="flex flex-wrap gap-8">
      <div className="w-full sm:w-1/2">
        <img src="/path/to/image.jpg" alt="About Me" className="w-full h-auto rounded-lg" />
      </div>
      <div className="w-full sm:w-1/2">
        <h3 className="text-2xl">About Me</h3>
        <p>Some text about me...</p>
      </div>
    </section>
  );
  
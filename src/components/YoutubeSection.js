// components/YouTubeSection.js
export const YouTubeSection = () => (
    <section className="bg-gray-200 p-8 rounded-lg">
      <h2 className="text-3xl text-center">YouTube Video</h2>
      <div className="flex justify-center">
        <iframe className="rounded-xl border-8 border-offset-4 border-indigo-500 outline-4 outline-purple-500 bg-cyan-500 shadow-lg shadow-stone-500/50" width="560" height="315" src="https://www.youtube.com/embed/gIryBPfaPAg?si=COvX5eg8kEseqgF2" allowFullScreen></iframe>
      </div>
      <p className="text-center">Some text below the video...</p>
    </section>
  );

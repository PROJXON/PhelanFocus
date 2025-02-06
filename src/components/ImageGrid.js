// components/ImageGrid.js
export const ImageGrid = () => (
<section className="h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
  {Array.from({ length: 9 }).map((_, idx) => (
    <div
      key={idx}
      className={`w-full p-4 text-center bg-gray-100 rounded-lg 
        ${idx % 2 === 0 ? 'mt-8' : ''}`} // Apply margin-top to stagger
      style={{ minWidth: '6rem' }}
    >
      <img src="/path/to/icon.jpg" alt="Icon" className="w-9 h-16 mx-auto" />
      <p>Text below icon</p>
    </div>
  ))}
</section>


  );
  
  
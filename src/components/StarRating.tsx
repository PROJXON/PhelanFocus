import { useEffect, useState } from 'react';

const StarRating = ({ rating }: { rating: number }) => {
  const [grayColor, setGrayColor] = useState('#d1d5db');

  useEffect(() => {
    const matchDark = window.matchMedia('(prefers-color-scheme: dark)');
    const updateColor = () => setGrayColor(matchDark.matches ? '#6b7280' : '#d1d5db');
    updateColor();
    matchDark.addEventListener('change', updateColor);
    return () => matchDark.removeEventListener('change', updateColor);
  }, []);

  const percentage = (rating / 5) * 100;
  const gradient = `linear-gradient(90deg, #fac115 ${percentage}%, ${grayColor} ${percentage}%)`;

  return (
    <div className="flex align-center">
      <span
        className="w-fit bg-clip-text text-transparent text-2xl cursor-default"
        style={{ backgroundImage: gradient }}
      >
        ★★★★★
      </span>
      <span className="ml-1 text-gray-600 dark:text-gray-300 text-sm h-fit my-auto">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

export default StarRating;

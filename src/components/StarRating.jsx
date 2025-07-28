import { useEffect, useState } from "react";

const StarRating = ({ rating }) => {
  const [grayColor, setGrayColor] = useState("#d1d5db");

  useEffect(() => {
    const matchDark = window.matchMedia("(prefers-color-scheme: dark)");
    const updateColor = () => setGrayColor(matchDark.matches ? "#6b7280" : "#d1d5db");
    updateColor();
    matchDark.addEventListener("change", updateColor);
    return () => matchDark.removeEventListener("change", updateColor)
  }, []);

  const percentage = (rating / 5) * 100;
  const gradient = `linear-gradient(90deg, #fac115 ${percentage}%, ${grayColor} ${percentage}%)`;

  return (
    <span className="w-fit bg-clip-text text-transparent text-xl" style={{ backgroundImage: gradient }}>
      ★★★★★
    </span>
  );
}

export default StarRating;
"use client";
import { useState, useEffect } from "react";
import { fetchMenuLinks } from "../services/fetchMenuLinks"; // Adjust the path as needed

export const Footer = () => {
  const [menuLinks, setMenuLinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const links = await fetchMenuLinks();
      console.log(links); // Log the fetched data to debug
      setMenuLinks(links);
    };

    fetchData();
  }, []);

  return (
    <footer className="flex flex-wrap gap-8 bg-gray-800 text-white p-8">


      <div className="flex-1 justify-start mt-8 flex justify-center space-x-4">
        <a href="#">Icon 1</a>
        <a href="#">Icon 2</a>
        <a href="#">Icon 3</a>
        <a href="#">Icon 4</a>
      </div>
      <div className="flex-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
        {/* Check if menuLinks exists and is an array */}
        {menuLinks && menuLinks.length > 0 ? (
          menuLinks.map((menu, index) => (
            <div key={index} className="flex flex-col">
              <h4 className="font-semibold mb-2">{menu.name}</h4>
              <div className="space-y-2 max-h-[250px] overflow-y-auto">
                {menu.submenus?.map((submenu, idx) => (
                  <a
                    key={idx}
                    href={submenu.href}
                    className="block text-sm hover:bg-gray-600 p-2"
                  >
                    {submenu.name}
                  </a>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No menus available</p> // Fallback message
        )}
      </div>
    </footer>
  );
};

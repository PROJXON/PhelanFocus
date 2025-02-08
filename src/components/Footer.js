"use client";
import { useState, useEffect } from "react";
import { fetchMenuLinks } from "../services/fetchMenuLinks"; // Adjust the path as needed

export const Footer = () => {
  const [menuLinks, setMenuLinks] = useState([]);
  const [sortedColumns, setSortedColumns] = useState([]);

  // Fetch the menu data
  useEffect(() => {
    const fetchData = async () => {
      const links = await fetchMenuLinks();
      console.log(links); // Log the fetched data to debug
      setMenuLinks(links);
    };

    fetchData();
  }, []);

  // Function to split the menu links into columns (2 items per column)
  const chunkMenuLinks = (links, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < links.length; i += chunkSize) {
      chunks.push(links.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Function to calculate the total number of items in each column (menu + submenu items)
  const calculateColumnItems = (columns) => {
    return columns.map((column) => {
      const totalItems = column.reduce((acc, menu) => {
        // Count menu items and submenu items
        const submenuCount = menu.submenus ? menu.submenus.length : 0;
        return acc + 1 + submenuCount; // Add 1 for the menu item itself and the number of submenus
      }, 0);
      return { column, totalItems };
    });
  };

  // UseEffect to handle column sorting after menu links are set
  useEffect(() => {
    if (menuLinks.length > 0) {
      // Chunk the menu links into columns of 2 items
      const columns = chunkMenuLinks(menuLinks, 2);
      
      // Calculate the total number of items per column and sort by the smallest
      const columnsWithItemCount = calculateColumnItems(columns);
      const sortedColumns = columnsWithItemCount
        .sort((a, b) => a.totalItems - b.totalItems) // Sort by total items (smallest to largest)
        .map((col) => col.column); // Extract the sorted columns

      setSortedColumns(sortedColumns);
    }
  }, [menuLinks]);

  return (
    <footer className="flex flex-wrap gap-8 bg-white text-gray p-8">
      {/* Social Icons Section */}
      <div className="flex-1 justify-start mt-8 flex justify-center space-x-4">
        <a href="#">Icon 1</a>
        <a href="#">Icon 2</a>
        <a href="#">Icon 3</a>
        <a href="#">Icon 4</a>
      </div>

      {/* Menu Links Section */}
      <div className="flex-3 flex gap-8 border-l-1 border-gray">
        {/* Loop through sorted columns */}
        {sortedColumns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col space-y-4">
            {column.map((menu, menuIndex) => (
              <div key={menuIndex} className="flex flex-col">
                <h4 className="font-semibold mb-2">{menu.name}</h4>

                {/* Render submenus if they exist */}
                {menu.submenus?.length > 0 && (
                  <div className="mt-2 space-y-2 max-h-[250px] overflow-y-auto">
                    <ul className="space-y-2">
                      {menu.submenus.map((submenu, submenuIndex) => (
                        <li key={submenuIndex}>
                          <a
                            href={submenu.href}
                            className="block text-sm hover:bg-gray-600 p-2"
                          >
                            {submenu.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

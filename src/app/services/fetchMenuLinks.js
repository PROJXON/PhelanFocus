export const fetchMenuLinks = async () => {
    // Simulating data structure from a database or API
    return [
      {
        name: "Menu 1",
        href: "/menu1",
        submenus: []
      },
      {
        name: "Menu 2",
        href: "/menu2",
        submenus: [
          { name: "Submenu 2.1", href: "/submenu2-1" },
          { name: "Submenu 2.2", href: "/submenu2-2" },
        ]
      },
      {
        name: "Menu 2",
        href: "/menu2",
        submenus: [
          { name: "Submenu 2.1", href: "/submenu2-1" },
          { name: "Submenu 2.2", href: "/submenu2-2" },
        ]
      },
      {
        name: "Menu 2",
        href: "/menu2",
        submenus: [
          { name: "Submenu 2.1", href: "/submenu2-1" },
          { name: "Submenu 2.2", href: "/submenu2-2" },
        ]
      },
      {
        name: "Menu 2",
        href: "/menu2",
        submenus: [
          { name: "Submenu 2.1", href: "/submenu2-1" },
          { name: "Submenu 2.2", href: "/submenu2-2" },
        ]
      },
      // Add more menus here
    ];
  };
  
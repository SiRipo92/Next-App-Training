import React from 'react';
import SocialLinks from '@/templates/Header/socialLinks.jsx';
import MainMenu from '@/templates/Header/mainMenu.jsx'
import '@/styles/global.css'


const Header = () => {
  const socialLinks = SocialLinks.getLinks();
  const menuItems = MainMenu.getMenuItems(); 

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Social Navigation Bar */}
      <div className="bg-social-bg h-20 flex items-center justify-end pd-10">
        <nav className="flex space-x-4 pr-20">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              aria-label={link.ariaLabel}
              className="text-social-icon"
              target="_blank"
              rel="noopener noreferrer"
              fill="currentColor"
            >
              {link.Icon && <link.Icon className="h-8 w-8" title={link.alt} />}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Navigation Bar */}
      {/* Main Navigation Bar */}
      <nav className="bg-white shadow-md w-full h-20 flex items-center justify-center">
        <ul className="flex space-x-6">
          {menuItems.map((menuItem) => (
            <li key={menuItem.id} className="relative group">
              {/* Main Menu Item */}
              <a
                href={menuItem.href}
                aria-label={menuItem.ariaLabel}
                className="font-bold px-4 py-2 text-gray-700 hover:text-gray-900"
              >
                {menuItem.name}
              </a>

              {/* Dropdown Menu (if submenu exists) */}
              {menuItem.submenu && menuItem.submenu.length > 0 && (
                <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-2 p-2 rounded-md w-48">
                  {menuItem.submenu.map((subItem) => (
                    <li key={subItem.id}>
                      <a
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
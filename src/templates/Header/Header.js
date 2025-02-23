import SocialLinks from '@/templates/Header/socialLinks.jsx';

const Header = () => {
  const socialLinks = SocialLinks.getLinks();

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
      <nav className="bg-white shadow-md w-full h-20 flex items-center justify-center">
        <ul className="flex space-x-1">
          <li className="font-bold flex justify-around ">
            <button className="relative btn-primary navMainMenu">
              About Me
              <ul className="absolute hidden bg-white shadow-md mt-2 p-2 rounded-md">
                <li>
                  <a href="/my-background" className="block px-4 py-2 hover:bg-gray-100">
                    Example Dropdown Link
                  </a>
                </li>
                <li>
                  <a href="/my-hobbies" className="block px-4 py-2 hover:bg-gray-100">
                    My Hobbies
                  </a>
                </li>
              </ul>
            </button>
            <button className="relative">
              Training
              <ul className="absolute hidden bg-white shadow-md mt-2 p-2 rounded-md">
                <li>
                  <a href="/training" className="block px-4 py-2 hover:bg-gray-100">
                    Training
                  </a>
                </li>
                <li>
                  <a href="/training-locations" className="block px-4 py-2 hover:bg-gray-100">
                    Training Locations
                  </a>
                </li>
              </ul>
            </button>

          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
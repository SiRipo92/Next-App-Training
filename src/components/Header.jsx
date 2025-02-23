import socialLinks from './socialLinks';
import data from '@/data/header.json';
import Link from 'next/link';


const Header = () => {
    const links = socialLinks.getLinks();
    const menuLinks = data.menuLinks;

    return (
        <header className="fixed top-0 w-full z-50">
            {/* Social Navigation Bar */}
            <div className="bg-social-bg h-20 flex items-center justify-end pr-4">
                <nav className="flex space-x-4 pr-100">
                    <ul className="flex-row justify-end mr-4">
                        <li className="flex flex-row space-x-3 ">
                        {links.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                aria-label={link.ariaLabel}
                                no-target-blank="true"
                                className="text-social-icon"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                    <link.Icon
                                        className="h-8 w-8 fill-gray-400 hover:fill-gray-200 transition-colors duration-200 cursor-pointer"
                                        alt={link.alt}
                                    />
                            </a>
                        ))}
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Main Navigation Bar */}
            <nav className="bg-white shadow-md h-20 flex items-center justify-center">
                <ul className="flex space-x-8">
                    {menuLinks.map((menuLink) => (
                        <li key={menuLink.id}>
                            <Link href={menuLink.href} aria-label={menuLink.ariaLabel}>
                                {menuLink.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <button className="relative">
                            About Me
                            <ul className="absolute hidden bg-white shadow-md mt-2 p-2 rounded-md">
                                <li>
                                    <a href="/my-background" className="block px-4 py-2 hover:bg-gray-100">
                                        My Background
                                    </a>
                                </li>
                                <li>
                                    <a href="/my-hobbies" className="block px-4 py-2 hover:bg-gray-100">
                                        My Hobbies
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
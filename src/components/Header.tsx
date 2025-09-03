import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navigationItems = [
  { label: 'Education', href: '../Education' },
  { label: 'Media', href: '../GalleryMain' },
  { 
    label: 'Community', 
    href: '../Community',
    dropdown: [
      { label: 'Support Services', href: '../Community#SupportServices' },
      { label: 'Child Development Center', href: '../Community#ChildDevelopment' },
    ]
  },
  { label: 'Opportunities', href: '../JobOpportunity' },
  { label: 'Contacts', href: '../Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDropdownClick = (href: string) => {
    if (href.includes("#")) {
      const sectionId = href.split("#")[1]; // Pega a parte após o #
      
      if (window.location.pathname === "/Community") {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // Salva o id da section no localStorage e navega para Community
        localStorage.setItem("scrollToSection", sectionId);
        window.location.href = "/Community";
      }
    } else {
      window.location.href = href;
    }
  };

  // Add this helper function to check if link is active
  const isLinkActive = (href: string) => {
    const pathWithoutSlash = router.pathname.replace('/', '');
    const hrefWithoutSlash = href.replace('/', '').replace('..', '');
    return pathWithoutSlash === hrefWithoutSlash;
  };

  return (
    <div>
    <header className="absolute w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Updated padding */}
        <div className="flex justify-between items-start">
          {/* Logo section - Adjusted margin-top */}
          <div className="flex-shrink-0 lg:ml-0 md:block w-full lg:w-auto lg:-mt-4">
            <Link href="/" passHref>
              <div className="flex justify-center lg:justify-start">
                <Image
                  src={isMobile ? "/LogoASA.webp" : "/fundo.png"}
                  className="h-16 w-auto sm:h-20 md:h-28 lg:h-44 xl:h-48 transition-all duration-300"
                  alt="Logo"
                  width={520}
                  height={520}
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Adjusted margin-top to align with logo */}
          <div className="bg-gradient-to-r from-[#0071c6] to-[#004d8a] shadow-md hidden lg:flex items-center py-1.5 px-4 rounded-full hover:shadow-lg mt-10">
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center gap-0.5">
              {navigationItems.map((item, index) => (
                <li key={index} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => {
                        setHoveredIndex(index);
                        setShowDropdown(true);
                      }}
                      onMouseLeave={() => {
                        setHoveredIndex(null);
                        setShowDropdown(false);
                      }}
                    >
                      <a
                        href={item.href}
                        className={`px-3.5 py-1.5 text-[14px] font-normal font-poppins transition-colors duration-200 flex items-center
                          ${
                            isLinkActive(item.href)
                              ? 'text-[#ffac1e]'
                              : hoveredIndex === index
                              ? 'text-[#ffac1e]'
                              : 'text-white hover:text-[#ffac1e]'
                          }`}
                      >
                        {item.label}
                        <ChevronDown 
                          className={`ml-1 w-3.5 h-3.5 transition-transform duration-200
                            ${hoveredIndex === index ? 'rotate-180' : 'rotate-0'}
                          `}
                        />
                      </a>
                      {showDropdown && hoveredIndex === index && (
                        <div className="absolute top-full left-0 mt-1 w-64 bg-[#ff9f00] rounded-lg shadow-lg z-50">
                          <div className="py-2">
                            <div className="px-4 py-2 text-sm font-semibold text-white bg-[#ff9f00] rounded-t-lg">
                              OUR COMMUNITY
                            </div>
                            {item.dropdown.map((dropdownItem, dropdownIndex) => (
                              <a
                                key={dropdownIndex}
                                href={dropdownItem.href}
                                onClick={e => {
                                  e.preventDefault();
                                  handleDropdownClick(dropdownItem.href);
                                  setShowDropdown(false);
                                }}
                                className="block px-4 py-2 text-sm text-white hover:bg-[#ffbb47] transition-colors duration-200"
                              >
                                {dropdownItem.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className={`px-3.5 py-1.5 text-[14px] font-normal font-poppins transition-colors duration-200
                        ${
                          isLinkActive(item.href)
                            ? 'text-[#ffac1e]'
                            : hoveredIndex === index
                            ? 'text-[#ffac1e]'
                            : 'text-white hover:text-[#ffac1e]'
                        }`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <button
              onClick={() => window.open("https://asangola.openapply.com/", "_blank")}
              className="ml-3.5 px-3.5 py-1.5 text-[14px] font-medium rounded-full text-white bg-[#ff9f00] hover:bg-[#ffbb47] transition-colors duration-200"
            >
              Admissions
            </button>
          </nav>
          </div>

          {/* Tablet Navigation - Adjusted margin-top */}
          <div className="bg-[#0071c6]/80 shadow-md hidden md:flex lg:hidden items-center py-2 px-4 rounded-lg mt-12">
          <nav className="flex items-center space-x-1">
            <ul className="flex space-x-1">
              {navigationItems.map((item, index) => (
                <li key={index} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => {
                        setHoveredIndex(index);
                        setShowDropdown(true);
                      }}
                      onMouseLeave={() => {
                        setHoveredIndex(null);
                        setShowDropdown(false);
                      }}
                    >
                      <a
                        href={item.href}
                        className={`px-2 py-1 text-xs font-normal font-poppins transition-colors duration-200 flex items-center
                          ${
                            isLinkActive(item.href)
                              ? 'text-[#ffac1e]'
                              : hoveredIndex === index
                              ? 'text-[#ffac1e]'
                              : 'text-white-700 hover:text-[#ffac1e]'
                          }`}
                      >
                        {item.label}
                        {item.dropdown && (
                          <ChevronDown 
                            className={`ml-1 w-3 h-3 transition-transform duration-200
                              ${hoveredIndex === index ? 'rotate-180' : 'rotate-0'}
                            `}
                          />
                        )}
                      </a>
                      {showDropdown && hoveredIndex === index && (
                        <div className="absolute top-full left-0 mt-1 w-56 bg-[#ff9f00] rounded-lg shadow-lg z-50">
                          <div className="py-2">
                            <div className="px-4 py-2 text-xs font-semibold text-white bg-[#ff9f00] rounded-t-lg">
                              OUR COMMUNITY
                            </div>
                            {item.dropdown.map((dropdownItem, dropdownIndex) => (
                              <a
                                key={dropdownIndex}
                                href={dropdownItem.href}
                                onClick={e => {
                                  e.preventDefault();
                                  handleDropdownClick(dropdownItem.href);
                                  setShowDropdown(false);
                                }}
                                className="block px-4 py-2 text-xs text-white hover:bg-[#ffbb47] transition-colors duration-200"
                              >
                                {dropdownItem.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className={`px-2 py-1 text-xs font-normal font-poppins transition-colors duration-200
                        ${
                          isLinkActive(item.href)
                            ? 'text-[#ffac1e]'
                            : hoveredIndex === index
                            ? 'text-[#ffac1e]'
                            : 'text-white-700 hover:text-[#ffac1e]'
                        }`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <a
              href="https://asangola.openapply.com/"
              className="ml-2 inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded-full text-white bg-[#ff9f00] hover:bg-[#ffbb47] transition-colors duration-200"
            >
              Apply
            </a>
          </nav>
          </div>

          {/* Mobile menu button - Updated positioning */}
          <div className="md:hidden absolute right-6 top-8">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-1.5 sm:p-2 rounded-md text-white hover:text-[#ffac1e] hover:bg-[#0071c6]/80 focus:outline-none"
              style={{ background: isOpen ? 'rgba(0,113,198,0.8)' : 'transparent' }}
            >
              {isOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Updated margins */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-20 mx-4`}>
        <div className="mx-3 sm:mx-4 px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0071c6]/80 rounded-lg shadow-lg">
          {navigationItems.map((item, index) => (
            <div key={index}>
              <a
                href={item.href}
                className={`block px-3 py-2 rounded-md text-sm sm:text-base font-medium flex items-center justify-between
                  ${
                    isLinkActive(item.href)
                      ? 'text-[#ffac1e] bg-[#0071c6]/90'
                      : 'text-white hover:text-[#ffac1e] hover:bg-[#0071c6]/90'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                {item.dropdown && (
                  <ChevronDown className="w-4 h-4" />
                )}
              </a>
              {item.dropdown && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.dropdown.map((dropdownItem, dropdownIndex) => (
                    <a
                      key={dropdownIndex}
                      href={dropdownItem.href}
                      className="block px-3 py-1 text-xs sm:text-sm text-gray-300 hover:text-[#ffac1e]"
                      onClick={e => {
                        e.preventDefault();
                        setIsOpen(false);
                        handleDropdownClick(dropdownItem.href);
                      }}
                    >
                      • {dropdownItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="https://asangola.openapply.com/"
            className="block px-3 py-2 text-sm sm:text-base font-medium text-white bg-[#ff9f00] hover:bg-[#ffbb47] rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Admissions
          </a>
        </div>
      </div>
    </header>
    </div>
  );
}
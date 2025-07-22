import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
  { label: 'Job Opportunities', href: '../JobOpportunity' },
  { label: 'Contact', href: '../Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

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

  return (
    <div>
    <header className="absolute w-full top-2 sm:top-4 md:top-6 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 -ml-20 mt-4 sm:mt-6 md:mt-8 lg:mt-10">
            <Link href="/" passHref>
              <Image
              src="/fundo.png"
              className="h-28 w-auto sm:h-24 md:h-24 lg:h-28 xl:h-52 transition-all duration-300"
              alt="Logo"
              width={520}
              height={520}
              priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
<div className="bg-gradient-to-r from-[#0071c6] to-[#004d8a] shadow-md hidden lg:flex items-center py-2 px-3 xl:py-3 xl:px-4 rounded-lg lg:-mr-8 xl:-mr-16 hover:shadow-lg">
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            <ul className="flex space-x-2 xl:space-x-4">
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
                        className={`px-2 py-1 xl:px-3 text-sm xl:text-base font-normal font-poppins transition-colors duration-200
                          ${
                            hoveredIndex === index
                              ? 'text-[#ffac1e] '
                              : 'text-white-700 hover:text-[#ffac1e]'
                          }`}
                      >
                        {item.label}
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
                      className={`px-2 py-1 xl:px-3 text-sm xl:text-base font-normal font-poppins transition-colors duration-200
                        ${
                          hoveredIndex === index
                            ? 'text-[#ffac1e] '
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
            <button
              onClick={() => window.open("https://asangola.openapply.com/", "_blank")}
              className="ml-2 xl:ml-4 inline-flex items-center px-2 py-1 xl:px-3 border border-transparent text-xs xl:text-sm font-medium rounded-full text-white bg-[#ff9f00] hover:bg-[#ffbb47] transition-colors duration-200"
            >
              Admissions
            </button>
          </nav>
          </div>

          {/* Tablet Navigation (md screens) */}
          <div className="bg-[#0071c6]/80 shadow-md hidden md:flex lg:hidden items-center py-2 px-3 rounded-lg -mr-4">
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
                        className={`px-2 py-1 text-xs font-normal font-poppins transition-colors duration-200
                          ${
                            hoveredIndex === index
                              ? 'text-[#ffac1e] '
                              : 'text-white-700 hover:text-[#ffac1e]'
                          }`}
                      >
                        {item.label}
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
                          hoveredIndex === index
                            ? 'text-[#ffac1e] '
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

          {/* Mobile menu button */}
          <div className="md:hidden">
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

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-2`}>
        <div className="mx-3 sm:mx-4 px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0071c6]/80 rounded-lg shadow-lg">
          {navigationItems.map((item, index) => (
            <div key={index}>
              <a
                href={item.href}
                className="block px-3 py-2 rounded-md text-sm sm:text-base font-medium text-white hover:text-[#ffac1e] hover:bg-[#0071c6]/90"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
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
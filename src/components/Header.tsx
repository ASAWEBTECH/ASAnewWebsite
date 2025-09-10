import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// navigation items: usar o casing que corresponde aos ficheiros em src/pages
const navigationItems = [
  { 
    label: 'Education', 
    href: '/Education',
    dropdown: [
      { label: 'Course Catalog', href: '/courseCatalog' }, // now first in dropdown
      { label: 'Pre-K / Kindergarten', href: '/Education#pre-k-kindergarten' },
      { label: 'Elementary School', href: '/Education#elementary' },
      { label: 'Middle School', href: '/Education#middle-school' },
      { label: 'High School', href: '/Education#high-school' },
      { label: 'School Calendar', href: '/Education#calendar' },
    ]
  },
  { label: 'Media', href: '/GalleryMain' },
  { 
    label: 'Community', 
    href: '/Community',
    dropdown: [
      { label: 'Support Services', href: '/Community#SupportServices' },
      { label: 'Child Development Center', href: '/Community#ChildDevelopment' },
    ]
  },
  { label: 'Opportunities', href: '/JobOpportunity' },
  { label: 'Contacts', href: '/Contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // persist selected tab
  const closeTimerRef = useRef<number | null>(null);
  const suppressOpenRef = useRef<boolean>(false); // quando true, impede reabrir dropdown por hover
  const suppressTimerRef = useRef<number | null>(null);
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

  // cleanup timers on unmount
  useEffect(() => {
    const currentSuppressTimer = suppressTimerRef.current;
    return () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
      if (currentSuppressTimer) window.clearTimeout(currentSuppressTimer);
    };
  }, []);

  // keep active tab in sync with current route (so underline persists after navigation)
  useEffect(() => {
    const normalize = (href = '') => href.replace(/\.\.\//g, '/').replace(/\/$/g, '').toLowerCase();
    const current = (router.pathname || '').toLowerCase();
    let found: number | null = null;

    navigationItems.forEach((item, idx) => {
      const base = normalize(item.href);
      if (base && base === current) found = idx;
      if (item.dropdown) {
        item.dropdown.forEach((d) => {
          const dbase = normalize(d.href);
          if (dbase && dbase === current) found = idx;
        });
      }
    });

    setActiveIndex(found);
  }, [router.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const ADMISSIONS_COLOR = '#ff9f00';

  // helper: try to scroll to an element by id with retries
  const smoothScrollToId = (id: string) => {
    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return true;
      }
      attempts++;
      if (attempts < 40) {
        // aumentar tentativas para casos de render tardio
        setTimeout(tryScroll, 100);
      }
      return false;
    };
    tryScroll();
  };

  // navigate to href; if it contains #section, ensure scroll after navigation (preserve original casing for router.push)
  const handleDropdownClick = async (href: string, parentIndex?: number) => {
    const target = href.replace(/^\.\.\//, '/');
    try {
      if (target.includes('#')) {
        const [baseRaw, hash] = target.split('#');
        // keep baseRaw casing for navigation, but compare case-insensitively
        const base = baseRaw || '/';

        // If already on same base path (case-insensitive), try scrolling immediately
        if ((router.pathname || '').toLowerCase() === base.toLowerCase()) {
          smoothScrollToId(hash);
        } else {
          // register listener to scroll after route change completes
          const onComplete = () => {
            router.events.off('routeChangeComplete', onComplete);
            setTimeout(() => smoothScrollToId(hash), 50);
          };
          router.events.on('routeChangeComplete', onComplete);

          // push using original casing (base) so Next resolves the correct page file
          await router.push(base + (hash ? '#' + hash : ''));
        }
      } else {
        // non-fragment navigation: use original target (don't lowercase)
        const path = target.replace(/\/$/, '') || '/';
        await router.push(path);
      }
    } catch {
      // fallback: full navigation on error
      window.location.href = target;
    } finally {
      setHoveredIndex(null);
      if (typeof parentIndex === 'number') setActiveIndex(parentIndex);
    }
  };
  
  // --- substitua isLinkActive pela versão abaixo ---
  const isLinkActive = (href: string) => {
    const normalize = (p = '') => {
      try {
        return p.split('#')[0].replace(/\/+$/, '').toLowerCase() || '/';
      } catch {
        return '/';
      }
    };
    return normalize(router.asPath) === normalize(href);
  };

  // helper: start close timer (delay hide), cancel when entering
  const startCloseTimer = (index: number | null) => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    closeTimerRef.current = window.setTimeout(() => {
      // only clear hover if not active tab
      if (activeIndex !== index) {
        setHoveredIndex(null);
      }
    }, 180); // 180ms delay to prevent flicker
  };

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  return (
    <div>
    <header className="absolute w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <nav
            className="hidden lg:flex items-center"
            onMouseLeave={() => {
              // ao sair da área do nav limpa hover e remove supressão imediata
              setHoveredIndex(null);
              // opcional: permitir reabrir após mouse leave
              suppressOpenRef.current = false;
            }}
          >
             <ul className="flex items-center gap-0.5">
               {navigationItems.map((item, index) => {
                 // abrir apenas quando o mouse estiver sobre o item (e se não estivermos suprimindo reabertura)
                 const dropdownOpen = hoveredIndex === index && !suppressOpenRef.current;
                 return (
                   <li key={index} className="relative">
                     <div
                       className="relative"
                       onMouseEnter={() => {
                         // se foi suprimido por clique, não abrir; caso contrário apenas setHover
                         if (suppressOpenRef.current) return;
                         clearCloseTimer();
                         setHoveredIndex(index);
                       }}
                       onMouseLeave={() => {
                         startCloseTimer(index);
                       }}
                     >
                       <div className="relative inline-block">
                         <a
                           href={item.href}
                           onClick={(e) => {
                             e.preventDefault();
                             const path = item.href.replace(/^\.\.\//, '/');
                             router.push(path);
                             setActiveIndex(index);
                             setHoveredIndex(null);
                             // if item has dropdown, we do NOT suppress hover — allow dropdown to open on hover
                           }}
                           className={`px-3.5 py-1.5 text-[14px] font-normal font-poppins transition-colors duration-200 flex items-center
                             ${isLinkActive(item.href) ? 'text-[#ffac1e]' : hoveredIndex === index || activeIndex === index ? 'text-white' : 'text-white hover:text-[#ffac1e]'}`}
                         >
                           {item.label}
                           {item.dropdown && (
                             <ChevronDown 
                               className={`ml-1 w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`} 
                             />
                           )}
                         </a>

                         {/* animated underline bar - posicionada fora do padding do header (bottom negativo) */}
                         <span
                           className="absolute left-2 right-2 origin-left transform transition-transform duration-200"
                           style={{
                             background: ADMISSIONS_COLOR,
                             height: '4px',
                             bottom: '-6px', // encosta na margem inferior do header
                             transform: dropdownOpen || activeIndex === index ? 'scaleX(1)' : 'scaleX(0)',
                             transformOrigin: 'center',
                             borderRadius: '6px'
                           }}
                         />
                       </div>

                       {item.dropdown && (
                         <div
                           onMouseEnter={() => {
                             // garantir que permanecer aberto enquanto o mouse está sobre o painel
                             clearCloseTimer();
                             setHoveredIndex(index);
                           }}
                           onMouseLeave={() => startCloseTimer(index)}
                           // opacidade reduzida para fundo do dropdown
                           className={`absolute top-full left-0 mt-2 w-64 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg z-50 transition-all duration-180 transform origin-top ${
                             dropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                           }`}
                         >
                           <div className="py-2">
                             <div className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-50/50 rounded-t-lg border-b border-gray-100">
                               {item.label === 'Education' ? 'ACADEMIC PROGRAMS' : 'OUR COMMUNITY'}
                             </div>
                             {item.dropdown.map((dropdownItem, dropdownIndex) => (
                               <a
                                 key={dropdownIndex}
                                 href={dropdownItem.href}
                                 onClick={e => {
                                   e.preventDefault();
                                   // pass parent index so underline can remain on parent if wanted
                                   handleDropdownClick(dropdownItem.href, index);
                                 }}
                                 className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50/80 hover:text-blue-700 transition-colors duration-150 first:mt-1 border-l-2 border-transparent hover:border-blue-500 flex items-center gap-2"
                               >
                                 {dropdownItem.label}
                               </a>
                             ))}
                           </div>
                         </div>
                       )}
                      </div>
                    </li>
                  );
                })}
             </ul>
            <button
              onClick={() => window.open("https://asangola.openapply.com/", "_blank")}
              className="ml-3.5 px-3.5 py-1.5 text-[14px] font-medium rounded-full text-white"
              style={{ background: ADMISSIONS_COLOR }}
            >
              Admissions
            </button>
           </nav>
           </div>

          {/* Tablet Navigation - Adjusted margin-top */}
          <div className="bg-[#0071c6]/80 shadow-md hidden md:flex lg:hidden items-center py-2 px-4 rounded-lg mt-12">
          <nav className="flex items-center space-x-1">
            <ul className="flex space-x-1">
              {navigationItems.map((item, index) => {
                const open = hoveredIndex === index || activeIndex === index;
                return (
                  <li key={index} className="relative">
                    <div
                      onMouseEnter={() => { clearCloseTimer(); setHoveredIndex(index); }}
                      onMouseLeave={() => startCloseTimer(index)}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          const path = item.href.replace(/^\.\.\//, '/');
                          router.push(path);
                          setActiveIndex(index);
                          setHoveredIndex(null);
                        }}
                        className={`px-2 py-1 text-xs font-normal font-poppins transition-colors duration-200 ${open ? 'text-white' : 'text-white-700 hover:text-[#ffac1e]'}`}
                      >
                        {item.label}
                      </a>
                      {/* tablet underline - ajustar para tocar bottom do header do tablet */}
                      <span
                        className="block"
                        style={{
                          height: open ? '4px' : '0px',
                          marginTop: '6px',
                          background: open ? ADMISSIONS_COLOR : 'transparent',
                          transition: 'all 200ms'
                        }}
                      />
                     </div>
                   </li>
                 );
               })}
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
            className="block px-3 py-2 text-sm sm:text-base font-medium text-white"
            style={{ background: ADMISSIONS_COLOR }}
            onClick={() => setIsOpen(false)}
          >
            Admissions
          </a>
        </div>
      </div>
    </header>
    </div>
  );
};

Header.displayName = 'Header';

export default React.memo(Header);
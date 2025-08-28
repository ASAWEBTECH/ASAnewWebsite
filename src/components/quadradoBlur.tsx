import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { useRouter } from "next/router";

const Quadrado: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Move quadradosData outside component or use useCallback to memoize it
  const quadradosData = useCallback(() => [
    {
      title: "Kindergarten",
      imgSrc: "/A2.webp",
      buttonColor: "#22B14C",
      description: "Building foundation for early learning",
    },
    {
      title: "Elementary",
      imgSrc: "/A1.webp",
      buttonColor: "#00A2E8",
      description: "Developing core academic skills",
    },
    {
      title: "Middle School",
      imgSrc: "/A4.webp",
      buttonColor: "#2e2b70",
      description: "Preparing for advanced learning",
    },
    {
      title: "High School",
      imgSrc: "/A3.webp",
      buttonColor: "#FF4444",
      description: "Ready for college and career",
    },
  ], []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const node = containerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  // Fixed useEffect with proper dependencies
  useEffect(() => {
    const data = quadradosData();
    const preloadImages = () => {
      data.forEach((item) => {
        const img = new window.Image();
        img.onload = () => {
          // Image loaded successfully - you can add logic here if needed
          console.log(`Image loaded: ${item.imgSrc}`);
        };
        img.onerror = () => {
          // Handle image load error if needed
          console.error(`Failed to load image: ${item.imgSrc}`);
        };
        img.src = item.imgSrc;
      });
    };

    preloadImages();
  }, [quadradosData]);

  const handleSlideChange = (newIndex: number) => {
    if (newIndex === currentIndex || isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Delay para permitir que a animação comece
    setTimeout(() => {
      setCurrentIndex(newIndex);
      
      // Reset após a animação completar
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 250);
  };

  const nextSlide = () => {
    const data = quadradosData();
    const newIndex = (currentIndex + 1) % data.length;
    handleSlideChange(newIndex);
  };

  const prevSlide = () => {
    const data = quadradosData();
    const newIndex = (currentIndex - 1 + data.length) % data.length;
    handleSlideChange(newIndex);
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    handleSlideChange(index);
  };

  const handleViewMore = (title?: string) => {
    const data = quadradosData();
    const currentItem = title
      ? data.find((d) => d.title === title) || data[currentIndex]
      : data[currentIndex];

    let sectionId = "";
    switch (currentItem.title) {
      case "Kindergarten":
        sectionId = "pre-k-kindergarten";
        break;
      case "Elementary":
        sectionId = "elementary";
        break;
      case "Middle School":
        sectionId = "middle-school";
        break;
      case "High School":
        sectionId = "high-school";
        break;
      default:
        sectionId = "pre-k-kindergarten";
    }

    // If already on Education page, try to scroll directly.
    if (typeof window !== "undefined" && router.pathname === "/Education") {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    // Otherwise store the target and navigate — Education page will read and scroll.
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("scrollToSection", sectionId);
      } catch (e) {
        /* ignore storage errors */
      }
    }
    router.push("/Education");
  };

  const data = quadradosData();

  const styles = {
    mainContainer: {
      position: "relative",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "40px",
      padding: "40px 20px",
      minHeight: "700px",
      "@media (max-width: 768px)": {
        padding: "20px 10px",
        gap: "20px",
        minHeight: "auto"
      }
    },

    cardsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "3rem",
      width: "100%",
      maxWidth: "1400px",
      padding: "0 1rem",
      margin: "7rem auto 0",
      "@media (max-width: 1024px)": {
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "2.5rem"
      },
      "@media (max-width: 768px)": {
        gridTemplateColumns: "1fr",
        gap: "7rem", // Aumenta o espaço entre cards
        margin: "5rem auto 3rem" // Adiciona margem bottom
      }
    },

    singleCard: {
      width: "100%",
      minHeight: "320px",
      borderRadius: "20px",
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      overflow: "visible",
      "@media (max-width: 768px)": {
        minHeight: "280px",
        marginBottom: "2rem" // Adiciona margem extra no bottom
      }
    },

    infoSection: {
      width: "100%",
      maxWidth: "1200px",
      padding: "60px 40px",
      backgroundColor: "#2e2b70",
      borderRadius: "20px",
      marginTop: "40px",
    },
    textContainer: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      paddingRight: "40px",
    },
    textBlur: {
      marginTop: "80px",
      borderRadius: "20px",
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
      padding: "40px 35px",
      maxWidth: "600px",
      width: "100%",
    },
    mainTitle: {
      color: "#fff",
      fontSize: "40px",
      fontWeight: "900",
      marginBottom: "25px",
      textAlign: "left" as const,
      lineHeight: "1.1",
      letterSpacing: "-0.5px",
      position: "relative" as const,
    },
    mainDescription: {
      color: "rgba(255, 255, 255, 0.95)",
      fontSize: "19px",
      lineHeight: "1.7",
      textAlign: "left" as const,
      textShadow: "0 2px 6px rgba(0,0,0,0.4)",
      fontWeight: "400",
      letterSpacing: "0.2px",
      margin: "0",
    },
    quadradoBlur: {
      marginTop: "100px",
      width: "540px",
      height: "420px",
      borderRadius: "20px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    },
    cardContent: {
      display: "flex",
      height: "100%",
      padding: "20px 20px 0px 20px",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "15px",
    },
    textSection: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      paddingRight: "15px",
      maxWidth: "200px",
      alignSelf: "center",
    },
    titleText: {
      color: "#fff",
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "10px",
      textShadow: "0 3px 6px rgba(0,0,0,0.5)",
      letterSpacing: "0.5px",
    },
    descriptionText: {
      color: "rgba(255, 255, 255, 0.9)",
      fontSize: "13px",
      lineHeight: "1.4",
      marginBottom: "20px",
      textShadow: "0 1px 2px rgba(0,0,0,0.2)",
    },
    viewMoreButton: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      padding: "8px 16px",
      borderRadius: "10px",
      border: "none",
      cursor: "pointer",
      fontSize: "13px",
      fontWeight: "600",
      color: "#fff",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      "@media (max-width: 768px)": {
        padding: "6px 12px",
        fontSize: "12px"
      }
    },
    imageSection: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      height: "100%",
      width: "100%",
    },
    imageContainer: {
      position: "absolute",
      width: "320px",
      height: "420px",
      top: "-100px", // Move a imagem para cima
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 1, // Coloca a imagem atrás do texto
      "@media (max-width: 768px)": {
        width: "240px",
        height: "320px",
        top: "-60px"
      },
      "@media (max-width: 480px)": {
        width: "200px",
        height: "280px",
        top: "-40px"
      }
    },
    contentWrapper: {
      position: "relative",
      zIndex: 2, // Mantém o texto sobre a imagem
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: "20px",
      "@media (max-width: 768px)": {
        padding: "15px"
      }
    },

    // Desktop content container (added to fix missing reference)
    contentContainer: {
      display: "flex",
      width: "100%",
      maxWidth: "1200px",
      gap: "40px",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px",
      marginTop: "0px",
    },

    // Mobile styles
    contentContainerMobile: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      maxWidth: "100%",
      gap: "30px",
      padding: "0 15px",
    },
    textContainerMobile: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingRight: "0",
      order: 2,
    },
    textBlurMobile: {
      borderRadius: "15px",
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
      padding: "25px 20px",
      width: "100%",
      maxWidth: "400px",
    },
    mainTitleMobile: {
      color: "#fff",
      fontSize: "28px",
      fontWeight: "900",
      marginBottom: "15px",
      textAlign: "center",
      lineHeight: "1.2",
      letterSpacing: "-0.5px",
    },
    mainDescriptionMobile: {
      color: "rgba(255, 255, 255, 0.95)",
      fontSize: "16px",
      lineHeight: "1.6",
      textAlign: "center",
      textShadow: "0 2px 6px rgba(0,0,0,0.4)",
      fontWeight: "400",
      letterSpacing: "0.2px",
      margin: "0",
    },
    quadradoBlurMobile: {
      width: "100%",
      maxWidth: "380px",
      height: "auto",
      minHeight: "500px",
      borderRadius: "15px",
      boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      order: 1,
    },
    cardContentMobile: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      padding: "20px",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "20px",
    },
    textSectionMobile: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingRight: "0",
      maxWidth: "none",
      order: 2,
    },
    titleTextMobile: {
      color: "#fff",
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "10px",
      textShadow: "0 3px 6px rgba(0,0,0,0.5)",
      letterSpacing: "0.5px",
      textAlign: "center",
    },
    descriptionTextMobile: {
      color: "rgba(255, 255, 255, 0.9)",
      fontSize: "14px",
      lineHeight: "1.5",
      marginBottom: "15px",
      textShadow: "0 1px 2px rgba(0,0,0,0.2)",
      textAlign: "center",
    },
    viewMoreButtonMobile: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      padding: "10px 20px",
      borderRadius: "25px",
      border: "none",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "600",
      color: "#fff",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    },
    imageSectionMobile: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      order: 1,
    },
    imageContainerMobile: {
      position: "relative",
      borderRadius: "15px",
      overflow: "hidden",
      width: "100%",
      maxWidth: "180px",
      height: "140px",
      margin: "0 auto",
    },
    mainImageMobile: {
      borderRadius: "15px",
      objectFit: "contain",
      objectPosition: "center",
      width: "100%",
      height: "100%",
      maxWidth: "180px",
      maxHeight: "140px",
      display: "block",
      margin: "0 auto",
    },

    // Common styles
    carouselContainer: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      width: "100%",
    },
    arrowButton: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: "45px",
      height: "45px",
      borderRadius: "50%",
      border: "none",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 10,
      transition: "all 0.3s ease",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    },
    dotsContainer: {
      display: "flex",
      gap: "10px",
      marginTop: "20px",
      justifyContent: "center",
    },
    dot: {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      border: "none",
      cursor: "pointer",
      opacity: 0.8,
    },
    buttonText: {
      color: "#fff",
    },
    buttonIcon: {
      transition: "transform 0.3s ease",
    },
    mobileNavigation: {
      display: "flex",
      gap: "20px",
      marginTop: "20px",
      justifyContent: "center",
    },
    mobileNavButton: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      border: "none",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    },
  };

  // Update the responsiveStyle animation
  const responsiveStyle = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .card-animate {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }

  .card-animate.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .card-animate-delay-1 { transition-delay: 0.2s; }
  .card-animate-delay-2 { transition-delay: 0.4s; }
  .card-animate-delay-3 { transition-delay: 0.6s; }
  .card-animate-delay-4 { transition-delay: 0.8s; }

  /* Desktop (4 cards) */
@media (min-width: 1280px) {
  .cards-container {
    grid-template-columns: repeat(4, 1fr);
    max-width: 1400px;
    margin: 7rem auto 0;
  }
}

/* Tablet Landscape (3 cards) */
@media (min-width: 1024px) and (max-width: 1279px) {
  .cards-container {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1100px;
    margin: 7rem auto 0;
  }
}

/* Tablet Portrait (2 cards) */
@media (min-width: 768px) and (max-width: 1023px) {
  .cards-container {
    grid-template-columns: repeat(2, 1fr);
    max-width: 800px;
    margin: 7rem auto 0;
  }
}

/* Mobile (1 card) */
@media (max-width: 767px) {
  .cards-container {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 5rem auto 0;
    gap: 7rem !important; /* Aumenta o espaço entre cards no mobile */
  }
  
  .single-card {
    max-width: 100% !important;
    margin-bottom: 2rem; /* Adiciona margem extra no bottom */
  }
  
  .card-image {
    height: 380px !important;
    top: -60px !important;
  }
}

.single-card {
  position: relative;
  min-height: 320px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: visible;
  transition: transform 0.3s ease;
}

.single-card:hover {
  transform: translateY(-5px);
}

.card-image {
  position: absolute;
  top: -80px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 420px;
  z-index: 1;
}

.card-content {
  position: relative;
  z-index: 2;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%);
  padding: 1.5rem;
  border-radius: 0 0 20px 20px;
}
`;

  return (
    <>
      <style>{responsiveStyle}</style>
      <div
        className="quadrado-main-container"
        style={styles.mainContainer as React.CSSProperties}
        ref={containerRef}
      >

        <div className="mt-28" style={styles.cardsContainer}>
          {quadradosData().map((item, index) => (
            <div 
              key={index} 
              className={`card-animate card-animate-delay-${index + 1} ${isVisible ? 'visible' : ''}`}
              style={styles.singleCard as React.CSSProperties}
            >
              <div style={styles.imageContainer as React.CSSProperties}>
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  fill
                  style={{ 
                    objectFit: "contain",
                    objectPosition: "center bottom"
                  }}
                  sizes="(max-width: 768px) 240px, (max-width: 480px) 200px, 320px"
                  priority={index === 0}
                />
              </div>
              <div style={{
                ...styles.contentWrapper as React.CSSProperties,
                background: 'linear-gradient(to top, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 100%)',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                borderRadius: '0 0 20px 20px'
              } as React.CSSProperties}>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <h3 style={styles.titleText}>{item.title}</h3>
                  <p style={styles.descriptionText}>{item.description}</p>
                  <button
                    onClick={() => handleViewMore(item.title)}
                    style={{
                      ...styles.viewMoreButton,
                      backgroundColor: item.buttonColor,
                    } as React.CSSProperties}
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.infoSection as React.CSSProperties}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
            <GraduationCap size={24} color="white" />
            <span style={{ color: 'white', fontSize: '18px', fontWeight: '500' }}>
              Over 100 Specialized Courses
            </span>
          </div>
          <h2 style={styles.mainTitle}>Our Educational Levels</h2>
          <p style={styles.mainDescription}>
            From early childhood to college preparation, we provide comprehensive
            education tailored to each development stage.
          </p>
          {/* Additional content as needed */}
        </div>
      </div>
    </>
  );
};

export default Quadrado;
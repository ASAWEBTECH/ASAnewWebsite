import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { GraduationCap } from "lucide-react";

const Quadrado: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const quadradosData = [
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
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % quadradosData.length);
      setIsTransitioning(false);
    }, 150);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(
        (prev) => (prev - 1 + quadradosData.length) % quadradosData.length
      );
      setIsTransitioning(false);
    }, 150);
  };

  const goToSlide = (index: number) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const handleViewMore = () => {
    const currentItem = quadradosData[currentIndex];
    let sectionId = "";

    // Map titles to section IDs
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

    // Save section ID to localStorage and navigate
    if (typeof window !== "undefined") {
      localStorage.setItem("scrollToSection", sectionId);
      window.location.href = "/Education";
    }
  };

  const currentItem = quadradosData[currentIndex];

  return (
    <div style={styles.mainContainer as React.CSSProperties} ref={containerRef}>
      {/* Main Content Container */}
      <div
        style={
          (isMobile
            ? styles.contentContainerMobile
            : styles.contentContainer) as React.CSSProperties
        }
      >
        {/* Text Section */}
        <div
          style={
            (isMobile
              ? styles.textContainerMobile
              : styles.textContainer) as React.CSSProperties
          }
        >
          <div
            style={
              (isMobile
                ? styles.textBlurMobile
                : styles.textBlur) as React.CSSProperties
            }
          >
            <h1
              style={
                (isMobile
                  ? styles.mainTitleMobile
                  : styles.mainTitle) as React.CSSProperties
              }
            >
              Our Educational Levels
            </h1>
            <p
              style={
                (isMobile
                  ? styles.mainDescriptionMobile
                  : styles.mainDescription) as React.CSSProperties
              }
            >
              Discover our comprehensive educational programs designed to
              nurture students at every stage of their learning journey. Your
              child’s full academic path from Pre-K to their second year of
              university. All in one place
            </p>


<div className="flex items-center justify-center m-4">
            <div
    className="w-1 h-12 sm:h-14 md:h-16 mr-4
              bg-gradient-to-b from-red-400 to-red-600 rounded-full 
              shadow-[0_2px_4px_rgba(239,68,68,0.2)]
              relative animate-pulse flex-shrink-0"
  />

  <div className="flex flex-col gap-1 sm:gap-2 flex-1 min-w-0">
    <div className="flex items-center gap-2 sm:gap-3">
      <div
        className="bg-gradient-to-br from-red-500 to-red-700 
                  p-1.5 sm:p-2 rounded-full 
                  shadow-[0_4px_12px_rgba(239,68,68,0.25)]
                  cursor-pointer transition-all hover:scale-105 flex-shrink-0"
      >
        <GraduationCap className="w-3 h-3 sm:w-3.5 text-white" />
      </div>
      <h2 className="text-white text-sm sm:text-base md:text-lg 
                    font-bold drop-shadow-md 
                    leading-tight">
        More than 100 Courses
      </h2>
    </div>
    <p className="text-white/90 text-xs sm:text-sm
                leading-relaxed pl-6 sm:pl-8 
                drop-shadow-sm -mt-1
                line-clamp-2">
      Our educational programs are designed to provide students with the
      skills necessary for success.
    </p>
  </div>
  </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div style={styles.carouselContainer as React.CSSProperties}>
          {/* Left Arrow - Hidden on mobile */}
          {!isMobile && (
            <button
              onClick={prevSlide}
              style={
                {
                  ...styles.arrowButton,
                  left: "-50px",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateY(-50%) translateX(0)"
                    : "translateY(-50%) translateX(-20px)",
                  transition: "all 0.8s ease-out",
                } as React.CSSProperties
              }
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          {/* Main Card */}
          <div
            style={
              {
                ...(isMobile ? styles.quadradoBlurMobile : styles.quadradoBlur),
                opacity: isVisible && !isTransitioning ? 1 : 0,
                transform:
                  isVisible && !isTransitioning
                    ? "translateY(0) scale(1) rotateY(0deg)"
                    : "translateY(30px) scale(0.9) rotateY(180deg)",
                transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              } as React.CSSProperties
            }
          >
            <div
              style={
                (isMobile
                  ? styles.cardContentMobile
                  : styles.cardContent) as React.CSSProperties
              }
            >
              <div
                style={
                  (isMobile
                    ? styles.textSectionMobile
                    : styles.textSection) as React.CSSProperties
                }
              >
                <h2
                  style={
                    (isMobile
                      ? styles.titleTextMobile
                      : styles.titleText) as React.CSSProperties
                  }
                >
                  {currentItem.title}
                </h2>
                <p
                  style={
                    (isMobile
                      ? styles.descriptionTextMobile
                      : styles.descriptionText) as React.CSSProperties
                  }
                >
                  {currentItem.description}
                </p>
                <button
                  style={
                    {
                      ...(isMobile
                        ? styles.viewMoreButtonMobile
                        : styles.viewMoreButton),
                      backgroundColor: currentItem.buttonColor,
                    } as React.CSSProperties
                  }
                  onClick={handleViewMore}
                >
                  <span style={styles.buttonText as React.CSSProperties}>
                    View More
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={styles.buttonIcon as React.CSSProperties}
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                style={
                  (isMobile
                    ? styles.imageSectionMobile
                    : styles.imageSection) as React.CSSProperties
                }
              >
                <div
                  style={
                    (isMobile
                      ? styles.imageContainerMobile
                      : styles.imageContainer) as React.CSSProperties
                  }
                >
                  <Image
                    src={currentItem.imgSrc}
                    alt={currentItem.title}
                    priority
                    width={isMobile ? 280 : 400}
                    height={isMobile ? 280 : 500}
                    style={
                      (isMobile
                        ? styles.mainImageMobile
                        : styles.mainImage) as React.CSSProperties
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Dots Container */}
          <div style={styles.dotsContainer as React.CSSProperties}>
            {quadradosData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={
                  {
                    ...styles.dot,
                    backgroundColor:
                      index === currentIndex
                        ? "#fff"
                        : "rgba(255, 255, 255, 0.4)",
                    transform:
                      index === currentIndex ? "scale(1.2)" : "scale(1)",
                  } as React.CSSProperties
                }
              />
            ))}
          </div>

          {/* Right Arrow - Hidden on mobile */}
          {!isMobile && (
            <button
              onClick={nextSlide}
              style={
                {
                  ...styles.arrowButton,
                  right: "-50px",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateY(-50%) translateX(0)"
                    : "translateY(-50%) translateX(20px)",
                  transition: "all 0.8s ease-out",
                } as React.CSSProperties
              }
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navigation Buttons */}
      {isMobile && (
        <div style={styles.mobileNavigation as React.CSSProperties}>
          <button
            onClick={prevSlide}
            style={styles.mobileNavButton as React.CSSProperties}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            style={styles.mobileNavButton as React.CSSProperties}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Adicione aqui o código*/}
      {/* Clouds at bottom */}
    </div>
  );
};

const styles = {
  mainContainer: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
    minHeight: "700px",
  },

  // Clouds styling
  cloudsTop: {
    pointerEvents: "none",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    zIndex: "20",
    overflow: "hidden",
  },
  cloudsBottom: {
    pointerEvents: "none",
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    zIndex: "20",
    overflow: "hidden",
  },
  cloudSvg1: {
    height: "60px",
    display: "block",
    width: "100vw",
    minWidth: "100vw",
    transform: "rotate(180deg)",
  },
  cloudSvg2: {
    height: "70px",
    position: "absolute",
    left: "0",
    top: "0",
    minWidth: "100vw",
    display: "block",
    transform: "scaleX(-1) rotate(180deg)",
    width: "100vw",
  },
  cloudSvg3: {
    height: "60px",
    minWidth: "100vw",
    display: "block",
    width: "100vw",
  },
  cloudSvg4: {
    height: "70px",
    position: "absolute",
    left: "0",
    top: "0",
    minWidth: "100vw",
    display: "block",
    transform: "scaleX(-1)",
    width: "100vw",
  },

  // Desktop styles
  contentContainer: {
    display: "flex",
    marginTop: "-60px",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1200px",
    gap: "60px",
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
    textAlign: "left",
    lineHeight: "1.1",
    letterSpacing: "-0.5px",
    position: "relative",
  },
  mainDescription: {
    color: "rgba(255, 255, 255, 0.95)",
    fontSize: "19px",
    lineHeight: "1.7",
    textAlign: "left",
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
    perspective: "1000px",
    transformStyle: "preserve-3d",
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
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
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
    position: "relative",
    borderRadius: "15px 15px 0px 0px",
    overflow: "hidden",
    width: "400px",
    height: "500px",
    margin: "0 auto",
    marginLeft: "-90px",
  },
  mainImage: {
    borderRadius: "15px 15px 0px 0px",
    objectFit: "cover",
    objectPosition: "center top",
    width: "100%",
    height: "100%",
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
    transition: "all 0.3s ease",
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
    maxWidth: "280px",
    height: "280px",
    margin: "0 auto",
  },
  mainImageMobile: {
    borderRadius: "15px",
    objectFit: "cover",
    objectPosition: "center",
    width: "100%",
    height: "100%",
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
    transition: "all 0.3s ease",
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

export default Quadrado;

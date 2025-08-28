import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { useRouter } from "next/router";

const Quadrado: React.FC = () => {
  const [currentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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

  const handleViewMore = (title?: string) => {
    const currentItem = title
      ? quadradosData().find((d) => d.title === title) || quadradosData()[currentIndex]
      : quadradosData()[currentIndex];

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

    if (typeof window !== "undefined" && router.pathname === "/Education") {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("scrollToSection", sectionId);
      } catch {
        // Silently fail if localStorage is not available
      }
    }
    router.push("/Education");
  };

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
    },

    cardsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "3rem",
      width: "100%",
      maxWidth: "1400px",
      padding: "0 1rem",
      margin: "7rem auto 0",
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
    },

    imageContainer: {
      position: "absolute",
      width: "320px",
      height: "420px",
      top: "-100px",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 1,
    },

    contentWrapper: {
      position: "relative",
      zIndex: 2,
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: "20px",
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
    },

    infoSection: {
      width: "100%",
      maxWidth: "1200px",
      padding: "60px 40px",
      backgroundColor: "#2e2b70",
      borderRadius: "20px",
      marginTop: "40px",
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
  };

  const responsiveStyle = `
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

    @media (max-width: 767px) {
      .cards-container {
        grid-template-columns: 1fr;
        max-width: 400px;
        margin: 5rem auto 0;
        gap: 7rem !important;
      }
      
      .single-card {
        max-width: 100% !important;
        margin-bottom: 2rem;
      }
      
      .card-image {
        height: 380px !important;
        top: -60px !important;
      }
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
              }}>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <h3 style={styles.titleText}>{item.title}</h3>
                  <p style={styles.descriptionText}>{item.description}</p>
                  <button
                    onClick={() => handleViewMore(item.title)}
                    style={{
                      ...styles.viewMoreButton,
                      backgroundColor: item.buttonColor,
                    }}
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.infoSection}>
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
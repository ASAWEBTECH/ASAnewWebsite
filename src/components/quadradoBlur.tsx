import React, { useState, useEffect, useRef, useCallback } from "react";
import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';
import { ArrowRight, GraduationCap } from "lucide-react";
import { useRouter } from "next/router";

type EducationCardProps = {
  title: string;
  imgSrc: string;
  buttonColor: string;
  description: string;
  index: number;
  onViewMore: (title?: string) => void;
};

// Lazy load the EducationCard component
const EducationCard = dynamic(
  () => import('./EducationCard').catch(err => {
    console.error('Failed to load EducationCard:', err);
    return () => null; // Fallback component on error
  }),
  {
    loading: () => <div className="animate-pulse bg-white/5 rounded-2xl h-[320px]" />,
    ssr: false
  }
)  as unknown as ComponentType<EducationCardProps>;

const Quadrado: React.FC = () => {
  const [currentIndex] = useState(0);
  const [, setIsVisible] = useState(false);
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

  const componentStyles = {
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
      transition: "all 0.3s ease-in-out", // Add transition
      transform: "scale(1)", // Add initial scale
      width: "auto", // Add initial width
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

  return (
    <div
      className="quadrado-main-container"
      style={componentStyles.mainContainer as React.CSSProperties}
      ref={containerRef}
    >
      <div className="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-[1400px] px-4 mx-auto">
        {quadradosData().map((item, index) => (
          <EducationCard
            key={item.title}
            {...item}
            index={index}
            onViewMore={handleViewMore}
          />
        ))}
      </div>

      <div className="w-full max-w-[1200px] p-[60px_40px] bg-[#2e2b70] rounded-[20px] mt-10">
        <div className="flex items-center gap-2.5 mb-4">
          <GraduationCap size={24} className="text-white" />
          <span className="text-white text-lg font-medium">
            Over 100 Specialized Courses
          </span>
        </div>
        <h2 className="text-white text-4xl font-black mb-6 leading-tight tracking-tight">
          Our Educational Levels
        </h2>
        <p className="text-white/95 text-lg leading-relaxed tracking-wide">
          From early childhood to college preparation, we provide comprehensive
          education tailored to each development stage.
        </p>

        {/* botão para Course Catalog */}
        <div className="mt-6">
          <button
            onClick={() => router.push('/courseCatalog')}
            className="inline-flex items-center gap-2 bg-[#ff141f] hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg shadow transition-all duration-200 group"
            aria-label="Go to Course Catalog"
          >
            Course Catalog
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quadrado;
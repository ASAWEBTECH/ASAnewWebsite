import { CSSProperties, useRef, useEffect, useState } from "react";
import Quadrado from "./quadradoBlur";
import { ImageSlider } from "../components/ImageSlider";
import QuadradosP from "./QuadradosP";
import { Header } from "../components/Header";
import HeroSection from "../components/HeroSection";
import NewsletterSection from "../components/NewsletterSection";
import Fac from "../components/faq-section";
import Footer from "../components/Footer";

// Hook personalizado para animações de visibilidade
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasBeenVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px",
        ...options,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  });

  return { elementRef, isVisible, hasBeenVisible };
};

// Componente wrapper para seções animadas
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
}

const AnimatedSection = ({
  children,
  className = "",
  style = {},
  delay = 0,
}: AnimatedSectionProps) => {
  const { elementRef, isVisible, hasBeenVisible } = useIntersectionObserver();

  const getAnimationClass = () => {
    if (!hasBeenVisible) return "opacity-0 translate-y-10";
    if (isVisible) return "opacity-100 translate-y-0";
    return "opacity-30 translate-y-5";
  };

  return (
    <section
      ref={elementRef}
      className={`transition-all duration-1000 ease-out ${getAnimationClass()} ${className}`}
      style={{
        ...style,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </section>
  );
};

export default function Home() {
  const images = [
    "/im1.webp",
    "/im2.webp",
    "/im3.webp",
    "/im4.webp",
    "/im5.webp",
  ];

  return (
    <main>
      <Header />

      {/* Hero Section - sempre visível no topo */}
      <div className="min-h-screen bg-gray-100">
        <ImageSlider images={images} />

        <AnimatedSection delay={200}>
          <QuadradosP />
        </AnimatedSection>
      </div>

      {/* Education Section */}
      <AnimatedSection
        className="relative"
        style={styles.sectionEducation}
        delay={300}
      >
          <Quadrado />
      </AnimatedSection>

      {/* Newsletter Section */}
      <AnimatedSection delay={100}>
        <NewsletterSection />
      </AnimatedSection>
      <div className="w-full mx-auto mt-10 flex justify-center items-center">
        <h2 className="inline-block bg-white rounded-full px-10 py-4 text-xl ml-8 sm:text-2xl md:text-2xl lg:text-5xl font-bold text-left text-[#2e2b70] mb-8 shadow-lg">
          Upcoming Events
        </h2>
        <p className="text-base sm:text-lg text-gray-700 text-left px-8 mb-8">
          Stay tuned for our upcoming events and activities. We have a lot of
          exciting things planned!
        </p>
      </div>

      {/* Community Section */}
      <AnimatedSection
        style={styles.sectionCommunity}
        className="bg-gradient-to-br from-blue-50 to-indigo-50"
        delay={200}
      >

        <div className="pointer-events-none absolute top-0 left-0 w-full z-20 overflow-hidden">
          {/* First cloud, left to right, lower opacity */}
          <svg
            viewBox="0 0 1440 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[120px] min-w-full"
            style={{
              display: "block",
              width: "100vw",
              minWidth: "100vw",
              transform: "rotate(180deg)",
            }}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,160 Q360,220 720,160 T1440,160 V220 H0 Z"
              fill="white"
              opacity="0.35"
            />
            <path
              d="M0,200 Q360,260 720,200 T1440,200 V220 H0 Z"
              fill="white"
              opacity="0.18"
            />
          </svg>
          {/* Second cloud, right to left, higher opacity, mirrored */}
          <svg
            viewBox="0 0 1440 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[140px] absolute left-0 top-0 min-w-full"
            style={{
              display: "block",
              transform: "scaleX(-1) rotate(180deg)",
              width: "100vw",
              minWidth: "100vw",
            }}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,160 Q360,220 720,160 T1440,160 V220 H0 Z"
              fill="white"
              opacity="0.65"
            />
            <path
              d="M0,200 Q360,260 720,200 T1440,200 V220 H0 Z"
              fill="white"
              opacity="0.35"
            />
          </svg>
        </div>

        <HeroSection />
        <div className="pointer-events-none absolute bottom-16 left-0 w-full z-20 overflow-hidden">
          {/* First cloud, left to right, lower opacity */}
          <svg
            viewBox="0 0 1440 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[120px] min-w-full"
            style={{
              display: "block",
              width: "100vw",
              minWidth: "100vw",
            }}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,160 Q360,220 720,160 T1440,160 V220 H0 Z"
              fill="white"
              opacity="0.35"
            />
            <path
              d="M0,200 Q360,260 720,200 T1440,200 V220 H0 Z"
              fill="white"
              opacity="0.18"
            />
          </svg>
          {/* Second cloud, right to left, higher opacity, mirrored */}
          <svg
            viewBox="0 0 1440 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[140px] absolute left-0 top-0 min-w-full"
            style={{
              display: "block",
              transform: "scaleX(-1)",
              width: "100vw",
              minWidth: "100vw",
            }}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,160 Q360,220 720,160 T1440,160 V220 H0 Z"
              fill="white"
              opacity="0.65"
            />
            <path
              d="M0,200 Q360,260 720,200 T1440,200 V220 H0 Z"
              fill="white"
              opacity="0.35"
            />
          </svg>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection delay={150}>
        <Fac />
      </AnimatedSection>

      <Footer />
    </main>
  );
}

const styles: { [key: string]: CSSProperties } = {
  sectionEducation: {

    backgroundImage: `url('./FS.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  sectionCommunity: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 0",
  },
  quadradoContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "60px",
    width: "100%",
    margin: "0 auto",
    marginTop: "130px",
  },
};

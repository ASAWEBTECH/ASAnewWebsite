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
        rootMargin: '-50px',
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

const AnimatedSection = ({ children, className = "", style = {}, delay = 0 }: AnimatedSectionProps) => {
  const { elementRef, isVisible, hasBeenVisible } = useIntersectionObserver();

  const getAnimationClass = () => {
    if (!hasBeenVisible) return 'opacity-0 translate-y-10';
    if (isVisible) return 'opacity-100 translate-y-0';
    return 'opacity-30 translate-y-5';
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
        <ImageSlider
          images={images}
        />

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
        <div
          style={styles.quadradoContainer}
          className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 w-full mx-auto mt-20"
        >
          <Quadrado />
        </div>
        <div className="bg-white w-full h-16 mt-10 flex items-center rounded-full justify-center px-4 max-w-[95vw] sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#2e2b70] text-center w-full">
        OUR EDUCATION LEVELS
          </h1>
        </div>
        <p className="text-base sm:text-lg mt-6 text-white text-center max-w-[95vw] sm:max-w-2xl px-2 sm:px-4">
          We have all the education levels, from elementary to high school
          grade, with complete high technology teaching.
        </p>
      </AnimatedSection>

      {/* Newsletter Section */}
      <AnimatedSection delay={100}>
        <NewsletterSection />
      </AnimatedSection>

      {/* Community Section */}
      <AnimatedSection
        style={styles.sectionCommunity}
        className="bg-gradient-to-br from-blue-50 to-indigo-50"
        delay={200}
      >
        <HeroSection />
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
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#2e2b70",
    padding: "20px 0",
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
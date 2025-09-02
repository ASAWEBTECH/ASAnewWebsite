import { CSSProperties, useRef, useEffect, useState } from "react";
import Quadrado from "../components/quadradoBlur";
import { ImageSlider } from "../components/ImageSlider";
import QuadradosP from "../components/QuadradosP";
import { Header } from "../components/Header";
import HeroSection from "../components/HeroSection";
import NewsletterSection from "../components/NewsletterSection";
import Fac from "../components/faq-section";
import Footer from "../components/Footer";
import SEO from '../components/SEO';

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
    <>
      <SEO 
        title="Home"
        description="American Schools of Angola offers Pre-K to early college United States curriculum. Excellence in education with modern technology, active physical development, and a safe, inclusive environment."
        keywords="American school Angola, international school Luanda, US curriculum Angola, pre-k Angola, kindergarten Luanda, elementary school Angola, high school Luanda"
        canonical="https://asangola.com"
      />
      <Header />

      {/* Hero Section - sempre visível no topo */}
      <div className="min-h-screen bg-gray-100">
        <ImageSlider images={images} />

        <AnimatedSection delay={200}>
          <QuadradosP />
        </AnimatedSection>
      </div>

      {/* Education Section */}
      <section
        className="relative"
        style={styles.sectionEducation}>
          <Quadrado />
      </section>

      {/* Newsletter Section */}
      <AnimatedSection delay={100}>
        <NewsletterSection />
      </AnimatedSection>
      <div className="w-full mx-auto mt-10 flex flex-col md:flex-row justify-center items-center px-4 md:px-8">
        <h2 className="w-full md:w-auto bg-white rounded-full px-6 md:px-10 py-3 md:py-4 text-xl sm:text-2xl lg:text-5xl font-bold text-center md:text-left text-[#2e2b70] mb-4 md:mb-0 shadow-lg">
          Upcoming Events
        </h2>
        <p className="w-full md:w-auto text-base sm:text-lg text-gray-700 text-center md:text-left px-4 md:px-8">
          Stay tuned for our upcoming events and activities. We have a lot of
          exciting things planned!
        </p>
      </div>

      {/* Community Section */}
      <section
        style={styles.sectionCommunity}
        className="bg-gradient-to-br from-blue-50 to-indigo-50"
      >

        <HeroSection />
      </section>

      {/* FAQ Section */}
      <AnimatedSection delay={150}>
        <Fac />
      </AnimatedSection>

      <Footer />
    </>
  );
}

const styles: { [key: string]: CSSProperties } = {
  sectionEducation: {
    backgroundImage: `url('./FS.webp')`,
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

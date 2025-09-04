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
import Image from 'next/image';

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
      <AnimatedSection className="relative min-h-screen" delay={300}>
        <div className="absolute inset-0 -z-10">
          <Image
        src="/FS.webp"
        alt="Education section background"
        fill
        style={{ objectFit: 'cover' }}
        priority
          />
        </div>
        <Quadrado />
      </AnimatedSection>

      {/* Newsletter Section */}
      <AnimatedSection delay={100}>
        <NewsletterSection />
      </AnimatedSection>
      <div className="w-full bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 px-4">
          <div className="flex flex-col items-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2e2b70] text-center">
          Upcoming Events
        </h2>
        <div className="w-24 h-0.5 bg-[#4642a3] rounded-full"></div>
          </div>
          <div className="w-full bg-white rounded-lg shadow-md p-8 border-l-4 border-[#2e2b70] ">
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Stay tuned for our upcoming events and activities. Join us in creating memorable educational experiences that shape tomorrow's leaders.
        </p>
        <div className="mt-4 flex justify-center">
          <span className="text-[#4642a3] text-sm font-medium">
            Date of the activity in the top right corner of the slides
          </span>
        </div>
          </div>
        </div>
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

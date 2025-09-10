import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';

interface Slide {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  day?: number;
  month?: string;
}

const slides: Slide[] = [
  {
    title: "Unesco Day Lecture",
    subtitle: "In celebration of United Nations Day",
    image: "/news1.webp",
    description: "In celebration of United Nations Day, our students had the incredible opportunity to participate in a special lecture dedicated to the values and mission of UNESCO. The session highlighted the importance of global cooperation, cultural preservation, and the pursuit of peace in building a better future for all nations.The lecture was an inspiring moment for our students to learn about the role of the United Nations in addressing global challenges, such as education for all, climate change, and human rights. It also encouraged them to reflect on their own roles as young global citizens and the impact they can make in their communities. Through engaging discussions and thought-provoking insights, the event fostered a deeper understanding of how we can all contribute to a more inclusive, sustainable, and peaceful world. Our students left the session feeling motivated and empowered to embody these values in their everyday lives.",
    day: 24,
    month: "Oct"
  },
  {
    title: "Open House",
    subtitle: " Early College High School -Discover the Future of Education",
    image: "/news2.webp",
    description: "We are excited to invite you to our Open House event for the Early College High School program! This is a fantastic opportunity for prospective students and their families to learn more about our innovative curriculum, dedicated faculty, and the unique advantages of our early college model. Join us for an informative session where you can ask questions, meet our staff, and explore the possibilities that await you at our school. Together, we can pave the way for a extraordinary future!",
    day: 20,
    month: "Sept"
  },
  {
    title: "Break Time, Big Smiles",
    subtitle: "Because growing also means having fun along the way",
    image: "/news3.webp",
    description: "Sometimes, the best ideas come during a good laugh. Our team takes regular fun breaks to recharge, connect, and spark creativity. Here, growth isn't just about careers — it's about enjoying the journey together.",
    day: 3,
    month: "Dec"
  }
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!showModal) {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [showModal]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + slides.length) % slides.length);
  };

  return (
    <>
      <div className="relative w-full h-[calc(100vh-4rem)] md:h-[calc(100vh-6rem)] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute inset-0 z-10"
          >
            {/* Calendário do evento - Updated position to top right */}
            <div className="absolute top-8 right-8 md:top-12 md:right-12 z-20">
              <div className="flex items-center">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg flex flex-col items-center justify-center px-4 py-2 w-20 h-24 border-2 border-[#2e2b70] relative hover:transform hover:scale-105 transition-all duration-300">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2e2b70] rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                      <rect x="4" y="7" width="16" height="13" rx="2" fill="#fff"/>
                      <rect x="4" y="7" width="16" height="13" rx="2" stroke="#2e2b70" strokeWidth="2"/>
                      <rect x="7" y="3" width="2" height="4" rx="1" fill="#2e2b70"/>
                      <rect x="15" y="3" width="2" height="4" rx="1" fill="#2e2b70"/>
                    </svg>
                  </div>
                  <span className="text-4xl font-extrabold text-[#2e2b70] mt-6 leading-none">{slides[currentIndex].day}</span>
                  <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{slides[currentIndex].month}</span>
                </div>
              </div>
            </div>

            {/* Conteúdo do slide */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#2e2b70] to-transparent">
                <div className="flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6"
                  >
                    {slides[currentIndex].title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl lg:text-3xl text-white mb-6 md:mb-8 max-w-xl"
                  >
                    {slides[currentIndex].subtitle}
                  </motion.p>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <button 
                      onClick={() => setShowModal(true)}
                      className="px-6 py-2 md:px-8 md:py-3 bg-red-600 text-white rounded-full text-base md:text-lg font-semibold hover:bg-red-50 transition-colors"
                    >
                      View more
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/30 hover:bg-white/50 rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
          onClick={() => paginate(-1)}
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>
        <button
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/30 hover:bg-white/50 rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
          onClick={() => paginate(1)}
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>

        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-red-600 scale-125' : 'bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg shadow-xl max-w-2xl w-full overflow-hidden"
            >
                <div className="relative">
                <Image
                  src={slides[currentIndex].image}
                  alt={slides[currentIndex].title}
                  width={800}
                  height={192}
                  className="w-full h-48 object-cover"
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-2 right-2 w-8 h-8 bg-white/30 hover:bg-white/50 rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 break-words whitespace-normal overflow-wrap-anywhere hyphens-auto">
                  {slides[currentIndex].title}
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  {slides[currentIndex].subtitle}
                </p>
                <p className="text-gray-700">
                  {slides[currentIndex].description}
                </p>
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 bg-red-600 text-white rounded-full text-sm font-semibold hover:bg-red-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
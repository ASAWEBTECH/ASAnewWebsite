import React, { useState, useCallback, memo } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';

interface EducationCardProps {
  title: string;
  imgSrc: string;
  buttonColor: string;
  description: string;
  index: number;
  onViewMore: (title: string) => void;
}

const EducationCard = memo(({ title, imgSrc, buttonColor, description, index, onViewMore }: EducationCardProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  // Optimize intersection observer options
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px',
  });

  // Memoize the onLoadingComplete callback
  const handleImageLoad = useCallback(() => {
    setIsImageLoaded(true);
  }, []);

  // Memoize the click handler
  const handleClick = useCallback(() => {
    onViewMore(title);
  }, [onViewMore, title]);

  return (
    <div 
      ref={ref}
      className={`relative h-[500px] rounded-2xl overflow-hidden transition-transform duration-500 will-change-transform
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Graduation Cap Icon - Reduced blur intensity */}
      <div className="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-sm p-3 rounded-xl
                    transform transition-transform duration-300 group-hover:scale-110">
        <GraduationCap className="w-6 h-6 text-white drop-shadow-sm" />
      </div>

      {/* Image with loading optimization */}
      {inView && (
        <Image
          src={imgSrc}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 will-change-transform
            ${isImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          style={{ 
            objectPosition: '50% 15%',
            transform: isImageLoaded ? 'none' : 'scale(1.05)'
          }}
          onLoadingComplete={handleImageLoad}
          priority={index < 2}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={85}
        />
      )}

      {/* Simplified gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/15 to-transparent 
                    opacity-100 transition-opacity duration-300 group-hover:opacity-45" />

      {/* Optimized content container */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="relative z-10 space-y-4">
          <h3 className="text-2xl font-bold text-white drop-shadow">
            {title}
          </h3>
          <p className="text-white/90 text-sm leading-relaxed bg-black/5 backdrop-blur-[2px]
                       rounded-xl p-4">
            {description}
          </p>
            <button
            onClick={handleClick}
            className="group inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold 
                 text-white transition-transform duration-300 hover:scale-105"
            style={{ backgroundColor: buttonColor }}
            >
            View More
            <span className="ml-2 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-1">
              →
            </span>
            <span className="ml-[-8px] opacity-0 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1 group-hover:opacity-100">
              →
            </span>
            </button>
        </div>
      </div>
    </div>
  );
});

// Add display name for debugging
EducationCard.displayName = 'EducationCard';

export default EducationCard;
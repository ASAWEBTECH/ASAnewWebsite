import React, { useState } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react'; // Add this import

interface EducationCardProps {
  title: string;
  imgSrc: string;
  buttonColor: string;
  description: string;
  index: number;
  onViewMore: (title: string) => void;
}

const EducationCard = ({ title, imgSrc, buttonColor, description, index, onViewMore }: EducationCardProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div 
      ref={ref}
      className={`relative h-[500px] rounded-2xl overflow-hidden transition-all duration-500 group ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Add Graduation Cap Icon */}
      <div className="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-md p-3 rounded-xl
                    transform transition-all duration-300 group-hover:scale-110">
        <GraduationCap className="w-6 h-6 text-white drop-shadow" />
      </div>

      {/* Background Image */}
      {inView && (
        <Image
          src={imgSrc}
          alt={title}
          fill
          className={`object-cover transition-all duration-700 ${
            isImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ objectPosition: '50% 15%' }}
          onLoadingComplete={() => setIsImageLoaded(true)}
          priority={index < 2}
        />
      )}

      {/* Reduced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent 
                    transition-opacity duration-300 group-hover:opacity-60" />

      {/* Content Container with Enhanced Blur */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="relative z-10 space-y-4">
          <h3 className="text-2xl font-bold text-white drop-shadow-sm">
            {title}
          </h3>
          <p className="text-white/90 text-sm leading-relaxed bg-black/5 backdrop-blur-sm 
                       rounded-xl p-4 shadow-lg">
            {description}
          </p>
          <button
            onClick={() => onViewMore(title)}
            className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold 
                     text-white bg-opacity-90 backdrop-blur-sm shadow-lg
                     transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: buttonColor }}
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(EducationCard);
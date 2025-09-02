import React, { useState, useEffect } from 'react';
import { Calendar, ExternalLink, Instagram, Play } from 'lucide-react';
import Image from 'next/image';
import {Header} from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SEO from '../components/SEO';

const SchoolGallery = () => {
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);
  // Animações
  const heroAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: true }) as { ref: React.RefObject<HTMLDivElement>, isVisible: boolean };
  const sectionTitleAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: true }) as { ref: React.RefObject<HTMLDivElement>, isVisible: boolean };

  // Sample data - replace with your actual Instagram posts
  useEffect(() => {
    // Trigger header animations after component mounts
    const timer = setTimeout(() => {
      setIsHeaderLoaded(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const [activities] = useState([
    {
      id: 1,
      title: "Luanda and Houston United for Health",
      date: "07-01-2025",
      description: "On July 1st, the American Schools of Angola (ASA) delivered medical equipment, disposable supplies, and medications to five healthcare units in Luanda",
      imageUrl: "/m1.png",
      photoInstagramUrl: "https://www.instagram.com/p/DLmBoOOMz6w/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      videoInstagramUrl: "https://youtu.be/2shZ8H6NPAc?si=gLmZ4aITDc8Z9JdK"
    },
    {
      id: 2,
      title: "Graduation Day 2024-2025",
      date: "06-14-2025",
      description: " ASA Graduation & Academic Year Closing Ceremony 2024–2025. Today we celebrated a remarkable milestone!",
      imageUrl: "/m2.png",
      photoInstagramUrl: "https://www.instagram.com/p/DK4xmunsM7K/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      videoInstagramUrl: "https://youtu.be/_-IgQZVo1Vg?si=sBMSWP0NHEnxGsvB"
    },
    {
      id: 3,
      title: "United Youth Taekwondo Tournament",
      date: "05-28-2024",
      description: "The first edition of the United Youth Taekwondo Tournament brought together over 40 young athletes at the Pavilion",
      imageUrl: "/m3.webp",
      photoInstagramUrl: "https://www.instagram.com/p/example3",
      videoInstagramUrl: "https://www.instagram.com/p/video3"
    },
  ]);

  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const handleInstagramClick = (url: string | URL | undefined, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCardClick = (photoUrl: string | URL | undefined) => {
    window.open(photoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Media Gallery"
        description="Explore life at American Schools of Angola through our photo and video gallery. See our students' achievements, events, and daily activities."
        keywords="school gallery Angola, ASA events, student activities, school photos Luanda"
        canonical="https://asangola.com/GalleryMain"
      />
      {/* Header */}
      <Header />
      
      {/* Header Section - Animação apenas de entrada */}
      <div className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Moments.webp"
            alt="Gallery background"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            quality={100}
            sizes="100vw"
            className="filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-gray-200/10" />
        </div>
        <div
          ref={heroAnimation.ref}
          className={`relative z-10 text-left text-white pl-8 md:pl-32 max-w-3xl top-24 transition-all duration-1000 ease-out ${
            heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 
            className={`text-4xl font-bold mb-4 leading-tight transition-all duration-1200 ease-out ${
              isHeaderLoaded 
                ? 'opacity-100 translate-x-0 translate-y-0' 
                : 'opacity-0 -translate-x-16 translate-y-6'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Where every photo tells a story lived by our students
          </h1>
          <p 
            className={`text-xl text-white text-left transition-all duration-1000 ease-out ${
              isHeaderLoaded 
                ? 'opacity-100 translate-x-0 translate-y-0' 
                : 'opacity-0 -translate-x-12 translate-y-4'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            Through smiles, discoveries, and friendships, our gallery is an
            invitation to relive the most cherished moments of our journey.
          </p>
        </div>
        <div className="pointer-events-none absolute bottom-[-2px] left-0 w-full z-20 overflow-hidden">
          {/* First cloud, left to right, lower opacity */}
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[200px] min-w-full"
            style={{ 
              display: "block",
              width: "100vw",
              minWidth: "100vw"
            }}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,80 Q360,120 720,80 T1440,80 V120 H0 Z"
              fill="white"
              opacity="0.35"
            />
            <path
              d="M0,100 Q360,140 720,100 T1440,100 V120 H0 Z"
              fill="white"
              opacity="0.18"
            />
          </svg>
          {/* Second cloud, right to left, higher opacity, mirrored */}
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[220px] absolute left-0 top-0 min-w-full"
            style={{ 
              display: "block", 
              transform: "scaleX(-1)",
              width: "100vw",
              minWidth: "100vw"
            }}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,80 Q360,120 720,80 T1440,80 V120 H0 Z"
              fill="white"
              opacity="0.65"
            />
            <path
              d="M0,100 Q360,140 720,100 T1440,100 V120 H0 Z"
              fill="white"
              opacity="0.35"
            />
          </svg>
        </div>
      </div>

      <section
        ref={sectionTitleAnimation.ref}
        className={`bg-white py-12 px-4 md:px-8 transition-all duration-1000 ease-out ${
          sectionTitleAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-12 mt-10">
          <h1 className="text-4xl font-bold text-[#2e2b70] mb-4">
            School Activities Gallery
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Follow the special moments and activities developed at our school through our Instagram / Youtube
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              onClick={() => handleCardClick(activity.photoInstagramUrl)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <Image
                  src={activity.imageUrl}
                  alt={activity.title}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ objectFit: "cover" }}
                  priority={activity.id === 1}
                />
                
                {/* Top Icons Row */}
                <div className="absolute top-4 right-4 flex gap-2">
                  {/* Video Icon - Only show if video exists */}
                  {activity.videoInstagramUrl && (
                    <button
                      onClick={(e) => handleInstagramClick(activity.videoInstagramUrl, e)}
                      className="bg-red-600 bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300 transform hover:scale-110"
                      title="Watch Video"
                    >
                      <Play className="w-5 h-5 text-white fill-white" />
                    </button>
                  )}
                  
                  {/* Photo Instagram Icon */}
                  <div className="bg-black bg-opacity-50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(activity.date)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:opacity-80 transition-opacity" style={{ color: '#2e2b70' }}>
                  {activity.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {activity.description}
                </p>

                {/* Instagram Links */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors">
                    <Instagram className="w-4 h-4 mr-2" />
                    View Photos
                  </div>
                  
                  {activity.videoInstagramUrl && (
                    <button
                      onClick={(e) => handleInstagramClick(activity.videoInstagramUrl, e)}
                      className="flex items-center text-red-600 text-sm font-medium hover:text-red-700 transition-colors"
                    >
                      <Play className="w-4 h-4 mr-1" />
                      Watch Video
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <a href="https://www.instagram.com/asangola?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center">
            <Instagram className="w-5 h-5 mr-2" />
            View More Activities
          </a>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SchoolGallery;
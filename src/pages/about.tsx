import React, { useEffect, useState } from "react";
import { Phone, MapPin, GraduationCap, Award,RotateCcw } from "lucide-react";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function About() {
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);
  // Animações para seções principais
  const missionSectionAnimation = useScrollAnimation({ threshold: 0.15, triggerOnce: true }) as { ref: React.RefObject<HTMLDivElement>, isVisible: boolean };
  const philosophySectionAnimation = useScrollAnimation({ threshold: 0.15, triggerOnce: true }) as { ref: React.RefObject<HTMLDivElement>, isVisible: boolean };
  const nondiscriminationSectionAnimation = useScrollAnimation({ threshold: 0.15, triggerOnce: true }) as { ref: React.RefObject<HTMLDivElement>, isVisible: boolean };
  const programsSectionAnimation = useScrollAnimation({ threshold: 0.15, triggerOnce: true }) as { ref: React.RefObject<HTMLDivElement>, isVisible: boolean };
  const supportSectionAnimation = useScrollAnimation({ threshold: 0.15, triggerOnce: true }) as { ref: React.RefObject<HTMLDivElement>, isVisible: boolean };
  const curriculumSectionAnimation = useScrollAnimation({ threshold: 0.15, triggerOnce: true }) as { ref: React.RefObject<HTMLDivElement>, isVisible: boolean };
  const campusSectionAnimation = useScrollAnimation({ threshold: 0.15, triggerOnce: true }) as { ref: React.RefObject<HTMLDivElement>, isVisible: boolean };
  const enrollmentSectionAnimation = useScrollAnimation({ threshold: 0.15, triggerOnce: true }) as { ref: React.RefObject<HTMLDivElement>, isVisible: boolean };
  const locationSectionAnimation = useScrollAnimation({ threshold: 0.15, triggerOnce: true }) as { ref: React.RefObject<HTMLDivElement>, isVisible: boolean };
  const accreditationSectionAnimation = useScrollAnimation({ threshold: 0.15, triggerOnce: true }) as { ref: React.RefObject<HTMLDivElement>, isVisible: boolean };

  useEffect(() => {
    // Trigger header animations after component mounts
    const timer = setTimeout(() => {
      setIsHeaderLoaded(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Header Section - Animação apenas de entrada */}
      <div className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/aboutASAimg.webp"
            alt="Gallery background" 
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            quality={75} // Reduced quality but still good
            priority
            sizes="(max-width: 768px) 100vw, 100vw"
            className="transform-gpu"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRseHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/2wBDAR0XFyAeIBogHiAeHiAeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            loading="eager"
          />
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(128,128,128,0.05))'
            }}
          />
        </div>

        <div className="relative z-10 text-left text-white pl-8 md:pl-32 max-w-3xl top-24">
          <div>
          <h1
            className={`text-4xl font-bold mb-4 leading-tight transition-all duration-1200 ease-out ${
              isHeaderLoaded
                ? "opacity-100 translate-x-0 translate-y-0"
                : "opacity-0 -translate-x-16 translate-y-6"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Committed to Excellence in Education and Personal Growth
          </h1>
          <p
            className={`text-xl text-white text-left transition-all duration-1000 ease-out ${
              isHeaderLoaded
                ? "opacity-100 translate-x-0 translate-y-0"
                : "opacity-0 -translate-x-12 translate-y-4"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            Learn more about our mission, values, and the dedicated team behind
            our educational journey.
          </p>
          </div>
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
              minWidth: "100vw",
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
              minWidth: "100vw",
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Our Mission Section */}
      <div
        ref={missionSectionAnimation.ref}
        className={`mb-16 transform-gpu transition-opacity transition-transform duration-1000 ease-out ${missionSectionAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{ willChange: 'opacity, transform', backfaceVisibility: 'hidden' }}
      >
        {/* Mission Title and Description - Full Width */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-[#2e2b70] mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-left">
            The mission of the American Schools of Angola is to nurture and
            develop successful global citizens and culturally sensitive leaders
            who are proud well-adjusted lifelong learners; inspired to be
            extraordinary; and whom create a better world for all.
          </p>
        </div>

        {/* Content Grid - Video and 360 Visit Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Video Section */}
          <div className="w-full">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <iframe
                className="w-full aspect-video rounded-lg overflow-hidden"
                src="https://www.youtube.com/embed/CBWzCOrX2s0?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&loop=1&playlist=CBWzCOrX2s0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video"
              ></iframe>
            </div>
          </div>

          {/* 360 Visit Experience Card */}
          <div className="w-full">
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 h-full flex flex-col justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#2e2b70] mb-4">
                  Visit Our School with a 360° Experience
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Take an immersive virtual tour of our campus and discover our 
                  state-of-the-art facilities, classrooms, and learning environments. 
                  Experience our school like never before from anywhere in the world.
                </p>
                <a 
                  href="https://ths.li/oxHuJ" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg transition-all duration-500 ease-in-out hover:bg-red-700 transform hover:scale-105 ${
                  isHeaderLoaded ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 translate-x-12 translate-y-4"
                  }`}
                  style={{ transitionDelay: "900ms" }}
                >
                  <button className="flex items-center gap-2">
                    <RotateCcw className="w-5 h-5" />
                    <span>360° Visit Experience</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* School Philosophy Section */}
        <div
          ref={philosophySectionAnimation.ref}
          className={`bg-blue-50 p-8 rounded-xl mb-16 transform-gpu transition-opacity transition-transform duration-1000 ease-out ${philosophySectionAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ willChange: 'opacity, transform', backfaceVisibility: 'hidden' }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            Our School Philosophy is Student-Centered
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Real-Life Skills
                </h3>
                <p className="text-gray-700">
                  Students practice real-life skills in a supportive nurturing
                  environment
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Real-World Connections
                </h3>
                <p className="text-gray-700">
                  Students connect learning to their own experiences to develop
                  real-world connections
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Tech-Savvy Learning
                </h3>
                <p className="text-gray-700">
                  Our students become tech-savvy to thrive in our 21st-century
                  global society
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Non-Discrimination Policy & Logo Section */}
        <div
          ref={nondiscriminationSectionAnimation.ref}
          className={`bg-white p-8 rounded-xl border border-gray-200 mb-16 transform-gpu transition-opacity transition-transform duration-1000 ease-out ${nondiscriminationSectionAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ willChange: 'opacity, transform', backfaceVisibility: 'hidden' }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#2e2b70] mb-4">
                Non-Discrimination Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                American Schools of Angola follows a non-discrimination policy
                and will consider all students meeting admission requirements
                regardless of race, religion, gender, creed, color, or country
                of origin.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/LogoASA.webp"
                alt="ASA Logo"
                width={200}
                height={200}
                className="mx-auto mb-4"
              />
              <p className="text-sm text-gray-600 italic">
                Five colors from Olympic rings symbolizing unity across all
                continents
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-700 leading-relaxed">
              The American Schools of Angola logo uses the five colors from the
              Olympic rings with a white background to symbolize unity in all
              five inhabited continents of the world. These five colors are then
              portrayed by five students equal in size and shape in a circle
              with no beginning or end embodying equality.
            </p>
            <p className="text-gray-700 mt-4 font-medium">
              The ASA logo was designed to truly capture the international
              character of the school as well as underpin the mission of all its
              students and educators. To be extraordinary. In a time in our
              history where only extraordinary will be enough.
            </p>
          </div>
        </div>

        {/* Programs & Services Section */}
        <div
          ref={programsSectionAnimation.ref}
          className={`grid md:grid-cols-2 gap-8 mb-16 transform-gpu transition-opacity transition-transform duration-1000 ease-out ${programsSectionAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ willChange: 'opacity, transform', backfaceVisibility: 'hidden' }}
        >
          {/* Student-Centered Programs */}
          <div className="bg-blue-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Student-Centered Programs
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <Award className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>Gifted & Talented</span>
              </li>
              <li className="flex items-center gap-3">
                <Award className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>Specialized support</span>
              </li>
              <li className="flex items-center gap-3">
                <Award className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>Licensed psychologists</span>
              </li>
              <li className="flex items-center gap-3">
                <Award className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>Healthy café</span>
              </li>
              <li className="flex items-center gap-3">
                <Award className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>Fitness center</span>
              </li>
            </ul>
          </div>

          {/* Career-Focused Learning */}
          <div className="bg-green-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-green-900 mb-6">
              Career-Focused Learning
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Humanities</span>
              </li>
              <li className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>STEM</span>
              </li>
              <li className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Technical art</span>
              </li>
              <li className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Visual art</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Student Support Services */}
        <div
          ref={supportSectionAnimation.ref}
          className={`bg-purple-50 p-8 rounded-xl mb-16 transition-all duration-1000 ease-out ${supportSectionAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-2xl font-bold text-purple-900 mb-6 text-center">
            Student Support Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                Academic Support
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Accommodations for students with different abilities</li>
                <li>
                  • Brief psychological therapeutic interventions for
                  individuals
                </li>
                <li>
                  • School-wide social & emotional curriculum inside classrooms
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                Family Support
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Complimentary family consultations</li>
                <li>• Community referrals for long-term treatment</li>
                <li>
                  • Multilingual staff support (English, Portuguese, Spanish,
                  French, Arabic, Hindu)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Curriculum & Activities */}
        <div
          ref={curriculumSectionAnimation.ref}
          className={`bg-orange-50 p-8 rounded-xl mb-16 transition-all duration-1000 ease-out ${curriculumSectionAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-2xl font-bold text-orange-900 mb-6 text-center">
            Beyond Academic Studies
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4">
                Our weekly curriculum offers a mixture of engaging activities:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Music lessons</li>
                <li>• Fine Art lessons</li>
                <li>• Robotic class</li>
                <li>• Angolan History</li>
                <li>• Gamified activities during Club Time</li>
              </ul>
            </div>
            <div className="text-center">
              <Image
                src="/music.webp"
                alt="Students participating in activities"
                width={500}
                height={400}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Academic Staff Section - REFACTORED 
        <div className="bg-indigo-50 p-8 rounded-xl mb-16">
          <h2 className="text-3xl font-bold text-indigo-900 mb-8 text-center">
            Our Academic Staff
          </h2>
          <p className="text-gray-700 text-center max-w-4xl mx-auto mb-8">
            Meet our dedicated team of experienced educators, including
            expatriate Ph.D and Master-level certified teachers, licensed
            psychologists, and specialists who speak multiple languages to serve
            our diverse community.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {staffMembers.map((staff) => (
              <div
                key={staff.id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full overflow-hidden">
                    <Image
                      src={staff.image}
                      alt={staff.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {staff.name}
                  </h3>
                  <p className="text-indigo-600 font-semibold mb-2">
                    {staff.position}
                  </p>
                  <p className="text-sm text-gray-600">{staff.qualification}</p>
                </div>
              </div>
            ))}
          </div>

        
          <div className="mt-8 bg-white p-6 rounded-xl">
            <h3 className="text-xl font-bold text-indigo-900 mb-4 text-center">
              Our Team&apos;s Expertise
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-800 mb-2">
                  Academic Qualifications
                </h4>
                <p className="text-sm text-gray-700">
                  Ph.D and Master-level certified teachers with international
                  experience
                </p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-800 mb-2">
                  Language Support
                </h4>
                <p className="text-sm text-gray-700">
                  Fluent in English, Portuguese, Spanish, French, Arabic, and
                  Hindi
                </p>
              </div>
            </div>
          </div>
        </div>*/}

        {/* Campus Life */}
        <div
          ref={campusSectionAnimation.ref}
          className={`bg-yellow-50 p-8 rounded-xl mb-16 transition-all duration-1000 ease-out ${campusSectionAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-2xl font-bold text-yellow-900 mb-6 text-center">
            Campus Life
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                Outdoor Learning
              </h3>
              <p className="text-gray-700">
                All students eat lunch outside in the shaded area to allow more
                interaction with nature and in order to preserve more social
                distance until our new café is built on Block 2 of our extended
                campus.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                Physical Education
              </h3>
              <p className="text-gray-700">
                We continue our physical education courses for grades 1 thru 8
                outside of the gym this year to maximize personal space. High
                school students may use our gym after school hours.
              </p>
            </div>
          </div>
        </div>

        {/* Enrollment Section */}
        <div
          ref={enrollmentSectionAnimation.ref}
          className={`bg-blue-50 p-8 rounded-xl mb-16 transition-all duration-1000 ease-out ${enrollmentSectionAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Flexible Enrollment
          </h2>
          <p className="text-gray-700 mb-4">
            Our flexible enrollment allows families to join at the right time
            for their needs. Consider joining in August and January to gain the
            full benefit of courses and tuition.
          </p>
          <div className="flex items-center gap-4 text-blue-800">
            <Phone className="w-5 h-5" />
            <p className="font-semibold">945.333.000</p>
          </div>
        </div>

        {/* Location Section */}
        <div
          ref={locationSectionAnimation.ref}
          className={`bg-gray-50 p-8 rounded-xl transition-all duration-1000 ease-out ${locationSectionAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-start gap-4 mb-6">
            <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Luanda – Rosalinda Condominium
              </h2>
              <p className="text-gray-700 leading-relaxed">
                This modern development includes residences, United Nations, and
                other Angolan Ministries. Our campus spans three buildings with
                over 3,600 square meters of spacious tech-rich classrooms,
                landscaped patios, and a shared playground.
              </p>
              <p className="text-gray-700 mt-4">
                ASA Rosalinda is located on Samba Road southbound, in Futungo.
                We are across the street from Sonangol&apos;s Paz Flor, up the
                hill from ENAPP.
              </p>
            </div>
          </div>
        </div>

        {/* Accreditation Section */}
        <div
          ref={accreditationSectionAnimation.ref}
          className={`mt-16 bg-white p-8 rounded-xl border border-gray-200 transition-all duration-1000 ease-out ${accreditationSectionAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Accreditation
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Ministry Recognition
              </h3>
              <p className="text-gray-700 mb-4">
                The Angolan Ministry of Education licenses the American Schools
                of Angola.
              </p>
              <p className="text-gray-700">
                <strong>
                  USA K-14 curricula are aligned to state and national standards
                  recognized by the U.S Dept. of Education
                </strong>
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-900 mb-4">
                University Recognition
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>
                  American Schools of Angola grants an accredited American high
                  school diploma recognized at universities worldwide
                </strong>
              </p>
              <p className="text-gray-700">
                In partnership with Edmentum / EDOptions Academy which is
                directly accredited by Cognia
              </p>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-purple-900 mb-4 text-center">
              Dual Enrollment Program
            </h3>
            <p className="text-gray-700 text-center">
              <strong>
                U.S. university associate degree or credits are transcribed and
                issued by Arizona State University to dual-enrolled early
                college students
              </strong>
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="text-center">
                <Image
                  src="/ministry-logo.webp"
                  alt="Angolan Ministry of Education"
                  width={200}
                  height={150}
                  className="mx-auto mb-2"
                />
                <p className="text-sm text-gray-600">Ministry of Education</p>
              </div>
              <div className="text-center">
                <Image
                  src="/credencialimg.png"
                  alt="Accreditation credential"
                  width={100}
                  height={150}
                  className="mx-auto mb-2"
                />
                <p className="text-sm text-gray-600">
                  Accreditation Certificate
                </p>
              </div>
              <div className="text-center">
                <Image
                  src="/advenced.jpg"
                  alt="Advanced accreditation"
                  width={200}
                  height={150}
                  className="mx-auto mb-2"
                />
                <p className="text-sm text-gray-600">Advanced Accreditation</p>
              </div>
              <div className="text-center">
                <Image
                  src="/AdvancED.png"
                  alt="AdvancED accreditation"
                  width={200}
                  height={150}
                  className="mx-auto mb-2"
                />
                <p className="text-sm text-gray-600">AdvencED Accreditation</p>
              </div>
              <div className="text-center">
                <Image
                  src="/cognia.png"
                  alt="Cognia accreditation"
                  width={200}
                  height={150}
                  className="mx-auto mb-2"
                />
                <p className="text-sm text-gray-600">Cognia Accreditation</p>
              </div>
              <div className="text-center">
                <Image
                  src="/njit.png"
                  alt="New Jersey Institute of Technology accreditation"
                  width={200}
                  height={150}
                  className="mx-auto mb-2"
                />
                <p className="text-sm text-gray-600">
                  New Jersey Institute of Technology accreditation
                </p>
              </div>
            </div>

            <div className="text-center">
              <Image
                src="/asu-logo.png"
                alt="Arizona State University"
                width={300}
                height={100}
                className="mx-auto mb-2"
              />
              <p className="text-sm text-gray-600">
                Arizona State University Partnership
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 italic">
              Proudly accredited and recognized by leading educational
              organizations worldwide
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;

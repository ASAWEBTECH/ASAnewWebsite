import React from "react";
import { Award, Cpu, BookOpen, Clock } from "lucide-react";
import Image from "next/image";
import { useInView } from 'react-intersection-observer';

function FeatureBox({
  icon: Icon,
  title,
  description,
  bgColor,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  bgColor: string;
  delay: string;
}) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`group bg-white p-6 rounded-xl transition-all duration-500 transform 
      hover:-translate-y-1 flex flex-col items-center text-center relative overflow-hidden
      ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{
        transitionDelay: delay + 'ms'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/30 to-transparent opacity-0 "></div>
      
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-4 rounded-full mb-4 relative z-10">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      
      <h3 className="text-lg font-bold text-gray-800 mb-2 relative z-10">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed relative z-10">{description}</p>
      
      <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: bgColor }}></div>
    </div>
  );
}

type AccreditationLogoProps = {
  src: string;
  alt: string;
  delay: string;
};

// Update the AccreditationLogo component to include labels
function AccreditationLogo({ src, alt }: AccreditationLogoProps) {
  return (
    <div className="flex-shrink-0 w-[180px] mx-3 hover:opacity-100 transition-all duration-300 transform flex flex-col items-center">
      <div className="h-[80px] flex items-center justify-center mb-2">
        <Image 
          src={src}
          alt={alt}
          width={100}
          height={80}
          className="max-w-full h-auto object-contain transition-all duration-300"
        />
      </div>
      <span className="text-xs text-gray-600 font-medium text-center whitespace-normal px-2">
        {alt}
      </span>
    </div>
  );
}

function QuadradosP() {
  const features = [
    {
      icon: Award,
      title: "Internationally Recognized Certificate",
      description:
        "With this, our students stand out in the job market and global academic opportunities.",
      bgColor: "#fdaf17",
      delay: "0",
    },
    {
      icon: Cpu,
      title: "Cutting-edge Technologies",
      description:
        "We utilize cutting-edge technologies to ensure that students have access to the most advanced tools, combining technological innovation with quality education.",
      bgColor: "#0083cb",
      delay: "100",
    },
    {
      icon: BookOpen,
      title: "Blended Learning",
      description:
        "This model offers flexibility to students, allowing them to learn autonomously while maintaining interaction with teachers and peers in face-to-face activities.",
      bgColor: "#01944d",
      delay: "200",
    },
    {
      icon: Clock,
      title: "Self-pacing",
      description:
        "This method offers autonomy for each student to progress according to their understanding of the content, ensuring more effective learning tailored to their needs.",
      bgColor: "#ed1b24",
      delay: "300",
    },
  ];

  const accreditations = [
    {
      src: "/asu-logo.png",
      alt: "Arizona State University"
    },
    {
      src: "/credencialimg.png",
      alt: "National Collegiate Athletic Association"
    },
    {
      src: "/ministry-logo.webp",
      alt: "Angolan Ministry of Education"
    },
    {
      src: "/resiliart.webp",
      alt: "ResiliART Angola"
    },
        {
      src: "/unesco.png",
      alt: "UNESCO"
    },
        {
      src: "/bienal.webp",
      alt: "Bienal de Luanda"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 px-4">
      {/* Updated Welcome Message Section */}
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-24">
          {/* Update flex container for better mobile responsiveness */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            {/* Update image container for mobile */}
            <div className="w-full lg:w-[450px] flex-shrink-0">
              <div className="relative w-full h-[400px] lg:h-[600px] rounded-3xl overflow-hidden">
                <Image
                  src="/AcademicDirector.webp"
                  alt="Dr. Babita Parashar"
                  fill
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 450px"
                  placeholder="blur"
                  blurDataURL="/AcademicDirector.webp"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  style={{ 
                    objectPosition: 'center 15%',
                    imageRendering: 'crisp-edges'
                  }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-center backdrop-blur-[2px] bg-black/10">
                  <h3 className="font-bold text-xl lg:text-2xl text-white mb-1 drop-shadow-sm">Dr. Babita Parashar</h3>
                  <p className="text-[#ffac1e] text-base lg:text-lg font-medium drop-shadow-sm">Academic Director</p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="flex-1 w-full">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-0">
                <span className="text-[#2e2b70] text-sm font-medium">Academic Director&apos;s Message</span>
              </div>
              
              <h1 className="text-4xl font-bold text-[#2e2b70] mb-4 leading-tight">
                Welcome to American Schools of Angola
              </h1>

              {/* Update the text content with escaped entities */}
              <div className="prose prose-lg max-w-none space-y-6 text-gray-600">
                <p className="text-xl font-medium text-[#2e2b70]">Dear All,</p>
                <p>Welcome to <strong className="text-[#2e2b70]">American Schools of Angola</strong>. 
                   As we begin our Academic year {(() => {
                    const currentDate = new Date();
                    const currentYear = currentDate.getFullYear();
                    const currentMonth = currentDate.getMonth();
                    const academicStartYear = currentMonth >= 7 ? currentYear : currentYear - 1;
                    return `${academicStartYear}-${(academicStartYear + 1).toString().slice(-2)}`;
                   })()}, we are renewing our assurance that each of our learner is nurtured to reach their highest potential.</p>
                <p>The transformative role of empathetic and compassionate teachers goes above and beyond that any assessment test can measure; we are proud to be transforming lives day by day.</p>
                <p>Aligning curricular practices with <strong className="text-[#2e2b70]">United Nations Development Goals (UNSDG)</strong> in our everyday classroom, we have performing arts, visual arts, sports, community connect, STEM and Social Emotional Learning forming the core fabric of our holistic development approach.</p>
                <p>With our unique Early College High School program, our high school students are pursuing dual enrolment course and getting ready for their higher education journey while still enjoying the warmth of being at home.</p>
                <div className="border-l-4 border-[#2e2b70] pl-6 my-8">
                  <p className="text-lg italic text-[#2e2b70]">
                    &ldquo;Our collaborations with Arizona State University, Bienal de Luanda, ResiliART, UNESCO, 
                    United Youth Taekwondo Initiative, and K-Pop are a testament to the global vision that 
                    American Schools of Angola stands for.&rdquo;
                  </p>
                </div>
                <p className="text-xl font-semibold text-[#2e2b70]">#BeExtraordinary</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid - Reduced size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureBox
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              bgColor={feature.bgColor}
              delay={feature.delay}
            />
          ))}
        </div>

        {/* Simplified Accreditation Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#2e2b70] mb-3">Our Accreditations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are proud to be recognized and accredited by these prestigious institutions,
            ensuring the highest standards of educational excellence.
          </p>
        </div>
        <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-white overflow-hidden">
          <div className="relative w-full">
            {/* Left fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            
            {/* Right fade effect */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
            
            <div className="flex animate-scroll-smooth whitespace-nowrap items-center py-8">
              {[...accreditations, ...accreditations, ...accreditations, ...accreditations].map((accreditation, index) => (
          <AccreditationLogo 
            key={`${accreditation.alt}-${index}`}
            src={accreditation.src}
            alt={accreditation.alt}
            delay={`delay-${(index % 10) * 50}`}
          />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-smooth {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        
        .animate-scroll-smooth {
          animation: scroll-smooth 80s linear infinite;
          width: fit-content;
          display: flex;
        }
        
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }
        
        .delay-0 { animation-delay: 0ms; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}</style>
    </div>
  );
}

export default QuadradosP;
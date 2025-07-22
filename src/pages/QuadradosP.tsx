import React from "react";
import { Award, Cpu, BookOpen, Clock } from "lucide-react";
import Image from "next/image";

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
  return (
    <div className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center text-center relative overflow-hidden ${delay}`}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Floating particles effect */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-blue-200 rounded-full animate-bounce delay-100"></div>
      <div className="absolute top-8 left-6 w-1 h-1 bg-indigo-300 rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-12 right-8 w-1.5 h-1.5 bg-purple-200 rounded-full animate-bounce delay-500"></div>
      
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-full mb-6 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 relative z-10">
        <Icon className="w-10 h-10 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-800 transition-colors duration-300 relative z-10">{title}</h3>
      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 relative z-10">{description}</p>
      
      {/* Enhanced bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-2 transition-all duration-300 group-hover:h-3" style={{ backgroundColor: bgColor }}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-500"></div>
    </div>
  );
}

type AccreditationLogoProps = {
  src: string;
  alt: string;
  delay: string;
};

 function AccreditationLogo({ src, alt }: AccreditationLogoProps) {
  return (
    <div className={`flex-shrink-0 mx-8 hover:opacity-100 transition-all duration-300 transform flex flex-col items-center`}>
      <Image 
        src={src}
        alt={alt}
        width={80}
        height={60}
        className="max-w-full max-h-full object-contain transition-all duration-300"
      />
      <span className="text-sm text-gray-600 font-medium text-center mt-2">
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
      delay: "delay-0",
    },
    {
      icon: Cpu,
      title: "Cutting-edge Technologies",
      description:
        "We utilize cutting-edge technologies to ensure that students have access to the most advanced tools, combining technological innovation with quality education.",
      bgColor: "#0083cb",
      delay: "delay-100",
    },
    {
      icon: BookOpen,
      title: "Blended Learning",
      description:
        "This model offers flexibility to students, allowing them to learn autonomously while maintaining interaction with teachers and peers in face-to-face activities.",
      bgColor: "#01944d",
      delay: "delay-200",
    },
    {
      icon: Clock,
      title: "Self-pacing",
      description:
        "This method offers autonomy for each student to progress according to their understanding of the content, ensuring more effective learning tailored to their needs.",
      bgColor: "#ed1b24",
      delay: "delay-300",
    },
  ];

  const accreditations = [
     {
      src: "/AdvancED.png",
      alt: "AdvancED"
    },
    {
      src: "/advenced.jpg", 
      alt: "AdvancED"
    },
    {
      src: "/asu-logo.png",
      alt: "Arizona State University"
    },
    {
      src: "/cognia.png",
      alt: "Cognia"
    },
    {
      src: "/credencialimg.png",
      alt: "National Collegiate Athletic Association"
    },
    {
      src: "/njit.png",
      alt: "New Jersey Institute of Technology"
    },
    {
      src: "/ministry-logo.jpg",
      alt: "Angolan Ministry of Education"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-[#2e2b70] bg-clip-text text-transparent mb-6">
            Our Educational Features
          </h2>
          <div className="w-24 h-1 bg-[#2e2b70] mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover what makes our educational approach unique and effective for modern learners
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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

        {/* Accreditation Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-transparent to-purple-50 opacity-50"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          
          <div className="text-center mb-8 relative z-10">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Nationally and Internationally Accredited
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our programs are recognized and accredited by leading national and international organizations, ensuring global recognition and quality standards.
            </p>
          </div>

          {/* Scrolling logos */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-smooth">
              {[...accreditations, ...accreditations, ...accreditations].map((accreditation, index) => (
                <AccreditationLogo 
                  key={index} 
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
           animation: scroll-smooth 10s linear infinite;
        }
        
        .animate-scroll-smooth:hover {
          animation-play-state: paused;
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
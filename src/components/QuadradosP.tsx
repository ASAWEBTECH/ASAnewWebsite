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
    <div className={`group bg-white p-6 rounded-xl transition-all duration-500 transform hover:-translate-y-1 flex flex-col items-center text-center relative overflow-hidden ${delay}`}>
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
    },
        {
      src: "/resiliart.png",
      alt: "ResiliART Angola"
    },
        {
      src: "/unesco.png",
      alt: "UNESCO"
    },
        {
      src: "/bienal.png",
      alt: "Bienal de Luanda"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
      <div className="text-center mb-16">
        <p className="text-lg font-medium text-[#2e2b70]/80 mb-2">Academic Director&apos;s Message</p>
        <h1 className="text-5xl font-bold text-[#2e2b70] mb-4 relative">
          Welcome Message
          <span className="block w-24 h-1 bg-[#2e2b70] mx-auto mt-4"></span>
        </h1>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Welcome Message Section */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mb-16">
          <div className="flex flex-col md:flex-row gap-12 items-stretch">
            <div className="md:w-1/3">
              <div className="relative h-full rounded-2xl shadow-lg">
          <Image
            src="/AcademicDirector.webp"
            alt="Dr. Babita Parashar"
            fill
            className="rounded-2xl object-cover"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent h-32">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <p className="font-semibold text-white text-2xl drop-shadow-lg">Dr. Babita Parashar</p>
              <p className="text-white text-lg font-medium drop-shadow-lg">Academic Director</p>
            </div>
          </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-[#2e2b70] mb-8 border-b pb-4">Dear All,</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>Welcome to <strong className="text-[#2e2b70]">American Schools of Angola</strong>. As we begin our Academic year {(() => {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth();
            // Academic year starts in August (month 7)
            const academicStartYear = currentMonth >= 7 ? currentYear : currentYear - 1;
            return `${academicStartYear}-${(academicStartYear + 1).toString().slice(-2)}`;
            })()}, we are renewing our assurance that each of our learner is nurtured to reach their highest potential. The transformative role of empathetic and compassionate teachers goes above and beyond that any assessment test can measure; we are proud to be transforming lives day by day.</p>
          <p>Aligning curricular practices with <strong className="text-[#2e2b70]">United Nations Development Goals (UNSDG)</strong> in our everyday classroom, we have performing arts, visual arts, sports, community connect, STEM and Social Emotional Learning forming the core fabric of our holistic development approach.</p>
          <p>With our unique Early College High School program, our high school students are pursuing dual enrolment course and getting ready for their higher education journey while still enjoying the warmth of being at home.</p>
          <p><strong className="text-[#2e2b70]">Arizona State University</strong>, <strong className="text-[#2e2b70]">Bienal de Luanda</strong>, <strong className="text-[#2e2b70]">ResiliART</strong>, <strong className="text-[#2e2b70]">UNESCO</strong>, <strong className="text-[#2e2b70]">United Youth Taekwondo Initiative</strong>, <strong className="text-[#2e2b70]">K-Pop</strong> collaborations are a testament of global vision that <strong className="text-[#2e2b70]">American Schools of Angola</strong> stands for.</p>
          <p className="font-medium text-[#2e2b70] text-lg">#Be Extraordinary</p>
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
import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  BookOpen,
  Globe,
  Music,
  Activity,
  GraduationCap,
  Download
} from "lucide-react";
import DynamicCalendar from "@/components/Calendar";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { useScrollAnimation, useStaggeredAnimation } from "../hooks/useScrollAnimation";

interface Subject {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  images: {
    url: string;
    label: string;
  }[];
}

interface GradeLevel {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  mainImage: string;
  subjects: Subject[];
  primaryColor: string;
  bgColor: string;
  subjectsDescription?: string; // Nova propriedade opcional
}

const gradeLevels: GradeLevel[] = [
  {
    id: "pre-k-kindergarten",
    title: "PRE-KINDERGARTEN | KINDERGARTEN",
    shortDescription:
      "At the American School of Angola, our early learning programs are designed to integrate play-based approaches with meaningful technological experiences al based on a student-centered dynamic. Beyond our dynamic curriculum, our students thrive through specialized classes,",
    fullDescription:
      "Our Pre-K and Kindergarten programs provide a nurturing, play-based environment where children build foundational skills in language, math, and socialization. Through hands-on activities, music, art, and guided exploration, we foster curiosity, creativity, and a love for learning from the very start. Our comprehensive curriculum is designed to meet each child's developmental needs, incorporating the latest research in early childhood education. We believe that learning should be joyful and meaningful, which is why our experienced educators create engaging experiences that challenge and inspire young minds. Our state-of-the-art facilities include dedicated learning centers, outdoor exploration areas, and technology-enhanced classrooms that support 21st-century learning. We maintain small class sizes to ensure personalized attention, and our multi-sensory approach accommodates different learning styles and preferences. Parents are valued partners in their child's educational journey. We provide regular communication, family engagement opportunities, and resources to support learning at home. Our goal is to build a strong foundation that prepares children not just for elementary school, but for a lifetime of learning and growth.",
    mainImage: "/FundoK.webp",
    primaryColor: "indigo",
    bgColor: "bg-white",
    subjectsDescription:
      "Each subject in our Pre-K and Kindergarten program is designed to foster foundational skills and creativity through engaging, age-appropriate activities.",
    subjects: [
      {
        id: "early-literacy",
        name: "Early Literacy & Language",
        description:
          "Foundation in reading, writing, and communication skills through interactive storytelling, phonics, and creative activities.",
        icon: <BookOpen className="w-6 h-6" />,
        images: [
          {
            url: "/k1.webp",
            label: "Reading Circle",
          },
        ],
      },
      {
        id: "arts-music",
        name: "Arts & Music",
        description:
          "Creative expression through visual arts, music, movement, and dramatic play to develop motor skills and artistic abilities.",
        icon: <Music className="w-6 h-6" />,
        images: [
          {
            url: "/k2.webp",
            label: "Art Creation",
          },
        ],
      },
      {
        id: "physical-development",
        name: "Physical Education",
        description:
          "Development of motor skills, coordination, and healthy habits through structured physical activities and creative movement.",
        icon: <Activity className="w-6 h-6" />,
        images: [
          {
            url: "/k3.webp",
            label: "Motor Skills Development",
          },
        ],
      },
    ],
  },
  {
    id: "elementary",
    title: "ELEMENTARY SCHOOL",
    shortDescription:
      "Our Elementary program builds upon early learning foundations with a comprehensive curriculum that develops critical thinking, academic skills, and social responsibility. Students engage in project-based learning, collaborative activities, and individualized instruction that meets diverse learning needs.",
    fullDescription:
      "Our Elementary program builds upon early learning foundations with a comprehensive curriculum that develops critical thinking, academic skills, and social responsibility. Students engage in project-based learning, collaborative activities, and individualized instruction that meets diverse learning needs. Our elementary curriculum emphasizes mastery of core subjects while integrating technology, arts, and physical education to create well-rounded learners. We focus on developing strong study habits, organizational skills, and independent thinking that will serve students throughout their academic journey. Our dedicated elementary teachers create supportive classroom environments where students feel safe to take risks, ask questions, and explore new ideas. We use differentiated instruction to ensure every student is challenged at their appropriate level while receiving the support they need to succeed. Regular assessments and progress monitoring help us track student growth and adjust instruction accordingly. Family engagement remains a priority, with regular communication, volunteer opportunities, and home-school partnerships that support student success.",
    mainImage: "/FundoE.webp",
    primaryColor: "indigo",
    bgColor: "bg-white",
    subjectsDescription:
      "In Elementary School, subjects are designed to be engaging and relevant, helping students to connect their learning to the world around them.",
    subjects: [
      {
        id: "core-subjects",
        name: "Core Academics",
        description:
          "Comprehensive instruction in Mathematics, English Language Arts, and Science with focus on fundamental concepts and critical thinking.",
        icon: <BookOpen className="w-6 h-6" />,
        images: [
          {
            url: "/elem1.webp",
            label: "Interactive Learning",
          },
        ],
      },
      {
        id: "world-language",
        name: "World Language & Culture",
        description:
          "Introduction to language learning and cultural awareness through interactive activities.",
        icon: <Globe className="w-6 h-6" />,
        images: [
          {
            url: "/elem3.webp",
            label: "Language Learning",
          },
        ],
      },
      {
        id: "robotics-tech",
        name: "Robotics & Technology",
        description:
          "Hands-on experience with basic programming, robotics, and digital tools to develop technological literacy.",
        icon: <Activity className="w-6 h-6" />,
        images: [
          {
            url: "/elem2.webp",
            label: "Programming Basics",
          },
        ],
      },
    ],
  },
  {
    id: "middle-school",
    title: "MIDDLE SCHOOL",
    shortDescription:
      "Our Middle School program prepares students for the challenges of adolescence and high school through rigorous academics, leadership opportunities, and personal growth experiences. We focus on developing independence, critical thinking, and self-advocacy skills.",
    fullDescription:
      "Our Middle School program prepares students for the challenges of adolescence and high school through rigorous academics, leadership opportunities, and personal growth experiences. We focus on developing independence, critical thinking, and self-advocacy skills. Our middle school curriculum provides a bridge between elementary foundations and high school preparation, offering advanced coursework in core subjects while introducing specialized electives and extracurricular activities. We understand the unique needs of adolescents and provide a supportive environment that encourages exploration, risk-taking, and personal growth. Our experienced middle school teachers use innovative teaching methods, including project-based learning, collaborative inquiry, and technology integration to engage students and prepare them for 21st-century challenges. We emphasize the development of executive functioning skills, time management, and organizational strategies that will serve students well in high school and beyond. Social and emotional learning remains a priority, with programs designed to help students navigate the complexities of adolescence while building resilience, empathy, and leadership skills.",
    mainImage:
      "/FundoM.webp",
    primaryColor: "indigo",
    bgColor: "bg-white",
    subjectsDescription:
      "Middle School subjects challenge students to think critically and creatively, preparing them for the demands of high school and beyond.",
    subjects: [
      {
        id: "advanced-core",
        name: "Advanced Core Studies",
        description:
          "Rigorous academics in Mathematics, Sciences, and Literature with emphasis on analytical and research skills.",
        icon: <GraduationCap className="w-6 h-6" />,
        images: [
          {
            url: "/mid1.webp",
            label: "Advanced Mathematics",
          },
        ],
      },
      {
        id: "angolan-history",
        name: "Angolan History & Social Studies",
        description:
          "Deep exploration of Angolan heritage, culture, and its place in global context through interactive learning.",
        icon: <Globe className="w-6 h-6" />,
        images: [
          {
            url: "/mid2.webp",
            label: "Cultural Heritage",
          },
        ],
      },
      {
        id: "taekwondo-pe",
        name: "Taekwondo & Physical Education",
        description:
          "Comprehensive physical development program combining martial arts discipline with traditional sports activities.",
        icon: <Activity className="w-6 h-6" />,
        images: [
          {
            url: "/mid3.webp",
            label: "Martial Arts Discipline",
          },
        ],
      },
    ],
  },
  {
    id: "high-school",
    title: "HIGH SCHOOL",
    shortDescription:
      "Our High School program offers a comprehensive college-preparatory curriculum with Advanced Placement courses, career pathways, and extensive extracurricular opportunities. We prepare students for success in higher education and future careers.",
    fullDescription:
      "At the American School of Angola, our early learning programs are designed to integrate play-based approaches with meaningful technological experiences al based on a student-centered dynamic. Beyond our dynamic curriculum, our students thrive through specialized classes, incluindo Educação Física (PE), artes e STEM, promovendo a criatividade. Orientados por uma trilha de desenvolvimento personalizada facilitada pelo nosso centro de desenvolvimento infantil, garantimos que seu filho não apenas tenha um desempenho acadêmico excelente, mas também desbloqueie todo o seu potencial. Ótimas notícias! Não se preocupe com procedimentos de matrícula inflexíveis. Os alunos podem se matricular a qualquer momento de agosto a maio, proporcionando flexibilidade para as famílias ao longo do ano letivo.",
    mainImage: "/FundoH.webp",
    primaryColor: "indigo",
    bgColor: "bg-white",
    subjectsDescription:
      "High School subjects offer depth and rigor, with opportunities for students to pursue advanced studies and specialized interests.",
    subjects: [
      {
        id: "advanced-placement",
        name: "Advanced Placement Studies",
        description:
          "College-level courses in Mathematics, Sciences, and English Literature preparing students for university success.",
        icon: <GraduationCap className="w-6 h-6" />,
        images: [
          {
            url: "/high.jpg",
            label: "AP Sciences",
          },
        ],
      },
      {
        id: "literary-club",
        name: "Literary Club & Advanced Writing",
        description:
          "Advanced writing, literary analysis, and creative expression through our dedicated literary program.",
        icon: <BookOpen className="w-6 h-6" />,
        images: [
          {
            url: "/high2.jpg",
            label: "Creative Writing",
          },
        ],
      },
      {
        id: "performing-arts",
        name: "Performing Arts",
        description:
          "Comprehensive program in theater, music, and dance, culminating in professional-level productions.",
        icon: <Music className="w-6 h-6" />,
        images: [
          {
            url: "/high3.jpg",
            label: "Creative Writing",
          },
        ],
      },
    ],
  },
];

// Novo componente para cada seção de gradeLevel
interface GradeLevelSectionProps {
  gradeLevel: GradeLevel;
  isExpanded: boolean;
  toggleSection: (id: string) => void;
  getColorClasses: (color: string) => {
      primary: string;
      button: string;
      accent: string;
      bg: string;
      hover: string;
      border: string;
    };
}

function GradeLevelSection({
  gradeLevel,
  isExpanded,
  toggleSection,
  getColorClasses,
}: GradeLevelSectionProps) {
  const gradeAnimation = useScrollAnimation({ threshold: 0.1, triggerOnce: true }) as { ref: React.RefObject<HTMLDivElement>, isVisible: boolean };
  const contentAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: true }) as { ref: React.RefObject<HTMLDivElement>, isVisible: boolean };
  const subjectsAnimation = useStaggeredAnimation(gradeLevel.subjects.length, { threshold: 0.1, triggerOnce: true }) as { ref: React.RefObject<HTMLDivElement>, isVisible: boolean };

  const colors = getColorClasses(gradeLevel.primaryColor);

  return (
          <section
            key={gradeLevel.id}
      id={gradeLevel.id}
            className={`py-16 px-4 ${gradeLevel.bgColor}`}
          >
            {/* Image */}
            <div 
              ref={gradeAnimation.ref}
              className={`relative w-screen left-1/2 right-1/2 -translate-x-1/2 group bottom-10 transition-all duration-1000 ease-out ${
                gradeAnimation.isVisible 
                  ? "opacity-100 translate-y-0 scale-100" 
                  : "opacity-0 translate-y-8 scale-95"
              }`}
            >
              <div
                className="w-full"
                style={{ maxHeight: "480px", overflow: "hidden" }}
              >
                <Image
                  src={gradeLevel.mainImage}
                  alt={`${gradeLevel.title} classroom`}
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                    width: "100%",
                    height: "auto",
                    maxHeight: "480px",
                  }}
                  width={1920}
                  height={480}
                  priority={true}
                />
                
                <div className="pointer-events-none absolute bottom-[-2px] left-0 w-full z-20 overflow-hidden">
                  {/* First cloud, left to right, lower opacity */}
                  <svg
                    viewBox="0 0 1440 220"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-[100px] min-w-full"
                    style={{
                      display: "block",
                      width: "100vw",
                      minWidth: "100vw",
                    }}
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0,160 Q360,220 720,160 T1440,160 V220 H0 Z"
                      fill="white"
                      opacity="0.35"
                    />
                    <path
                      d="M0,200 Q360,260 720,200 T1440,200 V220 H0 Z"
                      fill="white"
                      opacity="0.18"
                    />
                  </svg>
                  {/* Second cloud, right to left, higher opacity, mirrored */}
                  <svg
                    viewBox="0 0 1440 220"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-[120px] absolute left-0 top-0 min-w-full"
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
                      d="M0,160 Q360,220 720,160 T1440,160 V220 H0 Z"
                      fill="white"
                      opacity="0.65"
                    />
                    <path
                      d="M0,200 Q360,260 720,200 T1440,200 V220 H0 Z"
                      fill="white"
                      opacity="0.35"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="max-w-7xl mx-auto">
              {/* Main Program Section */}
              <div 
                ref={contentAnimation.ref}
                className={`mb-16 transition-all duration-1000 ease-out ${
                  contentAnimation.isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="flex justify-center">
                  <div className="w-full max-w-7xl px-4"> {/* Removido grid, adicionado width full */}
                    <div className="flex flex-col items-center space-y-8 w-full">
                      <div className="flex justify-center w-full">
                        <div 
                          className={`prose prose-lg text-gray-700 leading-relaxed w-full transition-all duration-1000 ease-out ${
                            contentAnimation.isVisible 
                              ? "opacity-100 translate-x-0" 
                              : "opacity-0 -translate-x-8"
                          }`}
                          style={{ transitionDelay: "200ms" }}
                        >
                          <div
                            className={`transition-all duration-500 ease-in-out ${
                              isExpanded
                                ? "max-h-[700px]"
                                : "max-h-40 overflow-hidden"
                            }`}
                          >
                            <p className="text-justify mb-6 w-full"> {/* Adicionado text-justify e w-full */}
                              {isExpanded
                                ? gradeLevel.fullDescription
                                : gradeLevel.shortDescription}
                            </p>
                          </div>
                          {!isExpanded && (
                            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                          )}
                        </div>
                      </div>

                      <div 
                        className={`flex flex-wrap gap-4 justify-center w-full transition-all duration-1000 ease-out ${
                          contentAnimation.isVisible 
                            ? "opacity-100 translate-y-0" 
                            : "opacity-0 translate-y-4"
                        }`}
                        style={{ transitionDelay: "400ms" }}
                      >
                        <button
                          onClick={() => window.open("https://asangola.openapply.com/", "_blank")}
                          className={`${colors.button} text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105`}
                        >
                          ENROLL NOW
                        </button>

                        <button
                          onClick={() => toggleSection(gradeLevel.id)}
                          className={`flex items-center gap-2 text-gray-600 hover:${colors.accent} px-6 py-4 rounded-xl font-medium text-lg transition-all duration-300 group hover:scale-105`}
                        >
                          View More
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Subjects Section */}
              <div 
                ref={subjectsAnimation.ref}
                className={`bg-[#fbfeff] p-8 rounded-2xl shadow-lg transition-all duration-1000 ease-out ${
                  subjectsAnimation.isVisible 
                    ? "opacity-100 translate-y-0 scale-100" 
                    : "opacity-0 translate-y-8 scale-95"
                }`}
              >
                <div 
                  className={`flex items-center gap-4 mb-8 transition-all duration-1000 ease-out ${
                    subjectsAnimation.isVisible 
                      ? "opacity-100 translate-x-0" 
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <h3 className={`text-3xl font-bold ${colors.primary}`}>
                    KEY SUBJECTS
                  </h3>
                  <div
                    className={`flex-1 h-px bg-gradient-to-r ${colors.border} to-transparent`}
                  ></div>
                </div>

                <p 
                  className={`text-xl text-gray-600 mb-12 max-w-4xl transition-all duration-1000 ease-out ${
                    subjectsAnimation.isVisible 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "300ms" }}
                >
                  {gradeLevel.subjectsDescription ||
                    "Key academic subjects are thoughtfully integrated into our curriculum to prepare students for an exceptional future"}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {gradeLevel.subjects.map((subject, index) => (
                    <div
                      key={subject.id}
                      className={`flex flex-col transition-all duration-500 ease-out ${
                        subjectsAnimation.isVisible 
                          ? "opacity-100 translate-y-0" 
                          : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: `${400 + index * 150}ms` }}
                    >
                      {/* Subject Header - Now better aligned */}
                      <div className="flex flex-col items-center text-center mb-6">
                        <div className={`p-3 ${colors.bg} rounded-xl ${colors.accent} mb-4`}>
                          {subject.icon}
                        </div>
                        <h4 className={`text-xl font-semibold ${colors.primary} mb-2`}>
                          {subject.name}
                        </h4>
                        <p className="text-gray-600 text-sm px-4">
                          {subject.description}
                        </p>
                      </div>

                      {/* Subject Image - Full width and consistent height */}
                      <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                        <Image
                          src={subject.images[0].url}
                          alt={subject.images[0].label}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          style={{ aspectRatio: "16/9" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
}

export default function Education() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );

  // Animation hooks
  const academicExcellenceAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: true }) as { ref: React.RefObject<HTMLDivElement>, isVisible: boolean };
  const calendarAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: true }) as { ref: React.RefObject<HTMLDivElement>, isVisible: boolean };
  const logosAnimation = useScrollAnimation({ threshold: 0.3, triggerOnce: true }) as { ref: React.RefObject<HTMLDivElement>, isVisible: boolean };

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const getColorClasses = (color: string) => {
    type ColorClasses = {
      primary: string;
      button: string;
      accent: string;
      bg: string;
      hover: string;
      border: string;
    };

    const colorMap: { [key: string]: ColorClasses } = {
      indigo: {
        primary: "text-indigo-900",
        button: "bg-indigo-700 hover:bg-indigo-800",
        accent: "text-indigo-700",
        bg: "bg-indigo-100",
        hover: "hover:bg-indigo-200",
        border: "from-indigo-200",
      },
    };
    return colorMap[color];
  };

  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);

  useEffect(() => {
    // Trigger header animations after component mounts
    const timer = setTimeout(() => {
      setIsHeaderLoaded(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  // Adicione este useEffect para rolar para a seção correta
  useEffect(() => {
    const scrollToSection = () => {
      const sectionId = localStorage.getItem("scrollToSection");
      if (sectionId) {
        // Add a delay to ensure the page is fully loaded
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            // Clear the localStorage after scrolling
            localStorage.removeItem("scrollToSection");
          }
        }, 1000); // Increased timeout to ensure page load
      }
    };

    scrollToSection();
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <div className="relative h-[90vh] flex items-center w-screen left-1/2 right-1/2 -translate-x-1/2">
        <div className="absolute inset-0 z-0">
          <Image
            src="/fundoEducation.webp"
            alt="Gallery background"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
                   <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-gray-200/10" />
        </div>

        <div className="relative z-10 text-left text-white pl-8 md:pl-32 max-w-3xl top-24">
          <h1
            className={`text-4xl font-bold mb-4 leading-tight transition-all duration-1200 ease-out ${
              isHeaderLoaded
                ? "opacity-100 translate-x-0 translate-y-0"
                : "opacity-0 -translate-x-16 translate-y-6"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Empowering minds through knowledge and inspiration
          </h1>
          <p
            className={`text-xl text-white text-left transition-all duration-1000 ease-out ${
              isHeaderLoaded
                ? "opacity-100 translate-x-0 translate-y-0"
                : "opacity-0 -translate-x-12 translate-y-4"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            Our commitment to education nurtures curiosity, encourages growth,
            and prepares every student to shape the future with confidence and
            purpose.
          </p>
        </div>

        {/* Cloud effect at the bottom */}
        <div className="pointer-events-none absolute bottom-[-2px] left-0 w-full z-20 overflow-hidden">
          {/* First cloud, left to right, lower opacity */}
          <svg
            viewBox="0 0 1440 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[250px] min-w-full"
            style={{
              display: "block",
              width: "100vw",
              minWidth: "100vw",
            }}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,160 Q360,220 720,160 T1440,160 V220 H0 Z"
              fill="white"
              opacity="0.35"
            />
            <path
              d="M0,200 Q360,260 720,200 T1440,200 V220 H0 Z"
              fill="white"
              opacity="0.18"
            />
          </svg>
          {/* Second cloud, right to left, higher opacity, mirrored */}
          <svg
            viewBox="0 0 1440 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[270px] absolute left-0 top-0 min-w-full"
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
              d="M0,160 Q360,220 720,160 T1440,160 V220 H0 Z"
              fill="white"
              opacity="0.65"
            />
            <path
              d="M0,200 Q360,260 720,200 T1440,200 V220 H0 Z"
              fill="white"
              opacity="0.35"
            />
          </svg>
        </div>
      </div>

      <section
        ref={academicExcellenceAnimation.ref}
        className={`w-full bg-white/80 py-12 font-poppins border-b border-gray-100 transition-all duration-1000 ease-out ${
          academicExcellenceAnimation.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2
            className={`text-3xl md:text-4xl font-bold text-[#2e2b70] mb-6 transition-all duration-1000 ease-out ${
              academicExcellenceAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Academic Excellence
          </h2>
          <p
            className={`text-lg text-gray-700 mb-8 max-w-4xl mx-auto transition-all duration-1000 ease-out ${
              academicExcellenceAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            We do education differently so it&apos;s important to explain key parts
            of our whole-child program.
          </p>
          <div
            className={`text-base text-gray-600 space-y-6 max-w-4xl mx-auto transition-all duration-1000 ease-out ${
              academicExcellenceAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="text-justify">
              <p className="mb-4">
                <span className="font-semibold text-[#2e2b70]">
                  Our population:
                </span>{" "}
                ASA is an international school serving students from countries
                worldwide.
              </p>
              <p className="mb-4">
                Students must qualify at{" "}
                <span className="font-semibold">
                  B2 English language proficiency standard by grade 10
                </span>
                . We provide additional help and support for new enrolled students
                to reach our required level of proficiency.
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-left pl-4">
                <li>
                  Grade 9 students at A2-B2 level will attend two additional
                  evening courses through our adult English Language Institute
                </li>
                <li>We offer language instruction courses in middle school</li>
                <li>Elementary years use sheltered immersion to teach English</li>
              </ul>
              <p>
                ASA academic year semesters start in{" "}
                <span className="font-semibold">August</span> and{" "}
                <span className="font-semibold">January</span>. Our teachers go on
                vacation in June and our administrative team joins them in July.
                Our physical classrooms have extended vacations in December and
                mid-June throughout July.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Renderizar cada seção de gradeLevel usando o componente filho */}
      {gradeLevels.map((gradeLevel) => (
        <GradeLevelSection
          key={gradeLevel.id}
          gradeLevel={gradeLevel}
          isExpanded={expandedSections.has(gradeLevel.id)}
          toggleSection={toggleSection}
          getColorClasses={getColorClasses}
        />
      ))}

      <div
        id="calendar"
        ref={calendarAnimation.ref}
        className={`min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 flex flex-col items-center justify-center transition-all duration-1000 ease-out ${
          calendarAnimation.isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Texts and Button on the left */}
          <div 
            className={`flex-1 order-2 md:order-1 transition-all duration-1000 ease-out ${
              calendarAnimation.isVisible 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-2">
              Academic Calendar
            </h3>
            <p className="text-gray-700 mb-4 max-w-lg">
              Our academic calendar is updated annually to keep you informed about all important dates throughout the school year. Key events and holidays are highlighted with different colors, and a legend is provided in the calendar header for easy reference. Stay up to date with semester start and end dates, exam periods, school breaks, and special activities. With just one click, you can download the full calendar for your convenience. Make sure to check back regularly for any updates or changes, and never miss an important school event!
            </p>
            <div 
              className={`mt-6 transition-all duration-1000 ease-out ${
                calendarAnimation.isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <span className="mb-3 block text-lg font-semibold text-indigo-800">
                Download the full calendar with a single click!
              </span>
              <a
                href="https://dl.dropboxusercontent.com/scl/fi/res2em40rq4fh4gjbxl6s/Academic-Calendar-25-26-3.pdf?rlkey=j6hr94iqs6v0xwi5teafc93s3&st=4cmz5dvf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="bg-[#ff141f] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition-all duration-300 flex items-center gap-2 text-lg hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
                  type="button"
                >
                  <Download className="w-5 h-5" />
                  Download Calendar
                </button>
              </a>
            </div>
          </div>

          {/* Calendar on the right */}
          <div 
            className={`flex-1 order-1 md:order-2 transition-all duration-1000 ease-out ${
              calendarAnimation.isVisible 
                ? "opacity-100 translate-x-0 scale-100" 
                : "opacity-0 translate-x-8 scale-95"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <DynamicCalendar />
          </div>
        </div>
      </div>

      <div 
        ref={logosAnimation.ref}
        className={`flex justify-center pb-5 mt-20 transition-all duration-1000 ease-out ${
          logosAnimation.isVisible 
            ? "opacity-100 translate-y-0 scale-100" 
            : "opacity-0 translate-y-8 scale-95"
        }`}
      >
        <Image
          src="/importantLogos.jpg"
          alt="Important Logos"
          width={700}
          height={700}
          style={{
            justifySelf: "center",
            paddingBottom: "20px",
          }}
          className="hover:scale-105 transition-transform duration-500"
        />
      </div>
      <Footer />
    </div>
  );
}
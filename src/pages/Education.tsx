import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  BookOpen,
  Users,
  Music,
  Palette,
  Calculator,
  Microscope,
  Atom,
  Languages,
  Trophy,
  Briefcase,
  GraduationCap,
  Download,
} from "lucide-react";
import DynamicCalendar from "@/components/Calendar";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

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
        id: "language-arts",
        name: "Language Arts & Literature",
        description:
          "Building strong reading, writing, and communication skills through interactive storytelling, phonics, and creative expression activities.",
        icon: <BookOpen className="w-6 h-6" />,
        images: [
          {
            url: "https://images.pexels.com/photos/8613092/pexels-photo-8613092.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Reading Circle",
          },
          {
            url: "https://images.pexels.com/photos/8471831/pexels-photo-8471831.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Writing Practice",
          },
          {
            url: "https://images.pexels.com/photos/8613068/pexels-photo-8613068.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Storytelling Time",
          },
        ],
      },
      {
        id: "mathematics",
        name: "Early Mathematics",
        description:
          "Developing number sense, basic counting, patterns, and problem-solving skills through hands-on manipulatives and engaging activities.",
        icon: <Calculator className="w-6 h-6" />,
        images: [
          {
            url: "https://images.pexels.com/photos/8471822/pexels-photo-8471822.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Number Games",
          },
          {
            url: "https://images.pexels.com/photos/8613097/pexels-photo-8613097.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Pattern Activities",
          },
          {
            url: "https://images.pexels.com/photos/8613074/pexels-photo-8613074.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Math Manipulatives",
          },
        ],
      },
      {
        id: "creative-arts",
        name: "Creative Arts & Music",
        description:
          "Fostering creativity and self-expression through art, music, drama, and movement activities that develop fine motor skills and imagination.",
        icon: <Palette className="w-6 h-6" />,
        images: [
          {
            url: "https://images.pexels.com/photos/8471908/pexels-photo-8471908.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Art Creation",
          },
          {
            url: "https://images.pexels.com/photos/8613039/pexels-photo-8613039.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Music Time",
          },
          {
            url: "https://images.pexels.com/photos/8471915/pexels-photo-8471915.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Creative Play",
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
        id: "core-academics",
        name: "Core Academic Subjects",
        description:
          "Comprehensive instruction in reading, writing, mathematics, science, and social studies with emphasis on critical thinking and problem-solving.",
        icon: <BookOpen className="w-6 h-6" />,
        images: [
          {
            url: "https://images.pexels.com/photos/8471691/pexels-photo-8471691.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Interactive Learning",
          },
          {
            url: "https://images.pexels.com/photos/8613028/pexels-photo-8613028.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Group Projects",
          },
          {
            url: "https://images.pexels.com/photos/8471832/pexels-photo-8471832.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Individual Study",
          },
        ],
      },
      {
        id: "stem-exploration",
        name: "STEM Exploration",
        description:
          "Hands-on science, technology, engineering, and mathematics activities that encourage experimentation and discovery.",
        icon: <Microscope className="w-6 h-6" />,
        images: [
          {
            url: "https://images.pexels.com/photos/8471906/pexels-photo-8471906.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Science Experiments",
          },
          {
            url: "https://images.pexels.com/photos/8613101/pexels-photo-8613101.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Technology Integration",
          },
          {
            url: "https://images.pexels.com/photos/8471834/pexels-photo-8471834.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Engineering Challenges",
          },
        ],
      },
      {
        id: "social-development",
        name: "Social & Emotional Learning",
        description:
          "Building character, empathy, and social skills through collaborative projects, community service, and peer interaction.",
        icon: <Users className="w-6 h-6" />,
        images: [
          {
            url: "https://images.pexels.com/photos/8613095/pexels-photo-8613095.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Team Building",
          },
          {
            url: "https://images.pexels.com/photos/8471838/pexels-photo-8471838.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Community Projects",
          },
          {
            url: "https://images.pexels.com/photos/8613070/pexels-photo-8613070.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Peer Collaboration",
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
        id: "advanced-academics",
        name: "Advanced Academic Courses",
        description:
          "Rigorous coursework in mathematics, sciences, literature, and social studies designed to challenge and prepare students for high school.",
        icon: <GraduationCap className="w-6 h-6" />,
        images: [
          {
            url: "https://images.pexels.com/photos/8613032/pexels-photo-8613032.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Advanced Mathematics",
          },
          {
            url: "https://images.pexels.com/photos/8471840/pexels-photo-8471840.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Literature Analysis",
          },
          {
            url: "https://images.pexels.com/photos/8613099/pexels-photo-8613099.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Research Projects",
          },
        ],
      },
      {
        id: "leadership-programs",
        name: "Leadership & Service",
        description:
          "Student government, peer mentoring, and community service programs that develop leadership skills and civic responsibility.",
        icon: <Trophy className="w-6 h-6" />,
        images: [
          {
            url: "https://images.pexels.com/photos/8471844/pexels-photo-8471844.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Student Leadership",
          },
          {
            url: "https://images.pexels.com/photos/8613036/pexels-photo-8613036.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Community Service",
          },
          {
            url: "https://images.pexels.com/photos/8471846/pexels-photo-8471846.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Peer Mentoring",
          },
        ],
      },
      {
        id: "creative-expression",
        name: "Arts & Creative Expression",
        description:
          "Visual arts, performing arts, music, and digital media programs that encourage creativity and self-expression.",
        icon: <Music className="w-6 h-6" />,
        images: [
          {
            url: "https://images.pexels.com/photos/8471848/pexels-photo-8471848.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Visual Arts",
          },
          {
            url: "https://images.pexels.com/photos/8613041/pexels-photo-8613041.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Performing Arts",
          },
          {
            url: "https://images.pexels.com/photos/8471850/pexels-photo-8471850.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Digital Media",
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
        id: "college-prep",
        name: "College Preparatory Courses",
        description:
          "Advanced Placement and honors courses across all disciplines, designed to prepare students for college-level work and earn college credit.",
        icon: <Atom className="w-6 h-6" />,
        images: [
          {
            url: "https://images.pexels.com/photos/8471852/pexels-photo-8471852.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "AP Sciences",
          },
          {
            url: "https://images.pexels.com/photos/8613043/pexels-photo-8613043.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Advanced Mathematics",
          },
          {
            url: "https://images.pexels.com/photos/8471854/pexels-photo-8471854.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "College Writing",
          },
        ],
      },
      {
        id: "career-pathways",
        name: "Career Pathway Programs",
        description:
          "Specialized programs in business, technology, healthcare, and other fields that provide real-world experience and industry certifications.",
        icon: <Briefcase className="w-6 h-6" />,
        images: [
          {
            url: "https://images.pexels.com/photos/8471856/pexels-photo-8471856.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Business Programs",
          },
          {
            url: "https://images.pexels.com/photos/8613045/pexels-photo-8613045.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Technology Training",
          },
          {
            url: "https://images.pexels.com/photos/8471858/pexels-photo-8471858.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Internship Programs",
          },
        ],
      },
      {
        id: "global-studies",
        name: "Global Studies & Languages",
        description:
          "World languages, international studies, and cultural exchange programs that prepare students for global citizenship.",
        icon: <Languages className="w-6 h-6" />,
        images: [
          {
            url: "https://images.pexels.com/photos/8471860/pexels-photo-8471860.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Language Learning",
          },
          {
            url: "https://images.pexels.com/photos/8613047/pexels-photo-8613047.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Cultural Exchange",
          },
          {
            url: "https://images.pexels.com/photos/8471862/pexels-photo-8471862.jpeg?auto=compress&cs=tinysrgb&w=400",
            label: "Global Projects",
          },
        ],
      },
    ],
  },
];

export default function Education() {
  // Inicializa o mês atual do sistema

  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );
  const [expandedSubjects, setExpandedSubjects] = useState<Set<string>>(
    new Set()
  );

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const toggleSubject = (subjectId: string) => {
    const newExpanded = new Set(expandedSubjects);
    if (newExpanded.has(subjectId)) {
      newExpanded.delete(subjectId);
    } else {
      newExpanded.add(subjectId);
    }
    setExpandedSubjects(newExpanded);
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#221f52]/80 to-[#2e2b70]/30" />
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

      <section className="w-full bg-white/80 py-12 px-4 md:px-0 font-poppins border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2e2b70] mb-2">
            Academic Excellence
          </h2>
          <p className="text-lg text-gray-700">
            We do education differently so it’s important to explain key parts
            of our whole-child program.
          </p>
          <div className="text-base text-gray-600 space-y-3 text-left mx-auto max-w-2xl">
            <p>
              <span className="font-semibold text-[#2e2b70]">
                Our population:
              </span>{" "}
              ASA is an international school serving students from countries
              worldwide.
            </p>
            <p>
              Students must qualify at{" "}
              <span className="font-semibold">
                B2 English language proficiency standard by grade 10
              </span>
              . We provide additional help and support for new enrolled students
              to reach our required level of proficiency.
            </p>
            <ul className="list-disc list-inside ml-2 space-y-1">
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
      </section>

      {gradeLevels.map((gradeLevel) => {
        const isExpanded = expandedSections.has(gradeLevel.id);
        const colors = getColorClasses(gradeLevel.primaryColor);

        return (
          <section
            key={gradeLevel.id}
            id={gradeLevel.id} // Adicione o ID aqui
            className={`py-16 px-4 ${gradeLevel.bgColor}`}
          >
            {/* Image */}
            <div className="relative w-screen left-1/2 right-1/2 -translate-x-1/2 group bottom-10">
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
              <div className="mb-16">
                <div className="flex justify-center">
                  <div className="grid lg:grid-cols-2 gap-12 items-start w-full max-w-7xl">
                    {/* Content */}
                    <div className="flex flex-col items-center space-y-8 w-full">
                      <div className="flex justify-center w-full">
                        <div className="prose prose-lg text-gray-700 leading-relaxed relative w-full max-w-7xl">
                          <div
                            className={`transition-all duration-500 ease-in-out ${
                              isExpanded
                                ? "max-h-[700px]"
                                : "max-h-40 overflow-hidden"
                            } mx-auto`}
                          >
                            <p className="text-left mb-6">
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

                      <div className="flex flex-wrap gap-4 justify-center">
                        <button
                          className={`${colors.button} text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                        >
                          ENROLL NOW
                        </button>

                        <button
                          onClick={() => toggleSection(gradeLevel.id)}
                          className={`flex items-center gap-2 text-gray-600 hover:${colors.accent} px-6 py-4 rounded-xl font-medium text-lg transition-colors duration-300 group`}
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
              <div className="bg-[#fbfeff] p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-8">
                  <h3 className={`text-3xl font-bold ${colors.primary}`}>
                    KEY SUBJECTS
                  </h3>
                  <div
                    className={`flex-1 h-px bg-gradient-to-r ${colors.border} to-transparent`}
                  ></div>
                </div>

                <p className="text-xl text-gray-600 mb-12 max-w-4xl">
                  {gradeLevel.subjectsDescription ||
                    "Key academic subjects are thoughtfully integrated into our curriculum to prepare students for an exceptional future"}
                </p>

                <div className="space-y-6">
                  {gradeLevel.subjects.map((subject) => {
                    const isSubjectExpanded = expandedSubjects.has(subject.id);

                    return (
                      <div
                        key={subject.id}
                        className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        <button
                          onClick={() => toggleSubject(subject.id)}
                          className="w-full p-6 bg-gray-50 hover:bg-gray-100 transition-colors duration-300 flex items-center justify-between group"
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`p-3 ${colors.bg} rounded-xl ${colors.accent} group-hover:${colors.hover} transition-colors duration-300`}
                            >
                              {subject.icon}
                            </div>
                            <div className="text-left">
                              <h4
                                className={`text-xl font-semibold ${colors.primary} mb-1`}
                              >
                                {subject.name}
                              </h4>
                              <p className="text-gray-600">
                                {subject.description}
                              </p>
                            </div>
                          </div>
                          <ChevronDown
                            className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                              isSubjectExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <div
                          className={`transition-all duration-500 ease-in-out ${
                            isSubjectExpanded
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                          } overflow-hidden`}
                        >
                          <div className="p-6 pt-0">
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {subject.description}
                            </p>

                            <div className="grid md:grid-cols-3 gap-6">
                              {subject.images.map((image, imageIndex) => (
                                <div
                                  key={imageIndex}
                                  className="group cursor-pointer"
                                >
                                  <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                                    <Image
                                      src={image.url}
                                      alt={image.label}
                                      width={400}
                                      height={300}
                                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                  </div>
                                  <p
                                    className={`text-center mt-3 font-medium text-gray-800 group-hover:${colors.accent} transition-colors duration-300`}
                                  >
                                    {image.label}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <div
        id="calendar"
        className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 flex flex-col items-center justify-center"
      >
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-start justify-between gap-8">
  {/* Texts and Button on the left */}
  <div className="flex-1 order-2 md:order-1">
    <h3 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-2">
      Academic Calendar
    </h3>
    <p className="text-gray-700 mb-4 max-w-lg">
      Our academic calendar is updated annually to keep you informed about all important dates throughout the school year. Key events and holidays are highlighted with different colors, and a legend is provided in the calendar header for easy reference. Stay up to date with semester start and end dates, exam periods, school breaks, and special activities. With just one click, you can download the full calendar for your convenience. Make sure to check back regularly for any updates or changes, and never miss an important school event!
    </p>
    <div className="mt-6">
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
          className="bg-[#ff141f] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors duration-200 flex items-center gap-2 text-lg"
          type="button"
        >
          <Download className="w-5 h-5" />
          Download Calendar
        </button>
      </a>
    </div>
  </div>

  {/* Calendar on the right */}
  <div className="flex-1 order-1 md:order-2">
    <DynamicCalendar />
  </div>
</div>

      </div>

      <div className="flex justify-center pb-5 mt-20">
        <Image
          src="/importantLogos.jpg"
          alt="Important Logos"
          width={700}
          height={700}
          style={{
            justifySelf: "center",
            paddingBottom: "20px",
          }}
        />
      </div>
      <Footer />
    </div>
  );
}

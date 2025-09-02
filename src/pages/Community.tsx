import React, { useEffect, useState } from "react";
import {
  Users,
  Target,
  Lightbulb,
  Heart,
  CheckCircle,
  ArrowRight,
  Star,
  BookOpen,
  Brain,
} from "lucide-react";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import SEO from '../components/SEO';

function Community() {
  const skills = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Social Skills",
      description: "Being a team player and collaborating effectively",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Thinking Skills",
      description: "Gaining knowledge and adapting new thoughts",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Effective Communication",
      description: "Good listening, writing & speaking skills",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Critical Thinking",
      description:
        "Ability to notice, seek resolution, and solve daily problems",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Constructive Feedback",
      description: "Accepting & giving feedback gracefully",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Creative Thinking",
      description: "Generate unique solutions that drive innovation",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Integrity",
      description: "Doing the right thing even when no one is watching",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Research Skills",
      description: "Plan and execute projects or papers",
    },
  ];

  const programFeatures = [
    "Curriculums with choices for developing career interests",
    "Encourages students to make decisions themselves",
    "Mentor outstanding citizenship and leadership qualities",
    "Practice real-life success skills",
    "Proactive interventions designed to foster success",
    "Safe, positive spaces that nurture our community",
    "Small class sizes of no more than 10 students to 1 teaching staff",
    "Spacious, modern technology-rich classrooms",
    "Treat students as individuals with unique strengths and needs",
  ];

  const developmentSteps = [
    {
      step: "Step 1",
      title: "Assess Current Skill Levels",
      description:
        "Take a milestone development test for each child to determine their current skill levels. Record results to identify areas for improvement and document observations of specific challenges or strengths.",
      highlights: [
        "Milestone development testing",
        "Skill level assessment",
        "Strength identification",
      ],
    },
    {
      step: "Step 2",
      title: "Individualized Program Development",
      description:
        "Create personalized development plans based on assessment results. Set clear, achievable goals and design age-appropriate activities that consider each child's interests, learning style, and pace.",
      highlights: [
        "Personalized development plans",
        "Clear goal setting",
        "Age-appropriate activities",
      ],
    },
    {
      step: "Step 3",
      title: "Collaborative Skill Development",
      description:
        "Work together with each child to implement their individualized program. Provide consistent guidance, support, and encouragement while regularly assessing progress and celebrating achievements.",
      highlights: [
        "Individual implementation",
        "Consistent support",
        "Progress tracking",
      ],
    },
  ];

  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);
  // Animação para o texto do header
  const heroAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: true }) as { ref: React.RefObject<HTMLDivElement>, isVisible: boolean };
  // Animações para seções principais
  const skillsSectionAnimation = useScrollAnimation({ threshold: 0.15, triggerOnce: true }) as { ref: React.RefObject<HTMLDivElement>, isVisible: boolean };
  const beInspiringSectionAnimation = useScrollAnimation({ threshold: 0.15, triggerOnce: true }) as { ref: React.RefObject<HTMLDivElement>, isVisible: boolean };
  const supportSectionAnimation = useScrollAnimation({ threshold: 0.15, triggerOnce: true }) as { ref: React.RefObject<HTMLDivElement>, isVisible: boolean };
  const childDevSectionAnimation = useScrollAnimation({ threshold: 0.15, triggerOnce: true }) as { ref: React.RefObject<HTMLDivElement>, isVisible: boolean };

  useEffect(() => {
    // Trigger header animations after component mounts
    const timer = setTimeout(() => {
      setIsHeaderLoaded(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const scrollToSection = () => {
      const sectionId = localStorage.getItem("scrollToSection");
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
          localStorage.removeItem("scrollToSection");
        }, 500);
      }
    };

    scrollToSection();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEO 
        title="Community"
        description="Join our vibrant educational community. Support services, child development center, and inclusive environment fostering global citizenship and cultural sensitivity."
        keywords="school community Angola, student support services, child development center, international school community"
        canonical="https://asangola.com/Community"
      />
      {/* Header */}
      <Header />

      {/* Header Section - Animação apenas de entrada */}
      <div className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/FundoCommuty.webp"
            alt="Gallery background"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            quality={100}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJyEwPDA+Pz4wRjUrLUJHSkE6V0RGWE1WWVtfZWJnS15pZ2mGe2dw/9sAQwEVFx8eIR4hHDgoKDh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8VooopDCiiigD//Z"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-gray-200/10" />
        </div>
        <div
          ref={heroAnimation.ref}
          className={`relative z-10 text-left text-white pl-8 md:pl-32 max-w-3xl top-10 transition-all duration-1000 ease-out ${
            heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1
            className={`text-4xl font-bold mb-4 leading-tight transition-all duration-1200 ease-out ${
              isHeaderLoaded
                ? "opacity-100 translate-x-0 translate-y-0"
                : "opacity-0 -translate-x-16 translate-y-6"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Building a Thriving Community Together
          </h1>
          <p
            className={`text-xl text-white text-left transition-all duration-1000 ease-out ${
              isHeaderLoaded
                ? "opacity-100 translate-x-0 translate-y-0"
                : "opacity-0 -translate-x-12 translate-y-4"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            At ASA, we foster a supportive and inclusive environment where every
            student, family, and educator collaborates to create a vibrant
            community.
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

      {/* Skills for Success Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div
              ref={skillsSectionAnimation.ref}
              className={`transition-all duration-1000 ease-out ${skillsSectionAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <h2 className="text-4xl font-bold text-[#2e2b70] mb-6">
                Skills for Success
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                In preparation for global citizenship and leadership, ASA
                emphasizes transdisciplinary skills that prepare students for an
                interconnected world.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                <p className="text-gray-700 text-lg leading-relaxed">
                  <span className="font-semibold text-blue-700">
                    These skills are intentionally taught by our professional
                    educators every day at ASA.
                  </span>
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/Skillsimg.jpg"
                alt="Skills for Success"
                width={600}
                height={550}
                className="mx-auto mb-2"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{skill.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Be Inspiring Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={beInspiringSectionAnimation.ref}
            className={`text-center mb-16 transition-all duration-1000 ease-out ${beInspiringSectionAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-4xl font-bold text-[#2e2b70] mb-4">
              Be Inspiring
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The foundation of any school is the curriculum content coupled
              with the best professionals in the classrooms. At ASA we go
              further—we engage and inspire students to think and apply
              knowledge.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-[#2e2b70] mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our school has been designed to provide a nurturing and
                  inspiring environment for students to develop into their
                  extraordinary selves. Our focus is on learning, thinking, and
                  applying knowledge—to make what they are learning their own.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  <span>At ASA we do this!</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-[#2e2b70] mb-6">
                  Our Student-Focused Programs
                </h3>
                <div className="space-y-4">
                  {programFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700 leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <Image
                  src="/environment.webp"
                  alt="Support Services"
                  width={600}
                  height={550}
                  className="mx-auto mb-2"
                />
              </div>

              <div className="relative">
                <Image
                  src="/smallclass.webp"
                  alt="Support Services"
                  width={600}
                  height={550}
                  className="mx-auto mb-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Support Services Section */}
      <section id="SupportServices" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <Image
                src="/SupportService.png"
                alt="Support Services"
                width={600}
                height={550}
                className="mx-auto mb-2"
              />
            </div>
            <div
              ref={supportSectionAnimation.ref}
              className={`transition-all duration-1000 ease-out ${supportSectionAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <h2 className="text-4xl font-bold text-[#2e2b70] mb-6">
                Student Support Services
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                At American Schools of Angola, we believe in holistic
                development. When academic progression is important, social and
                emotional well-being ensures that each child reaches their
                highest potential in every walk of life.
              </p>
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-6 border border-teal-100">
                <p className="text-gray-700 text-lg leading-relaxed">
                  <span className="font-semibold text-teal-700">
                    Our team of specialized psychologists provides professional
                    services to meet your child&apos;s academic, social,
                    emotional, and behavioral goals.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Academic Advising
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We offer academic advising services to help students set
                educational goals, select appropriate courses, and develop
                personalized learning plans that integrate both in-person and
                online components.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Accommodations for Different Abilities
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Whether your child has a diagnosed special need, or needs some
                additional support to reach their full potential, we are here to
                help.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Brief Psychological Interventions
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our licensed psychologists provide brief psychological
                interventions to students in need, typically lasting one to six
                sessions within the parameters of confidentiality.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Wellness Support
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Provides students with resources to support their mental health
                and overall well-being, such as stress management, coping
                strategies, and other wellness resources crucial for their
                success.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Complimentary Consultations
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our complimentary consultations are directed to parents and
                other health professionals working with the student outside of
                school to discuss concerns, goals, and intervention plans.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Community Referrals
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                When long-term therapy is necessary, we refer to community
                partners in Luanda or internationally for occupational, speech,
                psychological, neuropediatric, or other areas of child
                developmental needs.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 border border-teal-100">
            <h3 className="text-2xl font-bold text-[#2e2b70] mb-4 text-center">
              Social & Emotional Learning Curriculum
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              ASA integrates SEL classes into our academic curriculum, within
              the CASEL standards helping students learn about Self-awareness,
              Self-management, social awareness, Relationship skills, and
              Responsible decision-making. After all,{" "}
              <span className="font-semibold text-teal-700">
                global citizenship and culturally sensitive leadership skills
                are developed out of a strong curriculum, inquisitive minds, and
                a community of people.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Child Development Center Section */}
      <section
        id="ChildDevelopment"
        className="py-20 bg-gradient-to-br from-purple-50 to-pink-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={childDevSectionAnimation.ref}
            className={`text-center mb-16 transition-all duration-1000 ease-out ${childDevSectionAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-4xl font-bold text-[#2e2b70] mb-4">
              Child Development Center
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Welcome to ASA Child Development Center, where we deeply value the
              uniqueness of every child. Our goal has been to provide an
              inclusive ecosystem for every child to blossom.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Since the inception of the school, our heartfelt mission has
                  been to ensure that every child who walks through our doors
                  feels a profound sense of belonging. We are dedicated to
                  helping each flourish through our personalized
                  psychoeducational program, tailored to their specific needs.
                </p>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-100">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-purple-700">
                      Effectively driven by a team of qualified special
                      educators, psychologists, and therapists
                    </span>
                    , the Child Development Center at ASA is one of its kind.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <Image
                  src="/CDC.webp"
                  alt="Child Development Center"
                  width={600}
                  height={550}
                  className="mx-auto mb-2"
                />
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[#2e2b70] text-center mb-12">
              Our Development Pathway
            </h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {developmentSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 h-full">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mb-6 mx-auto">
                      <span className="text-white font-bold text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 text-center">
                      {step.step}
                    </h4>
                    <h5 className="text-lg font-semibold text-purple-700 mb-4 text-center">
                      {step.title}
                    </h5>
                    <p className="text-gray-600 leading-relaxed mb-6 text-center">
                      {step.description}
                    </p>

                    <div className="space-y-2">
                      {step.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-700">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {index < developmentSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-purple-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              <span className="font-semibold text-purple-700">
                By following these organized steps
              </span>
              , we effectively assess children&apos;s skill levels, create
              tailored programs, and work collaboratively to help them reach
              their developmental goals. This approach promotes a holistic and
              supportive environment for skill development.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Community;

import React, { useEffect, useState } from "react";
import EducationSection from "../components/EducationSection";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

const educationData = [
  {
    title: "Elementary School",
    description:
      "Our dynamic curriculum combines fun learning aligned with U.S. standards while monitoring your child's progress. Through English immersion, personalized learning, creative STEM activities, and hands-on exploration, we cultivate critical thinking and a passion for education. Students grow socially while exploring fundamentals like geography, math, and science.",
    mainImage: "/A2.webp",
    galleryImages: ["/Elem1.jpg", "/Elem3.jpg", "/Elem4.jpg"],
    preK: {
      subtitle: "Pre-K / Kindergarten",
      description:
        "Our Pre-K and Kindergarten programs provide a nurturing, play-based environment where children build foundational skills in language, math, and socialization. Through hands-on activities, music, art, and guided exploration, we foster curiosity, creativity, and a love for learning from the very start.",
      mainImage: "/im4.webp",
      galleryImages: ["/prek1.webp", "/prek2.webp", "/prek3.webp"],
    },
  },
  {
    title: "Middle School",
    description:
      "Our Middle School welcomes students aged 11 to 13 with a comprehensive curriculum including Science, ELA, Maths, and Social Studies. Additional classes in SEL, Robotics, Physical Education, and Arts foster socio-emotional skills, hands-on engineering practice, and holistic development.",
    mainImage: "/A1.webp",
    galleryImages: ["/Mid1.jpg", "/Mid2.jpg", "/Mid3.jpg"],
  },
  {
    title: "High School",
    description:
      "Our high school program (9th–12th grades) offers a hybrid education system combining direct teacher interaction with flexible online learning. Students take five courses per semester, supported by educational technology, multimedia resources, and video conferencing to ensure dynamic and accessible learning.",
    mainImage: "/A3.webp",
    galleryImages: ["/High1.jpg", "/High2.jpg", "/High3.jpg"],
  },
];

const teachersData = [
  {
    image: "/t-1.jpg",
    name: "Melin Campos",
    subject: "Learning Coach",
  },
  {
    image: "/t-2.jpg",
    name: "Quisolokele Vangu",
    subject: "Homeroom-grade 1",
  },
  {
    image: "/t-3.jpg",
    name: "Marta Bickel",
    subject: "Subject lead-language",
  },
  {
    image: "/t-4.jpg",
    name: "Soly Alvarez",
    subject: "Cordinator-lower elementary Head-CDC",
  },
];

function Education() {
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);

  useEffect(() => {
    // Trigger header animations after component mounts
    const timer = setTimeout(() => {
      setIsHeaderLoaded(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="relative h-[90vh] flex items-center">
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
      </div>

      <main>
        <section className="text-center py-8">
          <div className="text-center justify-center mb-8">
            <h2 className="text-5xl font-bold mb-4 text-[#2e2b70]">Meet Our Teachers</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center">
              Get to know the dedicated educators who inspire, guide, and support our students every day. Our passionate team is committed to excellence in learning and personal growth.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 px-2">
            {teachersData.map((item, idx) => (
              <div
                key={item.image}
                className="flex flex-col items-center bg-white rounded-xl shadow-lg p-4 m-2 w-48 transition-transform hover:scale-105"
              >
                <Image
                  src={item.image}
                  alt={`Teacher ${idx + 1}`}
                  width={120}
                  height={120}
                  className="rounded-full shadow mb-3 object-cover"
                />
                <div className="text-gray-800 font-semibold text-lg mt-2">
                  {item.name}
                </div>
                <div className="text-gray-500 text-sm">
                  {item.subject}
                </div>
              </div>
            ))}
          </div>
        </section>
        {educationData.map((section, index) => (
          <div key={index} className={index % 2 === 1 ? "bg-gray-100" : ""}>
            <EducationSection {...section} />
            {/* Render Pre-K/Kindergarten as subtítulo dentro do Elementary */}
            {section.preK && (
              <div className="max-w-7xl mx-auto px-4 pb-12">
                <h3 className="text-2xl font-semibold text-[#2e2b70] mt-8 mb-2">
                  {section.preK.subtitle}
                </h3>
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  <div className="flex-shrink-0 w-full md:w-1/3">
                    <Image
                      src={section.preK.mainImage}
                      alt="Pre-K / Kindergarten"
                      width={400}
                      height={300}
                      className="rounded-xl shadow mb-4 object-cover w-full h-auto"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 mb-4">{section.preK.description}</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      {section.preK.galleryImages.map((img, idx) => (
                        <div key={img} className="flex-1 min-w-[120px]">
                          <Image
                            src={img}
                            alt={`Pre-K Gallery ${idx + 1}`}
                            width={210}
                            height={180}
                            className="rounded-lg shadow object-cover w-full h-auto"
                            style={{ maxWidth: "100%", height: "auto" }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        <div className="flex justify-center pb-5">
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
      </main>
      <Footer />
    </div>
  );
}

export default Education;

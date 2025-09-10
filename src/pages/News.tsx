import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Newspaper, GraduationCap, Trophy, Phone, Mail, MapPin } from 'lucide-react';
import Header from '../components/Header';
import { WhatsAppButton } from '../components/WhatsAppButton';

const sections = [
  {
    title: "Academic Excellence",
    icon: GraduationCap,
    article: {
      image: "/news1.jpg",
      headline: "Unesco Day Lecture",
      content: "In celebration of United Nations Day, our students had the incredible opportunity to participate in a special lecture dedicated to the values and mission of UNESCO. The session highlighted the importance of global cooperation, cultural preservation, and the pursuit of peace in building a better future for all nations.The lecture was an inspiring moment for our students to learn about the role of the United Nations in addressing global challenges, such as education for all, climate change, and human rights. It also encouraged them to reflect on their own roles as young global citizens and the impact they can make in their communities. Through engaging discussions and thought-provoking insights, the event fostered a deeper understanding of how we can all contribute to a more inclusive, sustainable, and peaceful world. Our students left the session feeling motivated and empowered to embody these values in their everyday lives."
    }
  },
  {
    title: "Open House - Early College High School",
    icon: Newspaper,
    article: {
      image: "/news2.webp",
      headline: "Open House - Early College High School",
      content: "We are excited to invite you to our Open House event for the Early College High School program! This is a fantastic opportunity for prospective students and their families to learn more about our innovative curriculum, dedicated faculty, and the unique advantages of our early college model. Join us for an informative session where you can ask questions, meet our staff, and explore the possibilities that await you at our school. Together, we can pave the way for a extraordinary future!"
    }
  },
  {
    title: "Athletics & Achievement",
    icon: Trophy,
    article: {
      image: "/news3.jpg",
      headline: "Varsity Basketball Team Clinches State Championship",
      content: "Our varsity basketball team has made school history by winning the state championship for the first time in 15 years. The team's remarkable journey included a 25-game winning streak and multiple comeback victories. Led by senior captain Michael Chen, the team demonstrated exceptional teamwork and resilience throughout the season. The championship game, which drew a record crowd, was decided in a thrilling overtime finish that showcased our players' determination and skill."
    }
  }
];
function NewsExtended() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header/>
      <div className="bg-[#ffac1e] text-[#2e2b70] py-8 mt-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">School News & Updates</h1>
          <p className="text-center mt-2 text-[#2e2b70]">Keeping our community informed and connected</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {sections.map((section, index) => (
          <section key={index} className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <section.icon className="w-8 h-8 text-blue-900" />
              <h2 className="text-3xl font-bold text-blue-900">{section.title}</h2>
            </div>
            
            <div className="flex justify-center">
              <article className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1 w-[80%]">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src={section.article.image}
                    alt={section.article.headline}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.article.headline}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {section.article.content}
                  </p>
                </div>
              </article>
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +244 945333000
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                admissions@asangola.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Estrada da Samba, Condomínio Rosalinda <br />
                Bloco#2
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link href="/about" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-blue-400">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/calendar" className="hover:text-blue-400">
                  Academic Calendar
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-blue-400">
                  News & Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for updates</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-lg flex-1 text-gray-900"
              />
              <button
                type="submit"
                className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              <Image
                src="/l.png"
                alt="Social media icon"
                width={25}
                height={25}
                style={{ height: "auto" }}
              />
              <Image
                src="/i.png"
                alt="Social media icon"
                width={25}
                height={25}
                style={{ height: "auto" }}
              />
              <Image
                src="/f.png"
                alt="Social media icon"
                width={25}
                height={25}
                style={{ height: "auto" }}
              />
              <Image
                src="/y.png"
                alt="Social media icon"
                width={25}
                height={25}
                style={{ height: "auto" }}
              />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} American Schools of Angola. All rights
            reserved.
          </p>
        </div>
        <div className="bg-gray-100 flex items-center justify-center">
          <WhatsAppButton phoneNumber="+244945333000" />
        </div>
      </footer>
    </div>
  );
}

export default NewsExtended;
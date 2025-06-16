import Link from "next/link";
import { Phone, Mail, MapPin, BookOpen } from 'lucide-react'; 
import { WhatsAppButton } from "./WhatsAppButton";
import Image from "next/image";
 
export default function Footer() {
  return (
    <section className="relative bg-gradient-to-br from-[#23205a] via-[#2c2969] to-[#1a1749] text-white py-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {/* Floating Books */}
        <div className="absolute top-10 left-10 animate-float">
          <svg width="40" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-blue-300">
            <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
          </svg>
        </div>
        
        {/* Pencils */}
        <div className="absolute top-20 right-20 animate-bounce-slow">
          <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-300 rotate-45">
            <path d="M22,7.24a1,1,0,0,0-.29-.71L17.47,2.29A1,1,0,0,0,16.76,2a1,1,0,0,0-.71.29L13.22,5.12h0L2.29,16.05a1,1,0,0,0-.29.71V21a1,1,0,0,0,1,1H7.24A1,1,0,0,0,8,21.71L18.88,10.78h0L21.71,8A1,1,0,0,0,22,7.24ZM6.83,20H4V17.17l9.93-9.93,2.83,2.83ZM18.17,8.66,15.34,5.83l1.42-1.41,2.82,2.82Z"/>
          </svg>
        </div>

        {/* Notebooks */}
        <div className="absolute bottom-20 left-20 animate-pulse">
          <svg width="38" height="30" viewBox="0 0 24 24" fill="currentColor" className="text-green-300">
            <path d="M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3"/>
          </svg>
        </div>

        {/* Calculator */}
        <div className="absolute top-32 left-1/2 animate-float-delayed">
          <svg width="32" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-purple-300">
            <path d="M7,2H17A2,2 0 0,1 19,4V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V4A2,2 0 0,1 7,2M7,4V8H17V4H7M7,10V12H9V10H7M11,10V12H13V10H11M15,10V12H17V10H15M7,14V16H9V14H7M11,14V16H13V14H11M15,14V16H17V14H15M7,18V20H9V18H7M11,18V20H13V18H11M15,18V20H17V18H15Z"/>
          </svg>
        </div>

        {/* Globe */}
        <div className="absolute bottom-32 right-32 animate-spin-slow">
          <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor" className="text-cyan-300">
            <path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
          </svg>
        </div>

        {/* Ruler */}
        <div className="absolute top-40 right-10 animate-bounce-delayed">
          <svg width="50" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-orange-300 rotate-12">
            <path d="M1,5H23V19H1V5M3,7V17H5V15H7V17H9V15H11V17H13V15H15V17H17V15H19V17H21V7H19V9H17V7H15V9H13V7H11V9H9V7H7V9H5V7H3Z"/>
          </svg>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

      <WhatsAppButton phoneNumber={"945333000"}/>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Logo Section with Animation */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="relative">
              <div className="w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center animate-spin-slow shadow-lg">
                <Image
                  src={"/LogoASA.webp"}
                  width={500}
                  height={500} 
                  alt={"Logotipo"}                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-75 blur animate-pulse"></div>
            </div>
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            American Schools of Angola
          </h2>
          <p className="text-blue-200 mt-2">BE EXTRAORDINARY</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Section */}
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Phone className="h-4 w-4 text-blue-400" />
              </div>
              Contact Us
            </h3>
            <div className="space-y-3">
              <p className="flex items-center gap-3 hover:text-blue-300 transition-colors">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm">+244 945333000 | 945217135 | 929842625</span>
              </p>
              <p className="flex items-center gap-3 hover:text-blue-300 transition-colors">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-sm">admissions@asangola.com</span>
              </p>
              <p className="flex items-start gap-3 hover:text-blue-300 transition-colors">
                <MapPin className="h-4 w-4 text-red-400 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Estrada da Samba, Condomínio Rosalinda<br />
                  Bloco #2
                </span>
              </p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <BookOpen className="h-4 w-4 text-purple-400" />
              </div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:scale-125 transition-transform"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full group-hover:scale-125 transition-transform"></span>
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/calendar" className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full group-hover:scale-125 transition-transform"></span>
                  Academic Calendar
                </Link>
              </li>
              <li>
                <Link href="/news" className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full group-hover:scale-125 transition-transform"></span>
                  News & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"/>
                </svg>
              </div>
              Social Media
            </h3>
            <p className="mb-6 text-gray-300">Connect with our community</p>
            
            <div className="flex flex-wrap gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-rotate-3 shadow-lg"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-rotate-3 shadow-lg"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a2.993 2.993 0 0 0-2.107-2.117C19.204 3.5 12 3.5 12 3.5s-7.204 0-9.391.569A2.993 2.993 0 0 0 .502 6.186C0 8.373 0 12 0 12s0 3.627.502 5.814a2.993 2.993 0 0 0 2.107 2.117C4.796 20.5 12 20.5 12 20.5s7.204 0 9.391-.569a2.993 2.993 0 0 0 2.107-2.117C24 15.627 24 12 24 12s0-3.627-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center text-gray-400 text-sm">
              © {new Date().getFullYear()} American Schools of Angola. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes bounce-delayed {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-8px) rotate(15deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        
        .animate-bounce-delayed {
          animation: bounce-delayed 5s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
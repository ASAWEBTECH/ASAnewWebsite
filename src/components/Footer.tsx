import React, { useState } from "react";
import { Phone, Mail, MapPin, BookOpen, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Componente WhatsApp Button
type WhatsAppButtonProps = {
  phoneNumber: string;
};

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de mais informações sobre a American Schools of Angola."
    );
    window.open(`https://wa.me/244${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110"
      aria-label="Contact via WhatsApp"
    >
      <svg
        className="w-7 h-7 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
      </svg>
    </button>
  );
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: React.ReactNode;
  children: React.ReactNode;
};

// Componente Modal
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#23205a] to-[#2c2969] text-white p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[calc(90vh-100px)] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

// Componente Principal Footer
export default function Footer() {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const openTermsModal = () => setIsTermsModalOpen(true);
  const closeTermsModal = () => setIsTermsModalOpen(false);
  const openPrivacyModal = () => setIsPrivacyModalOpen(true);
  const closePrivacyModal = () => setIsPrivacyModalOpen(false);

  return (
    <>
      <section className="relative bg-gradient-to-br from-[#23205a] via-[#2c2969] to-[#1a1749] text-white py-16 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          {/* Floating Books */}
          <div className="absolute top-10 left-10 animate-float">
            <svg
              width="40"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-blue-300"
            >
              <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
            </svg>
          </div>

          {/* Pencils */}
          <div className="absolute top-20 right-20 animate-bounce-slow">
            <svg
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-yellow-300 rotate-45"
            >
              <path d="M22,7.24a1,1,0,0,0-.29-.71L17.47,2.29A1,1,0,0,0,16.76,2a1,1,0,0,0-.71.29L13.22,5.12h0L2.29,16.05a1,1,0,0,0-.29.71V21a1,1,0,0,0,1,1H7.24A1,1,0,0,0,8,21.71L18.88,10.78h0L21.71,8A1,1,0,0,0,22,7.24ZM6.83,20H4V17.17l9.93-9.93,2.83,2.83ZM18.17,8.66,15.34,5.83l1.42-1.41,2.82,2.82Z" />
            </svg>
          </div>

          {/* Notebooks */}
          <div className="absolute bottom-20 left-20 animate-pulse">
            <svg
              width="38"
              height="30"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-green-300"
            >
              <path d="M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3" />
            </svg>
          </div>

          {/* Calculator */}
          <div className="absolute top-32 left-1/2 animate-float-delayed">
            <svg
              width="32"
              height="40"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-purple-300"
            >
              <path d="M7,2H17A2,2 0 0,1 19,4V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V4A2,2 0 0,1 7,2M7,4V8H17V4H7M7,10V12H9V10H7M11,10V12H13V10H11M15,10V12H17V10H15M7,14V16H9V14H7M11,14V16H13V14H11M15,14V16H17V14H15M7,18V20H9V18H7M11,18V20H13V18H11M15,18V20H17V18H15Z" />
            </svg>
          </div>

          {/* Globe */}
          <div className="absolute bottom-32 right-32 animate-spin-slow">
            <svg
              width="45"
              height="45"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-cyan-300"
            >
              <path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
            </svg>
          </div>

          {/* Ruler */}
          <div className="absolute top-40 right-10 animate-bounce-delayed">
            <svg
              width="50"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-orange-300 rotate-12"
            >
              <path d="M1,5H23V19H1V5M3,7V17H5V15H7V17H9V15H11V17H13V15H15V17H17V15H19V17H21V7H19V9H17V7H15V9H13V7H11V9H9V7H7V9H5V7H3Z" />
            </svg>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        <WhatsAppButton phoneNumber="945333000" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Logo Section with Animation */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="relative">
                <div className="w-38 h-38 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center animate-spin-slow shadow-lg">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                    <Image
                      src="/LogoASA.webp"
                      alt="Gallery background"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      width={500}
                      height={500}
                    />
                  </div>
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
                <p className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span className="text-sm">
                    +244 945333000 | 945217135 | 929842625
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-green-400" />
                  <span className="text-sm">admissions@asangola.com</span>
                </p>
                <p className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    Estrada da Samba, Condomínio Rosalinda
                    <br />
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
                    <Link
                    href="/about"
                    className="flex items-center gap-2 hover:text-blue-400 transition-colors group"
                    >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:scale-125 transition-transform"></span>
                    About Us
                    </Link>
                </li>
                <li>
                  <a
                    href="https://asangola.openapply.com/"
                    className="flex items-center gap-2 hover:text-blue-400 transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full group-hover:scale-125 transition-transform"></span>
                    Admissions
                  </a>
                </li>
                <li>
                  <Link
                    href="/Education#calendar"
                    className="flex items-center gap-2 hover:text-blue-400 transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full group-hover:scale-125 transition-transform"></span>
                    Academic Calendar
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                  </svg>
                </div>
                Social Media
              </h3>
              <p className="mb-6 text-gray-300">Connect with our community</p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/company/asangolaofficial/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5 text-white group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/asangola/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-rotate-3 shadow-lg"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5 text-white group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a
                  href="https://www.facebook.com/ASAngola?locale=pt_BR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5 text-white group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/@asangola_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-rotate-3 shadow-lg"
                  aria-label="YouTube"
                >
                  <svg
                    className="w-5 h-5 text-white group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a2.993 2.993 0 0 0-2.107-2.117C19.204 3.5 12 3.5 12 3.5s-7.204 0-9.391.569A2.993 2.993 0 0 0 .502 6.186C0 8.373 0 12 0 12s0 3.627.502 5.814a2.993 2.993 0 0 0 2.107 2.117C4.796 20.5 12 20.5 12 20.5s7.204 0 9.391-.569a2.993 2.993 0 0 0 2.107-2.117C24 15.627 24 12 24 12s0-3.627-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} American Schools of Angola. All
                rights reserved.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <button
                  onClick={openPrivacyModal}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
                <span>•</span>
                <button
                  onClick={openTermsModal}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-xs mx-auto px-2 flex flex-col items-center text-center gap-2">
          {/* ...outros conteúdos do footer... */}
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[180px] h-5 flex items-end justify-center pointer-events-none select-none">
          <span className="relative z-20 text-center text-[9px] text-gray-400 whitespace-nowrap opacity-60 px-2">
            Created by Alcino Jaime – Developer
            <br />
            Fábio de Oliveira - Coordinator
          </span>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(5deg);
            }
          }

          @keyframes float-delayed {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) rotate(-3deg);
            }
          }

          @keyframes bounce-slow {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          @keyframes bounce-delayed {
            0%,
            100% {
              transform: translateY(0px) rotate(12deg);
            }
            50% {
              transform: translateY(-8px) rotate(15deg);
            }
          }

          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
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

      {/* Modal Terms of Service */}
      <Modal
        isOpen={isTermsModalOpen}
        onClose={closeTermsModal}
        title="Terms of Service"
      >
        <div className="prose max-w-none text-gray-700">
          <h3 className="text-xl font-bold text-[#23205a] mb-4">
            1. Acceptance of Terms
          </h3>
          <p className="mb-4">
            By accessing and using the American Schools of Angola (ASA) website
            and services, you agree to be bound by these Terms of Service. If
            you do not agree to these terms, please do not use our services.
          </p>

          <h3 className="text-xl font-bold text-[#23205a] mb-4">
            2. About American Schools of Angola
          </h3>
          <p className="mb-4">
            American Schools of Angola is an international educational
            institution located in Luanda, Angola. We provide high-quality
            education following American curriculum standards while embracing
            local culture and values.
          </p>

          <h3 className="text-xl font-bold text-[#23205a] mb-4">
            3. Educational Services
          </h3>
          <p className="mb-4">Our services include but are not limited to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Pre-K through Grade 12 education</li>
            <li>American curriculum with international perspective</li>
            <li>Extracurricular activities and programs</li>
            <li>College preparatory services</li>
            <li>Online learning platforms and resources</li>
          </ul>

          <h3 className="text-xl font-bold text-[#23205a] mb-4">
            4. Admission Requirements
          </h3>
          <p className="mb-4">
            Students must meet our admission requirements and complete the
            application process through our OpenApply system. Enrollment is
            subject to availability and successful completion of assessment
            procedures.
          </p>

          <h3 className="text-xl font-bold text-[#23205a] mb-4">
            5. Tuition and Fees
          </h3>
          <p className="mb-4">
            Tuition and fees are established annually and are subject to change.
            Payment schedules and policies are outlined in enrollment
            agreements. Late payments may result in additional fees or
            suspension of services.
          </p>

          <h3 className="text-xl font-bold text-[#23205a] mb-4">
            6. Code of Conduct
          </h3>
          <p className="mb-4">
            All students, parents, and staff must adhere to our code of conduct
            which promotes respect, integrity, and academic excellence.
            Violations may result in disciplinary action including suspension or
            expulsion.
          </p>

          <h3 className="text-xl font-bold text-[#23205a] mb-4">
            7. Technology Use
          </h3>
          <p className="mb-4">
            Use of school technology resources must comply with our Acceptable
            Use Policy. Students and parents are responsible for appropriate use
            of devices and digital platforms.
          </p>

          <h3 className="text-xl font-bold text-[#23205a] mb-4">
            8. Health and Safety
          </h3>
          <p className="mb-4">
            ASA maintains comprehensive health and safety policies. Students
            must comply with health requirements and emergency procedures. The
            school reserves the right to implement additional safety measures as
            needed.
          </p>

          <h3 className="text-xl font-bold text-[#23205a] mb-4">
            9. Intellectual Property
          </h3>
          <p className="mb-4">
            All curriculum materials, educational resources, and school
            publications are the intellectual property of ASA or licensed
            providers. Unauthorized reproduction or distribution is prohibited.
          </p>

          <h3 className="text-xl font-bold text-[#23205a] mb-4">
            10. Limitation of Liability
          </h3>
          <p className="mb-4">
            ASA&apos;s liability is limited to the extent permitted by law. The
            school is not responsible for personal property loss or damage,
            except in cases of proven negligence.
          </p>

          <h3 className="text-xl font-bold text-[#23205a] mb-4">
            11. Modifications
          </h3>
          <p className="mb-4">
            ASA reserves the right to modify these terms at any time. Changes
            will be communicated through official school channels and will be
            effective upon posting.
          </p>

          <h3 className="text-xl font-bold text-[#23205a] mb-4">
            12. Governing Law
          </h3>
          <p className="mb-4">
            These terms are governed by the laws of Angola. Any disputes will be
            resolved through appropriate legal channels in Angola.
          </p>

          <h3 className="text-xl font-bold text-[#23205a] mb-4">
            13. Contact Information
          </h3>
          <p className="mb-4">
            For questions regarding these terms, please contact us at:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p>
              <strong>Email:</strong> office@asangola.com
            </p>
            <p>
              <strong>Phone:</strong> +244 945 217 135
            </p>
            <p>
              <strong>Address:</strong> Estrada da Samba, Condomínio Rosalinda,
              Bloco #2, Luanda, Angola
            </p>
          </div>
        </div>
      </Modal>

      {/* Modal Privacy Policy */}
      <Modal
        isOpen={isPrivacyModalOpen}
        onClose={closePrivacyModal}
        title="Privacy Policy"
      >
        <div className="prose max-w-none text-gray-700">
          <h3 className="text-xl font-bold text-[#23205a] mb-4">
            1. Introduction
          </h3>
          <p className="mb-4">
            American Schools of Angola (ASA) is committed to protecting the
            privacy and security of personal information. This Privacy Policy
            explains how we collect, use, and protect information about
            students, parents, and website visitors.
          </p>

          <h3 className="text-xl font-bold text-[#23205a] mb-4">
            2. Information We Collect
          </h3>
          <p className="mb-4">We collect the following types of information:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Student Information:</strong> Academic records,
              attendance, health information, emergency contacts
            </li>
            <li>
              <strong>Parent Information:</strong> Contact details, employment
              information, financial data for billing
            </li>
            <li>
              <strong>Website Data:</strong> IP addresses, browser information,
              usage statistics
            </li>
            <li>
              <strong>Communication Records:</strong> Emails, phone calls,
              meeting notes
            </li>
          </ul>

          <h3 className="text-xl font-bold text-[#23205a] mb-4">
            3. How We Use Information
          </h3>
          <p className="mb-4">We use collected information for:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Providing educational services and support</li>
            <li>Maintaining accurate student records</li>
            <li>Communicating with parents and students</li>
            <li>Ensuring campus safety and security</li>
            <li>Processing applications and enrollment</li>
            <li>Improving our educational programs</li>
          </ul>

          <h3 className="text-xl font-bold text-[#23205a] mb-4">
            4. Information Sharing
          </h3>
          <p className="mb-4">
            We may share information in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>With educational partners and accreditation bodies</li>
            <li>When required by law or legal process</li>
            <li>For health and safety emergencies</li>
            <li>With service providers under confidentiality agreements</li>
            <li>
              With parents/guardians regarding their child&apos;s education
            </li>
          </ul>

          <h3 className="text-xl font-bold text-[#23205a] mb-4">
            5. Data Security
          </h3>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to
            protect personal information, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Secure data storage systems</li>
            <li>Access controls and authentication</li>
            <li>Regular security assessments</li>
            <li>Staff training on data protection</li>
            <li>Encrypted transmission of sensitive data</li>
          </ul>

          <h3 className="text-xl font-bold text-[#23205a] mb-4">
            6. Student Records
          </h3>
          <p className="mb-4">
            Student educational records are maintained in accordance with
            applicable laws and regulations. Parents have the right to access
            their child&apos;s records and request corrections when necessary.
          </p>

          <h3 className="text-xl font-bold text-[#23205a] mb-4">
            7. Website Privacy
          </h3>
          <p className="mb-4">
            Our website may use cookies and similar technologies to enhance user
            experience. We do not sell personal information to third parties for
            marketing purposes.
          </p>

          <h3 className="text-xl font-bold text-[#23205a] mb-4">
            8. Photography and Media
          </h3>
          <p className="mb-4">
            ASA may photograph or record students during school activities for
            educational and promotional purposes. Parents can opt out of such
            use by contacting the school administration.
          </p>

          <h3 className="text-xl font-bold text-[#23205a] mb-4">
            9. Third-Party Services
          </h3>
          <p className="mb-4">
            We use third-party educational platforms and services that may
            collect information. These providers are required to maintain
            appropriate privacy protections.
          </p>

          <h3 className="text-xl font-bold text-[#23205a] mb-4">
            10. Data Retention
          </h3>
          <p className="mb-4">
            We retain personal information for as long as necessary to fulfill
            educational purposes and comply with legal requirements. Student
            records are maintained according to established retention schedules.
          </p>

          <h3 className="text-xl font-bold text-[#23205a] mb-4">
            11. Your Rights
          </h3>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access your personal information</li>
            <li>Request corrections to inaccurate data</li>
            <li>Understand how your information is used</li>
            <li>Request deletion of information when appropriate</li>
            <li>File complaints about privacy concerns</li>
          </ul>

          <h3 className="text-xl font-bold text-[#23205a] mb-4">
            12. Changes to This Policy
          </h3>
          <p className="mb-4">
            We may update this Privacy Policy periodically. Changes will be
            communicated through official school channels and posted on our
            website.
          </p>

          <h3 className="text-xl font-bold text-[#23205a] mb-4">
            13. Contact Information
          </h3>
          <p className="mb-4">
            For privacy-related questions or concerns, please contact us at:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p>
              <strong>Privacy Officer:</strong> admissions@asangola.com
            </p>
            <p>
              <strong>Phone:</strong> +244 945333000
            </p>
            <p>
              <strong>Address:</strong> Estrada da Samba, Condomínio Rosalinda,
              Bloco #2, Luanda, Angola
            </p>
          </div>

          <p className="mt-6 text-sm text-gray-600">
            <em>Last updated: {new Date().toLocaleDateString()}</em>
          </p>
        </div>
      </Modal>
    </>
  );
}

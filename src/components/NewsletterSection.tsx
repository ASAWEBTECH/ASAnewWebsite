import React, { useState } from 'react';
import { Mail, Send} from 'lucide-react';
import Image from 'next/image';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsError(true);
      return;
    }

    // Start processing
    setIsProcessing(true);
    setIsError(false);

    // Create email parameters
    const recipient = 'newsletter@asangola.com';
    const subject = encodeURIComponent('Adesão ao Newsletter da American Schools of Angola');
    const body = encodeURIComponent(`Email do subscritor: ${email}`);
    
    // Create mailto link
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
    
    // Wait 5 seconds then open email client and reset form
    setTimeout(() => {
      window.location.href = mailtoLink;
      setEmail('');
      setIsProcessing(false);
    }, 5000);
  };

  return (
    <section className="w-full py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between rounded-2xl bg-white shadow-xl overflow-hidden">
          {/* Left side: Newsletter form */}
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <div className="flex items-center gap-2 mb-3">
              <Mail className="h-6 w-6 text-indigo-600" />
              <p className="text-sm font-medium text-indigo-600">Newsletter</p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#2e2b70] mb-4">
              Have you subscribed to our Newsletter?
            </h2>

            <p className="text-gray-600 mb-8">
              Get the latest news, updates, and special offers delivered directly to your inbox.
            </p>

            {isProcessing ? (
              <div className="flex items-center justify-center p-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                <span className="ml-3 text-gray-600">Processing...</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsError(false);
                  }}
                  placeholder="Your email address"
                  className={`w-full p-4 pr-12 rounded-lg border ${
                    isError 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-300 focus:ring-indigo-500'
                  } focus:border-transparent focus:outline-none focus:ring-2 transition-all duration-300 text-black`}
                  required
                  />
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                </div>

                {isError && (
                  <p className="text-red-500 text-sm">Please enter a valid email address.</p>
                )}

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#ff9f00] hover:bg-indigo-700 text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Subscribe</span>
                  <Send size={18} />
                </button>
              </form>
            )}

            <p className="text-gray-500 text-xs mt-4">
              By subscribing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>

          {/* Right side: Newsletter image */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden flex items-center justify-center">
              <Image
              src="/newsletter.webp"
              alt="Newsletter"
              width={820}
              height={820}
              className="object-cover object-center transform transition-transform duration-700 ease-in-out rounded-lg"
              priority
              />
            </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
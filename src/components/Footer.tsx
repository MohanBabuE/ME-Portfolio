import { Heart, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Mohan Babu E</h3>
            <p className="text-gray-400 mb-4">
              Front-End Developer | Java Enthusiast | UI/UX Designer
            </p>
            <p className="text-gray-400 text-sm">
              Building elegant digital experiences with passion and precision.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:mohanbabu@example.com"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              mohanbabu@example.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Mohan Babu E. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <Heart size={16} className="text-red-500" fill="currentColor" /> using React & Tailwind CSS
            </p>
            <button
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

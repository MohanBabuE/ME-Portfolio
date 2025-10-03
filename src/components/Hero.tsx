import { Download, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-xl">
            ME
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 animate-slide-up">
          Mohan Babu E
        </h1>

        <p className="text-xl sm:text-2xl text-blue-600 font-semibold mb-6 animate-slide-up animation-delay-200">
          Front-End Developer | Java Enthusiast | UI/UX Designer
        </p>

        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto animate-slide-up animation-delay-400">
          Crafting elegant digital experiences with modern web technologies and creative problem-solving
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-600">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <Download size={20} />
            Download Resume
          </button>
          <button
            onClick={scrollToContact}
            className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Mail size={20} />
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
}

import { GraduationCap, Trophy, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4">
          About Me
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hello! I'm Mohan Babu E, a passionate B.Tech IT student graduating in 2027 with a strong foundation in front-end development, Java programming, and UI/UX design. I believe in creating digital experiences that are not only functional but also delightful to use.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              My journey in technology is driven by curiosity and a desire to solve real-world problems through elegant code and thoughtful design. I'm constantly learning and evolving, staying up-to-date with the latest industry trends and best practices.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
              <p className="text-gray-700 italic">
                "Beyond code, I'm a chess champion and Rubik's cube enthusiast, which has taught me strategic thinking and problem-solving skills that I apply to every project."
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Education</h3>
                  <p className="text-gray-700">B.Tech in Information Technology</p>
                  <p className="text-gray-600 text-sm">2023 - 2027</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Trophy className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Chess Champion</h3>
                  <p className="text-gray-700">Strategic thinking and analytical skills</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Award className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Rubik's Cube Solver</h3>
                  <p className="text-gray-700">Pattern recognition and problem-solving</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

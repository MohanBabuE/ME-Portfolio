import { Trophy, Star, Briefcase, Users } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: 'Chess Championship Winner',
      description: 'Won multiple inter-college chess tournaments demonstrating strategic thinking',
      color: 'blue'
    },
    {
      icon: Star,
      title: 'Rubik\'s Cube Expert',
      description: 'Solved complex puzzles showcasing problem-solving and pattern recognition skills',
      color: 'blue'
    },
    {
      icon: Briefcase,
      title: 'Industrial Visits',
      description: 'Participated in industry visits to leading tech companies gaining real-world insights',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Technical Training Programs',
      description: 'Completed multiple technical workshops and hands-on training sessions',
      color: 'blue'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4">
          Achievements & Activities
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-4 rounded-xl flex-shrink-0">
                    <Icon className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-3">Co-curricular Excellence</h3>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Beyond academics, I actively participate in co-curricular activities, technical competitions,
            and community events that help me grow professionally and personally while contributing to the tech community.
          </p>
        </div>
      </div>
    </section>
  );
}

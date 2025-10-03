import { Code, Palette, Wrench, LayoutGrid as Layout } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      skills: ['Java', 'JavaScript', 'TypeScript', 'Spring Boot', 'SQL'],
      color: 'blue'
    },
    {
      title: 'Front-End',
      icon: Layout,
      skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
      color: 'blue'
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'blue'
    },
    {
      title: 'Tools & Others',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Oracle Cloud'],
      color: 'blue'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4">
          Skills & Expertise
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 hover:scale-105"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-center text-sm font-medium hover:bg-blue-100 transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Award, CheckCircle } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Java Full Stack Development',
      organization: 'Retech Pvt Ltd',
      type: 'Internship',
      description: 'Comprehensive training in Java, Spring Boot, and full-stack development practices',
      date: '2024'
    },
    {
      title: 'Java Development Program',
      organization: 'HCL Career Craft Academy',
      type: 'Training',
      description: 'Advanced Java programming concepts and enterprise application development',
      date: '2024'
    },
    {
      title: 'Oracle Cloud Infrastructure Certified',
      organization: 'Oracle',
      type: 'Certification',
      description: 'Cloud computing fundamentals and Oracle Cloud Infrastructure services',
      date: '2024'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4">
          Certifications & Training
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Award className="text-white" size={28} />
                </div>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {cert.type}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {cert.title}
              </h3>

              <div className="flex items-center gap-2 mb-3">
                <CheckCircle size={16} className="text-blue-600" />
                <p className="text-blue-600 font-semibold text-sm">
                  {cert.organization}
                </p>
              </div>

              <p className="text-gray-600 text-sm mb-4">
                {cert.description}
              </p>

              <p className="text-gray-500 text-xs font-medium">
                {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ExternalLink, Github, Code2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce application with shopping cart, payment integration, and user authentication',
      techStack: ['React', 'Spring Boot', 'PostgreSQL', 'Tailwind CSS'],
      features: ['User authentication', 'Product catalog', 'Shopping cart', 'Order management'],
      category: 'Full Stack'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio showcasing projects and skills with smooth animations',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      features: ['Responsive design', 'Smooth animations', 'Contact form', 'Project showcase'],
      category: 'Front-End'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team features',
      techStack: ['React', 'Java', 'Spring Boot', 'MySQL'],
      features: ['Real-time updates', 'Team collaboration', 'Task tracking', 'Deadline reminders'],
      category: 'Full Stack'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with forecasts and location-based weather data',
      techStack: ['React', 'API Integration', 'CSS3', 'Chart.js'],
      features: ['Current weather', '7-day forecast', 'Location search', 'Weather charts'],
      category: 'Front-End'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4">
          Projects & Work
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                    <Code2 className="text-white" size={28} />
                  </div>
                  <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 text-sm font-semibold">
                    <Github size={16} />
                    View Code
                  </button>
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 text-sm font-semibold">
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

import { Code2, Database, Settings, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Bootstrap', 'Tailwind CSS'],
    },
    {
      icon: Database,
      title: 'Backend',
      skills: ['Java', 'Spring Boot', 'Hibernate', 'Node.js', 'Python', 'Express.js'],
    },
    {
      icon: Settings,
      title: 'Databases',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQL Databases'],
    },
    {
      icon: Cloud,
      title: 'Tools & Platforms',
      skills: ['n8n', 'AI Agents', 'Zoho CRM', 'Git', 'Power BI', 'WordPress', 'SEO Tools'],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6">
                <category.icon className="text-primary" size={28} />
              </div>
              
              <h3 className="font-heading font-semibold text-xl mb-4">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="tech-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

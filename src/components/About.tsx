import { Briefcase, GraduationCap, MapPin, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: '4+ Years',
      description: 'Professional Experience',
    },
    {
      icon: GraduationCap,
      title: 'B.E. Computer',
      description: 'Engineering Graduate',
    },
    {
      icon: MapPin,
      title: 'Pune, India',
      description: 'Based In',
    },
    {
      icon: Award,
      title: 'Azure Certified',
      description: 'Microsoft Fundamentals',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(45,100%,50%,0.03)_0%,_transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Who I Am
          </span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Passionate developer with expertise in building modern web applications and automation solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Full Stack Developer with a passion for creating scalable, efficient solutions. 
              With expertise spanning from frontend technologies like React and TypeScript to backend 
              systems with Node.js and Java, I bring a comprehensive approach to every project.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently at One Union Solutions, I specialize in building automation workflows using 
              n8n and AI agents, optimizing business processes and improving lead management through 
              intelligent CRM integrations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey has taken me through diverse roles—from developing enterprise Java applications 
              at Tech Mahindra to crafting responsive web experiences at Rego Digital. I'm constantly 
              learning and growing, driven by the challenge of turning complex problems into elegant solutions.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
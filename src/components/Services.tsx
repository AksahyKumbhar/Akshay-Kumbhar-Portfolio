import { Sparkles, Zap, Globe, Bot, Workflow, Code2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Custom Websites',
      description: 'Modern, responsive websites with clean design and scalable architecture for personal and business use.',
    },
    {
      icon: Code2,
      title: 'Web Applications',
      description: 'Full-stack applications from MVPs to production systems, tailored to your goals with long-term maintainability.',
    },
    {
      icon: Bot,
      title: 'AI Integration',
      description: 'Intelligent AI agents for task handling, content generation, and automated decision-making.',
    },
    {
      icon: Workflow,
      title: 'N8n Automation',
      description: 'Advanced workflows to automate repetitive processes, connect APIs, and reduce manual work.',
    },
    {
      icon: Zap,
      title: 'Internal Tools',
      description: 'Powerful internal tools and dashboards that streamline operations and boost team productivity.',
    },
    {
      icon: Sparkles,
      title: 'API Integrations',
      description: 'Seamless third-party API connections to extend functionality and enable powerful integrations.',
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_hsla(45,100%,50%,0.05)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsla(25,95%,55%,0.03)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            What We Build
          </span>
          <h2 className="section-title">
            About Our <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Get to know what we build and how we help
          </p>
        </div>

        {/* Main Description */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We build custom websites, tools, and apps for personal and business use. Our focus is on delivering 
              high-quality, affordable digital solutions that help individuals and businesses streamline their 
              workflows, improve productivity, and enhance their online presence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Whether you're looking for a modern website, a powerful internal tool, or a complete end-to-end 
              web application, we bring your ideas to life with clean design, scalable architecture, and 
              reliable performance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In addition to development services, we specialize in <span className="text-primary font-medium">automation 
              and AI-powered enhancements</span>. This includes integrating AI agents for intelligent task handling, 
              creating advanced N8n workflows to automate repetitive processes, connecting third-party APIs, 
              and building custom tools that reduce manual work and save hours every week. From MVPs to full-scale 
              production systems, we tailor each solution to your goals and ensure long-term maintainability.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 group animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-primary" size={28} />
              </div>
              
              <h3 className="font-heading font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <Sparkles size={18} />
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
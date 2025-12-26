// import { Building2, Calendar, Briefcase, ChevronRight } from 'lucide-react';

// const Experience = () => {
//   const experiences = [
//     {
//       title: 'Full Stack Automation Developer',
//       company: 'One Union Solutions Pvt. Ltd.',
//       period: 'Dec 2024 – Present',
//       description: [
//         'Built automation workflows with n8n and AI agents',
//         'Developed applications using React, TypeScript, MongoDB, Tailwind CSS',
//         'Automated Zoho CRM workflows for better lead management',
//         'Created documentation for workflows, APIs, and troubleshooting',
//       ],
//       current: true,
//     },
//     {
//       title: 'Frontend Developer',
//       company: 'Rego Digital Solutions Pvt. Ltd.',
//       period: 'Dec 2022 – Feb 2024',
//       description: [
//         'Created responsive web apps using HTML, CSS, JS, Bootstrap, React',
//         'Integrated backend with Node.js, MongoDB, MySQL',
//         'Collaborated with SDLC teams to deliver client solutions',
//       ],
//       current: false,
//     },
//     {
//       title: 'Associate Software Engineer',
//       company: 'Tech Mahindra Pvt. Ltd.',
//       period: 'Aug 2021 – Nov 2022',
//       description: [
//         'Developed Java, Spring Boot, Hibernate, Python applications',
//         'Optimized legacy code and supported deployments',
//         'Followed Agile methodologies and collaborated with cross-functional teams',
//       ],
//       current: false,
//     },
//   ];

//   return (
//     <section id="experience" className="py-24 relative overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-secondary/30" />
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(45,100%,50%,0.03)_0%,_transparent_70%)]" />
      
//       <div className="container mx-auto px-6 relative">
//         <div className="text-center mb-16">
//           <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
//             Career Journey
//           </span>
//           <h2 className="section-title">
//             Work <span className="gradient-text">Experience</span>
//           </h2>
//           <p className="section-subtitle mx-auto">
//             My professional journey through software development
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <div className="relative">
//             {/* Timeline line */}
//             <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary/20 rounded-full" />

//             {experiences.map((exp, index) => (
//               <div
//                 key={exp.company}
//                 className={`relative mb-12 md:mb-16 animate-fade-up opacity-0`}
//                 style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
//               >
//                 {/* Timeline dot */}
//                 <div
//                   className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 border-background z-10 ${
//                     exp.current ? 'bg-primary shadow-lg shadow-primary/50' : 'bg-accent'
//                   }`}
//                 >
//                   {exp.current && (
//                     <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
//                   )}
//                 </div>

//                 {/* Content card */}
//                 <div
//                   className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${
//                     index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
//                   }`}
//                 >
//                   <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
//                     {exp.current && (
//                       <span className="inline-flex items-center gap-1 px-3 py-1 mb-4 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
//                         <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
//                         Current Position
//                       </span>
//                     )}
                    
//                     <h3 className="font-heading font-semibold text-xl mb-2 text-foreground">{exp.title}</h3>
                    
//                     <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
//                       <span className="flex items-center gap-2">
//                         <Building2 size={16} className="text-primary" />
//                         {exp.company}
//                       </span>
//                       <span className="flex items-center gap-2">
//                         <Calendar size={16} className="text-accent" />
//                         {exp.period}
//                       </span>
//                     </div>
                    
//                     <ul className="space-y-2">
//                       {exp.description.map((item, i) => (
//                         <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
//                           <ChevronRight size={16} className="text-primary mt-0.5 shrink-0" />
//                           <span>{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;


import { Building2, Calendar, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Automation Developer',
      company: 'One Union Solutions Pvt. Ltd.',
      period: 'Dec 2024 – Present',
      description: [
        'Built automation workflows with n8n and AI agents',
        'Developed applications using React, TypeScript, MongoDB, Tailwind CSS',
        'Automated Zoho CRM workflows for better lead management',
        'Created documentation for workflows, APIs, and troubleshooting',
      ],
      current: true,
    },
    {
      title: 'Frontend Developer',
      company: 'Rego Digital Solutions Pvt. Ltd.',
      period: 'Dec 2022 – Feb 2024',
      description: [
        'Created responsive web apps using HTML, CSS, JS, Bootstrap, React',
        'Integrated backend with Node.js, MongoDB, MySQL',
        'Collaborated with SDLC teams to deliver client solutions',
      ],
      current: false,
    },
    {
      title: 'Associate Software Engineer',
      company: 'Tech Mahindra Pvt. Ltd.',
      period: 'Aug 2021 – Nov 2022',
      description: [
        'Developed Java, Spring Boot, Hibernate, Python applications',
        'Optimized legacy code and supported deployments',
        'Followed Agile methodologies and collaborated with cross-functional teams',
      ],
      current: false,
    },
  ];

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(45,100%,50%,0.03)_0%,_transparent_70%)]" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 border border-primary/20 text-primary">
            Career Journey
          </span>

          <h1 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h1>

          <p className="section-subtitle mx-auto">
            My professional journey through software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-primary via-accent to-primary/20" />

            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${index}`}
                className="relative mb-12 md:mb-16 animate-fade-up opacity-0"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: 'forwards',
                }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-background z-10 ${
                    exp.current
                      ? 'bg-primary shadow-lg shadow-primary/50'
                      : 'bg-accent'
                  }`}
                >
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                  )}
                </div>

                {/* Content card */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0
                      ? 'md:mr-auto md:pr-8'
                      : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="glass-card p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                    {exp.current && (
                      <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        Current Position
                      </span>
                    )}

                    <h3 className="font-heading text-xl font-semibold mb-2">
                      {exp.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Building2 size={16} className="text-primary" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar size={16} className="text-accent" />
                        {exp.period}
                      </span>
                    </div>

                    {/* Description list */}
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                        >
                          <ChevronRight
                            size={16}
                            className="
                              text-primary shrink-0
                              translate-y-[3px]
                              sm:translate-y-[2px]
                              md:translate-y-0
                            "
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

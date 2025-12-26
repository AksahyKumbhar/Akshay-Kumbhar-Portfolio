// import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const quickLinks = [
//     { name: 'Home', href: '/#home' },
//     { name: 'About', href: '/#about' },
//     { name: 'Services', href: '/#services' },
//     { name: 'Projects', href: '/projects' },
//     { name: 'Contact', href: '/#contact' },
//   ];

//   const services = [
//     'Custom Websites',
//     'Web Applications',
//     'AI Integration',
//     'N8n Automation',
//     'API Integrations',
//   ];

//   return (
//     <footer className="relative pt-16 pb-8 border-t border-border/50 bg-card/30">
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsla(45,100%,50%,0.03)_0%,_transparent_70%)]" />
      
//       <div className="container mx-auto px-6 relative">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
//           {/* About */}
//           <div className="lg:col-span-1">
//             <a href="/#home" className="font-heading text-2xl font-bold gradient-text inline-block mb-4">
//               AK
//             </a>
//             <p className="text-sm text-muted-foreground leading-relaxed mb-4">
//               Full Stack Developer & Automation Expert with 4+ years of experience building scalable web applications and intelligent automation workflows.
//             </p>
//             <div className="flex items-center gap-3">
//               <a
//                 href="https://github.com/AksahyKumbhar"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 rounded-lg bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
//               >
//                 <Github size={18} />
//               </a>
//               <a
//                 href="https://linkedin.com/in/akshay-kumbhar-646484200"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 rounded-lg bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
//               >
//                 <Linkedin size={18} />
//               </a>
//               <a
//                 href="mailto:akshaykumbhar.work129@gmail.com"
//                 className="p-2 rounded-lg bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
//               >
//                 <Mail size={18} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               {quickLinks.map((link) => (
//                 <li key={link.name}>
//                   <a
//                     href={link.href}
//                     className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//               <li>
//                 <Link
//                   to="/privacy"
//                   className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
//                 >
//                   Privacy Policy
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
//             <ul className="space-y-2">
//               {services.map((service) => (
//                 <li key={service}>
//                   <span className="text-sm text-muted-foreground">
//                     {service}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-heading font-semibold text-foreground mb-4">Get In Touch</h4>
//             <ul className="space-y-3">
//               <li>
//                 <a 
//                   href="mailto:akshaykumbhar.work129@gmail.com"
//                   className="text-sm text-muted-foreground hover:text-primary transition-colors"
//                 >
//                   akshaykumbhar.work129@gmail.com
//                 </a>
//               </li>
//               <li>
//                 <span className="text-sm text-muted-foreground">
//                   Pune, Maharashtra, India
//                 </span>
//               </li>
//             </ul>
//             <a
//               href="/#contact"
//               className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-all duration-300"
//             >
//               Start a Project
//             </a>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="pt-8 border-t border-border/50">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//             <p className="text-sm text-muted-foreground flex items-center gap-1">
//               Built with <Heart className="w-4 h-4 text-red" fill="currentColor" /> by Akshay Kumbhar
//             </p>
            
//             <p className="text-sm text-muted-foreground">
//               © {new Date().getFullYear()} All rights reserved.
//             </p>
            
//             <button
//               onClick={scrollToTop}
//               className="p-2 rounded-lg bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
//               aria-label="Scroll to top"
//             >
//               <ArrowUp size={18} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import { Heart, Github, Linkedin, Mail, ArrowUp, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  const services = [
    'Custom Websites',
    'Web Applications',
    'AI Integration',
    'N8n Automation',
    'API Integrations',
  ];

  return (
    <footer className="relative pt-16 pb-8 border-t border-border/50 bg-card/30">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsla(45,100%,50%,0.03)_0%,_transparent_70%)]" />

      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* About */}
          <div>
            <a
              href="/#home"
              className="font-heading text-2xl font-bold gradient-text inline-block mb-4"
            >
              AK
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Full Stack Developer & Automation Expert with 4+ years of experience
              building scalable web applications and intelligent automation workflows.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/AksahyKumbhar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>

              <a
                href="https://linkedin.com/in/akshay-kumbhar-646484200"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://www.youtube.com/@AkshayKumbhar-x12-AI"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-red-500/20 text-muted-foreground hover:text-red-500 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>

              <a
                href="mailto:akshaykumbhar.work129@gmail.com"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:akshaykumbhar.work129@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  akshaykumbhar.work129@gmail.com
                </a>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Pune, Maharashtra, India
                </span>
              </li>
            </ul>

            <a
              href="/#contact"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-all duration-300"
            >
              Start a Project
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> by Akshay Kumbhar
            </p>

            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

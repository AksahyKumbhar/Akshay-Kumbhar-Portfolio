
// import {
//   ArrowDown,
//   Github,
//   Linkedin,
//   Mail,
//   Youtube,
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import profilePhoto from '@/assets/profile-photo-3.jpeg';

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//     >
//       {/* Backgrounds (non-clickable) */}
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(45,100%,50%,0.08)_0%,_transparent_50%)]" />
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsla(25,95%,55%,0.05)_0%,_transparent_50%)]" />
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(210,100%,50%,0.03)_0%,_transparent_70%)]" />

//       <div className="container mx-auto px-6 pt-20 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* LEFT */}
//           <div className="space-y-6">
//             <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
//               Full Stack Developer & Automation Expert
//             </span>

//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
//               Hi, I’m <span className="gradient-text">Akshay Kumbhar</span>
//             </h1>

//             <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
//               Full Stack Developer with 4+ years of experience in scalable web
//               applications and automation workflows.
//             </p>

//             <div className="flex gap-4 pt-4">
//               <Button size="lg" asChild>
//                 <a href="#projects">View My Work</a>
//               </Button>
//               <Button size="lg" variant="outline" asChild>
//                 <a href="#contact">Get In Touch</a>
//               </Button>
//             </div>

//             {/* SOCIAL ICONS */}
//             <div className="flex items-center gap-5 pt-6">
//               {/* GitHub */}
//               <a
//                 href="https://github.com/AksahyKumbhar"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-14 h-14 rounded-full bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-white/20"
//               >
//                 <Github size={22} className="text-white" />
//               </a>

//               {/* LinkedIn */}
//               <a
//                 href="https://linkedin.com/in/akshay-kumbhar-646484200"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-14 h-14 rounded-full bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-blue-500/40"
//               >
//                 <Linkedin size={22} className="text-white" />
//               </a>

//               {/* YouTube */}
//               <a
//                 href="https://www.youtube.com/@AkshayKumbhar-x12-AI"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-14 h-14 rounded-full bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-red-500/40"
//               >
//                 <Youtube size={22} className="text-white" />
//               </a>

//               {/* ✅ EMAIL — FIXED */}
//               <a
//                 href="mailto:akshaykumbhar.work129@gmail.com"
//                 className="w-14 h-14 rounded-full bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-primary/40"
//               >
//                 <Mail size={22} className="text-white" />
//               </a>
//             </div>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="flex justify-center lg:justify-end">
//             <div className="relative">
//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-full blur-3xl scale-110" />
//               <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30">
//                 <img
//                   src={profilePhoto}
//                   alt="Akshay Kumbhar"
//                   className="w-full h-full object-cover object-top"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll */}
//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
//           <a href="#about" className="text-muted-foreground hover:text-primary">
//             <ArrowDown size={24} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Youtube,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo-3.jpeg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Backgrounds */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(45,100%,50%,0.08)_0%,_transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsla(25,95%,55%,0.05)_0%,_transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(210,100%,50%,0.03)_0%,_transparent_70%)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-24">
        <div className="grid gap-14 lg:grid-cols-2 items-center">
          {/* LEFT */}
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium">
              Full Stack Developer & Automation Expert
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">
              Hi, I’m{' '}
              <span className="gradient-text block sm:inline">
                Akshay Kumbhar
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Full Stack Developer with 4+ years of experience in scalable web
              applications and automation workflows.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a href="#projects">View My Work</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-5 pt-6">
              {[
                {
                  href: 'https://github.com/AksahyKumbhar',
                  icon: <Github size={20} />,
                  hover: 'hover:shadow-white/20',
                },
                {
                  href: 'https://linkedin.com/in/akshay-kumbhar-646484200',
                  icon: <Linkedin size={20} />,
                  hover: 'hover:shadow-blue-500/40',
                },
                {
                  href: 'https://www.youtube.com/@AkshayKumbhar-x12-AI',
                  icon: <Youtube size={20} />,
                  hover: 'hover:shadow-red-500/40',
                },
                {
                  href: 'mailto:akshaykumbhar.work129@gmail.com',
                  icon: <Mail size={20} />,
                  hover: 'hover:shadow-primary/40',
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${item.hover}`}
                >
                  <span className="text-white">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-full blur-3xl scale-110" />
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30">
                <img
                  src={profilePhoto}
                  alt="Akshay Kumbhar"
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="text-muted-foreground hover:text-primary"
            aria-label="Scroll Down"
          >
            <ArrowDown size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

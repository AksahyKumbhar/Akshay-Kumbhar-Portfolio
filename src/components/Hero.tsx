
'use client';

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
      className="
        relative 
        min-h-[100svh] 
        w-full 
        overflow-x-hidden 
        flex 
        items-center
        bg-zinc-950 sm:bg-transparent
      "
    >
      {/* ================= BACKGROUND GRADIENTS ================= */}

      {/* Top Gradient */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_top,_hsla(45,100%,50%,0.18)_0%,_transparent_65%)]
          sm:bg-[radial-gradient(ellipse_at_top_right,_hsla(45,100%,50%,0.08)_0%,_transparent_50%)]
        "
      />

      {/* Bottom Gradient */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_bottom,_hsla(25,95%,55%,0.15)_0%,_transparent_65%)]
          sm:bg-[radial-gradient(ellipse_at_bottom_left,_hsla(25,95%,55%,0.05)_0%,_transparent_50%)]
        "
      />

      {/* Center Glow */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_center,_hsla(210,100%,50%,0.1)_0%,_transparent_70%)]
          sm:bg-[radial-gradient(ellipse_at_center,_hsla(210,100%,50%,0.03)_0%,_transparent_70%)]
        "
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              Full Stack Developer & Automation Expert
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              Hi, I’m{' '}
              <span className="gradient-text">
                Akshay Kumbhar
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Full Stack Developer with 4+ years of experience in scalable web
              applications and automation workflows.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 pt-6 justify-center lg:justify-start">
              <SocialIcon href="https://github.com/AksahyKumbhar">
                <Github size={20} />
              </SocialIcon>

              <SocialIcon href="https://linkedin.com/in/akshay-kumbhar-646484200">
                <Linkedin size={20} />
              </SocialIcon>

              <SocialIcon href="https://www.youtube.com/@AkshayKumbhar-x12-AI">
                <Youtube size={20} />
              </SocialIcon>

              <SocialIcon href="mailto:akshaykumbhar.work129@gmail.com">
                <Mail size={20} />
              </SocialIcon>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative max-w-full">

              {/* Image Glow */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-br from-primary/40 via-accent/30 to-transparent
                  rounded-full
                  blur-2xl sm:blur-3xl
                  scale-105 sm:scale-110
                "
              />

              {/* Profile Image */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 mx-auto">
                <img
                  src={profilePhoto}
                  alt="Akshay Kumbhar"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ================= SCROLL INDICATOR ================= */}
        <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

/* ================= SOCIAL ICON ================= */
const SocialIcon = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="
      w-12 h-12 sm:w-14 sm:h-14
      rounded-full
      bg-gradient-to-br from-zinc-900 to-zinc-800
      border border-white/10
      shadow-xl
      flex items-center justify-center
      transition hover:scale-110
    "
  >
    <span className="text-white">{children}</span>
  </a>
);

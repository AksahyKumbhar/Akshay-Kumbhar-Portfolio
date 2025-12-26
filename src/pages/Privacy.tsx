import { useEffect } from 'react';
import { ArrowLeft, Shield, Lock, Eye, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: `We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us. This may include your name, email address, phone number, and any message content you provide.`,
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: `We use the information we collect to respond to your inquiries, provide requested services, send project updates and communications, improve our services, and comply with legal obligations.`,
    },
    {
      icon: Lock,
      title: 'Information Security',
      content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.`,
    },
    {
      icon: Shield,
      title: 'Your Rights',
      content: `You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us using the information provided below.`,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>
            
            <h1 className="section-title mb-4">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="section-subtitle">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          {/* Introduction */}
          <div className="glass-card rounded-2xl p-8 mb-10">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, 
              and safeguard your information when you visit our website or use our services. Please read 
              this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
              please do not access the site.
            </p>
          </div>

          {/* Sections */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {sections.map((section, index) => (
              <div 
                key={section.title}
                className="glass-card rounded-xl p-6 animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <section.icon className="text-primary" size={20} />
                  </div>
                  <h2 className="font-heading font-semibold text-xl">{section.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="glass-card rounded-2xl p-8">
            <h2 className="font-heading font-semibold text-2xl mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="space-y-2">
              <p className="text-foreground">
                <strong>Email:</strong>{' '}
                <a href="mailto:akshaykumbhar.work129@gmail.com" className="text-primary hover:underline">
                  akshaykumbhar.work129@gmail.com
                </a>
              </p>
              <p className="text-foreground">
                <strong>Location:</strong> Pune, Maharashtra, India
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
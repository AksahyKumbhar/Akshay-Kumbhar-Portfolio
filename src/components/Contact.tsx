// import { useState } from 'react';
// import { Mail, Phone, MapPin, Send, Github, Linkedin, Clock, CheckCircle } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { toast } from '@/hooks/use-toast';
// import { supabase } from '@/integrations/supabase/client';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const contactInfo = [
//     {
//       icon: Mail,
//       label: 'Email',
//       value: 'akshaykumbhar.work129@gmail.com',
//       href: 'mailto:akshaykumbhar.work129@gmail.com',
//     },
//     {
//       icon: Phone,
//       label: 'Phone',
//       value: '+91 8554830919',
//       href: 'tel:+918554830919',
//     },
//     {
//       icon: MapPin,
//       label: 'Location',
//       value: 'Pune, India',
//       href: '#',
//     },
//   ];

//   const benefits = [
//     'Free consultation call',
//     'Quick turnaround time',
//     'Affordable pricing',
//     'Ongoing support',
//   ];

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     try {
//       const { data, error } = await supabase.functions.invoke('send-contact-email', {
//         body: {
//           name: formData.name,
//           email: formData.email,
//           message: formData.message,
//         },
//       });

//       if (error) throw error;

//       toast({
//         title: 'Message sent!',
//         description: "Thanks for reaching out. I'll get back to you within 24 hours.",
//       });
      
//       setFormData({ name: '', email: '', message: '' });
//     } catch (error: any) {
//       console.error('Error sending message:', error);
//       toast({
//         title: 'Error sending message',
//         description: 'Please try again or email me directly.',
//         variant: 'destructive',
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-24 relative">
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsla(45,100%,50%,0.05)_0%,_transparent_60%)]" />
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsla(25,95%,55%,0.03)_0%,_transparent_50%)]" />
      
//       <div className="container mx-auto px-6 relative">
//         <div className="text-center mb-16">
//           <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
//             Get Started
//           </span>
//           <h2 className="section-title">
//             Let's Work <span className="gradient-text">Together</span>
//           </h2>
//           <p className="section-subtitle mx-auto">
//             Have a project in mind? Let's discuss how we can help bring your ideas to life.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Contact Info */}
//           <div className="space-y-8">
//             {/* Info Cards */}
//             <div className="space-y-4">
//               {contactInfo.map((item, index) => (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   className="glass-card rounded-xl p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-x-1 block animate-fade-up opacity-0"
//                   style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
//                 >
//                   <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center shrink-0">
//                     <item.icon className="text-primary" size={22} />
//                   </div>
//                   <div>
//                     <p className="text-sm text-muted-foreground">{item.label}</p>
//                     <p className="font-medium">{item.value}</p>
//                   </div>
//                 </a>
//               ))}
//             </div>

//             {/* Benefits */}
//             <div className="glass-card rounded-xl p-6">
//               <div className="flex items-center gap-2 mb-4">
//                 <Clock className="text-primary" size={20} />
//                 <h4 className="font-semibold">Why Work With Me?</h4>
//               </div>
//               <ul className="space-y-3">
//                 {benefits.map((benefit) => (
//                   <li key={benefit} className="flex items-center gap-3 text-muted-foreground">
//                     <CheckCircle className="text-accent shrink-0" size={16} />
//                     <span>{benefit}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Social Links */}
//             <div>
//               <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
//               <div className="flex gap-4">
//                 <a
//                   href="https://github.com/AksahyKumbhar"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-12 h-12 rounded-lg bg-secondary hover:bg-primary/20 text-foreground hover:text-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
//                 >
//                   <Github size={22} />
//                 </a>
//                 <a
//                   href="https://linkedin.com/in/akshay-kumbhar-646484200"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-12 h-12 rounded-lg bg-secondary hover:bg-primary/20 text-foreground hover:text-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
//                 >
//                   <Linkedin size={22} />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8 space-y-6">
//             <div>
//               <h3 className="font-heading font-semibold text-xl mb-2">Send a Message</h3>
//               <p className="text-sm text-muted-foreground">Fill out the form and I'll get back to you within 24 hours.</p>
//             </div>
            
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium mb-2">
//                 Your Name
//               </label>
//               <Input
//                 id="name"
//                 placeholder="John Doe"
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 required
//                 className="bg-secondary/50 border-border/50 focus:border-primary"
//               />
//             </div>
            
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium mb-2">
//                 Your Email
//               </label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="john@example.com"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 required
//                 className="bg-secondary/50 border-border/50 focus:border-primary"
//               />
//             </div>
            
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium mb-2">
//                 Project Details
//               </label>
//               <Textarea
//                 id="message"
//                 placeholder="Tell me about your project, timeline, and budget..."
//                 rows={5}
//                 value={formData.message}
//                 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                 required
//                 className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
//               />
//             </div>
            
//             <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
//               {isSubmitting ? (
//                 'Sending...'
//               ) : (
//                 <>
//                   <Send className="w-4 h-4 mr-2" />
//                   Send Message
//                 </>
//               )}
//             </Button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Clock,
  CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'akshaykumbhar.work129@gmail.com',
      href: 'mailto:akshaykumbhar.work129@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8554830919',
      href: 'tel:+918554830919',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, India',
      href: '#',
    },
  ];

  const benefits = [
    'Free consultation call',
    'Quick turnaround time',
    'Affordable pricing',
    'Ongoing support',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke(
        'send-contact-email',
        {
          body: formData,
        }
      );

      if (error) throw error;

      toast({
        title: 'Message sent!',
        description:
          "Thanks for reaching out. I'll get back to you within 24 hours.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: 'Error sending message',
        description: 'Please try again or email me directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsla(45,100%,50%,0.05)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsla(25,95%,55%,0.03)_0%,_transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-5">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help bring your ideas
            to life.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="glass-card rounded-xl p-4 sm:p-5 flex items-center gap-4 transition-all hover:-translate-y-1"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="text-sm sm:text-base font-medium break-all">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Benefits */}
            <div className="glass-card rounded-xl p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="text-primary" size={18} />
                <h4 className="font-semibold">Why Work With Me?</h4>
              </div>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground"
                  >
                    <CheckCircle
                      className="text-accent shrink-0"
                      size={16}
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">
                Connect with me
              </p>
              <div className="flex gap-4">
                {[Github, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href={
                      i === 0
                        ? 'https://github.com/AksahyKumbhar'
                        : 'https://linkedin.com/in/akshay-kumbhar-646484200'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-110"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT – FORM */}
          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-xl p-6 sm:p-8 space-y-5"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Fill out the form and I'll get back to you within 24 hours.
              </p>
            </div>

            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />

            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />

            <Textarea
              placeholder="Tell me about your project..."
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="resize-none"
            />

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

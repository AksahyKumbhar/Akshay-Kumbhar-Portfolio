// import { Quote, Star } from 'lucide-react';

// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: 'Rajesh Sharma',
//       role: 'Project Manager',
//       company: 'Tech Solutions Inc.',
//       content: 'Akshay delivered exceptional work on our HR dashboard project. His expertise in React and automation workflows significantly improved our team efficiency.',
//       rating: 5,
//     },
//     {
//       name: 'Priya Patel',
//       role: 'CEO',
//       company: 'Digital Ventures',
//       content: 'Working with Akshay was a great experience. He transformed our complex requirements into an elegant, user-friendly booking platform.',
//       rating: 5,
//     },
//     {
//       name: 'Michael Chen',
//       role: 'CTO',
//       company: 'StartUp Labs',
//       content: "Akshay's automation solutions saved us countless hours. His understanding of n8n and AI integrations is truly impressive.",
//       rating: 5,
//     },
//   ].filter(testimonial => testimonial.content && testimonial.content.trim() !== '');

//   if (testimonials.length === 0) {
//     return null;
//   }

//   return (
//     <section id="testimonials" className="py-24 bg-secondary/30">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="section-title">
//             Client <span className="gradient-text">Testimonials</span>
//           </h2>
//           <p className="section-subtitle mx-auto">
//             What people say about working with me
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {testimonials.map((testimonial) => (
//             <div
//               key={testimonial.name}
//               className="glass-card rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 relative"
//             >
//               {/* Quote icon */}
//               <div className="absolute top-6 right-6 text-primary/20">
//                 <Quote size={40} />
//               </div>

//               {/* Rating */}
//               <div className="flex gap-1 mb-4">
//                 {Array.from({ length: testimonial.rating }).map((_, i) => (
//                   <Star key={i} size={16} className="text-primary fill-primary" />
//                 ))}
//               </div>

//               {/* Content */}
//               <p className="text-muted-foreground leading-relaxed mb-6">
//                 "{testimonial.content}"
//               </p>

//               {/* Author */}
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-primary font-semibold">
//                   {testimonial.name.charAt(0)}
//                 </div>
//                 <div>
//                   <h4 className="font-semibold">{testimonial.name}</h4>
//                   <p className="text-sm text-muted-foreground">
//                     {testimonial.role}, {testimonial.company}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


import { useEffect, useState, useRef } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Papa from 'papaparse';
import { motion } from 'framer-motion';

const SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1nb48TFUsm_sjwIhUTenIUakZkAjZ2O9b6Yoze-GBRuk/export?format=csv&gid=996579564';

const AUTO_INTERVAL = 2500; // ⏱ faster auto slide
const SLIDE_DURATION = 0.5; // 🎞 faster animation
const VISIBLE = 3;

export default function Testimonials() {
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(VISIBLE); // start after clones
  const [enableAnim, setEnableAnim] = useState(true);
  const timerRef = useRef(null);

  /* Load Google Sheet data */
  useEffect(() => {
    Papa.parse(SHEET_URL, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (res) => {
        const cleaned = res.data
          .filter(r => r.Name && r.Content)
          .map(r => ({
            name: r.Name,
            role: r.Role,
            company: r.Company,
            content: r.Content,
            rating: Number(r.Rating) || 5,
          }));
        setItems(cleaned);
      },
    });
  }, []);

  /* Clone items for seamless looping */
  const extendedItems = items.length
    ? [
        ...items.slice(-VISIBLE), // clone last
        ...items,
        ...items.slice(0, VISIBLE), // clone first
      ]
    : [];

  /* Auto slide */
  useEffect(() => {
    if (!items.length) return;

    timerRef.current = setInterval(moveNext, AUTO_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [items]);

  const restartAuto = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(moveNext, AUTO_INTERVAL);
  };

  const moveNext = () => {
    setIndex(i => i + 1);
    restartAuto();
  };

  const movePrev = () => {
    setIndex(i => i - 1);
    restartAuto();
  };

  /* Seamless reset logic (Bootstrap style) */
  const handleAnimationEnd = () => {
    if (index >= items.length + VISIBLE) {
      setEnableAnim(false);
      setIndex(VISIBLE);
    }
    if (index < VISIBLE) {
      setEnableAnim(false);
      setIndex(items.length + VISIBLE - 1);
    }
  };

  useEffect(() => {
    if (!enableAnim) {
      requestAnimationFrame(() => setEnableAnim(true));
    }
  }, [enableAnim]);

  if (!items.length) return null;

  return (
    <section className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-6">

        <h2 className="text-center text-3xl font-bold mb-16">
          Client <span className="gradient-text">Testimonials</span>
        </h2>

        <div className="relative">

          {/* Left Button */}
          <button
            onClick={movePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-primary/10 hover:bg-primary/20"
          >
            <ChevronLeft />
          </button>

          {/* Right Button */}
          <button
            onClick={moveNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-primary/10 hover:bg-primary/20"
          >
            <ChevronRight />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden px-12">
            <motion.div
              className="flex gap-6"
              animate={{
                x: `-${index * (100 / VISIBLE)}%`,
              }}
              transition={
                enableAnim
                  ? { duration: SLIDE_DURATION, ease: 'easeInOut' }
                  : { duration: 0 }
              }
              onAnimationComplete={handleAnimationEnd}
            >
              {extendedItems.map((t, i) => (
                <div
                  key={i}
                  className="min-w-full md:min-w-[50%] lg:min-w-[33.333%]"
                >
                  <div className="glass-card p-8 rounded-xl h-full relative">
                    <div className="absolute top-6 right-6 text-primary/20">
                      <Quote size={36} />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star
                          key={j}
                          size={16}
                          className="text-primary fill-primary"
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-muted-foreground mb-6">
                      “{t.content}”
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-semibold">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold">{t.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {t.role}, {t.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

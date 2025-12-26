// import { useState, useEffect } from 'react';
// import { ExternalLink, Loader2, Sparkles, Globe, Zap, Code, ArrowRight, ImageOff } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Link } from 'react-router-dom';

// interface Project {
//   title: string;
//   project_url: string;
//   image_url?: string;
// }

// const SHEET_ID = '1nb48TFUsm_sjwIhUTenIUakZkAjZ2O9b6Yoze-GBRuk';
// const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

// const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop';

// const getProjectIcon = (title: string) => {
//   const lowerTitle = title.toLowerCase();
//   if (lowerTitle.includes('ai') || lowerTitle.includes('productivity')) return Sparkles;
//   if (lowerTitle.includes('travel') || lowerTitle.includes('booking')) return Globe;
//   if (lowerTitle.includes('iatsat')) return Code;
//   return Zap;
// };

// const getProjectDescription = (title: string) => {
//   const lowerTitle = title.toLowerCase();
//   if (lowerTitle.includes('ai') && lowerTitle.includes('productivity')) {
//     return 'AI-Powered Productivity Tools to help you write better, work smarter, and save time.';
//   }
//   if (lowerTitle.includes('travel')) {
//     return 'Complete travel management solution with booking, itinerary planning, and real-time updates.';
//   }
//   if (lowerTitle.includes('iatsat')) {
//     return 'Professional website showcasing innovative solutions and services.';
//   }
//   return 'Modern web application built with cutting-edge technologies.';
// };

// const getProjectType = (title: string) => {
//   const lowerTitle = title.toLowerCase();
//   if (lowerTitle.includes('ai')) return 'AI/ML';
//   if (lowerTitle.includes('travel')) return 'Full Stack';
//   return 'Web App';
// };

// const Projects = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     try {
//       const response = await fetch(SHEET_URL);
//       const text = await response.text();
      
//       // Parse Google Sheets JSON response
//       const jsonStr = text.substring(47, text.length - 2);
//       const data = JSON.parse(jsonStr);
      
//       if (data.table && data.table.rows && data.table.rows.length > 0) {
//         const parsedProjects: Project[] = data.table.rows
//           .slice(1) // Skip header row
//           .map((row: any) => ({
//             title: row.c[0]?.v || '',
//             project_url: row.c[1]?.v || '',
//             image_url: row.c[2]?.v || '',
//           }))
//           .filter((p: Project) => p.title && p.title !== 'Project Name');
        
//         setProjects(parsedProjects);
//       }
//     } catch (error) {
//       console.log('Error fetching projects:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleProjectClick = (project: Project) => {
//     if (project.project_url && project.project_url.trim() !== '') {
//       window.open(project.project_url, '_blank', 'noopener,noreferrer');
//     }
//   };

//   const handleImageError = (title: string) => {
//     setImageErrors(prev => ({ ...prev, [title]: true }));
//   };

//   // Show only first 6 projects on home page
//   const displayProjects = projects.slice(0, 6);

//   return (
//     <section id="projects" className="py-24 relative">
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsla(45,100%,50%,0.05)_0%,_transparent_60%)]" />
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_hsla(25,95%,55%,0.03)_0%,_transparent_50%)]" />
      
//       <div className="container mx-auto px-6 relative">
//         <div className="text-center mb-16">
//           <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
//             Our Work
//           </span>
//           <h2 className="section-title">
//             Featured <span className="gradient-text">Projects</span>
//           </h2>
//           <p className="section-subtitle mx-auto">
//             AI-powered tools and web applications we've built
//           </p>
//         </div>

//         {loading ? (
//           <div className="flex items-center justify-center py-20">
//             <Loader2 className="w-8 h-8 animate-spin text-primary" />
//           </div>
//         ) : projects.length === 0 ? (
//           <div className="text-center py-20 text-muted-foreground">
//             No projects found. Add projects to your Google Sheet.
//           </div>
//         ) : (
//           <>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {displayProjects.map((project) => {
//                 const Icon = getProjectIcon(project.title);
//                 const description = getProjectDescription(project.title);
//                 const type = getProjectType(project.title);
//                 const hasLink = project.project_url && project.project_url.trim() !== '';
//                 const hasImageError = imageErrors[project.title];
//                 const imageUrl = project.image_url && !hasImageError ? project.image_url : FALLBACK_IMAGE;
                
//                 return (
//                   <div
//                     key={project.title}
//                     className={`glass-card rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 group ${hasLink ? 'cursor-pointer' : ''}`}
//                     onClick={() => handleProjectClick(project)}
//                   >
//                     {/* Card Header with Image or Icon */}
//                     <div className="h-48 bg-gradient-to-br from-secondary to-muted flex items-center justify-center relative overflow-hidden">
//                       {project.image_url && !hasImageError ? (
//                         <img
//                           src={imageUrl}
//                           alt={project.title}
//                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                           onError={() => handleImageError(project.title)}
//                           loading="lazy"
//                         />
//                       ) : (
//                         <>
//                           <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                           <Icon className="w-16 h-16 text-primary/70 group-hover:scale-110 transition-transform duration-300" />
//                         </>
//                       )}
//                       <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     </div>
                    
//                     {/* Card Content */}
//                     <div className="p-6">
//                       <div className="flex items-center gap-2 mb-3">
//                         <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
//                           {type}
//                         </span>
//                       </div>
                      
//                       <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
//                         {project.title}
//                       </h3>
                      
//                       <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
//                         {description}
//                       </p>
                      
//                       {hasLink ? (
//                         <Button variant="default" size="sm" className="w-full group-hover:shadow-lg group-hover:shadow-primary/20">
//                           <ExternalLink className="w-4 h-4 mr-2" />
//                           View Project
//                         </Button>
//                       ) : (
//                         <Button variant="outline" size="sm" className="w-full" disabled>
//                           Coming Soon
//                         </Button>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* View All Projects Button */}
//             {projects.length > 6 && (
//               <div className="text-center mt-12">
//                 <Button size="lg" variant="outline" asChild>
//                   <Link to="/projects" className="inline-flex items-center gap-2">
//                     View All Projects
//                     <ArrowRight size={18} />
//                   </Link>
//                 </Button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Projects;






// import { useEffect, useState } from 'react';
// import { ExternalLink, Loader2, Sparkles, Globe, Zap, Code } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Link } from 'react-router-dom';

// interface Project {
//   title: string;
//   project_url: string;
//   video_url?: string;
// }

// /* ================= GOOGLE SHEET CONFIG ================= */

// const SHEET_ID = '1nb48TFUsm_sjwIhUTenIUakZkAjZ2O9b6Yoze-GBRuk';
// const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

// /* ================= HELPERS ================= */

// const getYouTubeId = (url?: string) => {
//   if (!url) return null;
//   const regExp =
//     /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
//   const match = url.match(regExp);
//   return match ? match[1] : null;
// };

// const getProjectIcon = (title: string) => {
//   const t = title.toLowerCase();
//   if (t.includes('ai')) return Sparkles;
//   if (t.includes('travel')) return Globe;
//   if (t.includes('iatsat')) return Code;
//   return Zap;
// };

// const getProjectType = (title: string) => {
//   const t = title.toLowerCase();
//   if (t.includes('ai')) return 'AI / ML';
//   if (t.includes('travel')) return 'Full Stack';
//   return 'Web App';
// };

// const getProjectDescription = (title: string) => {
//   const t = title.toLowerCase();
//   if (t.includes('ai')) return 'AI powered productivity tool demo.';
//   if (t.includes('travel'))
//     return 'Travel management system with bookings and automation.';
//   if (t.includes('iatsat'))
//     return 'Official website showcasing solutions and services.';
//   return 'Modern web application project.';
// };

// /* ================= COMPONENT ================= */

// const Projects = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     try {
//       const res = await fetch(SHEET_URL);
//       const text = await res.text();
//       const jsonStr = text.substring(47, text.length - 2);
//       const data = JSON.parse(jsonStr);

//       if (data?.table?.rows) {
//         const parsed: Project[] = data.table.rows
//           .slice(1)
//           .map((row: any) => ({
//             title: row.c[0]?.v || '',
//             project_url: row.c[1]?.v || '',
//             video_url: row.c[2]?.v || '',
//           }))
//           .filter((p: Project) => p.title);

//         setProjects(parsed);
//       }
//     } catch (err) {
//       console.error('Error fetching projects:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const displayProjects = projects.slice(0, 6);

//   return (
//     <section id="projects" className="py-24">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-6">
//             Our Work
//           </span>
//           <h2 className="text-4xl font-bold mb-4">
//             Featured <span className="text-primary">Projects</span>
//           </h2>
//           <p className="text-muted-foreground">
//             Live demos directly from YouTube
//           </p>
//         </div>

//         {loading ? (
//           <div className="flex justify-center py-20">
//             <Loader2 className="w-8 h-8 animate-spin text-primary" />
//           </div>
//         ) : (
//           <>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {displayProjects.map((project) => {
//                 const Icon = getProjectIcon(project.title);
//                 const videoId = getYouTubeId(project.video_url);
//                 const type = getProjectType(project.title);

//                 return (
//                   <div
//                     key={project.title}
//                     className="rounded-xl overflow-hidden glass-card hover:-translate-y-2 transition-all"
//                   >
//                     {/* VIDEO SECTION */}
//                     <div className="h-48 bg-black">
//                       {videoId ? (
//                         <iframe
//                           className="w-full h-full"
//                           src={`https://www.youtube.com/embed/${videoId}`}
//                           title={project.title}
//                           frameBorder="0"
//                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                           allowFullScreen
//                           loading="lazy"
//                         />
//                       ) : (
//                         <div className="flex items-center justify-center h-full">
//                           <Icon className="w-16 h-16 text-primary/70" />
//                         </div>
//                       )}
//                     </div>

//                     {/* CONTENT */}
//                     <div className="p-6">
//                       <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
//                         {type}
//                       </span>

//                       <h3 className="text-xl font-semibold mt-4 mb-2">
//                         {project.title}
//                       </h3>

//                       <p className="text-sm text-muted-foreground mb-6">
//                         {getProjectDescription(project.title)}
//                       </p>

//                       {project.project_url ? (
//                         <Button
//                           className="w-full"
//                           onClick={() =>
//                             window.open(
//                               project.project_url,
//                               '_blank',
//                               'noopener,noreferrer'
//                             )
//                           }
//                         >
//                           <ExternalLink className="w-4 h-4 mr-2" />
//                           View Project
//                         </Button>
//                       ) : (
//                         <Button disabled variant="outline" className="w-full">
//                           Coming Soon
//                         </Button>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {projects.length > 6 && (
//               <div className="text-center mt-12">
//                 <Button variant="outline" size="lg" asChild>
//                   <Link to="/projects">View All Projects</Link>
//                 </Button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Projects;



import { useEffect, useState } from 'react';
import { ExternalLink, Loader2, Sparkles, Globe, Zap, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface Project {
  title: string;
  project_url: string;
  video_url?: string;
}

/* ================= GOOGLE SHEET ================= */

const SHEET_ID = '1nb48TFUsm_sjwIhUTenIUakZkAjZ2O9b6Yoze-GBRuk';
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

/* ================= HELPERS ================= */

const getYouTubeId = (url?: string) => {
  if (!url) return null;
  const regExp =
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

const getProjectIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('ai')) return Sparkles;
  if (t.includes('travel')) return Globe;
  if (t.includes('iatsat')) return Code;
  return Zap;
};

const getProjectType = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('ai')) return 'AI / ML';
  if (t.includes('travel')) return 'Full Stack';
  return 'Web App';
};

const getProjectDescription = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('ai')) return 'AI powered productivity demo.';
  if (t.includes('travel')) return 'Travel management system demo.';
  if (t.includes('iatsat')) return 'Corporate website demo.';
  return 'Modern web application demo.';
};

/* ================= COMPONENT ================= */

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch(SHEET_URL);
      const text = await res.text();
      const jsonStr = text.substring(47, text.length - 2);
      const data = JSON.parse(jsonStr);

      if (data?.table?.rows) {
        const parsed: Project[] = data.table.rows
          .slice(1)
          .map((row: any) => ({
            title: row.c[0]?.v || '',
            project_url: row.c[1]?.v || '',
            video_url: row.c[2]?.v || '',
          }))
          .filter((p: Project) => p.title);

        setProjects(parsed);
      }
    } catch (err) {
      console.error('Error fetching projects:', err);
    } finally {
      setLoading(false);
    }
  };

  const openProject = (url?: string) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const displayProjects = projects.slice(0, 6);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground">
            Autoplay demos — click to open project
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayProjects.map((project) => {
                const Icon = getProjectIcon(project.title);
                const videoId = getYouTubeId(project.video_url);
                const type = getProjectType(project.title);

                return (
                  <div
                    key={project.title}
                    onClick={() => openProject(project.project_url)}
                    className="rounded-xl overflow-hidden glass-card cursor-pointer
                               hover:-translate-y-2 transition-all"
                  >
                    {/* VIDEO */}
                    <div className="h-48 bg-black relative pointer-events-none">
                      {videoId ? (
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&playsinline=1`}
                          title={project.title}
                          frameBorder="0"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <Icon className="w-16 h-16 text-primary/70" />
                        </div>
                      )}
                    </div>

                    {/* CONTENT */}
                    <div className="p-6">
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {type}
                      </span>

                      <h3 className="text-xl font-semibold mt-4 mb-2">
                        {project.title}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-6">
                        {getProjectDescription(project.title)}
                      </p>

                      <Button className="w-full pointer-events-none">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Open Project
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            {projects.length > 6 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" asChild>
                  <Link to="/projects">View All Projects</Link>
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;

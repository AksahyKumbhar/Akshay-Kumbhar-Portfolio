// import { useState, useEffect } from 'react';
// import { ExternalLink, Loader2, Sparkles, Globe, Zap, Code, ArrowLeft, Filter } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Link } from 'react-router-dom';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// interface Project {
//   title: string;
//   project_url: string;
//   image_url?: string;
// }

// const SHEET_ID = '1nb48TFUsm_sjwIhUTenIUakZkAjZ2O9b6Yoze-GBRuk';
// const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;
// const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop';
// const ITEMS_PER_PAGE = 9;

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

// const ProjectsPage = () => {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
//   const [currentPage, setCurrentPage] = useState(1);
//   const [filter, setFilter] = useState<string>('all');

//   useEffect(() => {
//     fetchProjects();
//     window.scrollTo(0, 0);
//   }, []);

//   const fetchProjects = async () => {
//     try {
//       const response = await fetch(SHEET_URL);
//       const text = await response.text();
//       const jsonStr = text.substring(47, text.length - 2);
//       const data = JSON.parse(jsonStr);
      
//       if (data.table && data.table.rows && data.table.rows.length > 0) {
//         const parsedProjects: Project[] = data.table.rows
//           .slice(1)
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

//   // Filter projects
//   const filteredProjects = filter === 'all' 
//     ? projects 
//     : projects.filter(p => getProjectType(p.title).toLowerCase().includes(filter.toLowerCase()));

//   // Pagination
//   const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const displayProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

//   const categories = ['all', 'AI/ML', 'Full Stack', 'Web App'];

//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />
      
//       <main className="pt-24 pb-16">
//         <div className="container mx-auto px-6">
//           {/* Header */}
//           <div className="mb-12">
//             <Link 
//               to="/" 
//               className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
//             >
//               <ArrowLeft size={18} />
//               Back to Home
//             </Link>
            
//             <h1 className="section-title mb-4">
//               All <span className="gradient-text">Projects</span>
//             </h1>
//             <p className="section-subtitle">
//               Explore our complete portfolio of AI tools and web applications
//             </p>
//           </div>

//           {/* Filter */}
//           <div className="flex flex-wrap items-center gap-3 mb-10">
//             <Filter size={18} className="text-muted-foreground" />
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => { setFilter(cat); setCurrentPage(1); }}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                   filter === cat 
//                     ? 'bg-primary text-primary-foreground' 
//                     : 'bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground'
//                 }`}
//               >
//                 {cat === 'all' ? 'All' : cat}
//               </button>
//             ))}
//           </div>

//           {loading ? (
//             <div className="flex items-center justify-center py-20">
//               <Loader2 className="w-8 h-8 animate-spin text-primary" />
//             </div>
//           ) : filteredProjects.length === 0 ? (
//             <div className="text-center py-20 text-muted-foreground">
//               No projects found.
//             </div>
//           ) : (
//             <>
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {displayProjects.map((project, index) => {
//                   const Icon = getProjectIcon(project.title);
//                   const description = getProjectDescription(project.title);
//                   const type = getProjectType(project.title);
//                   const hasLink = project.project_url && project.project_url.trim() !== '';
//                   const hasImageError = imageErrors[project.title];
//                   const imageUrl = project.image_url && !hasImageError ? project.image_url : FALLBACK_IMAGE;
                  
//                   return (
//                     <div
//                       key={project.title}
//                       className={`glass-card rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 group animate-fade-up opacity-0 ${hasLink ? 'cursor-pointer' : ''}`}
//                       style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
//                       onClick={() => handleProjectClick(project)}
//                     >
//                       <div className="h-48 bg-gradient-to-br from-secondary to-muted flex items-center justify-center relative overflow-hidden">
//                         {project.image_url && !hasImageError ? (
//                           <img
//                             src={imageUrl}
//                             alt={project.title}
//                             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                             onError={() => handleImageError(project.title)}
//                             loading="lazy"
//                           />
//                         ) : (
//                           <>
//                             <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                             <Icon className="w-16 h-16 text-primary/70 group-hover:scale-110 transition-transform duration-300" />
//                           </>
//                         )}
//                         <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                       </div>
                      
//                       <div className="p-6">
//                         <div className="flex items-center gap-2 mb-3">
//                           <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
//                             {type}
//                           </span>
//                         </div>
                        
//                         <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
//                           {project.title}
//                         </h3>
                        
//                         <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
//                           {description}
//                         </p>
                        
//                         {hasLink ? (
//                           <Button variant="default" size="sm" className="w-full">
//                             <ExternalLink className="w-4 h-4 mr-2" />
//                             View Project
//                           </Button>
//                         ) : (
//                           <Button variant="outline" size="sm" className="w-full" disabled>
//                             Coming Soon
//                           </Button>
//                         )}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* Pagination */}
//               {totalPages > 1 && (
//                 <div className="flex justify-center items-center gap-2 mt-12">
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
//                     disabled={currentPage === 1}
//                   >
//                     Previous
//                   </Button>
                  
//                   {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                     <button
//                       key={page}
//                       onClick={() => setCurrentPage(page)}
//                       className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
//                         currentPage === page
//                           ? 'bg-primary text-primary-foreground'
//                           : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
//                       }`}
//                     >
//                       {page}
//                     </button>
//                   ))}
                  
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
//                     disabled={currentPage === totalPages}
//                   >
//                     Next
//                   </Button>
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//       </main>
      
//       <Footer />
//     </div>
//   );
// };

// export default ProjectsPage;



import { useEffect, useState } from 'react';
import {
  ExternalLink,
  Loader2,
  Sparkles,
  Globe,
  Zap,
  Code,
  ArrowLeft,
  Filter,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/* ================= TYPES ================= */

interface Project {
  title: string;
  project_url: string;
  video_url?: string;
}

/* ================= CONSTANTS ================= */

const SHEET_ID = '1nb48TFUsm_sjwIhUTenIUakZkAjZ2O9b6Yoze-GBRuk';
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;
const ITEMS_PER_PAGE = 9;

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
  if (t.includes('ai') || t.includes('productivity')) return Sparkles;
  if (t.includes('travel') || t.includes('booking')) return Globe;
  if (t.includes('iatsat')) return Code;
  return Zap;
};

const getProjectType = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('ai')) return 'AI/ML';
  if (t.includes('travel')) return 'Full Stack';
  return 'Web App';
};

const getProjectDescription = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('ai') && t.includes('productivity'))
    return 'AI-powered productivity tools demo.';
  if (t.includes('travel'))
    return 'Complete travel management system demo.';
  if (t.includes('iatsat'))
    return 'Professional corporate website demo.';
  return 'Modern web application demo.';
};

/* ================= COMPONENT ================= */

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    fetchProjects();
    window.scrollTo(0, 0);
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch(SHEET_URL);
      const text = await response.text();
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

  const handleProjectClick = (project: Project) => {
    if (project.project_url) {
      window.open(project.project_url, '_blank', 'noopener,noreferrer');
    }
  };

  /* ================= FILTER + PAGINATION ================= */

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) =>
          getProjectType(p.title)
            .toLowerCase()
            .includes(filter.toLowerCase())
        );

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayProjects = filteredProjects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const categories = ['all', 'AI/ML', 'Full Stack', 'Web App'];

  /* ================= RENDER ================= */

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* HEADER */}
          <div className="mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>

            <h1 className="section-title mb-4">
              All <span className="gradient-text">Projects</span>
            </h1>
            <p className="section-subtitle">
              Explore our complete portfolio with live demos
            </p>
          </div>

          {/* FILTER */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <Filter size={18} className="text-muted-foreground" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                }`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              No projects found.
            </div>
          ) : (
            <>
              {/* PROJECT GRID */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayProjects.map((project, index) => {
                  const Icon = getProjectIcon(project.title);
                  const videoId = getYouTubeId(project.video_url);
                  const type = getProjectType(project.title);

                  return (
                    <div
                      key={project.title}
                      onClick={() => handleProjectClick(project)}
                      className="glass-card rounded-xl overflow-hidden cursor-pointer
                                 transition-all duration-300 hover:-translate-y-2
                                 animate-fade-up opacity-0"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animationFillMode: 'forwards',
                      }}
                    >
                      {/* VIDEO */}
                      <div className="h-48 bg-black pointer-events-none">
                        {videoId ? (
                          <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&playsinline=1`}
                            title={project.title}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            <Icon className="w-16 h-16 text-primary/70" />
                          </div>
                        )}
                      </div>

                      {/* CONTENT */}
                      <div className="p-6">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                          {type}
                        </span>

                        <h3 className="font-heading font-semibold text-xl mt-4 mb-3">
                          {project.title}
                        </h3>

                        <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                          {getProjectDescription(project.title)}
                        </p>

                        <Button className="w-full pointer-events-none">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* PAGINATION */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setCurrentPage((p) => Math.max(1, p - 1))
                    }
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-lg text-sm font-medium ${
                          currentPage === page
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setCurrentPage((p) =>
                        Math.min(totalPages, p + 1)
                      )
                    }
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;

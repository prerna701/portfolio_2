import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Work.css";
import "./styles/Career.css"; // For modal styles

const imageModules = import.meta.glob('/public/images/**/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' });

const getProjectImages = (folderName: string | undefined) => {
  if (!folderName) return [];
  const images: string[] = [];
  const prefix = `/public/images/${folderName}/`;
  for (const path in imageModules) {
    if (path.startsWith(prefix)) {
      images.push(imageModules[path] as string);
    }
  }
  return images;
};

const projects = [
  {
    title: "De Royal Kore",
    category: "Patient Booking Platform",
    tools: "React, Node.js, Express, MongoDB, Docker, GitHub Actions",
    image: "/images/whatsapp.png",
    link: "https://deroyalkore.com",
    folderName: "deroyalkore"
  },
  {
    title: "Internal Task Dashboard",
    category: "Team Task-Tracking Platform",
    tools: "Next.js, Node.js, PostgreSQL, Socket.IO, Prisma",
    image: "/images/taskmanagement/Screenshot 2026-09-07 151050.png",
    link: "http://20.44.53.244:3000",
    folderName: "taskmanagement"
  },
  {
    title: "AI Career Coach",
    category: "Resume Analysis Platform",
    tools: "Python, Machine Learning, ATS Scoring",
    image: "/images/orrdr.png",
    link: "https://ai-career-coach-cyr0s3vfj-prernas-projects-1b311665.vercel.app/",
    folderName: "ai-careercoach"
  },
];

const Work = () => {
  const [modalImages, setModalImages] = useState<string[] | null>(null);

  useEffect(() => {
    // Refresh GSAP ScrollTrigger to recalculate the page height after layout changes
    // Add a slight delay to ensure the DOM has fully rendered the new vertical layout
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  const openModal = (images: string[]) => {
    setModalImages(images);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalImages(null);
    document.body.style.overflow = 'auto';
  };



  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="projects-list" style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {projects.map((project, index) => {
            const images = getProjectImages(project.folderName);
            const coverImages = images.slice(0, 2);

            return (
              <div className="project-row" key={index}>
                <div className="project-info">
                  <div className="carousel-number" style={{ marginBottom: '15px' }}>
                    <h3>0{index + 1}</h3>
                  </div>
                  <h4 style={{ fontSize: '32px', color: '#fff', marginBottom: '10px' }}>{project.title}</h4>
                  <p className="carousel-category" style={{ marginBottom: '20px' }}>
                    {project.category}
                  </p>
                  
                  <div className="carousel-tools" style={{ marginBottom: '20px' }}>
                    <span className="tools-label">Tools & Features</span>
                    <p style={{ marginTop: '8px' }}>{project.tools}</p>
                  </div>
                  
                  <div className="carousel-links" style={{ marginTop: '30px' }}>
                    {project.link !== "#" && (
                      <p style={{ margin: '0 0 15px 0', fontSize: '18px' }}>
                        <strong style={{ color: '#94a3b8' }}>Live at:</strong> <a href={project.link} target="_blank" rel="noreferrer" style={{ color: '#14b8a6', textDecoration: 'underline', fontWeight: 'bold' }}>{project.link}</a>
                      </p>
                    )}
                    {images.length > 0 && (
                      <button 
                        className="read-more-btn" 
                        onClick={() => openModal(images)}
                        style={{ marginTop: '10px' }}
                      >
                        View All {images.length} Images
                      </button>
                    )}
                  </div>
                </div>

                <div className="project-screenshots">
                  {coverImages.length > 0 ? (
                    coverImages.map((img, i) => (
                      <img 
                        key={i} 
                        src={img} 
                        alt={`${project.title} screenshot ${i + 1}`} 
                        className="project-screenshot-img" 
                      />
                    ))
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="project-screenshot-img single-fallback" 
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {modalImages && createPortal(
        <div className="career-modal-overlay" onClick={closeModal}>
          <div className="career-modal-content" onClick={(e) => e.stopPropagation()} style={{ overflowY: 'auto', maxHeight: '90vh', width: '90%', maxWidth: '1200px' }}>
            <button className="career-modal-close" onClick={closeModal}>&times;</button>
            <h3 className="career-modal-title">Project Images</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {modalImages.map((img, i) => (
                <img key={i} src={img} alt={`Screenshot ${i + 1}`} style={{ width: '100%', borderRadius: '8px', border: '1px solid #1e293b' }} />
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
      
    </div>
  );
};

export default Work;

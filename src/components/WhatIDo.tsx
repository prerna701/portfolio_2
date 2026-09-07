import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TbArrowUpRight, TbBrandAws, TbBrandAzure, TbCloudComputing, TbCode, TbServer2, TbShieldLock } from "react-icons/tb";
import {
  SiDocker,
  SiGithubactions,
  SiGitlab,
  SiMongodb,
  SiMui,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const cards = [
  {
    num: "01",
    icon: TbCode,
    title: "FRONTEND DEVELOPMENT",
    subtitle: "Base UI, Built & Optimized",
    desc: "Build responsive, reusable UI from the ground up with React.js, Next.js and Tailwind CSS — then optimize it for performance, from component structure and state management down to load times.",
    tags: [
      { label: "React.js", Icon: SiReact },
      { label: "Next.js", Icon: SiNextdotjs },
      { label: "Tailwind CSS", Icon: SiTailwindcss },
      { label: "TypeScript", Icon: SiTypescript },
      { label: "Redux", Icon: SiRedux },
      { label: "Material UI", Icon: SiMui },
    ],
    href: "https://ai-career-coach-cyr0s3vfj-prernas-projects-1b311665.vercel.app/",
    cta: "View live frontend",
  },
  {
    num: "02",
    icon: TbServer2,
    title: "BACKEND DEVELOPMENT",
    subtitle: "Optimized REST APIs & Data Layers",
    desc: "Design layered REST APIs with Node.js, Express and NestJS, secured with JWT & CASL role-based access, and optimize PostgreSQL/MongoDB with indexing, connection pooling and pagination for real-time, high-load workloads.",
    tags: [
      { label: "Node.js", Icon: SiNodedotjs },
      { label: "NestJS", Icon: SiNestjs },
      { label: "PostgreSQL", Icon: SiPostgresql },
      { label: "MongoDB", Icon: SiMongodb },
      { label: "JWT & CASL", Icon: TbShieldLock },
      { label: "WebSockets", Icon: SiSocketdotio },
    ],
    href: "http://20.44.53.244:3000",
    cta: "View live backend",
  },
  {
    num: "03",
    icon: TbCloudComputing,
    title: "DEVOPS & DEPLOYMENT",
    subtitle: "CI/CD Pipelines & Cloud Deployment",
    desc: "Containerize apps with multi-stage Docker builds and ship them through GitLab CI/CD and GitHub Actions pipelines — deploying production workloads to Azure, AWS and Oracle Cloud VMs, plus Vercel for serverless front ends.",
    tags: [
      { label: "Docker", Icon: SiDocker },
      { label: "GitLab CI/CD", Icon: SiGitlab },
      { label: "GitHub Actions", Icon: SiGithubactions },
      { label: "Azure", Icon: TbBrandAzure },
      { label: "AWS", Icon: TbBrandAws },
      { label: "Oracle Cloud", Icon: TbCloudComputing },
      { label: "Vercel", Icon: SiVercel },
    ],
    href: "https://deroyalkore.com",
    cta: "View live deployment",
  },
];

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  const handleGlow = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>

          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                className="what-content what-noTouch"
                ref={(el) => setRef(el, index)}
                onMouseMove={handleGlow}
                key={card.title}
              >
                <div className="what-border1">
                  <svg height="100%">
                    <line x1="0" y1={index === 0 ? "0" : "100%"} x2="100%" y2={index === 0 ? "0" : "100%"} stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                    {index === 0 && (
                      <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                    )}
                  </svg>
                </div>
                <div className="what-corner"></div>
                <div className="what-glow"></div>
                <Icon className="what-icon-bg" />

                <div className="what-content-in">
                  <div className="what-eyebrow">{card.num}</div>
                  <h3>{card.title}</h3>
                  <h4>{card.subtitle}</h4>
                  <p>{card.desc}</p>
                  <h5>Skillset & tools</h5>
                  <div className="what-content-flex">
                    {card.tags.map(({ label, Icon: TagIcon }) => (
                      <div className="what-tags" key={label}>
                        <TagIcon />
                        {label}
                      </div>
                    ))}
                  </div>
                  <a
                    className="what-cta"
                    href={card.href}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="disable"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>{card.cta}</span>
                    <TbArrowUpRight />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}

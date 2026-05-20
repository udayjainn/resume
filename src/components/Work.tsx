import { useEffect, useRef } from "react";
import "./styles/Work.css";
import { MdArrowOutward } from "react-icons/md";
import { VscExtensions } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa6";
import gsap from "gsap";

const extension = {
  name: "GitFlipper",
  tagline:
    "A VS Code extension that automatically switches your Git identity based on the folder you're working in.",
  features: [
    "Guided setup wizard that detects your existing Git config and SSH keys",
    "Status bar showing which identity is active at all times",
    "Pre-commit hook that blocks commits with the wrong email",
    "Multi-root workspace support — different identities in the same window",
  ],
  marketplace: "https://lnkd.in/guwu2PBQ",
  source: "https://lnkd.in/gd3fvrPx",
};

const papers = [
  {
    title:
      "Enhancing Healthcare Diagnostics with SVM-Based Machine Learning for Diabetes Prediction",
    publisher: "Springer",
    year: "2025",
    domain: "Healthcare / ML",
    link: "https://www.atlantis-press.com/proceedings/icaaai-25/126012636",
  },
  {
    title:
      "A Real-Time Crowd Tracking and Control System Using Deep Learning",
    publisher: "Springer",
    year: "2024",
    domain: "Computer Vision",
    link: "https://link.springer.com/chapter/10.1007/978-981-97-3817-5_42",
  },
  {
    title:
      "Malicious DNS Detection and Prediction Using SMOTE-ENN and Hybrid Artificial Neural Network",
    publisher: "IEEE Xplore",
    year: "2022",
    domain: "Cybersecurity / AI",
    link: "https://ieeexplore.ieee.org/document/10037679",
  },
  {
    title: "Image Captioning — A Deep Learning Approach",
    publisher: "IJRASET",
    year: "2022",
    domain: "Deep Learning / NLP",
    link: "https://www.ijraset.com/research-paper/image-captioning-a-deep-learning-approach",
  },
  {
    title:
      "Secure One-Time Password Generation Using Shamir's Secret Sharing",
    publisher: "IJFMR",
    year: "2023",
    domain: "Cryptography",
    link: "https://www.ijfmr.com/papers/2023/6/8630.pdf",
  },
  {
    title: "An Ensemble Approach to Chronic Kidney Disease's Diagnosis",
    publisher: "IJRASET",
    year: "2023",
    domain: "Healthcare / ML",
    link: "https://doi.org/10.22214/ijraset.2023.56526",
  },
  {
    title:
      "A Deep Learning Approach to Job Recommendation Analysis with NLP",
    publisher: "IJISRT",
    year: "2023",
    domain: "Deep Learning / NLP",
    link: "https://ijisrt.com/a-deep-learning-approach-to-job-recommendation-analysis-with-nlp",
  },
];

const Work = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInnerRef = useRef<HTMLDivElement>(null);

  // Hero tilt + glow effect
  useEffect(() => {
    const hero = heroRef.current;
    const inner = heroInnerRef.current;
    if (!hero || !inner) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(inner, {
        rotateY: x * 8,
        rotateX: -y * 6,
        duration: 0.5,
        ease: "power2.out",
      });
      hero.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
      hero.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
    };

    const handleMouseLeave = () => {
      gsap.to(inner, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Paper card hover glow tracking
  useEffect(() => {
    const cards = document.querySelectorAll(".work-paper-card");
    const handlers = new Map<Element, (e: MouseEvent) => void>();

    cards.forEach((card) => {
      const handler = (e: MouseEvent) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        (card as HTMLElement).style.setProperty(
          "--mouse-x",
          `${e.clientX - rect.left}px`
        );
        (card as HTMLElement).style.setProperty(
          "--mouse-y",
          `${e.clientY - rect.top}px`
        );
      };
      handlers.set(card, handler);
      card.addEventListener("mousemove", handler as EventListener);
    });

    return () => {
      cards.forEach((card) => {
        const handler = handlers.get(card);
        if (handler)
          card.removeEventListener("mousemove", handler as EventListener);
      });
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2 className="work-heading">
          My <span>Work</span>
        </h2>

        <div className="work-hero" ref={heroRef} data-cursor="disable">
          <div className="work-hero-glow"></div>
          <div className="work-hero-inner" ref={heroInnerRef}>
            <div className="work-hero-label">Featured Project</div>
            <div className="work-hero-content">
              <div className="work-hero-info">
                <h3>{extension.name}</h3>
                <p className="work-hero-tagline">{extension.tagline}</p>
                <ul className="work-hero-features">
                  {extension.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <div className="work-hero-actions">
                  <a
                    href={extension.marketplace}
                    target="_blank"
                    rel="noreferrer"
                    className="work-hero-btn work-hero-btn-primary"
                  >
                    <VscExtensions />
                    Install Extension
                  </a>
                  <a
                    href={extension.source}
                    target="_blank"
                    rel="noreferrer"
                    className="work-hero-btn work-hero-btn-secondary"
                  >
                    <FaGithub />
                    Source Code
                  </a>
                </div>
              </div>
              <div className="work-hero-visual">
                <div className="work-hero-icon">
                  <VscExtensions />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="work-divider">
          <div className="work-divider-line"></div>
          <div className="work-divider-dot"></div>
        </div>

        <div className="work-papers-header">
          <h3>Research Papers</h3>
          <span className="work-papers-count">{papers.length} Publications</span>
        </div>

        <div className="work-papers-grid">
          {papers.map((paper, index) => (
            <a
              key={index}
              href={paper.link}
              target="_blank"
              rel="noreferrer"
              className="work-paper-card"
              data-cursor="disable"
            >
              <div className="work-paper-number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="work-paper-body">
                <h4>{paper.title}</h4>
                <div className="work-paper-meta">
                  <span className="work-paper-publisher">{paper.publisher}</span>
                  <span className="work-paper-year">{paper.year}</span>
                  <span className="work-paper-domain">{paper.domain}</span>
                </div>
              </div>
              <div className="work-paper-arrow">
                <MdArrowOutward />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

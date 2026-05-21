import { useEffect, useRef } from "react";
import "./styles/Certifications.css";
import { MdArrowOutward } from "react-icons/md";
import { FaAws, FaGoogle, FaLaptopCode } from "react-icons/fa6";
import { SiCodingninjas } from "react-icons/si";
import { IconType } from "react-icons";

const certifications: {
  name: string;
  issuer: string;
  link: string;
  color: string;
  icon?: IconType;
  img?: string;
}[] = [
  {
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    link: "https://www.credly.com/badges/c2bca2e1-d2db-4635-88a2-5c314f59b472/public_url",
    color: "#FF9900",
    icon: FaAws,
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    link: "https://www.credly.com/badges/40149230-a45a-4ed1-8dfb-8bf57068d294/linked_in_profile",
    color: "#FF9900",
    icon: FaAws,
  },
  {
    name: "Google LLM Certifications (All 7)",
    issuer: "Google",
    link: "https://www.skills.google/course_templates/539/badge",
    color: "#4285F4",
    icon: FaGoogle,
  },
  {
    name: "Data Structures in C++",
    issuer: "Coding Ninjas",
    link: "https://ninjasfiles.s3.amazonaws.com/certificate740620ee886896b0f52c31b997af008a9aade7.pdf",
    color: "#F97316",
    icon: SiCodingninjas,
  },
  {
    name: "Machine Learning Course",
    issuer: "Coding Ninjas",
    link: "https://files.codingninjas.in/certificate1084657dd0875a3c6a3d570932a3ba5b3bdc5cf.pdf",
    color: "#F97316",
    icon: SiCodingninjas,
  },
  {
    name: "Machine Learning Masters",
    issuer: "Coding Blocks",
    link: "https://online.codingblocks.com/certificates/CBOL-198728-8968",
    color: "#6366F1",
    img: "/images/codingblocks.png",
  },
  {
    name: "Web Development Course",
    issuer: "Internshala",
    link: "https://trainings.internshala.com/verify_certificate?certificate_number=8FE6D85E-C6F7-59B5-53FA-11DBCA63DA73",
    color: "#00A5EC",
    icon: FaLaptopCode,
  },
];

const Certifications = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let paused = false;

    const onEnter = () => (paused = true);
    const onLeave = () => (paused = false);

    track.addEventListener("mouseenter", onEnter);
    track.addEventListener("mouseleave", onLeave);

    let pos = 0;
    const speed = 0.5;

    const animate = () => {
      if (!paused) {
        pos -= speed;
        const halfWidth = track.scrollWidth / 2;
        if (Math.abs(pos) >= halfWidth) {
          pos = 0;
        }
        track.style.transform = `translateX(${pos}px)`;
      }
      requestAnimationFrame(animate);
    };

    const raf = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(raf);
      track.removeEventListener("mouseenter", onEnter);
      track.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const allCerts = [...certifications, ...certifications];

  return (
    <div className="cert-section" id="certifications">
      <div className="cert-header section-container">
        <h2 className="cert-heading">
          Certi<span>fications</span>
        </h2>
      </div>
      <div className="cert-carousel">
        <div className="cert-track" ref={trackRef}>
          {allCerts.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <a
                key={i}
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="cert-card"
                data-cursor="disable"
                onMouseMove={handleMouseMove}
              >
                <div className="cert-card-glow"></div>
                <div
                  className="cert-accent-line"
                  style={{ background: cert.color }}
                ></div>
                <div className="cert-card-body">
                  <div className="cert-icon" style={{ color: cert.color }}>
                    {cert.img ? (
                      <img src={cert.img} alt={cert.issuer} className="cert-icon-img" />
                    ) : Icon ? (
                      <Icon />
                    ) : null}
                  </div>
                  <div className="cert-card-content">
                    <h3>{cert.name}</h3>
                    <span className="cert-issuer">{cert.issuer}</span>
                  </div>
                </div>
                <div className="cert-card-arrow">
                  <MdArrowOutward />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Certifications;

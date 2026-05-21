import { useState } from "react";
import { MdArrowOutward, MdContentCopy, MdCopyright, MdCheck } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("udayjain00@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p className="contact-email-row">
              <a
                href="mailto:udayjain00@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Email — udayjain00@gmail.com
              </a>
              <button
                className="contact-copy-btn"
                onClick={copyEmail}
                data-cursor="disable"
                title="Copy email"
              >
                {copied ? <MdCheck /> : <MdContentCopy />}
              </button>
            </p>
            <h4>Education</h4>
            <p>
              Master’s in Applied Computer Science, Concordia University — 2024 - Present
            </p>
            <p>
              B.Tech in Computer Science Engineering, GGSIPU — 2019 - 2023
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/udayjainn"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/uday-jain-2853581a6/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Uday Jain</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

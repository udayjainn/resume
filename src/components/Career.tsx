import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Development Engineer Intern</h4>
                <h5>Flexspring</h5>
              </div>
              <h3>Jan 2026 - Present</h3>
            </div>
            <p>
              Collaborate with cross-functional teams to design and deploy scalable, efficient web applications for Flexspring's cloud-based integration products using Spring Boot and React.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Development Engineer Intern</h4>
                <h5>Amazon</h5>
              </div>
              <h3>May - Jul 2025</h3>
            </div>
            <p>
              Designed and deployed an Al agent using Amazon Bedrock LLM for automated dataset generation. Built scalable cloud architecture with AWS CDK, Integrating S3 storage, OpenSearch Serverless, and Bedrock Knowledge Base.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Development Engineer</h4>
                <h5>ICICI Lombard</h5>
              </div>
              <h3>Feb - Sep 2024</h3>
            </div>
            <p>
              Boosted customer behavior insights by 40% using advanced ML models for data interpretation. Reduced bounce rate by optimizing user engagement and retention through ML models.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>System Engineer</h4>
                <h5>Tata Consultancy Services</h5>
              </div>
              <h3>Feb 2023 - Jan 2024</h3>
            </div>
            <p>
              Wrote SQL queries, performed data cleaning, and utilized Power BI for business visualization. Worked on a project of areas of GRC application development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Teaching Assistant</h4>
                <h5>Coding Ninjas</h5>
              </div>
              <h3>Oct 2021 - Feb 2022</h3>
            </div>
            <p>
              Conducted doubt-resolving sessions, debugged student code, and helped design and fine-tune course material for data science programs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Developer</h4>
                <h5>Board Easy</h5>
              </div>
              <h3>Sep - Oct 2021</h3>
            </div>
            <p>
              Designed onboarding flows that increased users reaching AHA moments by 115% and in-app journey campaigns that boosted activation by 22%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

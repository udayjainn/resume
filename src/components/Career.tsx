import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
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
              <h3>2026-Present</h3>
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
              <h3>2025</h3>
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
              <h3>2024</h3>
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
              <h3>2023-24</h3>
            </div>
            <p>
              Wrote SQL queries, performed data cleaning, and utilized Power BI for business visualization. Worked on a project of areas of GRC application development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

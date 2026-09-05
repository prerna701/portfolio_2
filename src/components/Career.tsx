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
                <h4>Software Developer Intern</h4>
                <h5>Walkwel Technology</h5>
              </div>
              <h3>Feb '26 – Jul '26</h3>
            </div>
            <p>
              Built client onboarding, product catalog and order-management modules for an enterprise after-sales support platform using NestJS, PostgreSQL and TypeORM. Implemented real-time support-ticketing over WebSockets and built CI/CD pipelines in GitLab.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front End Developer Intern</h4>
                <h5>Imarticus Learning</h5>
              </div>
              <h3>Jan '24 – Apr '24</h3>
            </div>
            <p>
              Built responsive, reusable user-interface components using React.js, JavaScript, HTML and CSS, and integrated them with REST APIs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

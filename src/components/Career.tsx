import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer </h4>
                <h5>Walkwel Technology</h5>
              </div>
              <h3>Feb '26 – Jul '26</h3>
            </div>
            <div className="career-info-details">
              <ul className="career-modal-list" style={{ marginTop: '20px', marginLeft: '20px' }}>
                <li>Built client onboarding, product catalog and order-management modules for an enterprise after-sales support platform using NestJS, PostgreSQL and TypeORM, including a multi-step client approval workflow and a version-controlled Knowledge Base with document-level access control.</li>
                <li>Implemented a real-time support-ticketing system with technician assignment and inspection workflows over WebSockets, with role-based access control (CASL + JWT) across Client, Technician and Admin roles.</li>
                <li>Designed relational schemas and REST APIs for a project/sprint/task management system with a Next.js drag-and-drop task board and rich-text editing; added per-user permission overrides and automated task reassignment.</li>
                <li>Integrated third-party systems (Zoho, Keka) through scheduled background sync jobs.</li>
                <li>Wrote unit, integration and end-to-end tests in Jest and built a GitLab CI/CD pipeline automating database migrations, seeding, test execution, image publishing and rollback across dev, test and production Docker environments.</li>
              </ul>
            </div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front End Developer Intern</h4>
                <h5>Imarticus Learning</h5>
              </div>
              <h3>Jan '24 – Apr '24</h3>
            </div>
            <div className="career-info-details">
              <ul className="career-modal-list" style={{ marginTop: '20px', marginLeft: '20px' }}>
                <li>Built responsive, reusable user-interface components using React.js, JavaScript, HTML and CSS, and integrated them with REST APIs.</li>
              </ul>
            </div>
          </div>

          {/* Education Section */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology</h4>
                <h5>Computer Science & Engineering</h5>
              </div>
              <h3>2020 – 2024</h3>
            </div>
            <div className="career-info-details">
              <ul className="career-modal-list" style={{ marginTop: '20px', marginLeft: '20px' }}>
                <li>Graduated with a focus on Software Engineering, Data Structures, and Web Development.</li>
                <li>Participated in multiple hackathons and built several full-stack projects during the curriculum.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

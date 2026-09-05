import "./styles/Education.css";

const education = [
  {
    degree: "MCA, Cloud Computing & DevOps",
    school: "Chandigarh University, Mohali",
    years: "2024 – 2026",
    badge: "CU",
  },
  {
    degree: "BCA, Cloud Computing",
    school: "Panipat Institute of Engineering & Technology, Panipat",
    years: "2021 – 2024",
    badge: "PIET",
  },
];

const Education = () => {
  return (
    <div className="education-section section-container" id="education">
      <div className="education-container">
        <h2>
          My <span>Education</span>
        </h2>
        <div className="education-grid">
          {education.map((edu) => (
            <div className="education-card" key={edu.degree}>
              <h5>{edu.years}</h5>
              <h4>{edu.degree}</h4>
              <p>{edu.school}</p>
              <div className="logo-badge">{edu.badge}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

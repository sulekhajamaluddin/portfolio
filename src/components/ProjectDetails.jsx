export default function ProjectDetails({ project }) {
  const arrayOfPills = project.technologiesUsed.map((pill, index) => (
    <span className="pill" key={index}>
      {pill}
    </span>
  ));

  return (
    <div className="project-item">
      <div className="project-item__section-one">
        <img src={project.projectImage} alt={project.projectImageDescription} />
      </div>
      <div className="project-item__section-two">
        <h3>{project.projectName}</h3>
        <p>{project.projectDescription}</p>
        {arrayOfPills}
        <a
          href="https://eika-shopping-wishlist.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Visit Website/App</button>
        </a>
        <button>Git Repository</button>
      </div>
    </div>
  );
}

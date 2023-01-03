export default function ProjectDetails({ project, setModal }) {
  const handleCloseModal = () => {
    setModal(null);
  };

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
        <div>
          <h3>{project.projectName}</h3>
          <p>{project.projectDescription}</p>
          <div className="project-item__pills">{arrayOfPills}</div>
          <button className="close-button" onClick={() => handleCloseModal()}>
            X
          </button>
        </div>
        <div className="project-item__links">
          {/* I think that the noopener noreferrer is not longer needed, as it does not trigger warnings anymore in React 18 */}
          <a
            className="button"
            href={project.webAddress}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="primary">Visit Website/App</button>
          </a>
          <a
            className="button"
            href={project.gitAddress}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="secondary">Git Repository</button>
          </a>
        </div>
      </div>
    </div>
  );
}

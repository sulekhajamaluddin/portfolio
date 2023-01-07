export default function ProjectModal({ project, setModal }) {
  const {
    projectName,
    projectDescription,
    projectImage,
    projectImageDescription,
    webAddress,
    gitAddress,
  } = project;

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
      <img className="image" src={projectImage} alt={projectImageDescription} />
      <div className="project-details">
        <div>
          <h3>{projectName}</h3>
          <p>{projectDescription}</p>
          <div className="tech-pills">{arrayOfPills}</div>
          <button className="close-button" onClick={() => handleCloseModal()}>
            X
          </button>
        </div>
        <div className="links">
          <a
            className="button"
            href={webAddress}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="primary">Visit Website/App</button>
          </a>
          <a
            className="button"
            href={gitAddress}
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

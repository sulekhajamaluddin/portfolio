import ProjectDetails from "./ProjectDetails";

export default function ProjectCard({ cssClass, setModal, project }) {
  const handleModal = (project) => {
    setModal(<ProjectDetails project={project} setModal={setModal} />);
  };

  return (
    <div key={project.projectID}>
      <button
        className="project-card"
        disabled={`${cssClass}` === "comingSoon" ? true : false}
        onClick={() => handleModal(project)}
      >
        {cssClass === "comingSoon" && (
          <div className="overlay">
            <p>COMING SOON...</p>
          </div>
        )}
        <div className={`card ${cssClass}`}>
          <img
            className="card__image"
            src={project.projectCardImage}
            alt={project.imageCardDescription}
          />
          <div>
            <p>{project.projectName}</p>
          </div>
        </div>
      </button>
    </div>
  );
}

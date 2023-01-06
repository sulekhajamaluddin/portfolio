import ProjectDetails from "./ProjectDetails";

export default function ProjectCard({ cssClass, setModal, project }) {
  const { projectID, projectName, projectCardImage, imageCardDescription } =
    project;

  const handleModal = (project) => {
    setModal(<ProjectDetails project={project} setModal={setModal} />);
  };

  const overlay = (
    <div className="overlay">
      <p>COMING SOON...</p>
    </div>
  );

  return (
    <div key={projectID}>
      <button
        className="project-card"
        disabled={`${cssClass}` === "comingSoon" ? true : false}
        onClick={() => handleModal(project)}
      >
        {cssClass === "comingSoon" && overlay}
        <div className={`card ${cssClass}`}>
          <img
            className="card__image"
            src={projectCardImage}
            alt={imageCardDescription}
          />
          <div>
            <p>{projectName}</p>
          </div>
        </div>
      </button>
    </div>
  );
}

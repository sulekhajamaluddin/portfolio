import { ProjectCard } from "../components/";
import projectDetails from "../data/project-details";

export default function Projects({ setModal }) {
  // dont wrap project card in li, put the li in project card directly
  const projectsList = projectDetails.map((project) => {
    return (
      <li key={project.projectID}>
        <ProjectCard
          cssClass={project.status}
          project={project}
          setModal={setModal}
        />
      </li>
    );
  });

  return (
    <div className="projects" id="projects">
      <div className="projects__section-one">
        <div className="projects__content">
          <h2>PROJECTS</h2>
          <p>
            Here are some projects that I have already built and some that I
            will build during the frontend course at Novare Potential
          </p>
        </div>
      </div>
      <div className="projects__section-two">
        <ul className="projects__card-holder">{projectsList}</ul>
      </div>
    </div>
  );
}

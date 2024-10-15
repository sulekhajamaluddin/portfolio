import { ProjectCard } from "../components/";
import projectDetails from "../data/project-details";

export default function Projects({ setModal }) {
  const projectsList = projectDetails.map((project) => {
    return (
      <ProjectCard
        key={project.projectID}
        cssClass={project.status}
        project={project}
        setModal={setModal}
      />
    );
  });

  return (
    <div id="projects">
      <div className="section-one">
        <div className="content">
          <h2>PROJECTS</h2>
          <p>Here are some projects that I have designed and built.</p>
        </div>
      </div>
      <div className="grid">{projectsList}</div>
    </div>
  );
}

import TechCard from "./TechCard";
import techDetails from "../data/tech-details";

export default function Technologies() {
  const techList = techDetails.map((tech) => {
    const { techID, techName, techIcon, iconDescription } = tech;
    return (
      <div key={techID}>
        <TechCard
          techName={techName}
          imgSrc={techIcon}
          altText={iconDescription}
        />
      </div>
    );
  });
  return (
    <div id="technologies">
      <div className="section-one">
        <div className="content">
          <h2>TECHNOLOGIES</h2>
          <p>
            Here are some technologies that I already know and some that I am
            learning here at Novare.
          </p>
        </div>
      </div>
      <div className="grid">{techList}</div>
    </div>
  );
}

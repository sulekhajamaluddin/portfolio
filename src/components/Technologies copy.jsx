import TechCard from "./TechCard";
import techDetails from "../data/tech-details";

const techList = techDetails.map((tech) => {
  return (
    <li key={tech.techID}>
      <TechCard
        techName={tech.techName}
        imgSrc={tech.techIcon}
        altText={tech.iconDescription}
      />
    </li>
  );
});
export default function Technologies() {
  return (
    <div className="tech" id="technologies">
      <div className="main">
        <div className="section-one">
          <h2>TECHNOLOGIES</h2>
          <p>
            Here are some technologies that I already know and some that I am
            learning here at Novare.
          </p>
        </div>
        <ul className="section-two">{techList}</ul>
      </div>
    </div>
  );
}

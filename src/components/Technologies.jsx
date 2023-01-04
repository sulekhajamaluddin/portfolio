import TechCard from "./TechCard";
import techDetails from "../data/tech-details";

const TechList = techDetails.map((tech) => {
  return (
    <TechCard
      key={tech.techID}
      techName={tech.techName}
      imgSrc={tech.techIcon}
      altText={tech.iconDescription}
    />
  );
});
export default function Technologies() {
  return (
    <div id="technologies">
      <div className="main">
        <div className="section-one">
          <h2>TECHNOLOGIES</h2>
          <p>
            Here are some technologies that I already know and some that I am
            learning here at Novare.
          </p>
        </div>
        <div className="section-two">{TechList}</div>
      </div>
    </div>
  );
}

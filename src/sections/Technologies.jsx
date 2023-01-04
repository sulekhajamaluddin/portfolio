import TechCard from "../components/TechCard";
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
    <>
      <div className="tech" id="technologies">
        <div className="tech__main">
          <div className="tech__section-one">
            <div className="tech__content">
              <h2>TECHNOLOGIES</h2>
              <p>
                Here are some technologies that I already know and some that I
                am learning here at Novare.
              </p>
            </div>
          </div>
          <div className="tech__section-two">
            <ul className="tech__card-holder">{techList}</ul>
          </div>
        </div>
        <div className="tech__section-three"></div>
        <div className="tech__section-four"></div>
      </div>
    </>
  );
}

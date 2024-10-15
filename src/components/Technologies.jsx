import TechCard from "./TechCard";
import techDetails from "../data/tech-details";

export default function Technologies({ setModal }) {
  const techList = techDetails.map((technology) => {
    const { techID } = technology;
    return (
      <div key={techID}>
        <TechCard technology={technology} setModal={setModal} />
      </div>
    );
  });
  return (
    <div id="technologies">
      <div className="section-one">
        <div className="content">
          <h2>TECHNOLOGIES</h2>
          <p>Here are some technologies that i know.</p>
        </div>
      </div>
      <div className="grid">{techList}</div>
    </div>
  );
}

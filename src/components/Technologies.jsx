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

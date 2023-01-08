import TechModal from "./TechModal";

export default function TechCard({ technology, setModal }) {
  const handleTechModal = (technology) => {
    setModal(<TechModal technology={technology} setModal={setModal} />);
  };
  return (
    <button
      onClick={() => handleTechModal(technology)}
      className="tech-card-button"
    >
      <div className="tech-card">
        <img
          className="tech-card__icon"
          src={technology.techIcon}
          alt={technology.iconDescription}
        />
        <div>
          <p>{technology.techName}</p>
        </div>
      </div>
    </button>
  );
}

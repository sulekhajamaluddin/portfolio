export default function TechModal({ technology, setModal }) {
  const handleCloseModal = () => {
    setModal(null);
  };
  return (
    <div className="tech-modal">
      <button className="close-button" onClick={() => handleCloseModal()}>
        X
      </button>
      <img src={technology.techIcon} alt={technology.iconDescription} />
      <div>
        <h2>{technology.techName}</h2>
        <p>{technology.use}</p>
      </div>
    </div>
  );
}

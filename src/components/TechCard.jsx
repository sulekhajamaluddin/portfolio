export default function TechCard({ imgSrc, altText, techName }) {
  return (
    <button className="tech-card-button">
      <div className="tech-card">
        <img className="tech-card__icon" src={imgSrc} alt={altText} />
        <div>
          <p>{techName}</p>
        </div>
      </div>
    </button>
  );
}

export default function TechCard({ imgSrc, altText, techName }) {
  return (
    <button className="tech-card-button">
      <div className="tech-card">
        <img className="tech-card__icon" src={imgSrc} alt={altText} />
        {/* nesting -1 no need to add a div just to have a single <p> */}
        <div>
          <p>{techName}</p>
        </div>
      </div>
    </button>
  );
}

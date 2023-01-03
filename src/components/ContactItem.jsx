// good
export default function ContactItem({ iconSrc, altText, text }) {
  return (
    <div className="contact-item">
      <img src={iconSrc} alt={altText} />
      <span>{text}</span>
    </div>
  );
}

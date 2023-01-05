import logo from "../assets/logo.svg";
export default function Navbar() {
  return (
    <section className="navbar">
      <button
        className="logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img
          src={logo}
          alt="The logo in linear gradient containing text which reads Sulekha "
        />
      </button>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#technologies">Technologies</a>
      <a href="#footer">Contact</a>
    </section>
  );
}

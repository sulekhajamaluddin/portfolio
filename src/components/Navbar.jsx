import logo from "../assets/logo.svg";
export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img
            className="navbar__logo"
            src={logo}
            alt="The logo in linear gradient containing text which reads Sulekha "
          />
        </button>
        <div className="navbar__links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#technologies">Technologies</a>
          <a href="#footer">Contact</a>
        </div>
      </div>
      <div className="navbar-mobile">
        <div className="navbar__links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </div>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img
            className="navbar__logo"
            src={logo}
            alt="The logo in linear gradient containing text which reads Sulekha "
          />
        </button>
        <div className="navbar__links">
          <a href="#technologies">Tech</a>
          <a href="#footer">Contact</a>
        </div>
      </div>
    </>
  );
}

import logo from "../assets/logo.svg";
export default function Navbar() {
  return (
    <div className="navbar">
      <img
        className="navbar__logo"
        src={logo}
        alt="The logo in linear gradient containing text which reads Sulekha "
      />
      <div className="navbar__links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#technologies">Technologies</a>
        <a href="#footer">Contact</a>
      </div>
    </div>
  );
}

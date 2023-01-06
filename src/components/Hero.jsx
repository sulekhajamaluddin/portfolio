import greenwaves from "../assets/vector.svg";
import heroimage from "../assets/womanwithlaptop.png";
import purplecircle from "../assets/purplecircle.png";
export default function Hero() {
  return (
    <section className="hero">
      <div className="green-bg"></div>
      <img className="wave-bg" src={greenwaves} alt="A green wavy background" />
      <div className="frame-holder">
        <div className="frame">
          <h1>
            Hi, I am Sulekha Jamaluddin,
            <br /> a passionate frontend developer.
          </h1>
        </div>
        <img
          className="purple-circle-small"
          src={purplecircle}
          alt="A purple colored circle"
        />
        <img
          className="purple-circle-big"
          src={purplecircle}
          alt="A purple colored circle"
        />
      </div>
      <img
        className="hero-image"
        src={heroimage}
        alt="A woman sitting with a laptop"
      />
      <div className="circle hero__small-circle circle-1"></div>
      <div className="circle hero__small-circle circle-2"></div>
      <div className="circle hero__small-circle circle-3"></div>
      <div className="circle hero__small-circle circle-4"></div>
      <div className="circle hero__medium-circle circle-5"></div>
      <div className="circle hero__medium-circle circle-6"></div>
    </section>
  );
}

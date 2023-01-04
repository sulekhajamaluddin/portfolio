import greenwaves from "../assets/greenwaves.svg";
import heroimage from "../assets/womanwithlaptop.png";
import purplecircle from "../assets/purplecircle.png";
export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__section-one"></div>
      <div className="hero__section-two">
        <img src={greenwaves} alt="A green wavy background" />
      </div>
      <div className="hero__frame-holder">
        <div className="hero__frame">
          <h1>
            Hi, I am Sulekha Jamaluddin,
            <br /> a passionate frontend developer.
          </h1>
        </div>
        <img
          className="hero__circle-one"
          src={purplecircle}
          alt="A purple colored circle"
        />
        <img
          className="hero__circle-two"
          src={purplecircle}
          alt="A purple colored circle"
        />
      </div>
      <img
        className="hero__image"
        src={heroimage}
        alt="A woman sitting with a laptop"
      />
      <div className="circle hero__small-circle circle-1"></div>
      <div className="circle hero__small-circle circle-2"></div>
      <div className="circle hero__small-circle circle-3"></div>
      <div className="circle hero__small-circle circle-4"></div>
      <div className="circle hero__medium-circle circle-5"></div>
      <div className="circle hero__medium-circle circle-6"></div>
    </div>
  );
}

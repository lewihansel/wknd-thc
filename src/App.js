import React, { useEffect, useRef, useState } from "react";
import "./App.scss";

// images import
import avatar from "./images/bitmap_2.png";
import bg from "./images/bg-1.png";
import heroImg from "./images/bitmap.png";
import astronautRight from "./images/group-4.png";
import astronautLeft from "./images/group-3.png";
import decor3 from "./images/path-3.png";
import oval from "./images/oval.png";
import ovalArrow from "./images/oval-icon.png";
import {
  fadeUpSlow,
  slideDown,
  slideUpElastic,
  staggerReveal,
  slideLeft,
  slideRight,
  onClickTransform,
} from "./utils/animation";

function App() {
  const [testimonials, setTestimonials] = useState([]);
  const [helpAndTips, setHelpAndTips] = useState([]);

  // fetching
  useEffect(() => {
    fetch("https://wknd-take-home-challenge-api.herokuapp.com/testimonial")
      .then((res) => res.json())
      .then((data) => setTestimonials([...data]))
      .catch((err) => console.error("Error: ", err));

    fetch("https://wknd-take-home-challenge-api.herokuapp.com/help-tips")
      .then((res) => res.json())
      .then((data) => setHelpAndTips([...data]))
      .catch((err) => console.error("Error: ", err));
  }, []);

  // carousel arrow functionality
  const [carouselIndex, setCarouselIndex] = useState(1);
  const [carouselTrans, setCarouselTrans] = useState(0);
  const carouselNext = () => {
    setCarouselIndex(carouselIndex + 1);
    setCarouselTrans(carouselTrans - 257);
  };
  const carouselPrev = () => {
    setCarouselIndex(carouselIndex - 1);
    setCarouselTrans(carouselTrans + 257);
  };

  // animation
  let heroBg = useRef(null);
  let heroLego = useRef(null);
  let heroBtn = useRef(null);
  let heroTitle = useRef(null);
  let decorRight = useRef(null);
  let decorLeft = useRef(null);

  useEffect(() => {
    slideDown(heroBg, 0.3);
    slideUpElastic(heroLego, 1);
    fadeUpSlow(heroBtn, 3);
    staggerReveal(heroTitle, 1.6);
    slideLeft(decorRight);
    slideRight(decorLeft);
  }, []);

  return (
    <>
      <header>
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="title">
          <span className="greeting">Good Morning</span>
          <span className="userName">Fellas</span>
        </div>
      </header>

      <div className="container">
        <img
          className="backgroundImg"
          src={bg}
          alt="background"
          id="heroBg"
          ref={(el) => (heroBg = el)}
        />

        <div className="hero">
          <span className="heroTitle" ref={(el) => (heroTitle = el)}>
            WEEKEND FROM HOME
          </span>
          <span className="heroSubTitle">
            Stay active with a little workout.
          </span>
          <img
            src={heroImg}
            alt="lego astronaut"
            className="heroImg"
            ref={(el) => (heroLego = el)}
          />
          <button
            className="heroBtn"
            ref={(el) => (heroBtn = el)}
            onClick={onClickTransform}
          >
            Let's Go
          </button>
        </div>
      </div>

      <div className="container">
        <div className="decor1">
          <img
            src={astronautRight}
            alt="astronaut right"
            ref={(el) => (decorRight = el)}
          />
        </div>
        <div className="definition">
          <span className="text">
            <em>Deffinition;</em> a practice or exercise to test or improve
            one's fitness for athletic competition, ability, or performance to
            exhaust (something, such as a mine) by working to devise, arrange,
            or achieve by resolving difficulties. Merriam-Webster.com
            Dictionary.
          </span>
          <span className="author">-weekend team</span>
        </div>
        <div className="testimonial">
          <img src={oval} alt="blue oval" className="oval" />
          <span className="title">Testimonial</span>
          <div className="cards" id="cards">
            <div
              className="cards_slider"
              style={{ transform: `translateX(${carouselTrans}px)` }}
            >
              {testimonials.map((item) => (
                <div className="card" key={item.id}>
                  <span className="author">{item.by}</span>
                  <span className="content">{item.testimony}</span>
                </div>
              ))}
            </div>
          </div>
          <button
            className="arrowLeft"
            onClick={carouselPrev}
            disabled={carouselIndex === 1}
          >
            <img src={ovalArrow} alt="arrow left" />
          </button>
          <button
            className="arrowRight"
            onClick={carouselNext}
            disabled={carouselIndex === testimonials.length - 1}
          >
            <img src={ovalArrow} alt="arrow right" />
          </button>
        </div>
      </div>

      <div className="container blackBg">
        <div className="spacing-1" />
        <div className="desc">
          <div className="title">POV</div>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud ullamco laboris nisi ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </div>
        </div>
        <div className="desc">
          <div className="title">Resource</div>
          <div className="content">
            These cases are perfectly simple and easy to distinguish. In a free
            hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best
          </div>
        </div>
        <div className="desc helpTips">
          <img src={decor3} alt="pink bean" className="decor3" />
          <div className="title">Help & Tips</div>
          <div className="articles">
            {helpAndTips.map((item) => (
              <div className="article" key={item.id}>
                <div className="background">
                  <img src={`${item.image}`} alt={`${item.title}`} />
                </div>
                <div className="overlay">
                  <div className="title">{item.title}</div>
                  <button className="ovalArrow">
                    <img src={ovalArrow} alt="arrow right button" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="desc">
          <div className="title">You’re all set.</div>
          <div className="content">
            The wise man therefore always holds in these matters to this
            principle of selection.
          </div>
        </div>
        <div className="decor2">
          <img
            src={astronautLeft}
            alt="astronaut left"
            ref={(el) => (decorLeft = el)}
          />
        </div>
      </div>

      <footer>
        <div className="disclaimer">
          <b>wknd</b>@2020
        </div>
        <div className="version">alpha version 0.1</div>
      </footer>
    </>
  );
}

export default App;

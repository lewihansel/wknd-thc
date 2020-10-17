import React, { useEffect, useRef, useState } from "react";
import "./App.scss";

// images import
import avatar from "./images/bitmap_2.png";
import bg from "./images/bg-1.png";
import heroImg from "./images/bitmap.png";
import astronautRight from "./images/group-4.png";
import astronautLeft from "./images/group-3.png";
import pinkBean from "./images/path-3.png";
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
      <header className="container bg-white flex-row z-10">
        <div className="mr-13" style={{ height: "33px" }}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className="container item-left">
          <span className="tf-paragraph-sm">Good Morning</span>
          <span className="tf-title-sm">Fellas</span>
        </div>
      </header>

      <div className="container relative bg-pink overflow-vis">
        <img
          className="hero-bg absolute op-0 z-3"
          src={bg}
          alt="background"
          id="heroBg"
          ref={(el) => (heroBg = el)}
        />

        <div className="container mt-67-hero relative z-4">
          <span
            className="tf tf-hero mb-20 op-0"
            ref={(el) => (heroTitle = el)}
          >
            WEEKEND FROM HOME
          </span>
          <span className="tf tf-hero-sub mb-67 op-0">
            Stay active with a little workout.
          </span>
          <img
            src={heroImg}
            className="op-0"
            alt="lego astronaut"
            ref={(el) => (heroLego = el)}
          />
          <button
            className="btn-hero mb-67 bs-pink op-0"
            ref={(el) => (heroBtn = el)}
            onClick={onClickTransform}
          >
            Let's Go
          </button>
        </div>
      </div>

      <div className="container bg-pink relative z-2 overflow-vis">
        <div className="container item-right mb-63">
          <img
            src={astronautRight}
            alt="astronaut right"
            ref={(el) => (decorRight = el)}
          />
        </div>
        <div className="text-wrapper">
          <span className="tf tf-definition black ta-right mb-20">
            <b className="blue">Deffinition;</b> a practice or exercise to test
            or improve one's fitness for athletic competition, ability, or
            performance to exhaust (something, such as a mine) by working to
            devise, arrange, or achieve by resolving difficulties.
            Merriam-Webster.com Dictionary.
          </span>
          <span className="tf tf-definition-sub ta-right mb-107">
            -weekend team
          </span>
        </div>

        <div className="text-wrapper mb-75 relative">
          <img src={oval} alt="blue oval" className="decor1 absolute z-1" />
          <span className="tf tf-title ts-pink z-2">Testimonial</span>
          <button
            className="car-arrow absolute bg-none z-3"
            onClick={carouselNext}
            disabled={carouselIndex === testimonials.length - 1}
          >
            <img src={ovalArrow} alt="arrow right" />
          </button>
          <button
            className="car-arrow-left absolute bg-none z-3"
            onClick={carouselPrev}
            disabled={carouselIndex === 1}
          >
            <img src={ovalArrow} alt="arrow left" />
          </button>
        </div>
        <div className="carousel absolute" id="cards">
          <div
            className="slider"
            style={{ transform: `translateX(${carouselTrans}px)` }}
          >
            {testimonials.map((item) => (
              <div className="card bg-white" key={item.id}>
                <span className="tf-card">{item.by}</span>
                <span className="tf-card-sub">{item.testimony}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container bg-black z-1 relative">
        <div className="text-wrapper mt-162 relative">
          <div className="tf tf-title mb-30">POV</div>
          <div className="tf tf-paragraph mb-67">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud ullamco laboris nisi ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </div>
          <div className="tf tf-title mb-30">Resource</div>
          <div className="tf tf-paragraph mb-67">
            These cases are perfectly simple and easy to distinguish. In a free
            hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best
          </div>

          <img src={pinkBean} alt="pink bean" className="decor2 absolute" />
          <div className="tf tf-title mb-30 helpTips">Help & Tips</div>
          <div className="wrapper mb-67 helpTips-b">
            {helpAndTips.map((item) => (
              <div className="article relative" key={item.id}>
                <div className="article-bg">
                  <img src={`${item.image}`} alt={`${item.title}`} />
                </div>
                <div className="overlay absolute">
                  <div className="container flex-row">
                    <div className="tf tf-title-sm ta-left mr-16">
                      {item.title}
                    </div>
                    <button className="ovalArrow bg-none">
                      <img src={ovalArrow} alt="arrow right button" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="tf tf-title mb-30">You’re all set.</div>
          <div className="tf tf-paragraph mb-67 last-paragraph">
            The wise man therefore always holds in these matters to this
            principle of selection.
          </div>
        </div>

        <div className="container item-left decor3">
          <img
            src={astronautLeft}
            alt="astronaut left"
            ref={(el) => (decorLeft = el)}
          />
        </div>
      </div>

      <footer className="container flex-row bg-blue">
        <div className="tf-paragraph-sm">
          <b>wknd</b>@2020
        </div>
        <div className="badge-xs tf-paragraph-xs">alpha version 0.1</div>
      </footer>
    </>
  );
}

export default App;

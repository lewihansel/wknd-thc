import React from "react";
import "./App.scss";

// images import
import avatar from "./images/bitmap_2.png";
import bg from "./images/bg-1.png";
import heroImg from "./images/bitmap.png";
import astronautRight from "./images/group-4.png";
import astronautLeft from "./images/group-3.png";
import oval from "./images/oval.png";

import article1 from "./images/image.png";
import article2 from "./images/image_2.png";
import article3 from "./images/image_3.png";
import ovalArrow from "./images/oval-icon.png";

function App() {
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
        <img className="backgroundImg" src={bg} alt="background" />

        <div className="hero">
          <span className="heroTitle">WEEKEND FROM HOME</span>
          <span className="heroSubTitle">
            Stay active with a little workout.
          </span>
          <img src={heroImg} alt="lego astronaut" className="heroImg" />
          <button className="heroBtn">Let's Go</button>
        </div>
      </div>

      <div className="container">
        <div className="decor1">
          <img src={astronautRight} alt="astronaut right" />
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
          <div className="cards">
            <div className="card">
              <span className="author"> Blu Kicks</span>
              <span className="content">
                Places where you can leverage tools and software to free up time
                to focus on growing the business.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container blackBg">
        <div className="space-162"></div>
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
        <div className="desc">
          <div className="title">Help & Tips</div>
          <div className="articles">
            <div className="article">
              <div className="background">
                <img src={article1} alt="article 1" />
              </div>
              <div className="overlay">
                <div className="title">Start quickly with simple steps</div>
                <button className="ovalArrow">
                  <img src={ovalArrow} alt="arrow right button" />
                </button>
              </div>
            </div>
            <div className="article">
              <div className="background">
                <img src={article2} alt="article 2" />
              </div>
              <div className="overlay">
                <div className="title">
                  Run smoothly at vero eos et accusamus
                </div>
                <button className="ovalArrow">
                  <img src={ovalArrow} alt="arrow right button" />
                </button>
              </div>
            </div>
            <div className="article">
              <div className="background">
                <img src={article3} alt="article 3" />
              </div>
              <div className="overlay">
                <div className="title">Denounce with righteous indignation</div>
                <button className="ovalArrow">
                  <img src={ovalArrow} alt="arrow right button" />
                </button>
              </div>
            </div>
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
          <img src={astronautLeft} alt="astronaut left" />
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

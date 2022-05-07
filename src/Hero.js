import React from "react";
import "./App.css";

function Hero() {
  return (
    <div className="hero d-flex align-items-center">
      <div className="hero__left col-7 position-relative">
        <div className="hero__lamp">
          <img src="images/lamp.svg" alt="lamp" />
        </div>
        <div className="hero__book">
          <img src="images/closed-book.svg" alt="closed-book" />
        </div>
      </div>
      <div className="hero__right col-5">
        <h2 className="hero__title">
          Grow Your Skills To Advance Your Career Path.
        </h2>
        <p className="hero__text">
          We have something big for you who want to level up!
        </p>
        <form className="hero__form">
          <div className="hero__input-box d-flex justify-content-between">
            <input type="text" className="hero__search" placeholder="What do you want to learn..." required />
            <button className="hero__btn" type="submit">
              <i class='bx bx-search'></i>
            </button>
          </div>
        </form>
        <span className="hero__suggestion">
          Suggestions
        </span>
        <ul className="hero__list">
          <li className="hero__item">
            <button className="hero__suggestion-btn">
              UI UX Design
            </button>
          </li>
          <li className="hero__item">
            <button className="hero__suggestion-btn">
              UI UX Design
            </button>
          </li>
          <li className="hero__item">
            <button className="hero__suggestion-btn">
              UI UX Design
            </button>
          </li>
          <li className="hero__item">
            <button className="hero__suggestion-btn">
              UI UX Design
            </button>
          </li>
          <li className="hero__item">
            <button className="hero__suggestion-btn">
              UI UX Design
            </button>
          </li>
          <li className="hero__item">
            <button className="hero__suggestion-btn">
              UI UX Design
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Hero;
import React from "react";
import lamp from "../../images/lamp.svg";
import book from "../../images/closed-book.svg";
import studentOne from "../../images/student-one.png";
import studentTwo from "../../images/student-two.png";
import studentThree from "../../images/student-three.png";
import studentFour from "../../images/student-four.png";
import "../../App.css";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero d-flex align-items-center">
      <div className="hero__left col-7 position-relative">
        <div className="hero__lamp">
          <img src={lamp} alt="lamp" />
        </div>
        <div className="hero__book">
          <img src={book} alt="closed-book" />
        </div>
        <div className="hero__students-box d-flex align-items-center">
          <div className="hero__students-imgs col-8 d-flex align-items-center">
            <div className="hero__student-holder">
              <img src={studentOne} alt="student" />
            </div>
            <div className="hero__student-holder">
              <img src={studentTwo} alt="student" />
            </div>
            <div className="hero__student-holder">
              <img src={studentThree} alt="student" />
            </div>
            <div className="hero__student-holder">
              <img src={studentFour} alt="student" />
            </div>
            <div className="hero__student-holder">
              <button className="hero__student-btn">
                <i class='bx bx-plus'></i>
              </button>
            </div>
          </div>
          <div className="hero__students-info">
            More than 80k+ 
            Students 
            <span className="hero__students--red">
              joined!
            </span>
          </div>
        </div>
      </div>
      <div className="hero__right col-4">
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
        <ul className="hero__list d-flex flex-wrap">
          <li className="hero__item">
            <button className="hero__suggestion-btn">
              UI UX Design
            </button>
          </li>
          <li className="hero__item">
            <button className="hero__suggestion-btn">
              CSS Fundamental
            </button>
          </li>
          <li className="hero__item">
            <button className="hero__suggestion-btn">
              3D Design Illustration
            </button>
          </li>
          <li className="hero__item">
            <button className="hero__suggestion-btn">
              Website Development
            </button>
          </li>
          <li className="hero__item">
            <button className="hero__suggestion-btn">
              Logo Design
            </button>
          </li>
          <li className="hero__item">
            <button className="hero__suggestion-btn">
              Icon Design
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Hero;
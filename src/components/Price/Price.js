import React from "react";
import "../../App.css";
import "./Price.css";
import star from "../../images/star.svg";
import key from "../../images/key.svg";
import crown from "../../images/crown.svg";

function Price() {
  return (
    <section id="price" className="price">
      <div className="container">
        <h3 className="price__title text-center">
          Course Pricing
        </h3>
        <p className="price__text text-center">
          Choose pricing that suits to your need.
        </p>
        <ul className="price__list d-flex">
          <li className="price__item col-4">
            <div className="price__wrapper position-relative">
              <div className="price__intro d-flex">
                <div className="price__img-holder">
                  <img src={star} alt="star" />
                </div>
                <div className="price__type">
                  <span className="price__cost">
                    Free
                  </span>
                  <div className="price__num">
                    <span className="price__big-num">
                    <sup className="price__dollar">
                      $
                    </sup> 
                      0
                    </span>
                    / month
                  </div>
                </div>
              </div>
              <ul className="price__inner-list">
                <li className="price__inner-item">
                  Free e-book for every class
                </li>
                <li className="price__inner-item">
                  Materials update every day
                </li>
                <li className="price__inner-item">
                  Free download material videos
                </li>
                <li className="price__inner-item">
                  Unlock 5 material videos
                </li>
              </ul>
              <button className="price__btn current">
                Your Current Package      
              </button>
            </div>
          </li>
          <li className="price__item col-4">
            <div className="price__wrapper position-relative">
              <div className="price__intro d-flex">
                <div className="price__img-holder">
                  <img src={key} alt="key" />
                </div>
                <div className="price__type">
                  <span className="price__cost">
                    Express
                  </span>
                  <div className="price__num">
                    <span className="price__big-num">
                    <sup className="price__dollar">
                      $
                    </sup> 
                      75
                    </span>
                    / month
                  </div>
                </div>
              </div>
              <ul className="price__inner-list">
                <li className="price__inner-item">
                  Free e-book for every class
                </li>
                <li className="price__inner-item">
                  Materials update every day
                </li>
                <li className="price__inner-item">
                  Free download material videos
                </li>
                <li className="price__inner-item">
                  Meeting 2 times a week
                </li>
                <li className="price__inner-item">
                  Unlock 15 material videos
                </li>
              </ul>
              <button className="price__btn express">
                Buy Express      
              </button>
            </div>
          </li>
          <li className="price__item col-4">
            <div className="price__wrapper position-relative">
              <div className="price__intro d-flex">
                <div className="price__img-holder">
                  <img src={crown} alt="crown" />
                </div>
                <div className="price__type">
                  <span className="price__cost">
                    Premium
                  </span>
                  <div className="price__num">
                    <span className="price__big-num">
                    <sup className="price__dollar">
                      $
                    </sup> 
                      115
                    </span>
                    / month
                  </div>
                </div>
              </div>
              <ul className="price__inner-list">
                <li className="price__inner-item">
                  Free e-book for every class
                </li>
                <li className="price__inner-item">
                  Materials update every day
                </li>
                <li className="price__inner-item">
                  Free download material videos
                </li>
                <li className="price__inner-item">
                  Private chat with mentor
                </li>
                <li className="price__inner-item">
                  Meeting 3 times a week
                </li>
                <li className="price__inner-item">
                  Unlock up to 30 material videos
                </li>
                <li className="price__inner-item">
                  Unlimited saved class
                </li>
              </ul>
              <button className="price__btn premium">
                Buy Premium    
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Price;
import React from "react";
import "../../App.css";
import "./GetApp.css";
import googlePlay from "../../images/google-play.png";
import appStore from "../../images/app-store.png";

function GetApp() {
  return (
    <section id="get-app" className="get-app">
      <div className="container">
        <div className="get-app__wrapper d-flex">
          <div className="get-app__left col-6">
            <h3 className="get-app__title">
              Get Our Apps, Now!
            </h3>
            <p className="get-app__text">
              Reach out our apps everywhere and everytime with Sinauw Mobile Application.
            </p>
            <ul className="get-app__list d-flex">
              <li className="get-app__item">
                <button className="get-app__btn">
                  <img src={googlePlay} alt="google play" />
                </button>
              </li>
              <li className="get-app__item">
                <button className="get-app__btn">
                  <img src={appStore} alt="app store" />
                </button>
              </li>
            </ul>
          </div>
          <div className="get-app__right col-6"></div>
        </div>
      </div>
    </section>
  )
}

export default GetApp;
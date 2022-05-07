import React from "react";
import "./App.css";

function SiteHeader(){
  return(
    <header className="site-header header">
      <div className="container d-flex align-items-center">
        <div className="header__logo-box">
          <a href="index.html" className="header__link">
            <img src="images/sinauw.svg" alt="logo" />
          </a>
        </div>
        <ul className="header__list d-flex align-items-center">
          <li className="header__item">
            <a className="header__link header__link--active" href="/">
              home
            </a>
          </li>
          <li className="header__item">
            <a className="header__link" href="/">
              courses
            </a>
          </li>
          <li className="header__item">
            <a className="header__link" href="/">
              webinar
            </a>
          </li>
          <li className="header__item">
            <a className="header__link" href="/">
              pricing
            </a>
          </li>
        </ul>
        <div className="header__btn-box">
          <select className="lang" id="lang">
            <option value="eng">Eng</option>
            <option value="ru">Rus</option>
            <option value="uz">Uzb</option>
          </select>
          <button className="header__btn">
            login
          </button>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader;
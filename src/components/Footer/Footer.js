import React from "react";
import "../../App.css";
import "./Footer.css";
import siteLogo from "../../images/site-logo.svg";

function Footer() {
  return (
    <footer className="site-footer footer">
      <div className="container">
        <div className="footer__wrapper d-flex">
          <div className="footer__logo-box">
            <div className="footer__link-box">
              <a className="footer__link" href="/">
                <img src={siteLogo} alt="logo" />
              </a>
            </div>
            <div className="footer__info">
              Any feedback or questions?
              Contact us on our social media
            </div>
            <ul className="footer__social-list d-flex">
              <li className="footer__social-item">
                <a className="footer__social-link" href="/">
                  <i class='bx bxl-facebook'></i>
                </a>
              </li>
              <li className="footer__social-item">
                <a className="footer__social-link" href="/">
                  <i class='bx bxl-twitter' ></i>
                </a>
              </li>
              <li className="footer__social-item">
                <a className="footer__social-link" href="/">
                  <i class='bx bxl-instagram' ></i>
                </a>
              </li>
            </ul>
          </div>
          <ul className="footer__list d-flex">
            <li className="footer__item">
              <h3 className="footer__title">
                Menu
              </h3>
              <ul className="footer__inner-list">
                <li className="footer__inner-item">
                  <a href="/" className="footer__inner-link">
                    Home
                  </a>
                </li>
                <li className="footer__inner-item">
                  <a href="/" className="footer__inner-link">
                    Courses
                  </a>
                </li>
                <li className="footer__inner-item">
                  <a href="/" className="footer__inner-link">
                    Webinar
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer__item">
              <h3 className="footer__title">
                Services
              </h3>
              <ul className="footer__inner-list">
                <li className="footer__inner-item">
                  <a href="/" className="footer__inner-link">
                    Materials Update
                  </a>
                </li>
                <li className="footer__inner-item">
                  <a href="/" className="footer__inner-link">
                    Trusted Mentor
                  </a>
                </li>
                <li className="footer__inner-item">
                  <a href="/" className="footer__inner-link">
                    Free E-book
                  </a>
                </li>
                <li className="footer__inner-item">
                  <a href="/" className="footer__inner-link">
                    Meeting
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer__item">
              <h3 className="footer__title">
                Further Information
              </h3>
              <ul className="footer__inner-list">
                <li className="footer__inner-item">
                  <a href="/" className="footer__inner-link">
                    Terms & Conditions
                  </a>
                </li>
                <li className="footer__inner-item">
                  <a href="/" className="footer__inner-link">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer__item">
              <h3 className="footer__title">
                Apps Download
              </h3>
              <ul className="footer__inner-list">
                <li className="footer__inner-item">
                  <a href="/" className="footer__inner-link">
                    Google Play Store
                  </a>
                </li>
                <li className="footer__inner-item">
                  <a href="/" className="footer__inner-link">
                    App Store
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="footer__bottom text-center">
          Copyright 2021 Sinauw. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer;
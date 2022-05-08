import React from "react";
import "../../App.css";
import "./Learn.css";
import laptop from "../../images/laptop.png";
import joey from "../../images/joey.png";
import figma from "../../images/figma.png";
import araya from "../../images/araya.png";
import coding from "../../images/coding.png";
import ellisa from "../../images/ellisa.png";
import android from "../../images/android.png";
import wendy from "../../images/wendy.png";

window.addEventListener("load", () => {
  const elItems = document.querySelectorAll(".learn__wrapper");
  elItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
      item.querySelector(".learn__mentor-box").style.marginBottom = "28px";
      document.querySelector(".learn__list").style.marginBottom = "52px";
      
      let elBtn = document.createElement("button");
      
      elBtn.className = "learn__appear-btn";
      elBtn.textContent = "access class";
      
      item.appendChild(elBtn);
      
    });
  });
  
  elItems.forEach(item => {
    item.addEventListener("mouseleave", () => {
      let elBtn = item.querySelector(".learn__appear-btn");
  
      item.querySelector(".learn__mentor-box").style.marginBottom = "0";
  
      document.querySelector(".learn__list").style.marginBottom = "121px";
  
      elBtn.remove();
    });
  })
})

function Learn(){
  return (
    <section id="learn" className="learn">
      <div className="container">
        <h3 className="learn__title">
          What Do You Want to Learn?
        </h3>
        <p className="learn__text">
          Choose the right class as you need. Then enjoy studying.
        </p>
        <ul className="learn__list d-flex">
          <li className="learn__item col-3">
            <div className="learn__wrapper">
              <div className="learn__img-wrapper">
                <img src={laptop} alt="laptop" />
                <div className="learn__videos">
                  12 Videos
                </div>
              </div>
              <span className="learn__item-intro">
                Technology
              </span>
              <h4 className="learn__item-title">
                Digital Marketing Strategy
              </h4>
              <p className="learn__item-text">
                This course aims to give you deeper understanding of core processes ...
              </p>
              <div className="learn__mentor-box d-flex">
                <div className="learn__mentor-img-box">
                  <img src={joey} alt="mentor" />
                </div>
                <div className="learn__mentor-info">
                  <span className="learn__mentor-name">
                    Joey Piere
                  </span>
                  <span className="learn__mentor-job">
                    Mentor
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li className="learn__item col-3">
            <div className="learn__wrapper">
              <div className="learn__img-wrapper">
                <img src={figma} alt="figma" />
                <div className="learn__videos">
                  7 Videos
                </div>
              </div>
              <span className="learn__item-intro">
                Design
              </span>
              <h4 className="learn__item-title">
                Figma Fundamental
              </h4>
              <p className="learn__item-text">
                These lessons and exercises will help you start designing with Figma ...
              </p>
              <div className="learn__mentor-box d-flex">
                <div className="learn__mentor-img-box">
                  <img src={araya} alt="mentor" />
                </div>
                <div className="learn__mentor-info">
                  <span className="learn__mentor-name">
                    Araya Sheila
                  </span>
                  <span className="learn__mentor-job">
                    Mentor
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li className="learn__item col-3">
            <div className="learn__wrapper">
              <div className="learn__img-wrapper">
                <img src={coding} alt="laptop" />
                <div className="learn__videos">
                  10 Videos
                </div>
              </div>
              <span className="learn__item-intro">
                Coding
              </span>
              <h4 className="learn__item-title">
                HTML Fundamental
              </h4>
              <p className="learn__item-text">
                Well organized and easy to make you understand tutorials with lots of ...
              </p>
              <div className="learn__mentor-box d-flex">
                <div className="learn__mentor-img-box">
                  <img src={ellisa} alt="mentor" />
                </div>
                <div className="learn__mentor-info">
                  <span className="learn__mentor-name">
                    Ellisa Ruth
                  </span>
                  <span className="learn__mentor-job">
                    Mentor
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li className="learn__item col-3">
            <div className="learn__wrapper">
              <div className="learn__img-wrapper">
                <img src={android} alt="android" />
                <div className="learn__videos">
                  16 Videos
                </div>
              </div>
              <span className="learn__item-intro">
                Coding
              </span>
              <h4 className="learn__item-title">
                Android App Development
              </h4>
              <p className="learn__item-text">
                Take your Android coding skills to the next level, advanced Android app ...
              </p>
              <div className="learn__mentor-box d-flex">
                <div className="learn__mentor-img-box">
                  <img src={wendy} alt="mentor" />
                </div>
                <div className="learn__mentor-info">
                  <span className="learn__mentor-name">
                    Wendy Troye
                  </span>
                  <span className="learn__mentor-job">
                    Mentor
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="learn__btn-holder">
          <button className="learn__btn">
            Show All Classes
          </button>
        </div>
      </div>
    </section>
  )
}

export default Learn;
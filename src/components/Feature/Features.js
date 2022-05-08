import React from "react";
import "../../App.css";
import "./Feature.css";

function Features() {
  return (
    <section id="feature" className="feature">
      <div className="container">
        <ul className="feature__list d-flex">
          <li className="feature__item col-4">
            <div className="feature__wrapper">
              <h3 className="feature__title">
                Get New Friends
              </h3>
              <p className="feature__text">
                You will meet new friends in some of classes that you take. Say hello to them and make friends, it will be so much warm friendship! 
              </p>  
            </div>
          </li>
          <li className="feature__item col-4">
            <div className="feature__wrapper teacher">
              <h3 className="feature__title">
                Expert and Fun Mentor
              </h3>
              <p className="feature__text">
                Learn with earnest and don’t forget to get relax too. Learn and enjoy the materials or classes with our expert mentors. 
              </p>  
            </div>
          </li>
          <li className="feature__item col-4">
            <div className="feature__wrapper book-heart">
              <h3 className="feature__title">
                Flexible Access
              </h3>
              <p className="feature__text">
                You can access materials or classes easily by our website also mobile. Access it everywhere and everytime, no limit for you to learn!
              </p>  
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Features;
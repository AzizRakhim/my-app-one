import React from "react";
import "../../App.css";
import "./Webinar.css";
import $ from 'jquery';

var $owl = $('.webinar__list');

$owl.children().each( function( index ) {
  $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
});

$owl.owlCarousel({
  center: true,
  loop: true,
  items: 5,
});

$(document).on('click', '.webinar__item>iframe', function() {
  // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
  var $speed = 300;  // in ms
  $owl.trigger('to.webinar__item.webinar__list', [$(this).data( 'position' ), $speed] );
});

function Webinar() {
  return (
    <section id="webinar" className="webinar">
      <div className="container">
        <h3 className="webinar__title text-center">
          Live Online Webinar
        </h3>
        <p className="webinar__text text-center">
          You can stream Webinar live on our apps. Stay update on our Webinar, it’s Free!
        </p>
        <ul className="webinar__list d-flex align-items-center position-relative">
          <li className="webinar__item">
            <iframe width="402" height="271" src="https://www.youtube.com/embed/tRpoI6vkqLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </li>
          <li className="webinar__item webinar__item--active">
            <iframe width="623" height="424" src="https://www.youtube.com/embed/5sffVBeaOeY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </li>
          <li className="webinar__item">
            <iframe width="409" height="271" src="https://www.youtube.com/embed/mU6anWqZJcc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </li>
        </ul>
        <div className="webinar__link-box">
          <a href="/" className="webinar__link">
            See more webinar videos 
            <i class='bx bx-right-arrow-alt'></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Webinar;
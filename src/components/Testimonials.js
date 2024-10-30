// src/components/Testimonials.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const testimonials = [
    { text: 'Great developer!', author: 'Client A' },
    { text: 'Delivered on time.', author: 'Client B' },
    { text: 'Very professional.', author: 'Client C' },
  ];

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial">
            <p>"{t.text}"</p>
            <p>- {t.author}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;

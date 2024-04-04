/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

const OurStory = () => {
  return (
    <section
      className="our-story-section pt-60 pb-120"
      style={{
        background: "url('/shape/dot-dot-wave-shape.svg')no-repeat left bottom",
      }}
    >
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5 col-md-12 order-lg-1">
            <div className="section-heading sticky-sidebar">
              <h4 className="h5 text-primary">Conocenos</h4>
              <h2>Red de abusos eclesiasticos de Venezuela</h2>
              <p>
              Somos una red, sin fines de lucro, de venezolanos que hemos sufrido abuso sexual, 
              unidos para concientizar a la sociedad de la realidad de las victimas de abuso, 
              brindar un acompañamiento a las víctimas y evidenciar las decadentes respuestas 
              de la iglesia que vulneran la infancia y la dignidad de los individuos.{' '}
              </p>
              
            </div>
          </div>
          <div className="col-lg-6 col-md-12 order-lg-0">
            <div className="story-grid-wrapper position-relative">
              <ul className="position-absolute animate-element parallax-element shape-service d-none d-lg-block">
               
              </ul>

              <div className=" rounded-custom bg-dark overflow-hidden position-relative">
                <div className="story-item bg-light border">
                  <img width="70%" src="/logoColor.png" alt="about"  className="rounded mx-auto d-block  shadow"/>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;

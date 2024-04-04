import React from 'react';
import Link from 'next/link';

const HeroSectionTwo = () => {
  return (
    <section
      className="about-header-section ptb-120 position-relative overflow-hidden bg-dark"
      style={{
        background: "url('/page-header-bg.svg')no-repeat center right",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading-wrap d-flex justify-content-between z-5 position-relative">
              <div className="about-content-left">
                <div className="about-info mb-5">
                  <h1 className="fw-bold display-5">
                    Red de abusos eclesiasticos de venezuela
                  </h1>
                  <p className="lead">
                    Organicación sin fines de lucro.{' '}
                  </p>
                  
                </div>
              </div>
              <div className="about-content-right">
              <img src="/hombre.png" alt="about" className="img-fluid mb-5 rounded-custom shadow"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z-2 py-5"></div>
    </section>
  );
};

export default HeroSectionTwo;

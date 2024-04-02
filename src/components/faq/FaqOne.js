import React from 'react';
import Image from 'next/image';

const FaqOne = () => {
  return (
    <section className="faq-section ptb-120 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-6">
            <div className="section-heading text-center">
              <h4 className="h5 text-primary">FAQ</h4>
              <h2>Preguntas Frecuentes</h2>
              <p>
                Pueden colaborar en el entendimiento de la web.{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 col-12">
            <div className="faq-wrapper">
              <div className="faq-item mb-5">
                <h5>
                  <span className="h3 text-primary me-2">1.</span> Pregunta 
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="faq-item mb-5">
                <h5>
                  <span className="h3 text-primary me-2">2.</span> Pregunta
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="faq-item">
                <h5>
                  <span className="h3 text-primary me-2">3.</span> Pregunta
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-center mt-4 mt-lg-0 mt-md-0">
              <Image
                width={636}
                height={522}
                src="/faq.svg"
                alt="faq"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqOne;

import React from 'react';
import { RiRecordCircleFill } from 'react-icons/ri';

const NewsLetter = () => {
  return (
    <>
      <section className="pb-120">
        <div className="container">
          <div
            className="bg-dark ptb-60 px-5 position-relative overflow-hidden rounded-custom"
            style={{
              background: "url('/page-header-bg.svg')no-repeat center bottom",
            }}
          >
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-9">
                <div className="subscribe-info-wrap text-center position-relative z-2">
                  <div className="section-heading">
                    <h4 className="h5 text-warning">
                    Para las últimas noticias y actualizaciones
                    </h4>
                    <h2>¿Quiere recibir Avisos Importantes? ¡Suscríbase ahora!</h2>
                    <p>
                      Estamos para ayudarte y apoyarte, mantente conectado con nosotros.
                    </p>
                  </div>
                  <div className="form-block-banner mw-60 m-auto mt-5">
                    <form
                      id="email-form2"
                      name="email-form"
                      className="subscribe-form d-flex"
                    >
                      <input
                        type="email"
                        className="form-control me-2"
                        name="Email"
                        data-name="Email"
                        placeholder="Ingresa tu correo"
                        id="Email2"
                        required=""
                      />
                      <input
                        type="button"
                        value="Unete!"
                        data-wait="Please wait..."
                        className="btn btn-primary"
                      />
                    </form>
                  </div>
                  <ul className="nav justify-content-center subscribe-feature-list mt-3">
                    <li className="nav-item">
                      <span>
                        <i className="fad text-primary me-2">
                          <RiRecordCircleFill />
                        </i>
                        No te preocupes, no te enviaremos spam
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-circle rounded-circle circle-shape-1 position-absolute bg-dark-light left-5"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;

import React from 'react';
import Image from 'next/image';

const ContactForm = () => {
  return (
    <section
      className="contact-us-form pt-60 pb-120"
      style={{
        background: "url('/shape/contact-us-bg.svg')no-repeat center bottom",
      }}
    >
      <div className="container">
        <div className="row justify-content-lg-between align-items-center">
          <div className="col-lg-6 col-md-8">
            <div className="section-heading">
              <h2>Hable con nuestro equipo del departamento de Atención a la victima</h2>
              <p>
                Promover colaborativamente la convergencia centrada en la Victima frente a frente.
              </p>
            </div>
            <form action="" className="register-form">
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="mb-1">
                    Nombres <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      required
                      placeholder="Nombres"
                      aria-label="First name"
                    />
                  </div>
                </div>
                <div className="col-sm-6 ">
                  <label htmlFor="lastName" className="mb-1">
                    Apellidos
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Apellidos"
                      aria-label="Last name"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="phone" className="mb-1">
                    Teléfono <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      required
                      placeholder="Teléfono"
                      aria-label="Phone"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="email" className="mb-1">
                    Correo<span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required
                      placeholder="Correo"
                      aria-label="Email"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="yourMessage" className="mb-1">
                    Mensaje <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <textarea
                      className="form-control"
                      id="yourMessage"
                      required
                      placeholder="Como podemos ayudarte?"
                      style={{ height: '120px' }}
                    ></textarea>
                  </div>
                </div>
              </div>
              <button type="button" className="btn btn-primary mt-4">
                 Ponerse en contacto
              </button>
            </form>
          </div>
          <div className="col-lg-5 col-md-10">
            <div className="contact-us-img">
              <Image
                width={526}
                height={406}
                src="/contact-us-img-2.svg"
                alt="contact us"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

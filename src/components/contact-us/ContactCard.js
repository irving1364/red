import React from 'react';
import {
  BsFillChatSquareTextFill,
  BsFillEnvelopeFill,
  BsTelephoneInbound,
} from 'react-icons/bs';

const ContactCard = () => {
  return (
    <section className="contact-promo ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <BsFillChatSquareTextFill />
              </span>
              <div className="contact-promo-info mb-4">
                <h5>Chat con nosotros</h5>
                <p>
                 Tenemos expertos sociales en vivo esperando para ayudarte de.{' '}
                  <strong>lunes a viernes</strong> de
                  <strong>9am a 5pm.</strong>
                </p>
              </div>
              <a
                href="mailto:hellothemetags@gmail.com"
                className="btn btn-link mt-auto"
              >
                Chat con nosotros
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <BsFillEnvelopeFill />
              </span>
              <div className="contact-promo-info mb-4">
                <h5>Envíanos un correo electrónico</h5>
                <p>

                  Simplemente envíenos un correo {' '}
                  <strong>irving1364@gmail.com</strong>
                  y recibirá una respuesta dentro de las 24 horas.
                </p>
              </div>
              <a
                href="mailto:irving1364@gmail.com"
                className="btn btn-primary mt-auto"
              >
                Envíanos un correo 
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <BsTelephoneInbound />
              </span>
              <div className="contact-promo-info mb-4">
                <h5>Llamanos</h5>
                <p>
                  
                  Llámenos. Nuestros expertos están disponibles de{' '}
                  <strong>lunes a viernes</strong> de
                  <strong> a.m. a 5 p.m.</strong>
                </p>
              </div>
              <a href="tel:00-976-561-008" className="btn btn-link mt-auto">
                0412 573 5972
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;

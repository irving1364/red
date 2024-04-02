import React from 'react';
import Image from 'next/image';
import { FaBezierCurve } from 'react-icons/fa';
import { FiTruck } from 'react-icons/fi';
import { RiNodeTree } from 'react-icons/ri';
import { GrResources } from 'react-icons/gr';

const WorkProcessOne = () => {
  return (
    <section className="work-process ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-heading text-center">
              <h4 className="h5 text-primary">Procesos</h4>
              <h2>Seguimos nuestro proceso de trabajo</h2>
              <p>
                Utilizar con entusiasmo habilidades de liderazgo en varios medios para experiencias 
                alternativas. Impulse proactivamente sistemas verticales que arquitecturas intuitivas.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 col-md-12 order-1 order-lg-0">
            <div className="img-wrap">
              <Image
                width={526}
                height={621}
                src="/office-img-1.jpg"
                alt="work process"
                className="img-fluid rounded-custom"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 order-0 order-lg-1">
            <ul className="work-process-list list-unstyled">
              <li className="d-flex align-items-start mb-4">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-2x">
                    <RiNodeTree />
                  </i>
                </div>
                <div className="icon-content">
                  <span className="text-primary h6">Paso 1</span>
                  <h3 className="h5 mb-2">Identificar nuestro problema</h3>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-4">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-3x">
                    {' '}
                    <FaBezierCurve />
                  </i>
                </div>
                <div className="icon-content">
                  <span className="text-primary h6">Paso 2</span>
                  <h3 className="h5 mb-2">Buscarnos en la plataformas</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-4">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-2x">
                    <GrResources />
                  </i>
                </div>
                <div className="icon-content">
                  <span className="text-primary h6">Paso 3</span>
                  <h3 className="h5 mb-2">Ir al formulario de Contacto</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-4 mb-lg-0">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-2x">
                    {' '}
                    <GrResources />
                  </i>
                </div>
                <div className="icon-content">
                  <span className="text-primary h6">Paso 4</span>
                  <h3 className="h5 mb-2">Nos pondremos en contacto con usted</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessOne;

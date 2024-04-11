import React from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const ContactForm = () => {

  
  const { register, formState: { errors}, handleSubmit } = useForm();
  const [mensaje, setMensaje] = useState([]);

  const onSubmit = async (e) => {
    console.log(e)

    const form = new FormData();
      form.append("your-name", e.nombre);
      form.append("your-apellido", e.apellido);
      form.append("tel-121", e.phone);
      form.append("your-email",  e.correo);
      form.append("your-message",  e.mensaje);
    
    var requestOptions = {
      method: 'POST',
      body: form,
      redirect: 'follow'
    };

    fetch("https://fadimet.com.pa/red/index.php/wp-json/contact-form-7/v1/contact-forms/51/feedback", requestOptions)
      .then(response => response.text())
      .then(result =>  window.location.href = "/" )
      .catch(error => console.log('error', error));

     
   }


  return (
    <>

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
            <form onSubmit={handleSubmit(onSubmit)}  className="register-form">
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="mb-1">
                    Nombres <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="nombre" {...register('nombre', {
                        required:true,
                        maxLength:50
                      })} 
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
                      id="apellido" {...register('apellido', {
                        required:true,
                        maxLength:50
                      })} 
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
                      id="phone" {...register('phone', {
                        required:true,
                        maxLength:50
                      })}
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
                      id="correo" {...register('correo', {
                        required:true,
                        maxLength:50
                      })}
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
                      id="mensaje"
                      {...register('mensaje', {
                        required:true,
                        maxLength:150
                      })}
                      required
                      placeholder="Como podemos ayudarte?"
                      style={{ height: '120px' }}
                    ></textarea>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-4">
                 Ponerse en contacto
              </button>
            </form>

            { !mensaje.message
						? <></>
						: <p>Se ha enviado el formulario, Gracias nos pondremos en contacto con usted</p> 
					}
           

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
   </>
  );
};

export default ContactForm;

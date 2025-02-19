import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { contexto } from '../../Provider'
import emailjs from '@emailjs/browser';

export const Contact = () => {

    const { updateContactUs, constacUs } = useContext(contexto)


    const background = 'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803366/chhjwnl3dmziofrlojtj.jpg'

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_v98gour', 'template_oi8kvx5', form.current, {
            publicKey: 'af1nGeO0u_gGNrDms',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return (
        <div className='contact'>
            <img className='imgContats' src={background} alt='' />

            <section>
                <article>
                    <article>
                        <h3>ENVIANOS UN CORREO</h3>
                        <div className='mailIcon'><div><i className="bi bi-envelope"></i></div></div>
                        <strong>Te responderemos lo mas rapido posible</strong>
                        <div className='contatsIcons'>
                            <div> <i className="bi bi-whatsapp"></i></div>
                            <div><i class="bi bi-facebook"></i></div>
                            <div><i class="bi bi-telephone-fill"></i></div>
                        </div>
                    </article>
                </article>

                <div className='formContact'>
                    <form ref={form} onSubmit={handleSubmit}>
                        <label>Tu nombre</label>
                        <input name="user_name"  type="text"  />
                        <label>Tu correo electrónico</label>
                        <input name="user_email"  type="email"  />
                        <label>Asunto</label>
                        <input  type="text" name="subject" />
                        <label>Tu mensaje (opcional)</label>
                        <textarea name="message"  rows="15"></textarea>
                        <div>
                            <button type='submit'>Enviar</button>
                        </div>
                    </form>
                </div>
            </section>

            <FontAwesomeIcon onClick={() => updateContactUs(!constacUs)} className='closeContact' icon={faXmark} />
        </div>
    )
}



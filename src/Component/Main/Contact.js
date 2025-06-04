import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { contexto } from '../../Provider'
import emailjs from '@emailjs/browser';
import { Bounce, Flip, toast } from 'react-toastify';


export const Contact = () => {

    const { updateContactUs, constacUs } = useContext(contexto)



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

        notify()
        updateContactUs(!constacUs)
    };


    const notify = () => {
        toast.success('Mensaje enviado.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                background: "rgb(56, 225, 6)",
                width: "250px",
                fontSize: "15px",
                fontFamily: "Baloo Bhaijaan 2, serif",
                fontWeight: "800",
                fontWeight: "300",
                textAlign: "center",
                borderRadius: "10px",
                border: "black solid 1px",
                color: "black"
            },
            transition: Bounce,
        });

        toast.info('Te responderemos a la brevedad', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                background: "black",
                width: "250px",
                fontSize: "15px",
                fontFamily: "Baloo Bhaijaan 2, serif",
                fontWeight: "800",
                fontWeight: "300",
                textAlign: "center",
                borderRadius: "10px",
                border: "rgb(56, 225, 6)",
                color: "rgb(56, 225, 6)"
            },
            transition: Bounce,
        });
    };


    return (
        <div className='contact'>
            <section>
                <article>
                    <article>
                        <h3>ENVIANOS UN CORREO</h3>
                        <div className='mailIcon'><div><i className="bi bi-envelope"></i></div></div>
                        <strong>Te responderemos lo más rapido posible</strong>
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
                        <input name="user_name" type="text" required />
                        <label>Tu correo electrónico</label>
                        <input name="user_email" type="email" required />
                        <label>Asunto</label>
                        <input type="text" name="subject" required />
                        <label>Tu mensaje (opcional)</label>
                        <textarea name="message" rows="15" required></textarea>
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



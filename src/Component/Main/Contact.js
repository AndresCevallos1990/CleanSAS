import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { contexto } from '../../Provider'

export const Contact = () => {

    const { updateContactUs, constacUs } = useContext(contexto)

    const [nameValue, setNameValue] = useState("")
    const [emailValue, setEmailValue] = useState("")
    const [subjectValue, setSubjectValue] = useState("")
    const [messageValue, setMessageValue] = useState("")

    const background = 'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803366/chhjwnl3dmziofrlojtj.jpg'

    const handleName = (e) => {
        const name = e.target.value
        setNameValue(name)
    }

    const handleMail = (e) => {
        const email = e.target.value
        setEmailValue(email)
    }

    const handleSubject = (e) => {
        const subject = e.target.value
        setSubjectValue(subject)
    }

    const handleMessage = (e) => {
        const message = e.target.value
        setMessageValue(message)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = `Consulta: ${subjectValue}`;
        const body = `
            Nombre: ${nameValue}
            Email: ${emailValue}
            Mensaje: ${messageValue}
        `;

        const mailtoUrl = `mailto:info@cleansas.com.ar?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoUrl;
    };



    return (
        <div className='contact'>
            <img className='imgContats' src={background} alt='' />

            <section>
                <article>
                    <article>
                        <h3>ENVIANOS UN CORREO</h3>
                        <div className='mailIcon'><div><i class="bi bi-envelope"></i></div></div>
                        <strong>Te responderemos lo mas rapido posible</strong>
                        <div className='contatsIcons'>
                            <div> <i className="bi bi-whatsapp"></i></div>
                            <div><i class="bi bi-facebook"></i></div>
                            <div><i class="bi bi-telephone-fill"></i></div>
                        </div>
                    </article>
                </article>

                <div className='formContact'>
                    <form onSubmit={handleSubmit}>
                        <label>Tu nombre</label>
                        <input onChange={handleName} type="text" name="name" />
                        <label>Tu correo electrónico</label>
                        <input onChange={handleMail} type="email" name="email" />
                        <label>Asunto</label>
                        <input onChange={handleSubject} type="text" name="subject" />
                        <label>Tu mensaje (opcional)</label>
                        <textarea onChange={handleMessage} name="message" rows="15"></textarea>
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



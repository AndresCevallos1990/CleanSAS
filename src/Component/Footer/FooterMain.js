import React from 'react'
import { Link } from 'react-router-dom'

export const FooterMain = () => {

    const imgFooterClean = 'https://res.cloudinary.com/dt4unqzpv/image/upload/v1749058468/WhatsApp_Image_2025-06-04_at_12.50.57_ormtct.jpg'

    const phoneNumber = '+5492996017182'
    const message = 'Hola! 🤚 Me gustaría obtener más información sobre Clean Soluciones Petroleras.'
    const encodedMessage = encodeURIComponent(message)

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    const email = 'info@cleansas.com.ar'
    const subject = 'Consulta sobre servicios'
    const body = 'Hola, estoy interesado en más información sobre sus servicios.'
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    const phone1 = '2996017182'
    const phone2 = '2996050398'

    const address = 'RN 151 KM 3,5, Cipolletti, RN 8324'
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

    return (
        <footer className="componentFooter">

            {/* Foto */}

            <div className="footerFoto">

                <img
                    className="imgFooter"
                    src={imgFooterClean}
                    alt="Clean Soluciones Petroleras"
                />

            </div>

            {/* Información */}

            <div className="footerInfo">

                <span className="footerTag">
                    CONTACTO
                </span>

                <h2>Hablemos de tu próximo proyecto</h2>

                <p className="footerDescripcion">
                    Estamos preparados para responder emergencias,
                    brindar asesoramiento técnico y desarrollar soluciones
                    integrales para la industria petrolera.
                </p>

                <div className="footerContact">

                    <Link to={`tel:${phone1}`} target="_blank">
                        <i className="bi bi-telephone-fill"></i>

                        <div>
                            <small>Teléfonos</small>
                            <span>{phone1} | {phone2}</span>
                        </div>
                    </Link>

                    <Link to={whatsappUrl} target="_blank">
                        <i className="bi bi-whatsapp"></i>

                        <div>
                            <small>WhatsApp</small>
                            <span>Escribinos ahora</span>
                        </div>
                    </Link>

                    <Link to={mailtoUrl} target="_blank">
                        <i className="bi bi-envelope-fill"></i>

                        <div>
                            <small>Email</small>
                            <span>{email}</span>
                        </div>
                    </Link>

                    <Link to={mapsUrl} target="_blank">
                        <i className="bi bi-geo-alt-fill"></i>

                        <div>
                            <small>Ubicación</small>
                            <span>{address}</span>
                        </div>
                    </Link>

                </div>

            </div>


        </footer>
    )
}
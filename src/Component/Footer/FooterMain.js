import React from 'react'
import { Link } from 'react-router-dom'

export const FooterMain = () => {

    const imgFooterClean = `../img/footer.jpg`

    const phoneNumber = '+5492996017182'
    const message = 'Hola! 🤚 Me gustaria obtener mas informacion sobre Clean Soluciones Petroleras.'
    const encodedMessage = encodeURIComponent(message)

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    const email = 'info@cleansas.com.ar'
    const subject = 'Consulta sobre servicios'
    const body = 'Hola, estoy interesado en más información sobre sus servicios.'
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    const phone1 = '2996017182';
    const phone2 = '2996050398';

    const address = 'RN 151 KM 3,5, Cipolletti, RN 8324';
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;




    return (
        <div className='componentFooter'>
            <div>
                <img className='imgFooter' src={imgFooterClean} alt='' />
            </div>

            <article>
                <section>
                    <h2>Contactanos</h2>
                    <h4>Hace tu consulta desde tu servidor favorito</h4>
                </section>


                <br></br><br></br><br></br>


                <div className='footerContact'>
                    <section>
                        <div>
                            <i className="bi bi-telephone"></i>
                            <article>
                                <Link to={`tel:${phone1}`} target="_blank" rel="noopener noreferrer">
                                    {phone1}
                                </Link>
                                <span className='separadorLinks'>/</span>
                                <Link to={`tel:${phone2}`} target="_blank" rel="noopener noreferrer">
                                    {phone2}
                                </Link>
                            </article>
                        </div>

                        <div className=''>
                            <i className="bi bi-whatsapp "></i>
                            <Link to={whatsappUrl} target="_blank" rel="noopener noreferrer">Whatsapp</Link>
                        </div>

                        <div className=''>
                            <i class="bi bi-envelope"></i>
                            <Link to={mailtoUrl} target="_blank" rel="noopener noreferrer">{email}</Link>
                        </div>

                        <div className=''>
                            <i class="bi bi-geo-alt-fill"></i>
                            <Link to={mapsUrl} target="_blank" rel="noopener noreferrer">
                                {address}
                            </Link>
                        </div>
                    </section>
                </div>
            </article>
        </div>
    )
}

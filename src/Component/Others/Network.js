import React from 'react'
import { Link } from 'react-router-dom'

const Network = () => {

    const phoneNumber = '+5492996017182'
    const message = 'Hola! 🤚 Me gustaria obtener mas informacion sobre Clean Soluciones Petroleras.'
    const encodedMessage = encodeURIComponent(message)

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    return (
        <div>
            <div className='iconsContact'>
                <div className='whatsapp'>
                    <Link to={whatsappUrl}  target="_blank" className="bi bi-whatsapp "></Link>
                </div>
                <div className='facebook'>
                    <Link to={'https://www.facebook.com/profile.php?id=100063725131341'} target="_blank" className="bi bi-facebook "></Link>
                </div>
                <div className='linkedin'>
                    <Link to={'https://www.linkedin.com/company/clean-soluciones-petroleras/'} target='"_blank' className="bi bi-linkedin "></Link>
                </div>
            </div>
        </div>
    )
}

export default Network
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from '../../Provider'

export const HeaderJobs = () => {

    const { updateContactUs, constacUs } = useContext(contexto)

    return (
        <div className='componentHeaderJobs'>
            <section>
                <Link to={'/'}><img className='imgLogoHeader' src={`https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803369/bt0jfxx9qdysrycbpfqc.png`} /></Link>
                <div>
                    <Link to={'/'}>Home</Link>
                    <Link to="/#Servicios">Servicios</Link>
                    <Link to="/#Clientes">Clientes</Link>
                    <Link to="/#Sobre-nosotros">Sobre Nosotros</Link>
                    <strong onClick={() => updateContactUs(!constacUs)} className='contacto'>Contacto</strong>
                </div>
            </section>
            <img className='imgHeaterJobs' src="../img/headerJobs.jpeg" alt="Header Image" />
            <div class="overlay"></div>
            <h1>Trabajos</h1>
        </div>
    )
}

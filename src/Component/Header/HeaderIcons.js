import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from '../../Provider'

export const HeaderIcons = () => {

    const { updateContactUs, constacUs } = useContext(contexto)



    return (
        <section className='sectionHeader'>
            <Link to={'/'}><img src={`/img/logo.png`} /></Link>
            <section>
                <Link to={'/'}>Home</Link>
                <a href="#Servicios">Servicios</a>
                <a href="#Clientes">Clientes</a>
                <a href="#Sobre-nosotros">Sobre Nosotros</a>
                <span onClick={() => updateContactUs(!constacUs)} className='contacto'>Contacto</span>
                <Link to={'/porfolio'}>Trabajos</Link>

            </section>
        </section>
    )
}

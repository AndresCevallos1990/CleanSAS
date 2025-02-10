import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from '../../Provider'

export const HeaderShortcut = () => {

    const { updateContactUs, constacUs } = useContext(contexto)

    return (
        <div>
            <section className='sectionHeaderShortcut'>
                <Link to={'/'}><img src={`/img/logo.png`} /></Link>
                <section>
                    <Link to={'/'}>Home</Link>
                    <a href="#Servicios">Servicios</a>
                    <a href="#Clientes">Clientes</a>
                    <a href="#Sobre-nosotros">Sobre Nosotros</a>
                    <strong onClick={() => updateContactUs(!constacUs)} className='contacto'>Contacto</strong>
                    <Link to={'/porfolio'}>Trabajos</Link>
                </section>
            </section>
        </div>
    )
}

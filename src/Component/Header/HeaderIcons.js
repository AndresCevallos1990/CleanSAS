import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from '../../Provider'

export const HeaderIcons = () => {

    const { updateContactUs, constacUs } = useContext(contexto)

    return (
        <section className='sectionHeader'>
            <Link to={'/'}><img src={`https://res.cloudinary.com/dt4unqzpv/image/upload/v1748972160/bt0jfxx9qdysrycbpfqc_nmnxbw.png`} /></Link>
            <section>
                <Link to={'/'}>HOME</Link>
                <a href="#Servicios">SERVICIOS</a>
                <a href="#Clientes">CLIENTES</a>
                <a href="#Sobre-nosotros">NOSOTROS</a>
                <span onClick={() => updateContactUs(!constacUs)} className='contacto'>CONTACTO</span>
                <Link to={'/porfolio'}>TRABAJOS</Link>
            </section>
        </section>
    )
}

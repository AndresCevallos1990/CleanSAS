import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from '../../Provider'

export const HeaderJobs = () => {

    const { updateContactUs, constacUs } = useContext(contexto)

    return (
        <div>
            <div className='componentHeaderJobs'>
                <section>
                    <Link to={'/'}><img className='imgLogoHeader' src={`https://res.cloudinary.com/dt4unqzpv/image/upload/v1748972160/bt0jfxx9qdysrycbpfqc_nmnxbw.png`} /></Link>
                    <div>
                        <Link to={'/'}>HOME</Link>
                        <Link to="/#Servicios">SERVICIOS</Link>
                        <Link to="/#Clientes">CLIENTES</Link>
                        <Link to="/#Sobre-nosotros">NOSOTROS</Link>
                        <span onClick={() => updateContactUs(!constacUs)} className='contacto'>CONTACTO</span>
                    </div>
                </section>
                <div className='tittleJobs '><h1>TRABAJOS</h1></div>


            </div>
            <div className='componentHeaderJobsMobile'>
                <section>
                    <Link to={'/'}><img className='imgLogoHeader' src={`https://res.cloudinary.com/dt4unqzpv/image/upload/v1748972160/bt0jfxx9qdysrycbpfqc_nmnxbw.png`} /></Link>
                    <div>
                        <Link to={'/'}>Home</Link>
                        <Link to="/#Servicios">Servicios</Link>
                        <Link to="/#Clientes">Clientes</Link>
                        <Link to="/#Sobre-nosotros">Sobre Nosotros</Link>
                        <strong onClick={() => updateContactUs(!constacUs)} className='contacto'>Contacto</strong>
                    </div>
                </section>
                <div className='tittleJobsMobile '><h1>Trabajos</h1></div>


            </div>


        </div>
    )
}

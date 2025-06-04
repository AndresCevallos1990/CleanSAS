import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IndexDos } from './IndexDos'
import { IndexTres } from './IndexTres'
import { Header } from '../Header/Header'
import { FooterMain } from '../Footer/FooterMain'
import Network from '../Others/Network'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Clientess } from './Clientess'

export const Index = () => {

    const [showShortcut, setShowShortcut] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            const viewportHeight = window.innerHeight

            if (scrollPosition > 0.4 * viewportHeight) {
                setShowShortcut(true)
            } else {
                setShowShortcut(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <div id='Inicio'>
            <Header />
            <div>
                <br></br><br></br><br></br>
                <div className='aboutUs'>
                    <div data-aos="fade-down" className='aboutUsText'>
                        <h2>¿QUIÉNES SOMOS?</h2>
                        <br></br>
                        <article ></article>
                        <br></br>
                        < span>Somos CLEAN Soluciones Petroleras, una empresa dedicada a brindar soluciones en reacondicionamientos de instalaciones petroleras.</span>
                        < span>Nos enorgullece estar trabajando con importantes compañías del sector, brindando soluciones efectivas y contribuyendo al óptimo funcionamiento de sus instalaciones.</span>
                        < span>Nuestro personal cuenta con más de 20 años de experiencia en el sector y está conformado por un equipo interdisciplinario altamente capacitado en el área de saneamiento y reacondicionamiento de instalaciones petroleras.</span>
                        < span>Estamos comprometidos en ofrecer servicios de alta calidad que cumplan con los más exigentes estándares de seguridad, eficiencia y cumplimiento normativo.</span>
                        <br></br>
                        <div className='btnAboutUs'><Link to='/porfolio'>NUESTROS TRABAJOS</Link></div>
                    </div>
                    <section>
                        <img src='https://res.cloudinary.com/dt4unqzpv/image/upload/v1748957245/WhatsApp_Image_2025-06-02_at_22.58.06_l63sat.jpg' alt='' />
                    </section>
                </div>

            </div>
            
            <div style={{height: '50px'}} id='Servicios'></div>
            <br></br><br></br><br></br>
            <div>
                <IndexDos />
            </div>
            <div style={{height: '50px'}} id='Sobre-nosotros'></div>

            <br></br><br></br><br></br>
            <div><IndexTres /></div>
            <div style={{height: '150px'}} id='Clientes'></div>



            <div ><Clientess /></div>
            <div style={{height: '50px'}} id='Contactate'></div>

            <FooterMain />

            <a href='#Inicio'> <FontAwesomeIcon className='arrowUp' icon={faCircleArrowUp} /></a>


            {showShortcut && <Network />}

        </div>
    )
}

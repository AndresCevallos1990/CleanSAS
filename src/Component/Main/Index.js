import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IndexDos } from './IndexDos'
import { IndexTres } from './IndexTres'
import { Header } from '../Header/Header'
import { Staff } from './Staff'
import { Clientes } from './Clientes'
import { FooterMain } from '../Footer/FooterMain'
import Network from '../Others/Network'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'

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

                <div className='aboutUs'>
                    <div className='aboutUsText'>
                        <h2>¿Quienes somos?</h2>
                        {/* <hr style={{ backgroundColor: 'red', height: '2px', border: 'none' }} /> */}
                        < span>Somos CLEAN Soluciones Petroleras, una empresa dedicada a brindar soluciones en reacondicionamientos de instalaciones petroleras.</span>
                        < span>Nos enorgullece estar trabajando con importantes compañías del sector, brindando soluciones efectivas y contribuyendo al óptimo funcionamiento de sus instalaciones.</span>
                        < span>Nuestro personal cuenta con más de 20 años de experiencia en el sector y está conformado por un equipo interdisciplinario altamente capacitado en el área de saneamiento y reacondicionamiento de instalaciones petroleras.</span>
                        < span>Estamos comprometidos en ofrecer servicios de alta calidad que cumplan con los más exigentes estándares de seguridad, eficiencia y cumplimiento normativo.</span>
                        <hr></hr>
                        <Link to={'/porfolio'}>  VER MÁS</Link>
                    </div>
                    <section>
                        <img src='../img/foto1.jpg' alt='' />
                    </section>
                </div>

            </div>

            <hr></hr>

            <div id='Servicios'>
                <IndexDos />
            </div>

            <hr id='Sobre-nosotros'></hr>

            <div><IndexTres /></div>

            <hr></hr>

            <div><Staff /></div>

            <hr></hr>

            <div id='Clientes'><Clientes /></div>

            <hr id='Contactate'></hr>

            <FooterMain />

            <a href='#Inicio'> <FontAwesomeIcon  className='arrowUp' icon={faCircleArrowUp} /></a>
           

        {showShortcut && <Network />}

        </div>
    )   
}

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesUp, faCheck, faEarthAmericas, faFire, faLaptopMedical, faPaintbrush, faSeedling, faWeightHanging } from '@fortawesome/free-solid-svg-icons'
import Aos from 'aos'



export const IndexDos = () => {


    Aos.init({ duration: 800 })


    return (
        <div className='indexDos'>
            <h2>NUESTROS SERVICIOS</h2>

            <section className='container'>
                <div data-aos="fade-up">
                    <FontAwesomeIcon icon={faSeedling} />
                    <span>Hidrolavados con agua a temperatura</span>
                </div>
                <div data-aos="fade-up">
                    <FontAwesomeIcon icon={faLaptopMedical} />
                    <span>Saneamientos de derrames</span>
                </div>
                <div data-aos="fade-up">
                    <FontAwesomeIcon icon={faWeightHanging} />
                    <span>Izaje de cargas hasta 50tn</span>
                </div>
                <div data-aos="fade-up">
                    <FontAwesomeIcon icon={faPaintbrush} />
                    <span>Pintura de instalaciones</span>
                </div>
                <div data-aos="fade-up">
                    <FontAwesomeIcon icon={faFire} />
                    <span>Soldaduras de estructuras y soportería</span>
                </div>
                <div data-aos="fade-up">
                    <FontAwesomeIcon icon={faCheck} />
                    <span>Detección de interferencias</span>
                </div>
            </section>
            <article className='container'>
                <div data-aos="fade-up">
                    <FontAwesomeIcon icon={faAnglesUp} />
                    <span>Relevamientos aéreos con drones</span>
                </div>
                <div data-aos="fade-up">
                    <FontAwesomeIcon icon={faEarthAmericas} />
                    <span>Consultoría ambiental</span>
                </div>
            </article>

        </div>
    )
}

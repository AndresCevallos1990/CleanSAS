import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesUp, faCheck, faEarthAmericas, faFire, faLaptopMedical, faPaintbrush, faSeedling, faWeightHanging } from '@fortawesome/free-solid-svg-icons'



export const IndexDos = () => {
    return (
        <div className='indexDos'>
            <h2>NUESTROS SERVICIOS</h2>

            <section className='container'>
                <div>
                    <FontAwesomeIcon icon={faSeedling} />
                    <span>Hidrolavados con agua a temperatura</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faLaptopMedical} />
                    <span>Saneamientos de derrames</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faWeightHanging} />
                    <span>Izaje de cargas hasta 50tn</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faPaintbrush} />
                    <span>Pintura de instalaciones</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faFire} />
                    <span>Soldaduras de estructuras y soportería</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCheck} />
                    <span>Detección de interferencias</span>
                </div>
            </section>
            <article className='container'>
                <div>
                    <FontAwesomeIcon icon={faAnglesUp} />
                    <span>Relevamientos aéreos con drones</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faEarthAmericas} />
                    <span>Consultoría ambiental</span>
                </div>
            </article>

        </div>
    )
}

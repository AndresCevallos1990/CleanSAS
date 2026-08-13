import React from 'react'
import Aos from 'aos'

export const IndexTres = () => {

    Aos.init({ duration: 800 })

    return (
        <div className='indexTres'>

            {/* OBJETIVO */}

            <div className='firstDiv'>

                <div className='indexTresImage'>
                    <img
                        src='https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803368/ne6moujc8fduwggzn1eh.jpg'
                        alt=''
                    />
                </div>

                <article className='article1'>

                    <h2>OBJETIVO</h2>

                    <section></section>

                    <div data-aos="fade-left">

                        <span>
                            Nuestro principal objetivo es permitir que, como cliente,
                            pueda enfocarse en sus prioridades estratégicas, mientras
                            nos encargamos de la gestión integral y resolución de todas
                            las necesidades operativas y técnicas del proyecto,
                            asegurando un servicio eficaz y confiable.
                        </span>

                        <span>
                            Nos comprometemos a garantizar que sus instalaciones cumplan
                            estrictamente con las normativas provinciales y nacionales
                            vigentes. Para ello, eliminamos cualquier desviación que
                            pudiera generar no conformidades en auditorías o sanciones
                            por parte de las autoridades regulatorias, proporcionando
                            la tranquilidad de un cumplimiento normativo total.
                        </span>

                    </div>

                </article>

            </div>


            {/* SANEAMIENTO */}

            <div className='secondDiv'>

                <article className='article2'>

                    <h2>SANEAMIENTO DE SUELOS CONTAMINADOS</h2>

                    <section></section>

                    <div data-aos="fade-right">

                        <span>
                            Contamos con un equipo de profesionales altamente
                            capacitados y una guardia permanente, lo que nos permite
                            operar de manera continua, las 24 horas del día,
                            los 365 días del año.
                        </span>

                        <span>
                            Nuestro compromiso es proporcionar un servicio rápido
                            y eficiente, minimizando los riesgos ambientales y
                            cumpliendo con los más altos estándares de seguridad
                            y calidad.
                        </span>

                    </div>

                </article>

                <div className='indexTresImage'>

                    <img
                        src='https://res.cloudinary.com/drfdelucd/image/upload/v1786631740/WhatsApp_Image_2026-08-07_at_15.44.39_ghgwlb.jpg'
                        alt=''
                    />

                </div>

            </div>

        </div>
    )
}
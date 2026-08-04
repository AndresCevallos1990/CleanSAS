import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAnglesUp,
    faCheck,
    faEarthAmericas,
    faFire,
    faLaptopMedical,
    faPaintbrush,
    faSeedling,
    faWeightHanging
} from "@fortawesome/free-solid-svg-icons";

import Aos from "aos";
import "aos/dist/aos.css";

export const IndexDos = () => {

    useEffect(() => {
        Aos.init({
            duration: 800,
            once: true
        });
    }, []);

    const servicios = [
        {
            icon: faSeedling,
            titulo: "Hidrolavado",
            descripcion: "Limpieza con agua caliente a alta presión."
        },
        {
            icon: faLaptopMedical,
            titulo: "Saneamiento de derrames",
            descripcion: "Remediación y limpieza de áreas afectadas."
        },
        {
            icon: faWeightHanging,
            titulo: "Izaje de cargas",
            descripcion: "Movimiento seguro de cargas."
        },
        {
            icon: faPaintbrush,
            titulo: "Pintura industrial",
            descripcion: "Protección y mantenimiento de instalaciones."
        },
        {
            icon: faFire,
            titulo: "Soldaduras",
            descripcion: "Fabricación y reparación de estructuras metálicas."
        },
        {
            icon: faCheck,
            titulo: "Detección de interferencias",
            descripcion: "Localización de instalaciones enterradas."
        },
        {
            icon: faAnglesUp,
            titulo: "Relevamientos con drones",
            descripcion: "Inspecciones aéreas y generación de informes."
        },
        {
            icon: faEarthAmericas,
            titulo: "Consultoría ambiental",
            descripcion: "Asesoramiento y cumplimiento normativo."
        },
        {
            img: "https://res.cloudinary.com/dt4unqzpv/image/upload/v1749489378/esp.conf_tedaor.png",
            titulo: "Espacios confinados",
            descripcion: "Trabajos especializados con personal certificado."
        }
    ];

    return (
        <section className="indexDos">

            <div className="container">

                <h2 data-aos="fade-up">Nuestros Servicios</h2>

                <p
                    className="subtitulo"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Brindamos soluciones integrales para la industria petrolera,
                    energética e industrial, garantizando seguridad, calidad y
                    eficiencia en cada proyecto.
                </p>

                <div className="serviciosGrid">

                    {servicios.map((servicio, index) => (

                        <div
                            className="servicio"
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >

                            <div className="icono">

                                {servicio.icon ? (
                                    <FontAwesomeIcon icon={servicio.icon} />
                                ) : (
                                    <img
                                        src={servicio.img}
                                        alt={servicio.titulo}
                                        className="espConfImg"
                                    />
                                )}

                            </div>

                            <h3>{servicio.titulo}</h3>

                            <p>{servicio.descripcion}</p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};
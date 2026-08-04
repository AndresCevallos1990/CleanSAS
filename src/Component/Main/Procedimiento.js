import React from 'react'

const Procedimiento = () => {

    const proceso = [
        {
            nombre: '1. Recepción de la emergencia',
            descripcion: 'Nuestro equipo de atención al cliente recibe la notificación de la emergencia y recopila información detallada sobre la situación. Se establecen los canales de comunicación para garantizar una respuesta rápida y efectiva.',
            icono: <i class="bi bi-telephone-inbound"></i>
        },
        {
            nombre: '2. Evaluación y Diagnóstico',
            descripcion: 'Realizamos una evaluación exhaustiva de las instalaciones petroleras para identificar áreas que requieren reacondicionamiento y saneamiento. Nuestro equipo de expertos analiza el estado actual y determina las necesidades específicas del proyecto.',
            icono: <i class="bi bi-clipboard2-pulse-fill"></i>
        },
        {
            nombre: '3. Movilización',
            descripcion: 'Una vez identificadas las necesidades del proyecto, procedemos a movilizar los recursos necesarios, incluyendo personal, equipo y materiales, para garantizar la ejecución eficiente y segura del reacondicionamiento.',
            icono: <i class="bi bi-truck"></i>
        },
        {
            nombre: '4. Contención',
            descripcion: 'Una vez identificadas las necesidades del proyecto, procedemos a movilizar los recursos necesarios, incluyendo personal, equipo y materiales, para garantizar la ejecución eficiente y segura del reacondicionamiento.',
            icono: <i class="bi bi-cone-striped"></i>
        },
        {
            nombre: '5. Ejecución del Proyecto',
            descripcion: 'Una vez movilizados los recursos, nuestro equipo procede con la ejecución del proyecto de reacondicionamiento, siguiendo estrictamente los protocolos de seguridad y calidad.',
            icono: <i class="bi bi-tools"></i>
        },
        {
            nombre: '6. Informe final y seguimiento',
            descripcion: 'Una vez concluido el proyecto, elaboramos un informe detallado con los resultados obtenidos y realizamos un seguimiento continuo para garantizar el mantenimiento y la eficiencia a largo plazo.',
            icono: <i class="bi bi-card-checklist"></i>
        }
    ]


    return (
        <div className="procedimientoContainer">
            <h1>PROCEDIMIENTO DE TRABAJO</h1>
            <article className='separador'></article>
            <br></br><br></br>
            <section>
                {proceso.map((item, index) => (
                    <React.Fragment key={index}>

                        <div className="procedimientoCard" data-aos="fade-up">
                            <div className="procedimientoIcono">
                                {item.icono}
                            </div>

                            <p>{item.nombre}</p>
                        </div>

                        {index < proceso.length - 1 && (
                            <div className="procedimientoFlecha">
                                <i className="bi bi-arrow-right"></i>
                            </div>
                        )}

                    </React.Fragment>
                ))}
            </section>
        </div>
    )
}

export default Procedimiento



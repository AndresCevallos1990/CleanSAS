import React, { useContext, useState } from 'react'
import { contexto } from '../../Provider'
import { ImgJobs } from '../Others/ImgJobs'
import { HeaderJobs } from '../Header/HeaderJobs'


export const Trabajos = () => {

    const { jobs } = useContext(contexto)

    const [indexImg, setIndexImg] = useState(0)


    return (

        <div className='componentTrabajos'>
            <HeaderJobs />
            <article className='container'>
                <span>CLEAN Soluciones Petroleras está debidamente registrada y autorizada como proveedor de servicios ambientales en las provincias de Río Negro, Neuquén y La Pampa. Esta habilitación refleja nuestro compromiso con la calidad y la responsabilidad ambiental en todas nuestras operaciones.</span>
                <span>Nuestra empresa está certificada para un sistema de Gestión integrado que cumple con las normas ISO 9001 para la gestion de calidad y ISO 14001 para la gestión ambiental.</span>
            </article>

            <div className='imgPrinJobs'>
                <section>
                    < img src={jobs[indexImg]} alt='' />
                </section>
            </div>
            <br></br>
            <section className='imgPart' >
                <div className="componentImgJobs">
                    {
                        jobs?.map((item, index) => (
                            <img onClick={() => setIndexImg(index)} src={item} alt="" />
                        ))
                    }
                </div>



            </section>
        </div>


    )
}



{/* <div className='componentJobs'>
    {
        jobs?.map((item, index) => (<ImgJobs key={index} item={item} />))
    }
</div> */}
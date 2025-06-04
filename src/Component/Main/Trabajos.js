import React, { useEffect, useState } from 'react'
import { HeaderJobs } from '../Header/HeaderJobs'
import ImageMax from '../Others/ImageMax'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { ImgJobs } from '../Others/ImgJobs'
import GaleryMax from '../Others/GaleryMax'


export const Trabajos = () => {


    const [indexImg, setIndexImg] = useState(0)
    const [maxItems, setMaxItems] = useState(null)
    const [jobs, setJobs] = useState([])
    const [showMax, setShowMax] = useState(false)
    const [width, setWidth] = useState(null)
    const [height, setHeight] = useState(null)

    useEffect(() => {

        const arrayImages = [
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1748966942/WhatsApp_Image_2025-06-03_at_13.08.04_mo1dem.jpg",
            'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803345/uhgmmozxizqbtuqiee1h.jpg',
            'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803345/mhzm9oyoyt8jgthophaa.jpg',
            'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803345/bha2xhcdup5cu88rlzih.jpg',
            'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803345/zgakxnlvfhft5u4epkfe.jpg',
            'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803345/cxgqhp8j49lxngssaheh.jpg',
            'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803346/qmiq307aj7j3zz3pjjmo.jpg',
            'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803346/ud72wihy4o9ke2olwg0u.jpg',
            'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803346/qi44kspjjohqslpsxti8.jpg',
            'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803346/ungbvccl1ru0mhkwksh0.jpg',
            'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803346/xkbvim3lzj5iezzhwj33.jpg',
            //"https://res.cloudinary.com/dt4unqzpv/video/upload/v1748965071/WhatsApp_Video_2025-06-02_at_23.10.11_olxyq6.mp4",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1748965070/WhatsApp_Image_2025-06-02_at_23.06.15_ptsuld.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1748965069/WhatsApp_Image_2025-06-02_at_23.10.46_taytlf.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1748965069/WhatsApp_Image_2025-06-02_at_23.13.44_bjng7q.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1748965069/WhatsApp_Image_2025-06-02_at_23.23.03_lrqwi2.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1748965069/WhatsApp_Image_2025-06-02_at_23.03.21_frnyyc.jpg",
            'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803346/apphh50usf5yqs94de4p.jpg',
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1748965069/WhatsApp_Image_2025-06-02_at_23.05.23_r30mhd.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1748965069/WhatsApp_Image_2025-06-02_at_23.05.23_1_ttnopc.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1748957574/WhatsApp_Image_2025-06-02_at_23.01.28_dircgp.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1748957245/WhatsApp_Image_2025-06-02_at_22.58.06_l63sat.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1748972161/WhatsApp_Image_2025-06-02_at_22.55.31_q0fjda.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1748972162/WhatsApp_Image_2025-06-02_at_22.54.14_iicsng.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1748972160/WhatsApp_Image_2025-06-02_at_22.56.19_waydk2.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1748972159/WhatsApp_Image_2025-06-02_at_22.56.19_1_qfnbpj.jpg"

        ]


        setJobs(arrayImages)
        const max = arrayImages?.length
        setMaxItems(max)

    }, [])


    const changeIndex = (index) => {
        setIndexImg(index)
    }

    const updateShowMax = () => {
        setShowMax(false)
    }

    const pickImg = (index) => {
        const img = new Image();

        img.onload = () => {
            setWidth(img.width)
            setHeight(img.height)
            setShowMax(true)
        };

        img.src = jobs[index];
    };

    const updateIndexFromGalery = (index) => {
        setIndexImg(index)
    }

    return (

        <div className='componentTrabajos'>
            <HeaderJobs />
            <article className=''>
                <span>CLEAN Soluciones Petroleras está debidamente registrada y autorizada como proveedor de servicios ambientales en las provincias de Río Negro, Neuquén y La Pampa. Esta habilitación refleja nuestro compromiso con la calidad y la responsabilidad ambiental en todas nuestras operaciones.</span>
                <span>Nuestra empresa está certificada para un sistema de Gestión integrado que cumple con las normas ISO 9001 para la gestion de calidad y ISO 14001 para la gestión ambiental.</span>
            </article>

            <div className=''>
                <div className='imgPrinJobs'>
                    <button className='btnNxtPrv' disabled={indexImg === 0} onClick={() => setIndexImg(indexImg - 1)}><i class="bi bi-chevron-compact-left"></i></button>
                    <section>
                        < img onClick={() => pickImg(indexImg)} src={jobs[indexImg]} alt='' />
                    </section>
                    <button className='btnNxtPrv' disabled={indexImg === maxItems - 1} onClick={() => setIndexImg(indexImg + 1)}><i class="bi bi-chevron-compact-right"></i></button>
                </div>

                <ImgJobs indexImg={indexImg} changeIndex={changeIndex} item={jobs} />
            </div>

            <br></br>

            {showMax && <GaleryMax item={jobs} index={indexImg} updateShowMax={updateShowMax} width={width} height={height} updateIndexFromGalery={updateIndexFromGalery} /> }

        </div>


    )
}



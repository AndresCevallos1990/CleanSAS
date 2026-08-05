import React, { useEffect, useState } from "react";
import { HeaderJobs } from "../Header/HeaderJobs";
import GalleryCinematic from "./GalleryCinematic ";

export const Trabajos = () => {
    const [indexImg, setIndexImg] = useState(0);
    const [maxItems, setMaxItems] = useState(null);
    const [jobs, setJobs] = useState([]);
    const [showMax, setShowMax] = useState(false);
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);
    const [changing, setChanging] = useState(false);

    useEffect(() => {

        if (!jobs || jobs.length <= 1 || showMax) return;

        const interval = setInterval(() => {

            setChanging(true);

            setTimeout(() => {

                setIndexImg(prev =>
                    prev === jobs.length - 1 ? 0 : prev + 1
                );

                setChanging(false);

            }, 500);

        }, 4000);

        return () => clearInterval(interval);

    }, [jobs, showMax]);

    useEffect(() => {
        const arrayImages = [
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1749493372/WhatsApp_Image_2025-06-09_at_15.08.33_b71qqa.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1748966942/WhatsApp_Image_2025-06-03_at_13.08.04_mo1dem.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803345/uhgmmozxizqbtuqiee1h.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803345/mhzm9oyoyt8jgthophaa.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803345/bha2xhcdup5cu88rlzih.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803345/zgakxnlvfhft5u4epkfe.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803345/cxgqhp8j49lxngssaheh.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803346/qmiq307aj7j3zz3pjjmo.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803346/ud72wihy4o9ke2olwg0u.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803346/qi44kspjjohqslpsxti8.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803346/ungbvccl1ru0mhkwksh0.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803346/xkbvim3lzj5iezzhwj33.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1748965070/WhatsApp_Image_2025-06-02_at_23.06.15_ptsuld.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1748965069/WhatsApp_Image_2025-06-02_at_23.10.46_taytlf.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1748965069/WhatsApp_Image_2025-06-02_at_23.13.44_bjng7q.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1748965069/WhatsApp_Image_2025-06-02_at_23.23.03_lrqwi2.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1748965069/WhatsApp_Image_2025-06-02_at_23.03.21_frnyyc.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803346/apphh50usf5yqs94de4p.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1748965069/WhatsApp_Image_2025-06-02_at_23.05.23_r30mhd.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1748965069/WhatsApp_Image_2025-06-02_at_23.05.23_1_ttnopc.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1748957574/WhatsApp_Image_2025-06-02_at_23.01.28_dircgp.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1749058388/WhatsApp_Image_2025-06-02_at_22.58.06_hdrtp8.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1748972161/WhatsApp_Image_2025-06-02_at_22.55.31_q0fjda.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1748972162/WhatsApp_Image_2025-06-02_at_22.54.14_iicsng.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1748972160/WhatsApp_Image_2025-06-02_at_22.56.19_waydk2.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1748972159/WhatsApp_Image_2025-06-02_at_22.56.19_1_qfnbpj.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1749057173/WhatsApp_Image_2025-06-04_at_12.06.23_asxozu.jpg",
            "https://res.cloudinary.com/dt4unqzpv/image/upload/v1749057173/WhatsApp_Image_2025-06-04_at_12.06.22_wphyu1.jpg",
        ];

        setJobs(arrayImages);
        setMaxItems(arrayImages.length);
    }, []);

    const updateShowMax = () => {
        setShowMax(false);
    };

    const pickImg = (index) => {
        const img = new Image();

        img.onload = () => {
            setIndexImg(index);
            setWidth(img.width);
            setHeight(img.height);
            setShowMax(true);
        };

        img.src = jobs[index];
    };

    const updateIndexFromGalery = (index) => {
        setIndexImg(index);
    };

    return (
        <div className="componentTrabajos">
            <HeaderJobs />

            <article>
                <span>
                    CLEAN Soluciones Petroleras está debidamente registrada y autorizada
                    como proveedor de servicios ambientales en las provincias de Río
                    Negro, Neuquén y La Pampa. Esta habilitación refleja nuestro
                    compromiso con la calidad y la responsabilidad ambiental en todas
                    nuestras operaciones.
                </span>

                <span>
                    Nuestra empresa está certificada para un sistema de Gestión integrado
                    que cumple con las normas ISO 9001 para la gestion de calidad y ISO
                    14001 para la gestión ambiental.
                </span>
            </article>

            {/* =========================
          GALERÍA PRINCIPAL
      ========================= */}
            <div className="cinematicMainGallery">

                <div className="cinematicImageWrapper">

                    <img
                        src={jobs[indexImg]}
                        alt=""
                        className={`cinematicMainImage ${changing ? "cinematicChanging" : ""}`}
                    />

                    {/* Overlay de acceso a la galería */}
                    <button
                        className="cinematicGalleryTrigger"
                        onClick={() => pickImg(indexImg)}
                    >
                        <span className="cinematicTriggerIcon">
                            <i className="bi bi-grid-3x3-gap"></i>
                        </span>

                        <span className="cinematicTriggerText">
                            <small>EXPLORE</small>
                            <strong>GALLERY</strong>
                        </span>

                        <span className="cinematicTriggerArrow">
                            →
                        </span>
                    </button>

                    {/* Número de imagen */}
                    <div className="cinematicImageCounter">

                        <span>
                            {String(indexImg + 1).padStart(2, "0")}
                        </span>

                        <div></div>

                        <span>
                            {String(maxItems).padStart(2, "0")}
                        </span>

                    </div>

                </div>

            </div>


            {/* =========================
          GALERÍA FULLSCREEN
      ========================= */}

            {showMax && (
                <GalleryCinematic
                    item={jobs}
                    index={indexImg}
                    updateShowMax={updateShowMax}
                    width={width}
                    height={height}
                    updateIndexFromGalery={updateIndexFromGalery}
                />
            )}

        </div>
    );
};

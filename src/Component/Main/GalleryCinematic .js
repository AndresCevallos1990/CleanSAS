import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faXmark,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const GalleryCinematic = ({
  item = [],
  index = 0,
  updateShowMax,
  updateIndexFromGalery,
}) => {
  const [currentIndex, setCurrentIndex] = useState(index);
  const [direction, setDirection] = useState("next");
  const [isPlaying, setIsPlaying] = useState(false);

  const totalImages = item.length;

  const changeImage = (newIndex, newDirection = "next") => {
    if (newIndex < 0 || newIndex >= totalImages) return;

    setDirection(newDirection);
    setCurrentIndex(newIndex);

    if (updateIndexFromGalery) {
      updateIndexFromGalery(newIndex);
    }
  };

  const nextImage = () => {
    if (currentIndex < totalImages - 1) {
      changeImage(currentIndex + 1, "next");
    }
  };

  const previousImage = () => {
    if (currentIndex > 0) {
      changeImage(currentIndex - 1, "prev");
    }
  };

  /* -----------------------------
        SINCRONIZAR INDEX EXTERNO
  ----------------------------- */

  useEffect(() => {
    if (index !== currentIndex) {
      setDirection(index > currentIndex ? "next" : "prev");
      setCurrentIndex(index);
    }
  }, [index]);

  /* -----------------------------
            TECLADO
  ----------------------------- */

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        updateShowMax();
      }

      if (e.key === "ArrowRight") {
        nextImage();
      }

      if (e.key === "ArrowLeft") {
        previousImage();
      }

      if (e.key === " ") {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, totalImages]);

  /* -----------------------------
              SLIDESHOW
  ----------------------------- */

  useEffect(() => {
    if (!isPlaying || totalImages <= 1) return;

    const interval = setInterval(() => {
      if (currentIndex < totalImages - 1) {
        changeImage(currentIndex + 1, "next");
      } else {
        setIsPlaying(false);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, currentIndex, totalImages]);

  /* -----------------------------
              VACÍO
  ----------------------------- */

  if (!totalImages) return null;

  return (
    <div className="galleryCinematic">

      {/* --------------------------------
                    HEADER
        -------------------------------- */}

      <div className="galleryCinematic__header">

        <div className="galleryCinematic__counter">
          <span>
            {String(currentIndex + 1).padStart(2, "0")}
          </span>

          <small>/</small>

          <span>
            {String(totalImages).padStart(2, "0")}
          </span>
        </div>

        <button
          className="galleryCinematic__close"
          onClick={updateShowMax}
          aria-label="Cerrar galería"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

      </div>


      {/* --------------------------------
                  IMAGEN PRINCIPAL
        -------------------------------- */}

      <main className="galleryCinematic__main">

        <button
          className="galleryCinematic__arrow galleryCinematic__arrow--left"
          onClick={previousImage}
          disabled={currentIndex === 0}
          aria-label="Imagen anterior"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>


        <div className="galleryCinematic__stage">

          <div
            key={currentIndex}
            className={`galleryCinematic__image galleryCinematic__image--${direction}`}
          >
            <img
              src={item[currentIndex]}
              alt={`Imagen ${currentIndex + 1}`}
              draggable="false"
            />
          </div>

        </div>


        <button
          className="galleryCinematic__arrow galleryCinematic__arrow--right"
          onClick={nextImage}
          disabled={currentIndex === totalImages - 1}
          aria-label="Imagen siguiente"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

      </main>


      {/* --------------------------------
                  INFORMACIÓN
        -------------------------------- */}

      <div className="galleryCinematic__info">

        <div className="galleryCinematic__line" />

        <span>
          {String(currentIndex + 1).padStart(2, "0")}
        </span>

        <div className="galleryCinematic__line" />

      </div>


      {/* --------------------------------
                    CONTROLES
        -------------------------------- */}

      <div className="galleryCinematic__controls">

        <button
          className="galleryCinematic__play"
          onClick={() => setIsPlaying((prev) => !prev)}
          aria-label={isPlaying ? "Pausar" : "Reproducir"}
        >
          <FontAwesomeIcon
            icon={isPlaying ? faPause : faPlay}
          />
        </button>

      </div>


      {/* --------------------------------
                    FILMSTRIP
        -------------------------------- */}

      <div className="galleryCinematic__filmstrip">

        <div className="galleryCinematic__filmstripTrack">

          {item.map((img, i) => (

            <button
              key={`${img}-${i}`}
              className={`galleryCinematic__thumbnail ${i === currentIndex
                  ? "galleryCinematic__thumbnail--active"
                  : ""
                }`}
              onClick={() =>
                changeImage(
                  i,
                  i > currentIndex ? "next" : "prev"
                )
              }
              aria-label={`Ver imagen ${i + 1}`}
            >

              <img
                src={img}
                alt=""
                draggable="false"
              />

              <span>
                {String(i + 1).padStart(2, "0")}
              </span>

            </button>

          ))}

        </div>

      </div>

    </div>
  );
};

export default GalleryCinematic;
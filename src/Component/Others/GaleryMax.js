import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const GaleryMax = ({ item, index, updateShowMax, updateIndexFromGalery }) => {
  const [currentIndex, setCurrentIndex] = useState(index)
  const [fadeIn, setFadeIn] = useState(true)
  const [nextIndex, setNextIndex] = useState(null)

  useEffect(() => {
    if (index !== currentIndex) {
      setNextIndex(index)
      setFadeIn(false)  

      const timeout = setTimeout(() => {
        setCurrentIndex(index)  
        setFadeIn(true)         
        setNextIndex(null)
      }, 300)

      return () => clearTimeout(timeout)
    }
  }, [index])

  return (
    <div className=''>
      <div className='imageMaxContainerMilPlus'>
        <section>
          <div>{currentIndex >= 2 ? <img onClick={() => updateIndexFromGalery(currentIndex - 2)} src={item[currentIndex - 2]} /> : null}</div>
          <div>{currentIndex >= 1 ? <img onClick={() => updateIndexFromGalery(currentIndex - 1)} src={item[currentIndex - 1]} /> : null}</div>

          <div style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Imagen actual */}
            <img
              src={item[currentIndex]}
              alt=""
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                transition: 'opacity 0.7s ease-in-out',
                opacity: fadeIn ? 1 : 0,
                zIndex: 1,
              }}
            />

            {/* Imagen siguiente para crossfade */}
            {nextIndex !== null && (
              <img
                src={item[nextIndex]}
                alt=""
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  transition: 'opacity 0.7s ease-in-out',
                  opacity: fadeIn ? 0 : 1,
                  zIndex: 2,
                }}
              />
            )}
          </div>

          <div>{currentIndex <= item.length - 2 ? <img onClick={() => updateIndexFromGalery(currentIndex + 1)} src={item[currentIndex + 1]} /> : null}</div>
          <div>{currentIndex <= item.length - 3 ? <img onClick={() => updateIndexFromGalery(currentIndex + 2)} src={item[currentIndex + 2]} /> : null}</div>

          <button onClick={() => updateShowMax()} className='btnJobsClose'>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </section>
      </div>

      <div className='imageMaxContainerMil'>
        <section>
          <div>{currentIndex >= 1 ? <img onClick={() => updateIndexFromGalery(currentIndex - 1)} src={item[currentIndex - 1]} /> : null}</div>

          <div style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Imagen actual */}
            <img
              src={item[currentIndex]}
              alt=""
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                transition: 'opacity 0.7s ease-in-out',
                opacity: fadeIn ? 1 : 0,
                zIndex: 1,
              }}
            />

            {/* Imagen siguiente para crossfade */}
            {nextIndex !== null && (
              <img
                src={item[nextIndex]}
                alt=""
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  transition: 'opacity 0.7s ease-in-out',
                  opacity: fadeIn ? 0 : 1,
                  zIndex: 2,
                }}
              />
            )}
          </div>

          <div>{currentIndex <= item.length - 2 ? <img onClick={() => updateIndexFromGalery(currentIndex + 1)} src={item[currentIndex + 1]} /> : null}</div>


          <button onClick={() => updateShowMax()} className='btnJobsCloseMil'>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </section>
      </div>

    </div>


  )
}

export default GaleryMax

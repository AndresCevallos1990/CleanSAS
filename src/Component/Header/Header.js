import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HeaderShortcut } from './HeaderShortcut';
import { HeaderIcons } from './HeaderIcons';
import { HeaderMobile } from './HeaderMobile';

export const Header = () => {
    const [showShortcut, setShowShortcut] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            const viewportHeight = window.innerHeight

            if (scrollPosition > 0.9 * viewportHeight) {
                setShowShortcut(true)
            } else {
                setShowShortcut(false)
            }
        };


        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <div className='header'>

            <video
                src="/img/CleanHeader.mp4"
                autoPlay
                loop
                muted
                controls={false}
                className='vidHeader'
            />
            <HeaderIcons />
            <HeaderMobile />


            {showShortcut && <HeaderShortcut />}

            <article className='articleHeader'>
                <div>
                    <div>
                        <h1>CLEAN</h1>
                        <h1>SOLUCIONES PETROLERAS</h1>
                    </div>
                </div>
            </article>

            <div className='divHeader'>
                <div>
                    <span>Estamos profundamente comprometidos con la seguridad en cada una de nuestras operaciones, al mismo tiempo que nos enfocamos en el cuidado y la preservación del medio ambiente.</span>
                </div>
            </div>

            <div className='divHeaderDos'>
                <div>
                    <a href='#Contactate'>Contactate con nosotros</a>
                </div>
            </div>


        </div>
    );
};

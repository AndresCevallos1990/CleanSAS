import React, { useContext } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { contexto } from '../../Provider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export const HeaderMobile = () => {

    const { updateContactUs, constacUs } = useContext(contexto)

    return (
        <div className='headerMobile'>

            <Link to={'/'}><img src={`https://res.cloudinary.com/dt4unqzpv/image/upload/v1748972160/bt0jfxx9qdysrycbpfqc_nmnxbw.png`} /></Link>
            <section>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="btnMenu">
                        <i class="bi bi-list"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <div className='bodyMobile'><Link to={'/'}>HOME</Link>
                            <a href="#Servicios">SERVICIOS</a>
                            <a href="#Clientes">CLIENTES</a>
                            <a href="#Sobre-nosotros">NOSOTROS</a>
                            <span onClick={() => updateContactUs(!constacUs)} className='contacto'>CONTACTO</span>
                            <Link to={'/porfolio'}>TRABAJOS</Link>
                        </div>
                    </Dropdown.Menu>
                </Dropdown>


            </section>
        </div>
    )
}

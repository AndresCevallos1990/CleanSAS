import React, { useContext } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { contexto } from '../../Provider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export const HeaderMobile = () => {

    const { updateContactUs, constacUs, nigthMode, updateNigthMode } = useContext(contexto)

    return (
        <div className='headerMobile'>

            <Link to={'/'}><img src={`https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803369/bt0jfxx9qdysrycbpfqc.png`} /></Link>
            <section>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="btnMenu">
                        <i class="bi bi-list"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu id='bodyMobile'>
                        <Dropdown.Item ><Link to={'/'}>Home</Link></Dropdown.Item>
                        <Dropdown.Item ><a href="#Servicios">Servicios</a></Dropdown.Item>
                        <Dropdown.Item ><a href="#Clientes">Clientes</a></Dropdown.Item>
                        <Dropdown.Item ><a href="#Sobre-nosotros">Sobre Nosotros</a></Dropdown.Item>
                        <Dropdown.Item ><span onClick={() => updateContactUs(!constacUs)} className='contacto'>Contacto</span></Dropdown.Item>
                        <Dropdown.Item ><Link to={'/porfolio'}>Trabajos</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>


            </section>
        </div>
    )
}

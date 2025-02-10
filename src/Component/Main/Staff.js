import React from 'react'
import { Link } from 'react-router-dom'


export const Staff = () => {

    const staf = [
        {
            nombre: 'Daniel Besso',
            img: `../../img/Daniel Besso.jpg`,
            puesto: 'ANALISTA MEDIO AMBIENTE',
            link: 'https://www.linkedin.com/in/daniel-besso-411a56209/'
        },
        {
            nombre: 'Marcelo Montero',
            img: `../../img/Marcelo Montero.jpg`,
            puesto: 'ING. PROCESOS',
            link: 'https://www.linkedin.com/in/marcelo-montero-b43727158/    '
        },
        {
            nombre: 'Liliana Avilés',
            img: `../../img/Liliana Avilés.jpg`,
            puesto: 'ADMINISTRACION Y COMPRAS',
            link: 'https://www.linkedin.com/in/liliana-anah%C3%AD-avil%C3%A9s-a13aaa258/'
        },
        {
            nombre: 'Marcelo Silva',
            img: `../../img/Marcelo Silva.jpg`,
            puesto: 'SUPERVISOR DE CAMPO',
            link: 'https://www.linkedin.com/in/marcelo-jos%C3%A9-oscar-silva-04133a148?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },
        {
            nombre: 'María Sol Colobig',
            img: `../../img/María Sol Colobig.jpg`,
            puesto: 'MEDIO AMBUENTE',
            link: 'https://www.linkedin.com/in/mar%C3%ADa-sol-colobig-53704662/'
        },
    ]

    return (
        <div className='container'>
            <div className='staffArticle'>

                <h1>Nuestro Equipo</h1>
                <span>¡Conocé a cada uno de los integrantes de nuestro equipo!</span>
            </div>



            <section className='staffItems'>
                {
                    staf?.map((item) => (
                        <div>
                            <article>
                                <img src={item.img} alt='' />
                                <Link to={item.link}>
                                    <i class="bi bi-linkedin"></i>
                                </Link>
                            </article>
                            <br></br>
                            <strong>{item.nombre}</strong>
                            <span>{item.puesto}</span>
                        </div>
                    ))
                }
            </section>
        </div>
    )
}

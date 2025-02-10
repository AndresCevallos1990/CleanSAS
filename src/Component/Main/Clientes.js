import React from 'react'

export const Clientes = () => {

    const arrayImg = [
        '../../img/clientes/ypf.png', '../../img/clientes/Total.png', '../../img/clientes/Phoenix.png', '../../img/clientes/beraldi.png',
        '../../img/clientes/tetra.png', '../../img/clientes/rkn.png', '../../img/clientes/secco.png', '../../img/clientes/tgs.png',
        '../../img/clientes/drillco.png', '../../img/clientes/spark.png', '../../img/clientes/lks.png', '../../img/clientes/transcomahue.png',
    ]
    return (
        <div className='componentClientes'>
            <h1>NUESTROS CLIENTES</h1>
            <div>
                {
                    arrayImg?.map((item) => (
                        <div>
                            <img src={item} alt='' />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

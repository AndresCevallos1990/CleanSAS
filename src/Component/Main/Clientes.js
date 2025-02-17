import React from 'react'

export const Clientes = () => {

    const arrayImg = [
        'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803321/imskotujogdx1zcifr9u.png',
        'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803321/bmyj9poju4va8up7rwf8.png',
        'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803319/gryu82rkq2sjpnphx3vd.png',
        'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803319/d1gbvo9xfehwow2vd0ly.png',
        'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803320/ugcxoneurdbddioijibb.png',
        'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803320/m3tnlkxsawdvtt21069z.png',
        'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803320/z3y0und5uwpeejooevu0.png',
        'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803320/prrcnvt8pu384mgf28y2.png',
        'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803319/gcbo7u56rhjkgnq47zb0.png',
        'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803320/speeb2qs2kuagpeo4kpg.png',
        'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803319/lvdesvzfzfg2guyoplwg.png',
        'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803321/m0d8hchm9unn0vbnxjmj.png',

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

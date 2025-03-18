import { createContext, useEffect, useState } from "react"

export const contexto = createContext()

const { Provider } = contexto

const CustomProvider = ({ children }) => {

    const [constacUs, setContactUs] = useState(false)
    const [jobs, setJobs] = useState([])
    const [nigthMode, setNigthMode] = useState(false)


   useEffect(()=>{

    const arrayImages = [
        'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803345/uhgmmozxizqbtuqiee1h.jpg',
        'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803345/mhzm9oyoyt8jgthophaa.jpg',
        'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803345/bha2xhcdup5cu88rlzih.jpg',
        'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803345/zgakxnlvfhft5u4epkfe.jpg',
        'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803345/cxgqhp8j49lxngssaheh.jpg',
        'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803346/qmiq307aj7j3zz3pjjmo.jpg',
        'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803346/ud72wihy4o9ke2olwg0u.jpg',
        'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803346/qi44kspjjohqslpsxti8.jpg',
        'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803346/ungbvccl1ru0mhkwksh0.jpg',
        'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803346/apphh50usf5yqs94de4p.jpg',
        'https://res.cloudinary.com/dt4unqzpv/image/upload/v1739803346/xkbvim3lzj5iezzhwj33.jpg'
    ]


    

    setJobs(arrayImages)

   },[])



    const updateContactUs =(bool)=>{
        setContactUs(bool)
    }

    const updateNigthMode =(bool)=>{
        setNigthMode(bool)
    }



   
    return (
        <Provider value={{
            updateContactUs,constacUs,jobs, nigthMode, updateNigthMode
        }}>
            {children}
        </Provider>
    )


}

export default CustomProvider
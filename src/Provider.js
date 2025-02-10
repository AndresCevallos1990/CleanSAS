import { createContext, useEffect, useState } from "react"

export const contexto = createContext()

const { Provider } = contexto

const CustomProvider = ({ children }) => {

    const [constacUs, setContactUs] = useState(false)
    const [jobs, setJobs] = useState([])
    const [nigthMode, setNigthMode] = useState(false)


   useEffect(()=>{

    const arrayImages = []

    for(let i = 1; i<= 11; i++){
        const image = `../../img/jobs/image (${i}).jpg`
        arrayImages.push(image)
    }

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
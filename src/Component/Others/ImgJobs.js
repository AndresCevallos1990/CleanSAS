import { useContext, useState } from "react";
import { contexto } from "../../Provider";

export const ImgJobs = ({ item }) => {
    
    const { jobs } = useContext(contexto)


    return (

        <div className="componentImgJobs">
            {
                jobs?.map((item, index)=>(
                    <img src={item} alt="" />
                ))
            }
        </div>
    );
};
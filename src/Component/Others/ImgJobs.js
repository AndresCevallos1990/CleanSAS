import { useContext, useEffect, useState } from "react";
import { contexto } from "../../Provider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const ImgJobs = ({ item, changeIndex, indexImg }) => {

    const [currenPage, setCurrentPage] = useState(0);
    const [pages, setPages] = useState(null);

    useEffect(() => {

        const itemsMax = item.length;
        const pagesMax = Math.ceil(itemsMax / 10)
        setPages(pagesMax)

        setCurrentPage(Math.floor(indexImg / 10))


    }, [item, indexImg])


    const updateIndex = (indice) => {
        setCurrentPage(indice)
    }


    return (

        <div className="componentImgJobs">
            <button disabled={currenPage === 0} onClick={() => updateIndex(0)} className=""><FontAwesomeIcon icon={faAnglesLeft} /></button>
            <button disabled={currenPage === 0} onClick={() => updateIndex(currenPage - 1)} className=""><FontAwesomeIcon icon={faChevronLeft} /></button>
            <div className="imgJobsMilPlus" >
                {
                    item?.slice((10 * currenPage), (10 * currenPage + 10)).map((item, index) => (
                        <img className={indexImg === (index + (10 * currenPage)) ? 'activeImg' : ''} key={index} onClick={() => changeIndex(index)} src={item} alt="" />
                    ))
                }
            </div>

            <div className="imgJobsMil" >
                {
                    item?.slice((6 * currenPage), (6 * currenPage + 6)).map((item, index) => (
                        <img className={indexImg === (index + (10 * currenPage)) ? 'activeImg' : ''} key={index} onClick={() => changeIndex(index)} src={item} alt="" />
                    ))
                }
            </div>

            <div className="imgJobsMilLess" >
                {
                    item?.slice((4 * currenPage), (4 * currenPage + 4)).map((item, index) => (
                        <img className={indexImg === (index + (10 * currenPage)) ? 'activeImg' : ''} key={index} onClick={() => changeIndex(index)} src={item} alt="" />
                    ))
                }
            </div>



            <button disabled={currenPage === pages - 1} onClick={() => updateIndex(currenPage + 1)} className=""><FontAwesomeIcon icon={faChevronRight} /></button>
            <button disabled={currenPage === pages - 1} onClick={() => updateIndex(pages)} className=""><FontAwesomeIcon icon={faAnglesRight} /></button>
        </div>
    );
};
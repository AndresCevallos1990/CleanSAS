import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import ReactImageMagnify from 'react-image-magnify';

const ImageMax = ({ item, index, updateShowMax, width, height }) => {

    const [image, setImage] = useState(null)
    const [useWidth, setUseWidth] = useState(null)
    const [useHeight, setUseHeight] = useState(null)


    useEffect(() => {

        setImage(item[index])
        setUseWidth(width * 1.3)
        setUseHeight(height * 1.3)

    }, [item, index, width])



    return (
        <div className='imageMaxContainer'>
            {
                image === null ? null :
                    <div className={width > height ? 'imageMaximizeWidth' : 'imageMaximizeHeigth'}>
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: image
                            },
                            largeImage: {
                                src: item[index],
                                width: useWidth,
                                height: useHeight
                            }
                        }} />
                    </div>
            }
            <button onClick={() => updateShowMax()} className='btnJobsClose'><FontAwesomeIcon icon={faXmark} /></button>
        </div>
    )
}

export default ImageMax

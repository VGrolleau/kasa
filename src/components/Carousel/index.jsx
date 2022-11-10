import '../../utils/styles/Carousel.css'
import { useState } from 'react';

function Carousel(props) {
    const [current, setCurrent] = useState(0)

    const pictures = props.pictures
    const length = pictures.length

    const nextPicture = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevPicture = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(pictures) || pictures.length <= 0) {
        return null
    }

    return (
        <div className='carousel'>
            <span className={length > 1 ? 'fa-solid fa-angle-left previous-arrow' : 'fa-solid fa-angle-left previous-arrow none'} onClick={prevPicture}></span>
            <span className={length > 1 ? 'fa-solid fa-angle-right next-arrow' : 'fa-solid fa-angle-right next-arrow none'} onClick={nextPicture}></span>
            {pictures.map((picture, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={picture} alt={`${picture}`} className="picture" />)}
                        <div className={length > 1 ? 'bullet' : 'bullet none'}>{index + 1} / {length}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Carousel
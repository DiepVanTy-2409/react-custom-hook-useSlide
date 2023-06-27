import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { useSlide } from '../../hooks/useSlide'

import './Slide.css'

const images = [
    {
        _id: 1,
        src: 'https://cdn.pixabay.com/photo/2023/05/21/19/34/photo-8009248_1280.jpg',
    },
    {
        _id: 2,
        src: 'https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197_640.jpg',
    },
    {
        _id: 3,
        src: 'https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_640.jpg',
    },
    {
        _id: 4,
        src: 'https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014618_640.jpg',
    },
    {
        _id: 5,
        src: 'https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014619_640.jpg',
    },
    {
        _id: 6,
        src: 'https://cdn.pixabay.com/photo/2023/05/21/19/34/photo-8009248_1280.jpg',
    },
    {
        _id: 7,
        src: 'https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197_640.jpg',
    },
    {
        _id: 8,
        src: 'https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_640.jpg',
    },
    {
        _id: 9,
        src: 'https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014618_640.jpg',
    },
    {
        _id: 10,
        src: 'https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014619_640.jpg',
    },
]

export const Slide = () => {
    const { slideRef, goPrevious, goNext } = useSlide()

    return (
        <div className="container">
            <button className='btn btn_prev' onClick={goPrevious}><AiOutlineArrowLeft /></button>
            <div className="slide" ref={slideRef}>
                {
                    images.map(img => (
                        <div key={img._id} className="item"><img src={img.src} alt="" /></div>
                    ))
                }
            </div>
            <button className='btn btn_next' onClick={goNext}><AiOutlineArrowRight /></button>
        </div>
    )
}

'use client'
import Link from 'next/link'
import { useState } from 'react'

interface SliderProps {

}

const Slider: React.FC<SliderProps> = ({}) => {

    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const [transform, setTransform] = useState<number>(0)

    const nextSlide = () => {
        const nextIndex = (currentSlide + 1) % 4
        setCurrentSlide(nextIndex)
        var tx = transform
        if(nextIndex===3) tx -=172
        else tx -=366
        setTransform(tx)
    }


    const prevSlide = () => {
        const prevIndex = (currentSlide -1 + 4) % 4
        var tx = transform
        if(prevIndex===0) tx +=172
        else tx +=366
        setCurrentSlide(prevIndex)
        setTransform(tx)
    }

    return (
        <div className="slider-header">
            <div className="slider-wrapper" style={{transform: `translate3d(${transform}px,0,0)`}}>
                <div className="slider-slide">
                    <figure className="block mb-[20px]">
                        <Link href={"/"}>
                            <img src="https://assets.awwwards.com/awards/media/cache/optimize/images/2023/06/c2mtl-thumb.jpg" alt="" />
                        </Link>
                    </figure>
                    <h6>C2 Montréal by KOKI-KIKO and friends wins SOTM May</h6>
                </div>
                <div className="slider-slide">
                    <figure className="block mb-[20px]">
                        <Link href={"/"}>
                            <img src="https://assets.awwwards.com/awards/media/cache/optimize/images/2023/05/es-thumb-v2.jpg" alt="" />
                        </Link>
                    </figure>
                    <h6>Engine Station by MONOGRID: A 3D Experiential E-Commerce Destination</h6>
                </div>
                <div className="slider-slide">
                    <figure className="block mb-[20px]">
                        <Link href={"/"}>
                            <img src="https://assets.awwwards.com/awards/media/cache/optimize/images/2023/05/loco-thumb.jpg" alt="" />
                        </Link>
                    </figure>
                    <h6>Reinventing Locomotive® Wins Site of the Month March</h6>
                </div>
                <div className="slider-slide">
                    <figure className="block mb-[20px]">
                        <Link href={"/"}>
                            <img src="https://assets.awwwards.com/awards/media/cache/optimize/images/2023/05/sotm-april-2023-thumbnail.jpg" alt="" />
                        </Link>
                    </figure>
                    <h6>Vote for Site of the Month April 2023!</h6>
                </div>
            </div>
            <div className="slider-header__nav">
                <div className={`slider-header__btnav ${currentSlide===0 ? 'invisible': 'visible'}`} onClick={prevSlide}>
                    <svg width="14" height="11" viewBox="0 0 14 11">
                        <path d="M1.6282 5.31601L2.20129 5.88332L2.20127 5.88907L6.08664 9.77444L5.27172 10.5894L1.38635 6.70399L-0.000460164 5.31717L0.814456 4.50226L5.31672 -1.6281e-06L6.12471 0.813773L2.20618 4.7323L1.6282 5.31601ZM3.21672 5.60365L4.18558 4.22814L13.0313 4.19073L13.0254 5.56217L3.21672 5.60365Z"></path>
                    </svg>
                </div>
                <div className={`slider-header__btnav ${currentSlide===3 ? 'invisible': 'visible'}`} onClick={nextSlide}>
                    <svg width="14" height="11" viewBox="0 0 14 11">
                        <path d="M11.403 5.27335L10.83 4.70604L10.83 4.70028L6.94461 0.814915L7.75953 0L11.6449 3.88537L13.0317 5.27218L12.2168 6.0871L7.71453 10.5894L6.90654 9.77558L10.8251 5.85706L11.403 5.27335ZM9.81453 4.9857L8.84567 6.36122L0 6.39862L0.00580048 5.02719L9.81453 4.9857Z"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Slider
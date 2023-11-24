'use client'
import { useEffect, useState } from "react"

interface TextSliderProps {
    sliderItems: TextSliderItems[]
}

const TextSlider: React.FC<TextSliderProps> = ({sliderItems}) => {
    const [transform, setTransform] = useState<number>(0)

    useEffect(() => {
        let index = 0
        setInterval(() => {
            index = (index + 1)%4
            if(index === 0) setTransform(0)
            setTransform(-140*index)
        }, 9000)
    }, [])

    

    return (
        <>
            <div className="textSlider">
                <div className="transition-all duration-3000 ease-in" style={{transform: `translate3d(0,${transform}px,0)`}}>
                    {
                        sliderItems.map(({title, subTitle}, index) => (
                            <div className="textSlider__slide" key={index}>
                                <p className="text-xl">{subTitle}</p>
                                <h6 className="font-bold">{title}</h6>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default TextSlider
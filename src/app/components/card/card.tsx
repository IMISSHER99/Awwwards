import Link from 'next/link'
import TextSlider from '../textSlider/textSlider'
import { CardModel } from './card.model'

interface CardProps {
    card: CardModel
}

const Card: React.FC<CardProps> = ({card: {imageUrl, alt, sliderText}}) => {
    return (
        <div className="card">
            <Link href={"/"} className='card__link'></Link>
            <img src={imageUrl} alt={alt} className="card__img" />
            <div className="card__content">
                <TextSlider sliderItems={...sliderText}/>
            </div>
            <span className="card__btn button button--large--outline--white--rounded">Explore SOTD</span>
        </div>
    )
}

export default Card
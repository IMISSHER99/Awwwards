import Link from 'next/link'
import TextSlider from './textSlider'

interface CardProps {

}

const Card: React.FC<CardProps> = ({}) => {
    return (
        <div className="card">
            <Link href={"/"} className='card__link'></Link>
            <img src="https://assets.awwwards.com/awards/sites_of_the_day/2023/11/adidasarena-cover2.jpg" alt="" className="card__img" />
            <div className="card__content">
                <TextSlider sliderItems={[
                    {
                        title: "Jameen Tarlier",
                        subTitle: "By"
                    },
                    {
                        title: "7.57",
                        subTitle: "Overall Score"
                    },
                    {
                        title: "Adidas Arena",
                        subTitle: "Site name"
                    },
                    {
                        title: "Magnetism",
                        subTitle: "By"
                    }
                ]}/>
            </div>
            <span className="card__btn button button--large--outline--white--rounded">Explore SOTD</span>
        </div>
    )
}

export default Card
export type CardModel = {
    imageUrl: string,
    alt: string,
    type: string,
    sliderText: TextSliderItems[]
}

const CardType = {
    LARGE: 'large',
    SMALL: 'small'
}

export default CardType;
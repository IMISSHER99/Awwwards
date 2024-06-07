import Link from "next/link"

export enum ButtonType {
    DEFAULT,
    BUTTON_OUTLINE
}

export type ButtonProps = {
    text: string,
    type: ButtonType
}

const Button:React.FC<ButtonProps> = ({ text, type }) => {
    return (
        <Link href={"/"} className={`min-w-[42px] h-[42px] px-5 flex items-center justify-between text-white cursor-pointer border-0 bg-black rounded-lg text-base font-normal button ${type === ButtonType.BUTTON_OUTLINE ? 'button__outline !font-normal' : ''}`}>{ text }</Link>
    )
}

export default Button
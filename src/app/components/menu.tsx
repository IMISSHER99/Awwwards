import Link from 'next/link'

interface MenuProps {

}

const Menu: React.FC<MenuProps> = ({ }) => {
    return (
        <div className="menu fixed bottom-7 w-full">
            <div className="flex items-center justify-center">
                <div className="menu-float__wrapper flex p-1.5">
                    <div className="menu-float__top"></div>
                    <div className="menu-float__bottom flex justify-center">
                        <div className="menu-float__layout menu-float__layout--primary">
                            <div className="flex menu-float__content px-5 items-center gap-1.5">
                                <Link href={"/"} className='font-bold flex items-center text-white'>w.</Link>
                                <p className="flex items-center text-white"><strong>home</strong></p>
                                <div className="menu-float__hamburger">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div className="menu-float__layout menu-float__layout--secondary">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
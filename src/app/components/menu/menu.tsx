'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ScrollHelper from '../scrollHelper/ScrollHelper'

interface MenuProps {
}

const Menu: React.FC<MenuProps> = ({ }) => {

    const [toggleMenu, setToggleMenu] = useState<boolean>(false)

    return (
        <div className="menu fixed bottom-7 w-full z-20">
            <div className="flex items-center justify-center">
                <ScrollHelper />
                <div className={`menu-float__wrapper flex p-1.5 flex-col ${toggleMenu ? 'is-open': ''}`}>
                    <div className={`menu-float__top w-full ${toggleMenu ? 'block opacity-1 max-h-[500px] p-[30px] mb-1.5' : 'opacity-0 max-h-[0px] p-0 m-0'}`}>
                        <div className="flex w-full">
                            <div className="menu-float__col">
                                <div className='ml-4 mb-6 menu-float__menu-section relative'>Awards</div>
                                <ul className="menu-float__menu-nav">
                                    <li><Link href={"/"}>Winners</Link></li>
                                    <li><Link href={"/"}>Nominies</Link></li>
                                    <li><Link href={"/"}>Sites of the Day</Link></li>
                                    <li><Link href={"/"}>Sites of the Month</Link></li>
                                </ul>
                            </div>
                            <div className="menu-float__col">
                                <div className='ml-4 mb-6 menu-float__menu-section relative'>Inspiration</div>
                                <ul className="menu-float__menu-nav">
                                    <li><Link href={"/"}>Collection</Link></li>
                                    <li><Link href={"/"}>Elements</Link></li>
                                </ul>
                                <div className='ml-4 mb-6 menu-float__menu-section mt-6 relative'>Academy</div>
                                <ul className="menu-float__menu-nav">
                                    <li><Link href={"/"}>Courses</Link></li>
                                    <li><Link href={"/"}>Masterclasses</Link></li>
                                </ul>
                            </div>  
                            <div className="menu-float__col">
                                <div className='ml-4 mb-6 menu-float__menu-section relative'>Directory</div>
                                <ul className="menu-float__menu-nav">
                                    <li><Link href={"/"}>Professional</Link></li>
                                    <li><Link href={"/"}>Internationals</Link></li>
                                    <li><Link href={"/"}>Freelancers</Link></li>
                                    <li><Link href={"/"}>Agencies & Studios</Link></li>
                                </ul>
                            </div>
                            <div className="menu-float__col">
                                <div className='ml-4 mb-6 menu-float__menu-section relative'>W.</div>
                                <ul className="menu-float__menu-nav">
                                    <li><Link href={"/"}>Blog</Link></li>
                                    <li><Link href={"/"}>Jobs</Link></li>
                                    <li><Link href={"/"}>Jury</Link></li>
                                    <li><Link href={"/"}>Products</Link></li>
                                </ul>
                            </div>  
                        </div>
                    </div>
                    <div className="menu-float__bottom flex justify-center relative">
                        <div className={`menu-float__layout menu-float__layout--primary ${toggleMenu ? 'w-full absolute ' : ''}`}>
                            <div className="flex menu-float__content px-5 items-center gap-1.5">
                                <Link href={"/"} className='font-bold flex items-center text-white'>w.</Link>
                                <p className="flex items-center text-white"><strong>home</strong></p>
                                <div className={`menu-float__hamburger ${toggleMenu ? 'is-open' : ''}`} onClick={() => setToggleMenu(!toggleMenu)}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div className={`menu-float__layout menu-float__layout--secondary flex ml-1.5 text-white ${toggleMenu ? 'hidden': ''}`}>
                            <div className="menu-float__content flex px-5 items-center justify-center gap-1.5">
                                <p className="capitalize flex items-center ml-3 mr-1.5">
                                    <strong>home</strong>
                                </p>
                                <ul className="flex gap-1.5">
                                    <li><Link href={"/"} className='flex items-center justify-center w-full menu-float__items'>SOTD</Link></li>
                                    <li><Link href={"/"} className='flex items-center justify-center w-full menu-float__items'>Nominies</Link></li>
                                    <li><Link href={"/"} className='flex items-center justify-center w-full menu-float__items'>Directory</Link></li>
                                    <li><Link href={"/"} className='flex items-center justify-center w-full menu-float__items'>Collections</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
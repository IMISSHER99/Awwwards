'use client'
import Link from "next/link"
import Navigation from "../navigation/Navigation"
import SearchBar from "../searchbar/SearchBar"
import Button, { ButtonType } from "@/app/_common/button/Button"
import { useState } from "react"
import NavigationDropdown from "../navigationDropdown/NavigationDropdown"

export type HeaderProps = {

}

const Header:React.FC<HeaderProps> = ({}) => {

    // Use state to save the state of the toggle
    const [active, toggleActive] = useState<boolean>(false);

    // Utility function to toggle active state
    const handleToggle = () => {
        toggleActive(!active);
    }
    
    return (
        <header className="fixed w-full h-full mt-2">
            <div className={`inner rounded-lg h-fit flex flex-col items-center transition ${active ? 'active' : ''}`}>
                <div className="flex h-[54px] w-full items-center ps-1.5 pe-1.5 ">
                    {/* Hamburger menu */}
                <svg width={16} viewBox="0 0 20 20" className="block xl:hidden mr-3">
                    <path d="M19.5,17.6H0.5c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5h18.9c0.3,0,0.5,0.2,0.5,0.5C20,17.4,19.8,17.6,19.5,17.6z M19.5,10.5H0.5C0.2,10.5,0,10.3,0,10s0.2-0.5,0.5-0.5h18.9c0.3,0,0.5,0.2,0.5,0.5S19.8,10.5,19.5,10.5z M19.5,3.4H0.5C0.2,3.4,0,3.2,0,2.9s0.2-0.5,0.5-0.5h18.9c0.3,0,0.5,0.2,0.5,0.5S19.8,3.4,19.5,3.4z"></path>
                </svg>
                {/* Logo */}
                <div className="flex items-center justify-between">
                    <Link href={"/"}>
                        <svg width="30" height="16" viewBox="0 0 30 16">
                            <path d="m18.4 0-2.803 10.855L12.951 0H9.34L6.693 10.855 3.892 0H0l5.012 15.812h3.425l2.708-10.228 2.709 10.228h3.425L22.29 0h-3.892ZM24.77 13.365c0 1.506 1.12 2.635 2.615 2.635C28.879 16 30 14.87 30 13.365c0-1.506-1.12-2.636-2.615-2.636s-2.615 1.13-2.615 2.636Z"></path>
                        </svg>
                    </Link>
                </div>
                {/* Navigation */}
                <Navigation display={active} handleToggle={handleToggle}/>
                {/* Search Bar */}
                <SearchBar handleToggle={handleToggle} state={active}/>
                {/* Login / Signup */}
                <div className="flex items-center justify-between h-full gap-4 ml-5">
                    <Link href={"/"} className="hidden sm:flex items-center justify-between font-bold text-base">Log in</Link>
                    <Link href={"/"} className="hidden sm:flex items-center justify-between font-bold text-base">Sign Up</Link>
                    <svg width={20} viewBox="0 0 20 20" className="block sm:hidden">
                        <path d="M18.5,13.5L15.7,17l-1.9-1.7l-1.4,1.5l3.4,3.2l4.1-5.2L18.5,13.5z"></path>
                        <path d="M14.2,11c-0.9-0.4-1.8-0.7-2.8-0.8c2.1-0.6,3.7-2.6,3.7-5C15.2,2.3,12.8,0,10,0C7.1,0,4.8,2.3,4.8,5.2 c0,2.3,1.6,4.3,3.7,5C3.7,10.9,0,15,0,20h2c0-4.4,3.6-8,8-8c1.3,0,2.6,0.3,3.6,0.9L14.2,11L14.2,11z M6.8,5.2C6.8,3.4,8.2,2,10,2 c1.7,0,3.2,1.4,3.2,3.2c0,1.7-1.4,3.2-3.2,3.2C8.2,8.3,6.8,6.9,6.8,5.2z"></path>
                    </svg>
                </div>
                {/* Additional Buttons */}
                <div className="hidden lg:flex items-center justify-between gap-4 ml-5">
                    <Button text="Be Pro" type={ButtonType.DEFAULT} />
                    <Button text="Submit Website" type={ButtonType.BUTTON_OUTLINE} />    
                </div>
                </div>
                {/* Navigation Dropdown */}
                <NavigationDropdown display={active}/>
            </div>
        </header>
    )
}

export default Header
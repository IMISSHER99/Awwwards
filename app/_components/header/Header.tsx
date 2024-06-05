'use client'
import Link from "next/link"
import Navigation from "../navigation/Navigation"
import SearchBar from "../searchbar/SearchBar"
import Button, { ButtonType } from "@/app/_common/button/Button"
import { useState } from "react"

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
        <header className="fixed w-full h-full mt-[50px]">
            <div className={`inner h-[54px] rounded-lg flex items-center ps-1.5 pe-1.5 transition ${active ? 'active' : ''}`}>
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
                    <Link href={"/"} className="flex items-center justify-between font-bold text-base">Log in</Link>
                    <Link href={"/"} className="flex items-center justify-between font-bold text-base">Sign Up</Link>
                </div>
                {/* Additional Buttons */}
                <div className="flex items-center justify-between gap-4 ml-5">
                    <Button text="Be Pro" type={ButtonType.DEFAULT} />
                    <Button text="Submit Website" type={ButtonType.BUTTON_OUTLINE} />    
                </div>
            </div>
        </header>
    )
}

export default Header
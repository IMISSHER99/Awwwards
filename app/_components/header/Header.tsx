import Link from "next/link"
import Navigation from "../navigation/Navigation"
import SearchBar from "../searchbar/SearchBar"

export type HeaderProps = {

}

const Header:React.FC<HeaderProps> = ({}) => {
    return (
        <header className="fixed w-full h-full mt-[50px]">
            <div className="inner h-[54px] rounded-lg flex items-center ps-1.5 pe-1.5">
                {/* Logo */}
                <div className="flex items-center justify-between">
                    <Link href={"/"}>
                        <svg width="30" height="16" viewBox="0 0 30 16">
                            <path d="m18.4 0-2.803 10.855L12.951 0H9.34L6.693 10.855 3.892 0H0l5.012 15.812h3.425l2.708-10.228 2.709 10.228h3.425L22.29 0h-3.892ZM24.77 13.365c0 1.506 1.12 2.635 2.615 2.635C28.879 16 30 14.87 30 13.365c0-1.506-1.12-2.636-2.615-2.636s-2.615 1.13-2.615 2.636Z"></path>
                        </svg>
                    </Link>
                </div>
                {/* Navigation */}
                <Navigation />
                {/* Search Bar */}
                <SearchBar />
                {/* Login / Signup */}
                {/* Additional Buttons */}
            </div>
        </header>
    )
}

export default Header
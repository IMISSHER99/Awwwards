'use client'
import Link from 'next/link'
import { useState } from 'react'

interface SearchDropdownProps {

}

const SearchDropdown: React.FC<SearchDropdownProps> = ({}) => {

    const [toggleDropdown, setToggleDropdow] = useState<boolean>(false);

    return (
        <div className="search-dropdown relative inline-flex">
            <svg className={`search-dropdown__arrow absolute ${toggleDropdown ? 'is-active': ''}`} viewBox="0 0 20 20" width="12" onClick={() => setToggleDropdow(!toggleDropdown)}>
                <path d="M1.6,4.1c-0.4,0-0.9,0.2-1.2,0.5c-0.7,0.7-0.7,1.7,0,2.4l8.4,8.4c0.7,0.7,1.7,0.7,2.4,0L19.5,7 c0.7-0.7,0.7-1.7,0-2.4c-0.7-0.7-1.7-0.7-2.4,0L10,11.8L2.8,4.6C2.5,4.3,2.1,4.1,1.6,4.1z"></path>
            </svg>
            <div className={`search-dropdown__selected relative flex items-center ${toggleDropdown ? 'is-active': ''}`}>Inspiration</div>
            <div className={`search-dropdown__options ${toggleDropdown ? 'visible opacity-1' : 'opacity-0 invisible'}`}>
                <Link href={"/"} className="search-dropdown__option">Inspiration</Link>
                <Link href={"/"} className="search-dropdown__option is-child">Websites</Link>
                <Link href={"/"} className="search-dropdown__option is-child">Elements</Link>
                <Link href={"/"} className="search-dropdown__option is-child">Collections</Link>
                <Link href={"/"} className="search-dropdown__option">Blogs</Link>
                <Link href={"/"} className="search-dropdown__option">Courses</Link>
                <Link href={"/"} className="search-dropdown__option">Directory</Link>
            </div>
        </div>
    )
}

export default SearchDropdown;
'use client'
import { useEffect, useRef, useState } from "react";
import SearchDropdown from "../searchDropdown/SearchDropdown";
import SearchResults from "../searchResults/SearchResults";

interface SearchFormProps {

}

const SearchForm :React.FC<SearchFormProps> = ({}) => {
    
    const inputRef = useRef<HTMLInputElement>(null)
    const [isInputFocused, setIsInputFocused] = useState(false)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if(inputRef.current && !inputRef.current?.contains(event.target as Node)) {
                setIsInputFocused(false)
            }
        }

        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, []);
    
    return (
        <div className="header-search relative  flex-1 ml-3">
            <div className={`header-search__overlay transition-all duration-3000 ease-in ${isInputFocused ? 'visible opacity-1' : 'invivible opacity-0'}`}></div>
            <div className={`search-form relative z-20 flex items-center text-sm transition-all duration-3000 ease-in  ${isInputFocused ? 'dark' : ''}`}>
                <div className="search-form__field flex flex-1 h-full">
                    <button className="search-form__button flex items-center" type="submit" aria-label="Search">
                        <svg className="ico-svg" viewBox="0 0 20 20" width="20">
                            <path d="M20,8c0-4.4-3.6-8-8-8C7.6,0,4,3.6,4,8c0,1.9,0.6,3.6,1.7,4.9L0,18.6L1.4,20l7.1-7.1l-0.2-0.2 C6.9,11.6,6,9.9,6,8c0-3.3,2.7-6,6-6c3.3,0,6,2.7,6,6c0,3.3-2.7,6-6,6c-0.7,0-1.3-0.1-1.9-0.3L10,13.7l-1.5,1.5l0.4,0.2 c1,0.4,2.1,0.7,3.2,0.7C16.4,16,20,12.4,20,8z"></path>
                        </svg>    
                    </button>
                    <input ref={inputRef} type="text" className="search-form__input relative flex-1 h-full text-sm" placeholder="Search in Inspiration" onClick={() => setIsInputFocused(true)} />
                </div>
                <div className="search-form__in">
                    <div className="search-form__separator inline-flex items-center">IN</div>
                    <SearchDropdown />
                </div>
            </div>
            <SearchResults visible={isInputFocused} />
        </div>

    )
}

export default SearchForm;
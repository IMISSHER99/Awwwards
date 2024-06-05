export type SearchProps = {
    handleToggle: () => void,
    state: boolean
}

const SearchBar:React.FC<SearchProps> = ({ handleToggle, state }) => {
    return (
        <form action="#" className={`flex flex-1 items-center h-[42px] ml-10 brightness-95 bg-color rounded-lg pl-4 transition ${state ? '!bg-white': ''}`}>
            <button type="submit">
                <svg width={14} viewBox="0 0 20 20">
                    <path d="M19.6,18.9l-5-5c1.3-1.5,2.1-3.4,2.1-5.5c0-4.6-3.7-8.2-8.2-8.2S0.2,3.9,0.2,8.5s3.7,8.2,8.2,8.2 c2.1,0,4-0.8,5.5-2.1l5,5c0.2,0.2,0.5,0.2,0.7,0C19.8,19.4,19.8,19.1,19.6,18.9z M1.2,8.5c0-4,3.2-7.2,7.2-7.2s7.2,3.2,7.2,7.2 c0,2-0.8,3.8-2.1,5.1c0,0,0,0,0,0s0,0,0,0c-1.3,1.3-3.1,2.1-5.1,2.1C4.5,15.7,1.2,12.5,1.2,8.5z"></path>
                </svg>
            </button>
            <input onClick={handleToggle} className="w-full h-full bg-transparent outline-none pl-4 font-thin searchbar" type="search" name="search" id="search" placeholder="Search by Inspiration" />
        </form>
    )
}

export default SearchBar
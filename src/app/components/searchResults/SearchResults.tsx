import Link from 'next/link'
import Slider from '../slider/Slider'

interface SearchResultsProps {
    visible: boolean
}

const SearchResults: React.FC<SearchResultsProps> = ({visible}) => {
    return (
        <div className={`header-search__results transition-all duration-3000 ease-in z-10 ${visible ? 'visible opacity-1' : 'invisible opacity-0'}`}>
            <div className={`contents-tab transition-all duration-3000 ease-in ${visible ? 'visible opacity-1' : 'invisible opacity-0'}`}>
                <div className="contents-tab__items relative block">
                    <div className="header-search__content-results flex">
                        <div className="header-search__left">
                            <div className="header-search__row w-full pl-[36px] mb-[36px]">
                                <p className="uppercase mb-[10.5px]">Featured in awwwards</p>
                                <ul className="list-featured flex flex-wrap gap-2">
                                    <li>
                                        <figure className='block'>
                                            <Link href={"/"}>
                                                <img src="https://assets.awwwards.com/assets/redesign/images/header/search/featured/1.jpg" alt="" className='block w-full rounded' />
                                            </Link>
                                        </figure>
                                        <Link href={"/"} className='block mt-3 text-white'>Sites of the Day</Link>
                                    </li>
                                    <li>
                                        <figure className='block'>
                                            <Link href={"/"}>
                                                <img src="https://assets.awwwards.com/assets/redesign/images/header/search/featured/2.jpg" alt="" className='block w-full rounded' />
                                            </Link>
                                        </figure>
                                        <Link href={"/"} className='block mt-3 text-white'>Websites</Link>
                                    </li>
                                    <li>
                                        <figure className='block'>
                                            <Link href={"/"}>
                                                <img src="https://assets.awwwards.com/assets/redesign/images/header/search/featured/3.jpg" alt="" className='block w-full rounded' />
                                            </Link>
                                        </figure>
                                        <Link href={"/"} className='block mt-3 text-white'>Elements</Link>
                                    </li>
                                    <li>
                                        <figure className='block'>
                                            <Link href={"/"}>
                                                <img src="https://assets.awwwards.com/assets/redesign/images/header/search/featured/4.jpg" alt="" className='block w-full rounded' />
                                            </Link>
                                        </figure>
                                        <Link href={"/"} className='block mt-3 text-white'>Courses</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="header-search__row w-full pl-[36px]">
                                <p className="uppercase mb-[10.5px]">best tags</p>
                                <ul className="list-tags flex flex-wrap gap-2">
                                    <li>
                                        <Link href={"/"} className="button button--tag--x-small--dark">Amination</Link>
                                    </li>
                                    <li>
                                        <Link href={"/"} className="button button--tag--x-small--dark">Portfolio</Link>
                                    </li>
                                    <li>
                                        <Link href={"/"} className="button button--tag--x-small--dark">404 pages</Link>
                                    </li>
                                    <li>
                                        <Link href={"/"} className="button button--tag--x-small--dark">clean</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="header-search__right">
                            <p className="mb-[10.5px]">Coming soon</p>
                            <Slider />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResults
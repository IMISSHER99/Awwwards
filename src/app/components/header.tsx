import Link from 'next/link'
import SearchForm from './SearchForm';

interface HeaderProps {
    
}

const Header: React.FC<HeaderProps> = ({}) => (
    <header className="header relative">
        <div className="inner w-full">
            <div className="header-main flex items-center relative w-full h-[71px] text-sm">
                <div className="header-main__logo">
                    <Link href={"/"}>
                        <svg width="30" height="16" viewBox="0 0 30 16">
                            <path d="m18.4 0-2.803 10.855L12.951 0H9.34L6.693 10.855 3.892 0H0l5.012 15.812h3.425l2.708-10.228 2.709 10.228h3.425L22.29 0h-3.892ZM24.77 13.365c0 1.506 1.12 2.635 2.615 2.635C28.879 16 30 14.87 30 13.365c0-1.506-1.12-2.636-2.615-2.636s-2.615 1.13-2.615 2.636Z"></path>
                        </svg>
                    </Link>
                </div>
                <div className="header-search relative flex-1 ml-3">
                    <SearchForm />
                </div>
                <div className="header-main__right flex">
                    <div className="header-main__user flex">
                        <Link href={"/"} className='cursor-pointer'>Log in</Link>
                        <Link href={"/"} className='cursor-pointer'>Sign Up</Link>
                        <span className="header-main__ico">
                            <svg className="ico-svg" viewBox="0 0 20 20" width="20">
                                <path d="M18.5,13.5L15.7,17l-1.9-1.7l-1.4,1.5l3.4,3.2l4.1-5.2L18.5,13.5z"></path>
                                <path d="M14.2,11c-0.9-0.4-1.8-0.7-2.8-0.8c2.1-0.6,3.7-2.6,3.7-5C15.2,2.3,12.8,0,10,0C7.1,0,4.8,2.3,4.8,5.2 c0,2.3,1.6,4.3,3.7,5C3.7,10.9,0,15,0,20h2c0-4.4,3.6-8,8-8c1.3,0,2.6,0.3,3.6,0.9L14.2,11L14.2,11z M6.8,5.2C6.8,3.4,8.2,2,10,2 c1.7,0,3.2,1.4,3.2,3.2c0,1.7-1.4,3.2-3.2,3.2C8.2,8.3,6.8,6.9,6.8,5.2z"></path>
                            </svg>
                        </span>
                    </div>
                    <div className="header-main__bts flex">
                        <Link href={"/"} className="button button--rounded">Be pro</Link>
                        <Link href={"/"} className="button button--outline--rounded">Submit Website</Link>
                    </div>
                </div>
            </div>
        </div>
    </header>
)

export default Header;
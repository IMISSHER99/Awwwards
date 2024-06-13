import Link from "next/link"
import WithContainer from "../WithContainer"

export type MenuProps = {}

export const menuData = [
    {
        name: "Nominees",
        routeTo: "/"
    },
    {
        name: "Courses",
        routeTo: "/"
    },
    {
        name: "Collections",
        routeTo: "/"
    },
    {
        name: "Directory",
        routeTo: "/"
    },
    {
        name: "Market",
        routeTo: "/"
    }
]

const Menu:React.FC<MenuProps> = ({}) => {
    return (
        <div className="fixed w-screen bottom-8 h-[72px]">
            <WithContainer>
                <div className="flex items-center relative justify-center">
                    <div className="flex relative rounded-lg transition bg-black--opacity-8 max-w-[707px] p-1.5">
                        <div className="max-h-0 max-w-[707px] overflow-hidden"></div>
                        <div className="relative flex justify-center w-full">
                            <div className="flex justify-center items-center relative bg-black aspect-square rounded-lg">
                                <Link href={"/"}>
                                    <svg width={30} height={16} viewBox="0 0 30 16" fill="white">
                                        <path d="m18.4 0-2.803 10.855L12.951 0H9.34L6.693 10.855 3.892 0H0l5.012 15.812h3.425l2.708-10.228 2.709 10.228h3.425L22.29 0h-3.892ZM24.77 13.365c0 1.506 1.12 2.635 2.615 2.635C28.879 16 30 14.87 30 13.365c0-1.506-1.12-2.636-2.615-2.636s-2.615 1.13-2.615 2.636Z"></path>
                                    </svg>
                                </Link>
                            </div>
                            <div className="flex-1 ml-1.5">
                                <div className="relative w-full bg-black--v3 rounded-lg">
                                    <ul className="flex items-center p-1.5 space-x-1.5">
                                    {
                                            menuData.map(({name, routeTo}, index) => {
                                                return (
                                                    <li className="flex items-center h-full justify-center" key={index}>
                                                        <Link href={routeTo} className="flex items-center justify-center transition text-sm font-normal whitespace-nowrap border rounded-lg color-grey px-3">{ name }</Link>
                                                    </li>
                                                )
                                            })
                                        }
                                        
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="flex">
                                <Link href={"/"} className="flex items-center justify-center bg-color rounded-lg px-4 font-normal text-base">Visit Sotd.</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </WithContainer>
        </div>
    )
}

export default Menu
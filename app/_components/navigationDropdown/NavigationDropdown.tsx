import { BlogIcon, CollectionsIcon, TechnologiesIcon, TrendingIcon, UIElementsIcon, WebsitesIcon } from "@/app/_common/icons/Icons"
import Link from "next/link"
import { useState } from "react"

export const navigationData = [
    {
        name: "Trending",
        Icon: TrendingIcon,
        subLinks: [
            {
                name: "Portfolio Websites",
                count: 8657
            },
            {
                name: "Free Fonts",
                count: 288
            },
            {
                name: "Animated Websites",
                count: 10351
            },
            {
                name: "Sites of the Day",
                count: 6137
            },
            {
                name: "Scrolling",
                count: 5135
            },
            {
                name: "Portfolio Websites",
                count: 5071
            },
            {
                name: "One Page Design",
                count: 6223
            },
            {
                name: "E-commerce layouts",
                count: 5583
            },
            {
                name: "Architecture Websites",
                count: 2383
            },
            {
                name: "Photography Websites",
                count: 1027
            }
        ]
    },
    {
        name: "Websites",
        Icon: WebsitesIcon
    },
    {
        name: "Technologies",
        Icon: TechnologiesIcon
    },
    {
        name: "Collections",
        Icon: CollectionsIcon
    },
    {
        name: "UI Elements",
        Icon: UIElementsIcon
    },
    {
        name: "Blog",
        Icon: BlogIcon
    }
]

export type NavigationDropdownProps = {
    display: boolean
}

const NavigationDropdown:React.FC<NavigationDropdownProps> = ({ display }) => {

    const [header, setActiveHeader] = useState<string>(navigationData[0].name);

    const changeActiveHeader = (name: string) => {
        setActiveHeader(name)
    }

    const activeHeader = navigationData.find((item) => item.name === header)

    return (
        <div className={`w-full h-full ${display ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className="min-h-[450px] pt-0 pr-[424px] pb-[12px] pl-[57px]">
                <nav className="flex justify-between w-full h-full">
                    <ul>
                        {
                            navigationData.map(({ name, Icon }, index) => {
                                return (
                                    <li key={index} className={`${index===0 ? '' : 'mt-1'}`} onClick={() => changeActiveHeader(name)}>
                                        <Link href={"/"}>
                                            <span className={`flex font-normal items-center gap-3 bg-transparent transparent hover:bg-white h-[40px] min-w-[180px] px-4 rounded-lg ${activeHeader?.name === name ? 'bg-white' : 'bg-transparent'}`}>
                                                <Icon />
                                                { name }
                                            </span>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <ul className="flex justify-center items-between flex-1 flex-col">
                        {
                            activeHeader?.subLinks?.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <span className="flex items-center justify-between gap-3 bg-transparent transparent hover:bg-white h-[40px] min-w-[180px] px-4 rounded-lg">
                                            <p className="flex items-center font-light">{item.name}</p>
                                            <p className="flex items-center font-light">{item.count}</p>
                                        </span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
                
            </div>
        </div>
    )
}

export default NavigationDropdown
'use client'
import { getNavigationData } from "@/app/_actions/navigation"
import iconMap from "@/app/_common/icons/Icons"
import { NavigationData } from "@/app/_types/navigation.types"
import Link from "next/link"
import { useEffect, useState } from "react"


export type NavigationDropdownProps = {
    display: boolean
}

const NavigationDropdown:React.FC<NavigationDropdownProps> = ({ display }) => {

    
    const [navigationData, setNavigationData] = useState<NavigationData[]>([]);
    const [header, setActiveHeader] = useState<string>("");

    // setting the active header
    const changeActiveHeader = (name: string) => {
        setActiveHeader(name)
    }

    
    // Use effect which runs as soon as the component is mounted 
    useEffect(() => {
        // Navigation action to get the data from the database
        getNavigationData().then( response => {
            // Setting the response to the state
            setNavigationData(response);
            if (response.length > 0) {
                changeActiveHeader(response[0].name); // Set the first item as the active header
            }
        })
    }, [])

    // Fetching the active header
    const activeHeader = navigationData?.find((item) => item.name === header)

    return (
        <div className={`w-full h-full ${display ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className="min-h-[450px] pt-0 pr-[424px] pb-[12px] pl-[57px]">
                <nav className="flex justify-between w-full h-full gap-3">
                    {/* Navigation Left */}
                    <ul>
                        {
                            // Iteration over the data, displaying the name and icon
                            navigationData.map(({ name, svgIconName }, index) => {
                                return (
                                    <li key={index} className={`${index===0 ? '' : 'mt-1'}`} onClick={() => changeActiveHeader(name)}>
                                        <Link href={"#"}>
                                            <span className={`flex font-normal items-center gap-3 bg-transparent transparent hover:bg-white h-[40px] min-w-[180px] px-4 rounded-lg ${activeHeader?.name === name ? 'bg-white' : 'bg-transparent'}`}>
                                                {iconMap[svgIconName]}
                                                { name }
                                            </span>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {/* Navigation Right */}
                    <ul className="flex justify-center items-between flex-1 flex-col">
                        {
                            // Displaying the sublinks for the active header
                            activeHeader?.sublinks?.map((item, index) => {
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
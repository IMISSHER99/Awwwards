import Link from "next/link"

// List of navigations
const defaultNavigationLinks = [
    {
        routeTo: "/",
        name: "Explore",
        dropdown: true
    },
    {
        routeTo: "/",
        name: "Directory",
        dropdown: false
    },
    {
        routeTo: "/",
        name: "Academy",
        dropdown: false
    },
    {
        routeTo: "/",
        name: "Conferences",
        dropdown: false
    },
    {
        routeTo: "/",
        name: "Jobs",
        dropdown: false
    }
]

export type NavigationProps = {
    display: boolean,
    handleToggle?: () => void
}

const Navigation:React.FC<NavigationProps> = ({ display, handleToggle }) => {
    return (
        // Navigation Wrapper
        <nav className={`hidden xl:flex items-center justify-between ms-[60px] gap-5 transition ${display ? '!hidden' : ''}`}>
            {
                defaultNavigationLinks.map(({routeTo, name, dropdown}, index) => {
                    return (
                        // Navigation Links
                        <Link key={index} href={routeTo} className="flex items-center justify-between gap-2 text-base font-medium leading-8" onClick={dropdown ? handleToggle : undefined}>
                            {name}
                            {
                                dropdown && 
                                // Dropdown icon
                                <svg width="8" viewBox="0 0 20 20">
                                    <path d="M1.6,4.1c-0.4,0-0.9,0.2-1.2,0.5c-0.7,0.7-0.7,1.7,0,2.4l8.4,8.4c0.7,0.7,1.7,0.7,2.4,0L19.5,7 c0.7-0.7,0.7-1.7,0-2.4c-0.7-0.7-1.7-0.7-2.4,0L10,11.8L2.8,4.6C2.5,4.3,2.1,4.1,1.6,4.1z"></path>
                                </svg>
                            }
                        </Link>
                    )
                })
            }
        </nav>
    )
}

export default Navigation
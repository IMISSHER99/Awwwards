import { FilterData } from "@/app/_types/filter.types"
import Link from "next/link"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { useCallback, useEffect, useRef, useState } from "react"

export type DropdownProps = {
    filterData: FilterData[],
    filterName: string,
    isOpen: boolean,
    onToggle: () => void
}

const Dropdown: React.FC<DropdownProps> = ({ filterData, filterName, isOpen, onToggle }) => {
    const [height, setHeight] = useState<number | null>(null);
    const dropdownRef = useRef<HTMLUListElement>(null);
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        // Calculate the height when the dropdown opens
        if (isOpen) {
            const newHeight = dropdownRef.current?.scrollHeight ?? 0;
            setHeight(newHeight + 20);
        } else {
            // If closing, set the height to 0 after a short delay
            setTimeout(() => {
                setHeight(200);
            }, 50);
        }
    }, [isOpen]);

    // Get a new searchParams string by merging the current
    // searchParams with a provided key/value pair
    const createQueryString = useCallback(
        (name: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString())
        params.append(name, value)
    
        return params.toString()
        },
        [searchParams]
    )

    return (
        <>
            <button className="relative flex items-center justify-between min-w-[48px] max-w-[220px] ps-6 pe-6 gap-1.5 bg-white rounded-lg" onClick={onToggle}>
                <span className="flex items-center justify-between whitespace-nowrap font-normal text-sm">{filterName}</span>
                <svg viewBox="0 0 20 20" width={8} className={`transition ${isOpen ? 'rotate-180' : ''}`}>
                    <path d="M1.6,4.1c-0.4,0-0.9,0.2-1.2,0.5c-0.7,0.7-0.7,1.7,0,2.4l8.4,8.4c0.7,0.7,1.7,0.7,2.4,0L19.5,7 c0.7-0.7,0.7-1.7,0-2.4c-0.7-0.7-1.7-0.7-2.4,0L10,11.8L2.8,4.6C2.5,4.3,2.1,4.1,1.6,4.1z"></path>
                </svg>
                <div className={`absolute transition-all ease-in-out duration-300 top-[54px] left-0 w-[280px] bg-white rounded-lg p-2 box-shadow overflow-hidden pb-3`} style={{ height: isOpen ? `${height}px` : '0', opacity: isOpen ? 1 : 0 }}>
                    <ul ref={dropdownRef} className={`overflow-hidden ${height === 0 ? 'invisible opacity-0' : 'visible opacity-100'}`}>
                        {
                            filterData.map(({name, routeTo}, index) => {
                                return (
                                    <li className="h-fit" key={index}>
                                        <Link href={
                                                pathname + '?' + createQueryString(filterName, routeTo)
                                        } className="flex items-center h-[40px] px-[30px] py-2 relative transition radio rounded-lg">
                                            <span className="text-sm">{name}</span>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </button>
            
        </>
    )
}

export default Dropdown;

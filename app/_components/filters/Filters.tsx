'use client'
import Dropdown from "@/app/_common/dropdown/Dropdown"
import WithContainer from "../WithContainer"
import { useEffect, useState } from "react"
import { getAwardsFilterData } from "@/app/_actions/filters"
import { Filters } from "@/app/_types/filter.types"

export type FilterProps = {}

const Filter:React.FC<FilterProps> = ({}) => {

    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (dropdownName: string) => {
        setOpenDropdown(prevState => ( prevState === dropdownName ? null : dropdownName))
    }

    const [filters, setFilters] = useState<Filters>({
        "awards": [],
        "category": []
    });

    // Use effect which runs as soon as the component is mounted 
    useEffect(() => {
        // Navigation action to get the data from the database
        getAwardsFilterData().then(response => {
            // Setting the response to the state
            setFilters(previousFilter => ({
                ...previousFilter,
                awards: response
            }))
        })
    }, [])


    return (
        <div className="w-full mt-[86px] h-[54px]">
            <div className="flex items-center justify-between bg-grey min-h-[54px] rounded-lg p-1.5">
                <div className="flex items-center gap-1.5">
                    <Dropdown filterData={filters.awards} name="Awards" isOpen={openDropdown === 'Awards'} onToggle={() => toggleDropdown('Awards')}/>
                    <Dropdown filterData={filters.category} name="Category" isOpen={openDropdown === 'Category'}  onToggle={() => toggleDropdown('Category')} />
                </div>
                <div className="flex items-center gap-3">
                </div>
            </div>
        </div>
    )
}
export default Filter
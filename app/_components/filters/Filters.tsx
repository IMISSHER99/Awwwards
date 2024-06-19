'use client'
import Dropdown from "@/app/_common/dropdown/Dropdown"
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
        "category": [],
        "tag": [],
        "technology": [],
        "font": [],
        "color": [],
        "country": []
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
        <div className="w-full mt-[76px] h-[54px]">
            <div className="flex items-center justify-between bg-grey min-h-[54px] rounded-lg p-1.5">
                <div className="flex items-center gap-1.5">
                    <Dropdown filterData={filters.awards} filterName="Awards" isOpen={openDropdown === 'Awards'} onToggle={() => toggleDropdown('Awards')}/>
                    <Dropdown filterData={filters.category} filterName="Category" isOpen={openDropdown === 'Category'}  onToggle={() => toggleDropdown('Category')} />
                    <Dropdown filterData={filters.tag} filterName="Tag" isOpen={openDropdown === 'Tag'}  onToggle={() => toggleDropdown('Tag')} />
                    <Dropdown filterData={filters.technology} filterName="Technology" isOpen={openDropdown === 'Technology'}  onToggle={() => toggleDropdown('Technology')} />
                    <Dropdown filterData={filters.country} filterName="Country" isOpen={openDropdown === 'Country'}  onToggle={() => toggleDropdown('Country')} />
                    <Dropdown filterData={filters.font} filterName="Font" isOpen={openDropdown === 'Font'}  onToggle={() => toggleDropdown('Font')} />
                    <Dropdown filterData={filters.color} filterName="Color" isOpen={openDropdown === 'Color'}  onToggle={() => toggleDropdown('Color')} />
                </div>
                <div className="flex items-center gap-3">
                </div>
            </div>
        </div>
    )
}
export default Filter
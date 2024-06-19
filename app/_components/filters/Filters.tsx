'use client'
import Dropdown from "@/app/_common/dropdown/Dropdown"
import { useEffect, useState } from "react"
import { getAwardsFilterData } from "@/app/_actions/filters"
import { Filters } from "@/app/_types/filter.types"
import Link from "next/link"

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
                    <ul>
                        <li className="h-fit">
                            <Link href={"/websites/test"} className="flex items-center h-[40px] px-[30px] bg-white py-2 relative transition rounded-lg">
                                <span className="text-sm">Reset Filters</span>
                                <svg className="ml-2" width="15" height="16" viewBox="0 0 15 16">
                                    <path d="M9.54947 0H4.63158C2.08842 0 0 2.07158 0 4.63158V8.67368C0 9.04421 0.303158 9.34737 0.673684 9.34737C1.04421 9.34737 1.34737 9.04421 1.34737 8.67368V4.63158C1.34737 2.82947 2.81263 1.36421 4.61474 1.36421H9.51579C11.3516 1.36421 12.8168 2.82947 12.8168 4.63158V8.16842C12.8168 9.97053 11.3516 11.4358 9.54947 11.4358H3.46947L5.50737 9.39789C5.77684 9.12842 5.77684 8.70737 5.50737 8.43789C5.23789 8.16842 4.81684 8.16842 4.54737 8.43789L1.34737 11.6379C1.07789 11.9074 1.07789 12.3284 1.34737 12.5979L4.54737 15.7979C4.68211 15.9326 4.85053 16 5.03579 16C5.20421 16 5.38947 15.9326 5.52421 15.7979C5.79368 15.5284 5.79368 15.1074 5.52421 14.8379L3.46947 12.8H9.54947C12.1095 12.8 14.1811 10.7284 14.1811 8.16842V4.63158C14.1811 2.07158 12.0926 0 9.54947 0Z"></path>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Filter
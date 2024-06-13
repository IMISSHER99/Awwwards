import Dropdown from "@/app/_common/dropdown/Dropdown"
import WithContainer from "../WithContainer"

export type FilterProps = {}

const Filter:React.FC<FilterProps> = ({}) => {
    return (
        <div className="w-full mt-[76px] h-[54px]">
            <WithContainer>
                <div className="flex items-center justify-between bg-grey min-h-[54px] rounded-lg p-1.5">
                    <div className="flex items-center gap-3">
                        <Dropdown />
                    </div>
                    <div className="flex items-center gap-3">
                    </div>
                </div>
            </WithContainer>
        </div>
    )
}
export default Filter
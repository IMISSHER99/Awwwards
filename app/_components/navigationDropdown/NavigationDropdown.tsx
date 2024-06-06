export type NavigationDropdownProps = {
    display: boolean
}

const NavigationDropdown:React.FC<NavigationDropdownProps> = ({ display }) => {
    return (
        <div className={`w-full min-h-[450px] bg-grey rounded-lg transition opacity-0 ${display ? 'flex opacity-1': ''}`}>

        </div>
    )
}

export default NavigationDropdown
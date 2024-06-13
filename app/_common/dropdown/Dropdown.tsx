export type DropdownProps = {}

const Dropdown:React.FC<DropdownProps> = ({}) => {
    return (
        <>
            <button className="flex items-center justify-between min-w-[48px] max-w-[220px] ps-6 pe-6 gap-1.5 bg-white rounded-lg">
                <span className="flex items-center justify-between whitespace-nowrap font-normal text-base">Awards</span>
                <svg viewBox="0 0 20 20" width={8}>
                    <path d="M1.6,4.1c-0.4,0-0.9,0.2-1.2,0.5c-0.7,0.7-0.7,1.7,0,2.4l8.4,8.4c0.7,0.7,1.7,0.7,2.4,0L19.5,7 c0.7-0.7,0.7-1.7,0-2.4c-0.7-0.7-1.7-0.7-2.4,0L10,11.8L2.8,4.6C2.5,4.3,2.1,4.1,1.6,4.1z"></path>
                </svg>
            </button>
        </>
    )
}

export default Dropdown
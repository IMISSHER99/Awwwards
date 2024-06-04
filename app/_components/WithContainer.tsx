import { ReactNode } from "react"

export type ContainerProps = {
    children: ReactNode
}

const WithContainer:React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="inner">
            {children}
        </div>
    )
}

export default WithContainer
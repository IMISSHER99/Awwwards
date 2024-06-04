import WithContainer from "@/app/_components/WithContainer"
import Filter from "../../_components/filters/Filters"

export type WebsiteProps = {}

const Website:React.FC<WebsiteProps> = ({}) => {
    return (
        <WithContainer>
            <Filter />
        </WithContainer>
    )
}

export default Website
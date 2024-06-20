'use client'
import WithContainer from "@/app/_components/WithContainer"
import Filter from "../../_components/filters/Filters"
import { Suspense } from "react"

export type WebsiteProps = {}

const Website:React.FC<WebsiteProps> = ({}) => {
    return (
        <Suspense>
            <WithContainer>
                <Filter />
            </WithContainer>
        </Suspense>
    )
}

export default Website
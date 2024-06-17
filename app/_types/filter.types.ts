export type Filters = {
    "awards": FilterData[],
    "category": FilterData[]
}

export type FilterData = {
    name: string,
    routeTo: string
}
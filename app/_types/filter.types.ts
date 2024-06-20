export type Filters = {
    "awards": FilterData[],
    "category": FilterData[],
    "tag": FilterData[],
    "technology": FilterData[],
    "country": FilterData[],
    "font": FilterData[],
    "color": FilterData[]
}

export type FilterData = {
    name: string,
    routeTo: string
}
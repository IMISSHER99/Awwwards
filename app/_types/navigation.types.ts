export type NavigationData = {
    name: string,
    svgIconName: string,
    sublinks: SubLinks[]

}

export type SubLinks = {
    name: string, 
    count: number
}
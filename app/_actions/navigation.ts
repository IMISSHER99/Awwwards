'use server'
import { db } from "../_drizzle/connection";

export const getNavigationData = async () => {

    const navigationData = await db.query.links.findMany({
        columns: {name: true, svgIconName: true},
        with: {
            sublinks: {
                columns: {
                    name: true,
                    count: true
                }
            }
        }
    })
    return navigationData;
}
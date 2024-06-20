'use server'
import { asc } from "drizzle-orm";
import { db } from "../_drizzle/connection";
import { awards } from "../_drizzle/schema";

export const getAwardsFilterData = async () => {

    const awardsFilters = await db.query.awards.findMany({
        columns: {name: true, routeTo: true},
        orderBy: [asc(awards.id)]
    })
    return awardsFilters;
}
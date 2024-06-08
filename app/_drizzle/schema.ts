import { relations } from "drizzle-orm";
import { integer, pgSchema, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const schema = pgSchema("awwwards_dev")

export const links = schema.table("links", {
    id: serial("id").primaryKey(),
    name: varchar("name").unique().notNull(),
    routeTo: varchar("route_to").notNull(),
    description: text("description"),
    createdAt: timestamp("created_at", { precision: 6, withTimezone: true}).defaultNow(),
    updatedAt: timestamp("updated_at", { precision: 6, withTimezone: true}).defaultNow(),
    svgIconName: varchar("svg_icon_name").notNull()
});

export const subLinks = schema.table("sublinks", {
    id: serial("id").primaryKey(),
    name: varchar("name").unique().notNull(),
    count: integer("count").notNull(),
    linkId: integer("link_id").references(() => links.id, {onDelete: 'cascade'}).notNull(),
    createdAt: timestamp("created_at", { precision: 6, withTimezone: true}).defaultNow(),
    updatedAt: timestamp("updated_at", { precision: 6, withTimezone: true}).defaultNow(),
});


export const linkRelations = relations(links, ({ many }) => ({
    sublinks: many(subLinks)
}));

export const subLinkRelations = relations(subLinks, ({ one }) => ({
    links: one(links, {
        fields: [subLinks.linkId],
        references: [links.id]
    })
}))

export type Links = typeof links.$inferSelect
export type SubLinks = typeof subLinks.$inferSelect

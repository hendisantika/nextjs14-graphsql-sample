import {integer, sqliteTable, text} from "drizzle-orm/sqlite-core";

export const todos = sqliteTable("todos", {
    id: integer("id").primaryKey(),
    title: text("username").notNull(),
    createdAt: integer("createdAt").notNull(),
});

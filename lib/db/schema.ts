import {
    pgTable,
    serial,
    varchar,
    text,
    timestamp,
    integer,
    decimal,
  } from 'drizzle-orm/pg-core';
  import { relations } from 'drizzle-orm';
  
  export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    fullName: varchar('full_name', { length: 100 }),
    email: varchar('email', { length: 255 }).notNull().unique(),
    passwordHash: text('password_hash').notNull(),
    
  });
  
  
  
 
  
  
  
  export const categories = pgTable('categories', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    description: text('description'),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
  });
  
  export const inventoryItems = pgTable('inventory_items', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    description: text('description'),
    categoryId: integer('category_id').references(() => categories.id),
    imageUrl: text('image_url'),
    price: decimal('price', { precision: 10, scale: 2 }).notNull(),
    stock: integer('stock').notNull().default(0),
    unit: text('unit').notNull(), // e.g., kg, piece, liter
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
  });
  
  
  
  
  export type User = typeof users.$inferSelect;
  export type NewUser = typeof users.$inferInsert;

  
 
  
  export enum ActivityType {
    SIGN_UP = 'SIGN_UP',
    SIGN_IN = 'SIGN_IN',
    SIGN_OUT = 'SIGN_OUT',
    UPDATE_PASSWORD = 'UPDATE_PASSWORD',
    DELETE_ACCOUNT = 'DELETE_ACCOUNT',
    UPDATE_ACCOUNT = 'UPDATE_ACCOUNT',
    CREATE_TEAM = 'CREATE_TEAM',
    REMOVE_TEAM_MEMBER = 'REMOVE_TEAM_MEMBER',
    INVITE_TEAM_MEMBER = 'INVITE_TEAM_MEMBER',
    ACCEPT_INVITATION = 'ACCEPT_INVITATION',
  }
  
  export type Category = typeof categories.$inferSelect;
  export type NewCategory = typeof categories.$inferInsert;
  export type InventoryItem = typeof inventoryItems.$inferSelect;
  export type NewInventoryItem = typeof inventoryItems.$inferInsert;
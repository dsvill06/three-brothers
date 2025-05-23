import { desc, and, eq, isNull } from 'drizzle-orm';
import { db } from './drizzle';
import {  users } from './schema';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth/session';
import { inventoryItems, categories } from '@/lib/db/schema';

export async function getUser() {
  const sessionCookie = (await cookies()).get('session');
  if (!sessionCookie || !sessionCookie.value) {
    return null;
  }

  const sessionData = await verifyToken(sessionCookie.value);
  if (
    !sessionData ||
    !sessionData.user ||
    typeof sessionData.user.id !== 'number'
  ) {
    return null;
  }

  if (new Date(sessionData.expires) < new Date()) {
    return null;
  }

  const user = await db
    .select()
    .from(users)
    .where(and(eq(users.id, sessionData.user.id)))
    .limit(1);

  if (user.length === 0) {
    return null;
  }
  console.log(user[0])
  return user[0];
}

export async function getProducts() {
  return db.select().from(inventoryItems);
}

export async function getCategories() {
  return db.select().from(categories);
}

export async function getProduct(id: number) {
  const [product] = await db
    .select()
    .from(inventoryItems)
    .where(eq(inventoryItems.id, id));
  return product;
}

export async function createProduct(data: any) {
  const [product] = await db
    .insert(inventoryItems)
    .values(data)
    .returning();
  return product;
}

export async function updateProduct(id: number, data: any) {
  const [product] = await db
    .update(inventoryItems)
    .set(data)
    .where(eq(inventoryItems.id, id))
    .returning();
  return product;
}

export async function deleteProduct(id: number) {
  const [product] = await db
    .delete(inventoryItems)
    .where(eq(inventoryItems.id, id))
    .returning();
  return product;
}





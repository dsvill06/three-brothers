'use server';

import { z } from 'zod';
import { eq } from 'drizzle-orm';
import { db } from '@/lib/db/drizzle';
import { inventoryItems, type NewInventoryItem } from '@/lib/db/schema';
import { validatedActionWithUser } from '@/lib/auth/middleware';

const addInventoryItemSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
  categoryId: z.string().transform((val) => parseInt(val)),
  price: z.string().transform((val) => val),
  stock: z.string().transform((val) => parseInt(val)),
  unit: z.string().min(1, 'Unit is required'),
});

export const addInventoryItem = validatedActionWithUser(
  addInventoryItemSchema,
  async (data, _, user) => {
    const newItem: NewInventoryItem = {
      name: data.name,
      description: data.description || null,
      categoryId: data.categoryId,
      price: data.price,
      stock: data.stock,
      unit: data.unit,
    };

    try {
      await db.insert(inventoryItems).values(newItem);
      return { success: 'Item added successfully' };
    } catch (error) {
      console.error('Error adding inventory item:', error);
      return { error: 'Failed to add item. Please try again.' };
    }
  }
);

export const getInventoryItems = async (categoryId?: number) => {
  try {
    const query = db
      .select()
      .from(inventoryItems)
      .orderBy(inventoryItems.name);

    if (categoryId) {
      query.where(eq(inventoryItems.categoryId, categoryId));
    }

    const items = await query;
    return { items };
  } catch (error) {
    console.error('Error fetching inventory items:', error);
    return { error: 'Failed to fetch items. Please try again.' };
  }
}; 
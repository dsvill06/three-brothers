'use server';

import { eq } from 'drizzle-orm';
import { db } from '@/lib/db/drizzle';
import { inventoryItems } from '@/lib/db/schema';

export async function getStoreItems(categoryId?: string) {
  try {
    const query = db
      .select()
      .from(inventoryItems)
      .orderBy(inventoryItems.name);

    if (categoryId) {
      query.where(eq(inventoryItems.categoryId, parseInt(categoryId)));
    }

    const items = await query;
    return { items };
  } catch (error) {
    console.error('Error fetching store items:', error);
    return { error: 'Failed to fetch items. Please try again.' };
  }
} 
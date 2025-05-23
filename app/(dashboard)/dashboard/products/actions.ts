'use server'

import { db } from '@/lib/db/drizzle'
import { inventoryItems } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

export async function createProduct(data: {
  name: string
  description: string
  price: string
  categoryId: number
  stock: number
  unit: string
  imageUrl?: string
}) {
  try {
    const result = await db.insert(inventoryItems).values([data]).returning()
    return { success: true, data: result[0] }
  } catch (error) {
    return { success: false, error: 'Failed to create product' }
  }
}

export async function updateProduct(
  id: number,
  data: {
    name: string
    description: string
    price: string
    categoryId: number
    stock: number
    unit: string
    imageUrl?: string
  }
) {
  try {
    const result = await db
      .update(inventoryItems)
      .set(data)
      .where(eq(inventoryItems.id, id))
      .returning()
    return { success: true, data: result[0] }
  } catch (error) {
    return { success: false, error: 'Failed to update product' }
  }
} 
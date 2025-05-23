export const runtime = 'nodejs';
import { NextResponse } from 'next/server';
import { db } from '@/lib/db/drizzle';
import { inventoryItems } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(
  request: Request,
  context: {
    params: { id: string };
  }
) {
  try {
    const { params } = context;
    const [product] = await db
      .select()
      .from(inventoryItems)
      .where(eq(inventoryItems.id, parseInt(params.id)));
    
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json();
    const [product] = await db
      .update(inventoryItems)
      .set(data)
      .where(eq(inventoryItems.id, parseInt(params.id)))
      .returning();

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const [product] = await db
      .delete(inventoryItems)
      .where(eq(inventoryItems.id, parseInt(params.id)))
      .returning();

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json(
      { error: 'Failed to delete product' },
      { status: 500 }
    );
  }
} 
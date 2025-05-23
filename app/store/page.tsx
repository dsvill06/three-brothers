'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search } from 'lucide-react';
import { getStoreItems } from './actions';
import type { InventoryItem } from '@/lib/db/schema';

const categories = [
  { id: 1, name: 'Meat & Poultry' },
  { id: 2, name: 'Dairy & Eggs' },
  { id: 3, name: 'Produce' },
  { id: 4, name: 'Bakery' },
  { id: 5, name: 'Frozen Foods' },
  { id: 6, name: 'Canned Goods' },
  { id: 7, name: 'Snacks & Beverages' },
  { id: 8, name: 'Household & Cleaning' },
];

export default function StorePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchItems() {
      try {
        setLoading(true);
        const result = await getStoreItems(selectedCategory || undefined);
        if ('error' in result) {
          setError(result.error || 'An error occurred');
        } else {
          setItems(result.items);
        }
      } catch (err) {
        setError('Failed to fetch items. Please try again.');
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, [selectedCategory]);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Store</h1>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
          </div>
         
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Loading items...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500">{error}</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-2">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">
                      ${Number(item.price).toFixed(2)}/{item.unit}
                    </span>
                    <span className="text-sm text-gray-500">
                      {item.stock} in stock
                    </span>
                  </div>
            
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {!loading && !error && filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No items found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
} 
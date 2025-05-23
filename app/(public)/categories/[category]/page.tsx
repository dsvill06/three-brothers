'use client';

import { useProducts } from '@/app/context/ProductsContext';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function CategoryPage() {
  const { category } = useParams();
  const { products, categories, isLoadingProducts, isLoadingCategories } = useProducts();

  if (isLoadingProducts || isLoadingCategories) {
    return <CategorySkeleton />;
  }

  const categoryId = categories?.find(c => c.name.toLowerCase() === category)?.id;
  console.log('categoryId', categoryId);
  console.log('category', category);
  console.log('products', products);
  console.log('image', products?.[0]?.imageUrl);
  const categoryProducts = products?.filter(p => p.categoryId == categoryId);

  if (!categoryProducts?.length) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 capitalize">{category}</h1>
        <p>No products found in this category.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 mt-40 h-screen">
      <h1 className="text-2xl font-bold mb-6 capitalize">{category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categoryProducts.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-48">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-500 mb-2">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold">${product.price}</span>
                <span className="text-sm text-gray-500">
                  {product.stock} {product.unit} in stock
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function CategorySkeleton() {
  return (
    <div className="container mx-auto p-6">
      <Skeleton className="h-8 w-48 mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-6 w-3/4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <div className="flex justify-between items-center">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-24" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 
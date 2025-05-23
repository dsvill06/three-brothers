import Image from 'next/image';

interface Product {
  name: string;
  price: string;
  image: string;
}

const featuredProducts: Product[] = [
  { name: 'Organic Bananas', price: '$1.99/lb', image: '/images/bananas.jpg' },
  { name: 'Whole Milk', price: '$3.49', image: '/images/milk.jpg' },
  { name: 'Fresh Bread', price: '$4.99', image: '/images/bread.jpg' },
  { name: 'Ground Beef', price: '$5.99/lb', image: '/images/beef.jpg' },
];

export function FeaturedProductsSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-green-600 font-bold">{product.price}</p>
                <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
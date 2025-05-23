'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ShoppingCart, ShoppingCartIcon } from 'lucide-react';

interface Category {
  name: string;
  image: string;
  href: string;
  description: string;
}

const categories: Category[] = [
  { 
    name: 'Fresh Produce', 
    image: '/images/produce.jpg', 
    href: '/categories/produce',
    description: 'Farm-fresh fruits and vegetables'
  },
  { 
    name: 'Dairy & Eggs', 
    image: '/images/dairy.jpg', 
    href: '/categories/dairy',
    description: 'Fresh dairy products and farm eggs'
  },
  { 
    name: 'Meat & Seafood', 
    image: '/images/meat.jpg', 
    href: '/categories/meat',
    description: 'Premium cuts and fresh seafood'
  },
  { 
    name: 'Bakery', 
    image: '/images/bakery.jpg', 
    href: '/categories/bakery',
    description: 'Artisanal breads and pastries'
  },
  { 
    name: 'Pantry', 
    image: '/images/pantry.jpg', 
    href: '/categories/pantry',
    description: 'Essential dry goods and staples'
  },
  { 
    name: 'Beverages', 
    image: '/images/beverages.jpg', 
    href: '/categories/beverages',
    description: 'Refreshing drinks and juices'
  },
];

export function CategoriesSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl text-secondary font-bold text-center mb-12 flex flex-row gap-5 place-items-center justify-self-center">
        <ShoppingCartIcon className='w-10 h-10'/>

          Encuentra Nuestros Departamentos
          </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link 
            key={category.name}
            href={category.href}
            className="group relative h-64 rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 z-10" />
            <div className="relative h-full">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4">
              <motion.h3 
                initial={{ y: 0 }}
                animate={{ y: 0 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                className="text-white text-2xl font-bold mb-2 group-hover:-translate-y-2 transition-transform duration-300"
              >
                {category.name}
              </motion.h3>
              <motion.p 
                className="text-white text-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
              >
                {category.description}
              </motion.p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
} 
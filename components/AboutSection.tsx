'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { title } from "process";

const info = {
  title: "Interfood 3 Hermanos",
  description:
    "Interfood 3 Hermanos is a family-owned supermarket dedicated to providing high-quality products and exceptional service to our community. Our mission is to be the most trusted and preferred supermarket in our community, known for our commitment to quality, service, and community involvement.",
  mission: "Ofrecer a nuestras comunidades productos auténticos de la cultura mexicana con calidad, frescura y un servicio cálido, creando un espacio donde nuestras tradiciones se sientan como en casa.",
  vision: "Ser el supermercado mexicano líder en los Estados Unidos, reconocido por preservar nuestras raíces, enriquecer la experiencia multicultural y expandir el acceso a productos hispanos en todo el país.",
}

export function AboutSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950 place-items-center">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Story
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl dark:text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                alias repellendus perferendis earum facilis est soluta
                consequatur placeat hic aliquid exercitationem, ex molestias
                nam veniam distinctio maxime culpa magnam autem.
              </p>
              <p className="max-w-[600px] text-gray-600 dark:text-gray-400 leading-relaxed">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolore
                 quas placeat expedita aliquam rerum tempore amet, sequi ipsa ad quam,
                 adipisci exercitationem nihil, sapiente laborum minus doloribus
                 consequuntur sed. Quo repudiandae nihil quas voluptates, aut beatae
                 reiciendis aliquid perspiciatis quae explicabo inventore temporibus laborum,
                 nostrum omnis quos excepturi dolorum reprehenderit vel labore eaque
                 libero perfrendis? Qui illo numquam beatae?
              </p>
            </div>
            
             <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                     src="/images/image_1.jpg"
                     alt="Image 1"
                     fill
                     className="object-cover"
                   />
                </div>
                 <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                     src="/images/image_3.jpg"
                     alt="Image 2"
                     fill
                     className="object-cover"
                   />
                </div>
             </div>
          </div>
          <div className="grid gap-4">
             <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
               <Image
                 src="/images/image_4.jpg"
                 alt="Top Right Image"
                 fill
                 className="object-cover"
                />
             </div>
             <div className="grid gap-6 md:grid-cols-2">
               <div className="space-y-2">
                 <h3 className="text-xl font-bold">Nuestra Misión</h3>
                 <p className="text-gray-600 dark:text-gray-400">
                  {info.mission}
                 </p>
               </div>
               <div className="space-y-2">
                 <h3 className="text-xl font-bold">Nuestra Visión</h3>
                 <p className="text-gray-600 dark:text-gray-400">
                  {info.vision}
                 </p>
               </div>
             </div>
          </div>
        </div>
        
      </div>
    </section>
  );
} 
import { HeroSection } from '@/components/HeroSection';
import { CategoriesSection } from '@/components/CategoriesSection';
import { FeaturedProductsSection } from '@/components/FeaturedProductsSection';
import { SpecialOffersSection } from '@/components/SpecialOffersSection';
import { SupermarketSection } from '@/components/SupermarketSection';
import { AboutSection } from '@/components/AboutSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      <CategoriesSection />
      <AboutSection/>
      <FeaturedProductsSection />
      <SupermarketSection />
      <SpecialOffersSection />
    </main>
  );
} 
import { Gallery4 } from "./blocks/gallery4";

export function SpecialOffersSection() {
  const specialOffers = [
    { 
      id: "1",
      title: "Weekly Deals",
      description: "Check out our latest weekly specials",
      image: "/images/special-offers/weekly.jpg",
      href: "/weekly-deals"
    },
    { 
      id: "2",
      title: "Member Specials",
      description: "Exclusive deals for our members",
      image: "/images/special-offers/member.jpg",
      href: "/member-specials"
    },
    { 
      id: "3",
      title: "Seasonal Sale",
      description: "Seasonal products at great prices",
      image: "/images/special-offers/seasonal.jpg",
      href: "/seasonal-sale"
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <Gallery4 items={specialOffers}/>
      <div className="bg-green-600 text-white rounded-2xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Nuestras Ofertas</h2>
          <p className="text-lg mb-8">Sign up for our newsletter to receive exclusive deals and updates</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-gray-900"
            />
            <button className="bg-white text-green-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 
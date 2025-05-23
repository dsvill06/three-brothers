import { MapPin, Clock, Phone, Globe } from 'lucide-react';

interface SupermarketInfo {
  name: string;
  address: string;
  openingHours: string;
  phone: string;
  website?: string;
  description?: string;
}

const supermarkets: SupermarketInfo[] = [
  {
    name: "Interfood 3 Hermanos",
    address: "123 Main Street, City, State 12345",
    openingHours: "Mon-Sun: 7:00 AM - 10:00 PM",
    phone: "(555) 123-4567",
    website: "https://threebrothersmarket.com",
    description: "Your local family-owned supermarket offering fresh produce, quality meats, and everyday essentials."
  },
  // Add more supermarkets as needed
];

export function SupermarketSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Supermarkets
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Find your nearest Three Brothers Market location
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {supermarkets.map((supermarket, index) => (
            <SupermarketCard key={index} {...supermarket} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SupermarketCard({
  name,
  address,
  openingHours,
  phone,
  website,
  description
}: SupermarketInfo) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{name}</h3>
        
        {description && (
          <p className="text-gray-600 mb-4">{description}</p>
        )}
        
        <div className="space-y-3">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-orange-500 mt-1 mr-3" />
            <span className="text-gray-600">{address}</span>
          </div>
          
          <div className="flex items-start">
            <Clock className="h-5 w-5 text-orange-500 mt-1 mr-3" />
            <span className="text-gray-600">{openingHours}</span>
          </div>
          
          <div className="flex items-start">
            <Phone className="h-5 w-5 text-orange-500 mt-1 mr-3" />
            <a href={`tel:${phone}`} className="text-gray-600 hover:text-orange-500">
              {phone}
            </a>
          </div>
          
          {website && (
            <div className="flex items-start">
              <Globe className="h-5 w-5 text-orange-500 mt-1 mr-3" />
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500"
              >
                Visit Website
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 
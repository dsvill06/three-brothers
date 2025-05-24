interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer2 = ({
  logo = {
    src: "/images/hermanos_logo.png",
    alt: "Three Brothers Supermarket",
    url: "/",
  },
  tagline = "4020 Capital Blvd, Raleigh, NC 27604",
  menuItems = [
    {
      title: "Shop",
      links: [
        { text: "Fresh Produce", url: "/shop/produce" },
        { text: "Meat & Seafood", url: "/shop/meat" },
        { text: "Dairy & Eggs", url: "/shop/dairy" },
        { text: "Bakery", url: "/shop/bakery" },
        { text: "Frozen Foods", url: "/shop/frozen" },
        { text: "International Foods", url: "/shop/international" },
      ],
    },
    {
      title: "Services",
      links: [
        { text: "Weekly Ad", url: "/weekly-ad" },
        { text: "Catering", url: "/catering" },
        { text: "Gift Cards", url: "/gift-cards" },
        { text: "Delivery", url: "/delivery" },
        { text: "Curbside Pickup", url: "/pickup" },
        { text: "Party Platters", url: "/party-platters" },
      ],
    },
    {
      title: "About Us",
      links: [
        { text: "Our Story", url: "/about" },
        { text: "Locations", url: "/locations" },
        { text: "Careers", url: "/careers" },
        { text: "Community", url: "/community" },
        { text: "Contact Us", url: "/contact" },
        { text: "FAQ", url: "/faq" },
      ],
    },
    {
      title: "Connect",
      links: [
        { text: "Facebook", url: "https://facebook.com" },
        { text: "Instagram", url: "https://instagram.com" },
        { text: "Twitter", url: "https://twitter.com" },
        { text: "Newsletter", url: "/newsletter" },
        { text: "Customer Service", url: "/customer-service" },
        { text: "Feedback", url: "/feedback" },
      ],
    },
  ],
  copyright = "© 2024 Three Brothers Supermarket. All rights reserved.",
  bottomLinks = [
    { text: "Privacy Policy", url: "/privacy" },
    { text: "Terms of Service", url: "/terms" },
    { text: "Accessibility", url: "/accessibility" },
    { text: "SNAP/EBT", url: "/snap-ebt" },
  ],
}: Footer2Props) => {
  return (
    <section className="py-32 justify-center place-items-center bg-background  ">
      <div className="container">
        <footer className="justify-center place-items-center">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0 " >
              <div className="flex items-center gap-2 place-self-center md:place-self-start lg:justify-start">
                <a href={logo.url}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-14 bg-primary p-2 rounded-lg"
                  />
                </a>
              </div>
              <p className="mt-4 font-bold">{tagline}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Open Daily: 7:00 AM - 10:00 PM
              </p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer2 };

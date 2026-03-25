import Link from "next/link";
import { MapPin } from "lucide-react";
import citiesData from "@/data/cities.json";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "46 Communities We Serve Across Bucks, Montgomery & Lehigh Counties",
  description:
    "Find your town and see what we offer in your area. We serve 46 communities across three counties — and we're probably right around the corner.",
  keywords: [
    "remodeling service areas PA",
    "Bucks County remodeling cities",
    "Montgomery County contractor",
    "Lehigh County home renovation",
    "local remodeling contractor near me",
  ],
  canonical: "/cities",
});

interface City {
  id: string;
  name: string;
  state: string;
  county: string;
  description: string;
  services: string[];
  landmarks: string[];
}

function groupByCounty(cities: City[]): Record<string, City[]> {
  return cities.reduce<Record<string, City[]>>((groups, city) => {
    if (!groups[city.county]) {
      groups[city.county] = [];
    }
    groups[city.county].push(city);
    return groups;
  }, {});
}

export default function CitiesPage() {
  const grouped = groupByCounty(citiesData.cities as City[]);
  const counties = Object.keys(grouped).sort();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://zwolinskiconstr.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Service Areas",
            item: "https://zwolinskiconstr.com/cities",
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Zwolinski Quality Construction Service Areas",
        itemListElement: (citiesData.cities as City[]).map((city, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: `${city.name}, ${city.state}`,
          url: `https://zwolinskiconstr.com/cities/${city.id}`,
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="section-padding bg-black">
        <div className="container-wide text-center">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
            Service Areas
          </p>
          <h1 className="heading-xl text-white">
            Communities We <span className="text-primary">Serve</span>
          </h1>
          <p className="text-zinc-400 text-lg mt-4 max-w-2xl mx-auto">
            Zwolinski Quality Construction is proud to serve homeowners
            throughout Bucks, Montgomery, and Lehigh Counties in Pennsylvania.
          </p>
        </div>
      </section>

      {/* Cities by County */}
      {counties.map((county, index) => (
        <section
          key={county}
          className={`section-padding ${
            index % 2 === 0 ? "bg-zinc-950" : "bg-black"
          }`}
        >
          <div className="container-wide">
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="h-6 w-6 text-primary" />
              <h2 className="heading-lg text-white">{county}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {grouped[county].map((city) => (
                <Link
                  key={city.id}
                  href={`/cities/${city.id}`}
                  className="card-luxury p-4 hover:border-primary/30 transition-all group"
                >
                  <p className="text-white font-serif group-hover:text-primary transition-colors">
                    {city.name}
                  </p>
                  <p className="text-zinc-500 text-sm mt-1">
                    {city.state}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { galleryData } from "@/data/gallery";

const filters = [
  { label: "All", value: "all" },
  { label: "Bathrooms", value: "bathrooms" },
  { label: "Kitchens", value: "kitchens" },
  { label: "Basements", value: "basements" },
];

export default function GalleryContent() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(8);

  const allImages = useMemo(() => {
    return galleryData.flatMap((section) =>
      section.images.map((img) => ({
        ...img,
        category: section.id,
      }))
    );
  }, []);

  const filteredImages = useMemo(() => {
    if (activeFilter === "all") return allImages;
    return allImages.filter((img) => img.category === activeFilter);
  }, [allImages, activeFilter]);

  const visibleImages = filteredImages.slice(0, visibleCount);
  const hasMore = visibleCount < filteredImages.length;

  const handleFilterChange = (value: string) => {
    setActiveFilter(value);
    setVisibleCount(8);
  };

  return (
    <>
      {/* Header */}
      <section className="relative h-[340px] md:h-[490px] overflow-hidden flex items-center">
        <Image
          src="/images/gallery/bathrooms/newBathroom2.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="container-wide relative w-full">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
            Portfolio
          </p>
          <h1 className="heading-xl text-white mb-3">Our Work</h1>
          <p className="text-zinc-400 text-lg mb-10 max-w-2xl">
            Browse our portfolio of completed kitchen, bathroom, and basement
            remodeling projects across Bucks and Montgomery County.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => handleFilterChange(filter.value)}
                className={`px-6 py-2.5 rounded text-sm font-medium uppercase tracking-wide transition-all duration-300 ${
                  activeFilter === filter.value
                    ? "btn-primary"
                    : "border border-zinc-700 text-zinc-400 hover-gradient hover:text-white hover:border-transparent"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding relative">
        <Image
          src="/images/projects/constructionHero.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/90" />
        <div className="container-wide relative">
          {/* Count */}
          <p className="text-zinc-500 text-sm mb-8">
            Showing {visibleImages.length} of {filteredImages.length} projects
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {visibleImages.map((image, index) => (
              <div
                key={`${image.category}-${index}`}
                className="group aspect-square relative overflow-hidden rounded-lg"
              >
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <h3 className="text-white font-serif text-lg mb-1">
                    {image.title}
                  </h3>
                  {image.description && (
                    <p className="text-zinc-300 text-sm line-clamp-2">
                      {image.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisibleCount((prev) => prev + 8)}
                className="btn-outline"
              >
                Load More Projects
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

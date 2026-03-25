import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { blogPosts } from "@/data/blog";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Remodeling Advice You Can Trust — Cost Guides, Tips & Design Ideas",
  description:
    "Honest answers on what remodels really cost, how long they take, and what to expect. Written by a contractor with 25+ years in the field.",
  keywords: [
    "remodeling blog",
    "kitchen remodel cost guide",
    "bathroom design trends",
    "basement renovation ideas",
    "home improvement tips PA",
    "remodeling advice Bucks County",
  ],
  canonical: "/blog",
});

export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Zwolinski Quality Construction Blog",
    description:
      "Expert remodeling tips, cost guides, and design inspiration from Zwolinski Quality Construction.",
    url: "https://zwolinskiconstr.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Zwolinski Quality Construction",
      url: "https://zwolinskiconstr.com",
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      url: `https://zwolinskiconstr.com/blog/${post.id}`,
      image: `https://zwolinskiconstr.com${post.image}`,
      author: {
        "@type": "Organization",
        name: "Zwolinski Quality Construction",
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        name: "Blog",
        item: "https://zwolinskiconstr.com/blog",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HeroSection
        image="/images/projects/constructionHero.jpg"
        imageAlt="Zwolinski Quality Construction Blog"
        title="Our"
        titleAccent="Blog"
        subtitle="Expert remodeling insights, cost guides, and design inspiration for homeowners."
      />

      {/* Blog Grid */}
      <section className="section-padding bg-zinc-950">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
              Latest Articles
            </p>
            <h2 className="heading-lg text-white">
              Remodeling Tips & Insights
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="card-luxury group overflow-hidden flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent/90 text-white text-xs font-medium uppercase tracking-wider px-3 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-lg text-white mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-zinc-500 text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

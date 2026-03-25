import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import QuoteButton from "@/components/QuoteButton";
import { blogPosts, getBlogPost, getRelatedPosts } from "@/data/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.id }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.id}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Zwolinski Quality Construction"],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="heading-xl text-white mb-4">Post Not Found</h1>
          <Link href="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: `https://zwolinskiconstr.com${post.image}`,
    url: `https://zwolinskiconstr.com/blog/${post.id}`,
    author: {
      "@type": "Organization",
      name: "Zwolinski Quality Construction",
      url: "https://zwolinskiconstr.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Zwolinski Quality Construction",
      url: "https://zwolinskiconstr.com",
      logo: {
        "@type": "ImageObject",
        url: "https://zwolinskiconstr.com/images/projects/newLogo-og.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://zwolinskiconstr.com/blog/${post.id}`,
    },
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
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://zwolinskiconstr.com/blog/${post.id}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HeroSection
        image={post.image}
        imageAlt={post.title}
        title={post.title}
        subtitle={`${post.category} · ${post.readTime}`}
        ctaText="Get a Free Quote"
      />

      {/* Article Content */}
      <section className="section-padding bg-zinc-950">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center text-zinc-400 hover:text-accent transition-colors mb-10 text-sm"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>

            {/* Meta */}
            <div className="flex items-center gap-4 text-zinc-500 text-sm mb-8">
              <span className="bg-accent/20 text-accent text-xs font-medium uppercase tracking-wider px-3 py-1 rounded">
                {post.category}
              </span>
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

            {/* Article body */}
            <article
              className="prose prose-invert prose-zinc max-w-none
                prose-headings:font-serif prose-headings:text-white prose-headings:font-normal
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-p:text-zinc-400 prose-p:leading-relaxed prose-p:mb-5
                prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                prose-strong:text-white"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
              Keep Reading
            </p>
            <h2 className="heading-lg text-white">Related Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {relatedPosts.map((related) => (
              <Link
                key={related.id}
                href={`/blog/${related.id}`}
                className="card-luxury group overflow-hidden flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-accent/90 text-white text-xs font-medium uppercase tracking-wider px-2.5 py-0.5 rounded">
                      {related.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-serif text-base text-white mb-2 group-hover:text-accent transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-zinc-500 text-xs">
                    {related.readTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/projects/constructionHero.jpg"
          alt="Contact Zwolinski Quality Construction"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative container-wide text-center">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3">
            Ready to Start?
          </p>
          <h2 className="heading-lg text-white mb-6">
            Let&apos;s Discuss Your Project
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
            Whether you&apos;re planning a bathroom remodel, kitchen renovation,
            or basement finish, our team is ready to bring your vision to life.
          </p>
          <QuoteButton text="Get a Free Quote" />
        </div>
      </section>
    </>
  );
}

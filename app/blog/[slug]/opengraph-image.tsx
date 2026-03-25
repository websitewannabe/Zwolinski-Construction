import { generateOgImage } from "@/lib/og/og-template";
import { blogPosts, getBlogPost } from "@/data/blog";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.id }));
}

export default async function OpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return generateOgImage({ title: "Blog Post", meta: "Zwolinski Quality Construction" });
  }

  return generateOgImage({
    title: post.title,
    meta: post.category,
    background: post.image,
  });
}

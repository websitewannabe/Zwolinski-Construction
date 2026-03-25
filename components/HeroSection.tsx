import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import QuoteButton from "@/components/QuoteButton";
import { blurData } from "@/lib/blur-data";

interface HeroSectionProps {
  image: string;
  imageAlt: string;
  title: string;
  titleAccent?: string;
  inlineAccent?: boolean;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  useQuoteModal?: boolean;
}

export default function HeroSection({
  image,
  imageAlt,
  title,
  titleAccent,
  inlineAccent = false,
  subtitle,
  ctaText = "Get a Free Quote",
  ctaHref = "/contact",
  useQuoteModal = true,
}: HeroSectionProps) {
  const blur = blurData[image];

  return (
    <section className="relative h-[340px] md:h-[490px] overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
        {...(blur ? { placeholder: "blur" as const, blurDataURL: blur } : {})}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

      <div className="relative container-wide h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="heading-xl text-white mb-6">
            {title}
            {titleAccent && (
              inlineAccent ? (
                <> <span className="text-accent">{titleAccent}</span></>
              ) : (
                <>
                  <br />
                  <span className="text-accent">{titleAccent}</span>
                </>
              )
            )}
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-8 leading-relaxed max-w-lg">
            {subtitle}
          </p>
          {useQuoteModal ? (
            <QuoteButton text={ctaText} />
          ) : (
            <Link href={ctaHref} className="btn-primary">
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

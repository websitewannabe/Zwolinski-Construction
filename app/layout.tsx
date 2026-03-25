import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { QuoteModalProvider } from "@/components/QuoteModal";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zwolinskiconstr.com"),
  title: {
    default: "Zwolinski Quality Construction | Luxury Home Remodeling in PA",
    template: "%s | Zwolinski Quality Construction",
  },
  description:
    "Zwolinski Quality Construction specializes in luxury home remodeling services including kitchens, bathrooms, and basements in Bucks, Montgomery, and Lehigh Counties.",
  keywords: [
    "home remodeling",
    "bathroom remodeling",
    "kitchen renovation",
    "basement finishing",
    "Zwolinski Construction",
    "Bucks County contractor",
    "PA home improvement",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zwolinskiconstr.com",
    siteName: "Zwolinski Quality Construction",
    images: [
      {
        url: "/images/projects/constructionHero.jpg",
        width: 1920,
        height: 650,
        alt: "Zwolinski Quality Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} bg-black text-white`}>
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M5W2MT4T');`,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M5W2MT4T"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Hidden Netlify forms for detection */}
        <form name="contact" data-netlify="true" hidden>
          <input type="text" name="name" />
          <input type="tel" name="phone" />
          <input type="email" name="email" />
          <select name="projectType"><option value="">-</option></select>
          <textarea name="message" />
        </form>
        <form name="quote" data-netlify="true" hidden>
          <input type="text" name="name" />
          <input type="tel" name="phone" />
          <input type="email" name="email" />
          <input type="text" name="address" />
          <select name="projectType"><option value="">-</option></select>
          <select name="timeline"><option value="">-</option></select>
          <select name="budget"><option value="">-</option></select>
          <textarea name="description" />
        </form>
        <QuoteModalProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </QuoteModalProvider>
      </body>
    </html>
  );
}

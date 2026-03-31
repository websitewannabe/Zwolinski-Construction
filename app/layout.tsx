import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { QuoteModalProvider } from "@/components/QuoteModal";
import { siteConfig } from "@/lib/metadata";
import ChatWidgetLoader from "@/components/ChatWidgetLoader";
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
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: "%s",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
  robots: siteConfig.robots,
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
        {/* Netlify Forms detected via public/__forms.html */}
        <QuoteModalProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ChatWidgetLoader />
        </QuoteModalProvider>
        {/* Website Wannabe Feedback Widget */}
        <Script
          src="https://brain.websitewannabe.co/api/ww/feedback/widget?key=430d22c52546bbc5a79f6adfc44f457febc42f27436b705666ec6366565a0a7d"
          strategy="lazyOnload"
        />

        {/* Accessibility Widget — defines handler, widget JS only fetches on click */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.openAccessibilityTools=function(){var h=document.querySelector('div[data-brain-a11y="true"]');if(h){var p=h.shadowRoot&&h.shadowRoot.querySelector('.a11y-panel');if(p)return;h.remove()}var o=document.querySelector('script[data-brain-a11y-src]');if(o)o.remove();var s=document.createElement('script');s.src='https://brain.websitewannabe.co/api/ww/a11y-widget';s.setAttribute('data-brain-a11y-src','true');document.body.appendChild(s)};`,
          }}
        />
      </body>
    </html>
  );
}

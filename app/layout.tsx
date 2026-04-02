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
      <head>
        {/* Inline consent bootstrap: sets GA4 defaults from cookie, non-render-blocking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d='denied',g='granted',a={analytics_storage:d,ad_storage:d,ad_user_data:d,ad_personalization:d,functionality_storage:d,security_storage:g};try{var m=document.cookie.match(/(?:^|; )brain_cookie_consent=([^;]*)/);if(m){var c=JSON.parse(decodeURIComponent(m[1])).categories;if(c){if(c.analytics)a.analytics_storage=g;if(c.marketing){a.ad_storage=g;a.ad_user_data=g;a.ad_personalization=g}if(c.preferences)a.functionality_storage=g}}}catch(e){}window.dataLayer=window.dataLayer||[];function t(){dataLayer.push(arguments)}window.gtag=window.gtag||t;gtag('consent','default',a);window.__brainConsentReady=true})()`,
          }}
        />
        {/* Full cookie consent widget — deferred so it doesn't block rendering */}
        <Script src="https://brain.websitewannabe.co/api/ww/cookie-consent" strategy="afterInteractive" />
      </head>
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
        {/* Accessibility Widget — defines handler, widget JS only fetches on click */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.openAccessibilityTools=function(){var h=document.querySelector('div[data-brain-a11y="true"]');if(h){var sr=h.shadowRoot;if(sr){var p=sr.querySelector('.a11y-panel');if(p)return;var t=sr.querySelector('.a11y-trigger');if(t){t.click();return}}return}var s=document.createElement('script');s.src='https://brain.websitewannabe.co/api/ww/a11y-widget';s.setAttribute('data-brain-a11y-src','true');document.body.appendChild(s)};`,
          }}
        />

        {/* Brain Analytics (first-party tracking, respects cookie consent) */}
        <Script src="https://brain.websitewannabe.co/api/ww/analytics" strategy="afterInteractive" />
      </body>
    </html>
  );
}

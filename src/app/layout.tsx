import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: true,
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1E40AF",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: {
    default:
      "Frovo - Smart Vending Machines | India's Smartest Vending Platform",
    template: "%s | Frovo Marketplace Private Limited",
  },
  description:
    "Frovo Marketplace Private Limited is India's most advanced smart vending machine company. Get 24/7 access to snacks, beverages, and essentials with Frovo's tap-to-pay technology. Perfect for offices, colleges, and public spaces.",
  keywords: [
    "Frovo",
    "Frovo India",
    "Frovo Marketplace",
    "Frovo Marketplace Private Limited",
    "Frovo vending",
    "Frovo smart vending",
    "Frovo vending machine",
    "smart vending machines India",
    "vending solutions India",
    "24/7 vending",
    "tap and pay vending",
    "office vending machines",
    "college vending solutions",
    "automated retail India",
    "cashless vending",
    "snack vending machines",
    "beverage vending",
    "contactless payment vending",
    "best vending machine company India",
    "vending machine startup India",
  ],
  authors: [{ name: "Frovo Marketplace Private Limited" }],
  creator: "Frovo Marketplace Private Limited",
  publisher: "Frovo Marketplace Private Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.frovo.in"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icons/icon.png",
    shortcut: "/icons/icon.png",
    apple: "/icons/icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Frovo - Smart Vending Machines | India's Smartest Vending Platform",
    description:
      "Frovo Marketplace Private Limited — Experience the future of vending with Frovo's smart machines. 24/7 availability, tap-to-pay technology, and fresh products. Revolutionizing retail across India.",
    url: "https://www.frovo.in",
    siteName: "Frovo Marketplace Private Limited",
    images: [
      {
        url: "https://www.frovo.in/images/logo.webp",
        width: 1200,
        height: 630,
        alt: "Frovo Marketplace Private Limited - Smart Vending Machines India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frovo Marketplace Private Limited | Smart Vending Machines",
    description:
      "Frovo Marketplace Private Limited — India's most advanced smart vending solutions. 24/7 access with tap-to-pay technology.",
    images: ["https://www.frovo.in/images/logo.webp"],
    creator: "@frovo_in",
    site: "@frovo_in",
  },
  appleWebApp: {
    statusBarStyle: "black-translucent",
    title: "Frovo",
    capable: true,
  },
  verification: {
    google: "e9xJhMGXQD1dTwXcDQdvXEVBGcoPUNrQWjbIyDB1SP0",
  },
  category: "technology",
  applicationName: "Frovo Marketplace Private Limited",
  other: {
    "og:site_name": "Frovo Marketplace Private Limited",
    "article:publisher": "https://www.frovo.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*  Changed Organization to Corporation for better brand recognition */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Corporation",
              name: "Frovo Marketplace Private Limited",
              alternateName: ["Frovo", "Frovo India", "Frovo Marketplace"],
              legalName: "Frovo Marketplace Private Limited",
              description:
                "Frovo is India's leading smart vending machine solutions provider, delivering 24/7 access to snacks and beverages through innovative tap-to-pay technology.",
              url: "https://www.frovo.in",
              logo: "https://www.frovo.in/images/logo.webp",
              image: "https://www.frovo.in/images/logo.webp",
              foundingDate: "2023",
              foundingLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "IN",
                },
              },
              slogan: "Grab & Go 24/7",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                "https://www.linkedin.com/company/frovo",
                "https://twitter.com/frovo_in",
                "https://www.instagram.com/frovo_official",
                "https://www.facebook.com/frovo",
              ],
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              knowsAbout: [
                "Smart Vending Machines",
                "Automated Retail",
                "Contactless Payment Systems",
                "24/7 Retail Solutions",
                "Tap to Pay Technology",
              ],
            }),
          }}
        />

        {/*  Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Frovo Marketplace Private Limited",
              alternateName: "Frovo Marketplace Private Limited",
              url: "https://www.frovo.in",
              description:
                "Frovo delivers smart vending machines and automated retail solutions across India",
              publisher: {
                "@type": "Organization",
                name: "Frovo",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://www.frovo.in/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/*  Brand Schema for Knowledge Graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Brand",
              name: "Frovo",
              alternateName: ["Frovo India", "Frovo Vending"],
              description: "India's Smartest Vending Platform",
              url: "https://www.frovo.in",
              logo: "https://www.frovo.in/images/logo.webp",
              slogan: "Grab & Go 24/7",
            }),
          }}
        />

        {/*  Product Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Frovo Smart Vending Machines",
              description:
                "24/7 smart vending machines with tap-to-pay technology for offices, colleges, and public spaces across India",
              brand: {
                "@type": "Brand",
                name: "Frovo",
              },
              manufacturer: {
                "@type": "Organization",
                name: "Frovo",
              },
              offers: {
                "@type": "AggregateOffer",
                availability: "https://schema.org/InStock",
                priceCurrency: "INR",
              },
              image: "https://www.frovo.in/images/vending-machine-hero.webp",
            }),
          }}
        />

        {/* Existing preload links */}
        <link
          rel="preload"
          as="image"
          href="/images/vending-machine-hero.webp"
          fetchPriority="high"
          type="image/webp"
        />
        <link
          rel="preload"
          as="image"
          href="/images/user_using_machine.webp"
          fetchPriority="high"
          type="image/webp"
        />
        <link
          rel="preload"
          as="image"
          href="/images/machine_with_user.webp"
          type="image/webp"
        />
        <link
          rel="preload"
          as="image"
          href="/images/user_collecting_item.webp"
          type="image/webp"
        />

        {/*  Preconnect for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />

        {/* Existing geo meta tags */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="ICBM" content="20.5937, 78.9629" />
        <meta name="DC.title" content="Frovo - Smart Vending Solutions" />
        <meta name="rating" content="general" />
        <meta name="referrer" content="origin-when-cross-origin" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-inter antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        {/* Toast */}
        <Toaster
          position="top-right"
          richColors
          closeButton
          expand={false}
          theme="light"
          toastOptions={{
            style: {
              background: "white",
              border: "1px solid hsl(var(--primary) / 0.2)",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
              fontFamily: "var(--font-poppins)",
            },
            className: "font-poppins",
          }}
        />
      </body>
    </html>
  );
}

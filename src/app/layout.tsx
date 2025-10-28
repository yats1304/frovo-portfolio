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
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1E40AF',
  colorScheme: 'light',
}

export const metadata: Metadata = {
  title: {
    default: "Frovo - Smart Vending Machines | Grab & Go 24/7 Solutions",
    template: "%s | Frovo - Smart Vending Solutions"
  },
  description:
    "Frovo delivers India's most advanced smart vending machines. 24/7 access to snacks, beverages, and essentials with tap-to-pay technology. Perfect for offices, colleges, and public spaces.",
  keywords: [
    "smart vending machines",
    "vending solutions India",
    "24/7 vending",
    "tap and pay vending",
    "office vending machines",
    "college vending solutions",
    "automated retail",
    "cashless vending",
    "snack vending machines",
    "beverage vending",
    "Frovo vending",
    "contactless payment vending"
  ],
  authors: [{ name: "Frovo Team" }],
  creator: "Frovo",
  publisher: "Frovo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.frovo.in'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Frovo - Smart Vending Machines | India's #1 Automated Retail Solution",
    description:
      "Experience the future of vending with Frovo's smart machines. 24/7 availability, tap-to-pay technology, and fresh products. Revolutionizing retail across India.",
    url: "https://www.frovo.in",
    siteName: "Frovo",
    images: [
      {
        url: "/images/logo.webp",
        width: 1200,
        height: 630,
        alt: "Frovo Smart Vending Machines - 24/7 Automated Retail Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frovo - Smart Vending Machines | Grab & Go 24/7",
    description: "India's most advanced smart vending solutions. 24/7 access with tap-to-pay technology.",
    images: ["/images/logo.webp"],
    creator: "@frovo_in",
    site: "@frovo_in",
  },
  appleWebApp: {
    statusBarStyle: "black-translucent",
    title: "Frovo",
    capable: true,
  },
  verification: {
    google: "your-google-site-verification-code",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Frovo",
              "description": "India's leading smart vending machine solutions provider",
              "url": "https://www.frovo.in",
              "logo": "https://www.frovo.in/images/logo.webp",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/frovo",
                "https://twitter.com/frovo_in",
                "https://www.instagram.com/frovo_official"
              ],
              "foundingDate": "2023",
              "founder": {
                "@type": "Person",
                "name": "Frovo Team"
              },
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "serviceType": "Smart Vending Solutions",
              "knowsAbout": [
                "Smart Vending Machines",
                "Automated Retail",
                "Contactless Payment Systems",
                "24/7 Retail Solutions"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Frovo",
              "url": "https://www.frovo.in",
              "description": "Smart vending machines and automated retail solutions",
              "publisher": {
                "@type": "Organization",
                "name": "Frovo"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.frovo.in/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
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
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
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

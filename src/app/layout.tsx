import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Frovo - Grab & Go 24/7",
  description:
    "Always Open. Tap & Pay. Every Need - Your trusted partner for smart vending machines",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#1E40AF",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Frovo - Grab & Go 24/7",
    description:
      "Tap, Pay, Snack. India's smart vending solution - always open, always fresh.",
    url: "https://www.frovo.in",
    siteName: "Frovo",
    images: [
      {
        url: "/images/user_using_machine.webp",
        width: 1200,
        height: 630,
        alt: "Frovo vending solutions Hero Banner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  appleWebApp: {
    statusBarStyle: "black-translucent",
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

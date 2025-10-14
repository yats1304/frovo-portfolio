import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Frovo - Grab & Go 24/7",
  description:
    "Always Open. Tap & Pay. Every Need - Your trusted partner for smart vending machines",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable}`}
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

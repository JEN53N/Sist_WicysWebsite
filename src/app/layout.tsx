import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "WiCyS Sathyabama | Women in CyberSecurity",
    template: "%s | WiCyS Sathyabama",
  },
  description:
    "WiCyS Student Chapter at Sathyabama Institute of Science and Technology, Chennai. Empowering women in cybersecurity through events, workshops, and community.",
  keywords: ["WiCyS", "Women in CyberSecurity", "Sathyabama", "cybersecurity", "CTF", "OBSCURA", "Chennai"],
  authors: [{ name: "WiCyS Sathyabama Student Chapter" }],
  metadataBase: new URL("https://wicys-sathyabama.vercel.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=New+Rocker&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Indsec — Institutional Broking, Family Office & GIFT City",
    template: "%s · Indsec",
  },
  description:
    "Indsec partners with global and domestic institutions and family offices to navigate India's markets — research-driven insight, seamless execution, and SEBI-compliant practice since 1993.",
  metadataBase: new URL("https://indsec.example.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import Script from "next/script";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MandatoryDisclosure } from "@/components/MandatoryDisclosure";

/**
 * Layout for the public marketing site. The embedded Studio at /studio lives
 * outside this group, so it renders without the site header/footer.
 */
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <MandatoryDisclosure />
      {/* EnableUser accessibility widget — themed to the site navy (#1B2A5E).
          Colour is baked into the file, so it self-initialises on load. */}
      <Script src="/enablestack-widget.js" strategy="afterInteractive" />
    </>
  );
}

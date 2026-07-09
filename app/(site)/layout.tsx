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
    </>
  );
}

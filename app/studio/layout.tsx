import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Indsec Studio",
  robots: { index: false, follow: false },
};

// Sanity recommends locking the viewport so the Studio UI behaves like an app.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  interactiveWidget: "resizes-content",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

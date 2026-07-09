/**
 * Embedded Sanity Studio, served at /studio.
 *
 * The client edits content here. The catch-all [[...tool]] segment lets the
 * Studio own its internal routing (structure, vision, etc.). The Studio itself
 * lives in Studio.tsx (a client component) so the heavy `sanity` library never
 * enters the server component graph.
 */
import { Studio } from "./Studio";

export const dynamic = "force-static";

export default function StudioPage() {
  return <Studio />;
}

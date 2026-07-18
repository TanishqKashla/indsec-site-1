/**
 * Turn a byte count (e.g. from a Sanity asset's `size`) into the "271 KB" /
 * "1.5 MB" style used by the PDF size pills across the disclosure pages.
 */
export function formatFileSize(bytes?: number | null): string | undefined {
  if (!bytes || bytes <= 0) return undefined;
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${Math.round(kb)} KB`;
  return `${(kb / 1024).toFixed(1)} MB`;
}

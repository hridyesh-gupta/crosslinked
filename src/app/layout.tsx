import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/content/structure";

// Root layout is a pass-through. The real <html>/<body>, fonts, and chrome live
// in app/[locale]/layout.tsx so the lang attribute can be set per locale while
// still being statically generated.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}

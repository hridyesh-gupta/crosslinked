import { MessageCircle } from "lucide-react";

/** Floating click-to-WhatsApp button, bottom-right on every page. */
export function FloatingChat({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent px-4 py-3 text-sm font-medium text-accent-ink shadow-[0_0_30px_-6px_rgba(197,254,60,0.6)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_40px_-4px_rgba(197,254,60,0.8)]"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}

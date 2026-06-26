import { Container } from "@/components/ui/Container";
import { clients } from "@/content/results";

/** Muted client monogram row for social proof. */
export function TrustStrip() {
  const featured = clients.slice(0, 8);
  return (
    <section className="py-12">
      <Container className="flex flex-col items-center gap-7">
        <p className="text-center text-sm text-faint">
          Trusted by 30+ teams across restaurants, education, and professional services
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {featured.map((c) => (
            <span
              key={c.name}
              title={c.name}
              className="font-display rounded-lg border border-border bg-surface/40 px-3.5 py-2 text-sm font-semibold tracking-wide text-muted transition-colors hover:border-border-strong hover:text-fg"
            >
              {c.monogram}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

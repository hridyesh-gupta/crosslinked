import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/Marquee";
import { ClientCard } from "@/components/ClientCard";
import { clients } from "@/content/structure";
import type { Dictionary } from "@/i18n/dictionary";

export function ClientWall({ dict }: { dict: Dictionary }) {
  const row1 = clients.slice(0, 7);
  const row2 = clients.slice(7);

  return (
    <section className="py-20 sm:py-24">
      <Container className="mb-12 flex flex-col gap-12">
        <SectionHeading heading={dict.resultsPage.clientWall} />
      </Container>

      {/* Two horizontal marquees scrolling in opposite directions. */}
      <div className="flex flex-col gap-4">
        <Marquee duration={46}>
          {row1.map((c) => (
            <ClientCard key={c.name} client={c} />
          ))}
        </Marquee>
        <Marquee duration={46} reverse>
          {row2.map((c) => (
            <ClientCard key={c.name} client={c} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Container } from "./ui/Container";
import { Wordmark } from "./Wordmark";
import { site, navItems, whatsappHref } from "@/content/site";
import { serviceCategories } from "@/content/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-surface/30">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Wordmark />
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              {site.tagline} AI automation, web & app development, and design for
              modern businesses.
            </p>
          </div>

          <FooterCol title="Services">
            {serviceCategories.map((c) => (
              <FooterLink key={c.id} href={`/services#${c.id}`}>
                {c.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Company">
            {navItems.map((n) => (
              <FooterLink key={n.href} href={n.href}>
                {n.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Contact">
            <FooterLink href={`tel:${site.contact.phone}`} external icon={<Phone className="h-3.5 w-3.5" />}>
              {site.contact.phoneDisplay}
            </FooterLink>
            <FooterLink href={`mailto:${site.contact.email}`} external icon={<Mail className="h-3.5 w-3.5" />}>
              {site.contact.email}
            </FooterLink>
            <FooterLink href={whatsappHref} external icon={<MessageCircle className="h-3.5 w-3.5" />}>
              WhatsApp
            </FooterLink>
          </FooterCol>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-faint sm:flex-row sm:items-center">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>{site.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-display text-sm font-semibold text-fg">{title}</h3>
      <ul className="flex flex-col gap-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
  external,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  icon?: React.ReactNode;
}) {
  const cls =
    "inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent";
  return (
    <li>
      {external ? (
        <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
          {icon}
          {children}
        </a>
      ) : (
        <Link href={href} className={cls}>
          {icon}
          {children}
        </Link>
      )}
    </li>
  );
}

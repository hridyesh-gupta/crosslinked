import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Space_Grotesk, Inter } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FloatingChat } from "@/components/FloatingChat";
import { locales, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { site } from "@/content/structure";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: { default: dict.meta.defaultTitle, template: `%s · ${site.name}` },
    description: dict.meta.homeDescription,
    openGraph: {
      title: dict.meta.defaultTitle,
      description: dict.meta.homeDescription,
      url: `${site.url}/${locale}`,
      siteName: site.name,
      type: "website",
      locale,
    },
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", de: "/de" },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Params & { children: React.ReactNode }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const waHref = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
    dict.whatsappPrefill,
  )}`;

  // Apply the saved theme before paint to avoid a flash. Defaults to dark.
  const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');}}catch(e){}})();`;

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`dark ${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-canvas text-fg">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Nav dict={dict} locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer dict={dict} locale={locale} />
        <FloatingChat href={waHref} label={dict.chat.label} />
      </body>
    </html>
  );
}

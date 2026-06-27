// Merge language-independent structure (icons, ids, monograms) with the active
// locale dictionary into the shapes the components render.
import { serviceStructure, featureIcons, testimonialMeta, statValues } from "./structure";
import type { Dictionary } from "@/i18n/dictionary";

export interface ResolvedService {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ResolvedCategory {
  id: string;
  icon: string;
  label: string;
  title: string;
  description: string;
  services: ResolvedService[];
}

export interface ResolvedFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ResolvedTestimonial {
  id: string;
  name: string;
  org: string;
  monogram: string;
  quote: string;
}

export interface ResolvedStat {
  value: string;
  label: string;
}

export function resolveCategories(dict: Dictionary): ResolvedCategory[] {
  return serviceStructure.map((cat) => ({
    id: cat.id,
    icon: cat.icon,
    label: dict.servicesPage.categories[cat.id].label,
    title: dict.servicesPage.categories[cat.id].title,
    description: dict.servicesPage.categories[cat.id].description,
    services: cat.items.map((item) => ({
      id: item.id,
      icon: item.icon,
      title: dict.servicesPage.items[item.id].title,
      description: dict.servicesPage.items[item.id].description,
    })),
  }));
}

export function resolveFeatures(dict: Dictionary): ResolvedFeature[] {
  return dict.features.items.map((f, i) => ({ ...f, icon: featureIcons[i] ?? "Sparkles" }));
}

export function resolveTestimonials(dict: Dictionary): ResolvedTestimonial[] {
  return testimonialMeta.map((m) => ({ ...m, quote: dict.resultsPage.quotes[m.id] }));
}

export function resolveStats(dict: Dictionary): ResolvedStat[] {
  return statValues.map((value, i) => ({ value, label: dict.stats[i]?.label ?? "" }));
}

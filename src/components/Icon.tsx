import {
  Bot,
  MonitorSmartphone,
  Palette,
  UserPlus,
  PhoneCall,
  Workflow,
  MessagesSquare,
  Headset,
  CalendarCheck,
  Users,
  Globe,
  ShoppingCart,
  CalendarClock,
  PenTool,
  Search,
  Smartphone,
  Sparkles,
  Presentation,
  LayoutDashboard,
  Clock,
  ShieldCheck,
  Zap,
  AudioLines,
  Boxes,
  ChartLine,
  type LucideIcon,
} from "lucide-react";

const registry: Record<string, LucideIcon> = {
  Bot,
  MonitorSmartphone,
  Palette,
  UserPlus,
  PhoneCall,
  Workflow,
  MessagesSquare,
  Headset,
  CalendarCheck,
  Users,
  Globe,
  ShoppingCart,
  CalendarClock,
  PenTool,
  Search,
  Smartphone,
  Sparkles,
  Presentation,
  LayoutDashboard,
  Clock,
  ShieldCheck,
  Zap,
  AudioLines,
  Boxes,
  ChartLine,
};

interface IconProps {
  name: string;
  className?: string;
  strokeWidth?: number;
}

/** Renders a lucide icon by name. Falls back to Sparkles if unknown. */
export function Icon({ name, className, strokeWidth = 1.6 }: IconProps) {
  const Cmp = registry[name] ?? Sparkles;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}

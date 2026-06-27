"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Dictionary } from "@/i18n/dictionary";

type FormDict = Dictionary["contactPage"]["form"];

const inputCls =
  "w-full rounded-xl border border-border bg-canvas px-4 py-3 text-sm text-fg placeholder:text-faint transition-colors focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/30";

export function ContactForm({ form, email }: { form: FormDict; email: string }) {
  const [sent, setSent] = useState(false);
  const [data, setData] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // No backend yet — compose an email the visitor can send from their client.
    // Swap this for a Resend/Formspree endpoint when ready.
    const subject = `${form.subject} — ${data.name}`.trim();
    const body = `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="card-sheen flex flex-col items-center gap-3 rounded-2xl border border-accent/30 bg-surface/50 p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent" aria-hidden="true" />
        <h3 className="font-display text-lg font-semibold text-fg">{form.successTitle}</h3>
        <p className="text-sm text-muted">{form.successBody}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card-sheen flex flex-col gap-4 rounded-2xl border border-border bg-surface/40 p-6 sm:p-7"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-fg">
          {form.name}
        </label>
        <input
          id="name"
          required
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          placeholder={form.namePlaceholder}
          className={inputCls}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-fg">
          {form.email}
        </label>
        <input
          id="email"
          type="email"
          required
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          placeholder={form.emailPlaceholder}
          className={inputCls}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-fg">
          {form.message}
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          placeholder={form.messagePlaceholder}
          className={cn(inputCls, "resize-y")}
        />
      </div>

      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink shadow-[0_0_30px_-10px_rgba(197,254,60,0.7)] transition-all hover:-translate-y-0.5 hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {form.submit}
      </button>
    </form>
  );
}

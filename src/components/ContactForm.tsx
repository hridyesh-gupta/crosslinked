"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { site } from "@/content/site";

const inputCls =
  "w-full rounded-xl border border-border bg-canvas px-4 py-3 text-sm text-fg placeholder:text-faint transition-colors focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/30";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // No backend yet — compose an email the visitor can send from their client.
    // Swap this for a Resend/Formspree endpoint when ready.
    const subject = `New enquiry from ${form.name || "the Crosslinked site"}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="card-sheen flex flex-col items-center gap-3 rounded-2xl border border-accent/30 bg-surface/50 p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent" aria-hidden="true" />
        <h3 className="font-display text-lg font-semibold text-fg">Thanks — your message is ready to send</h3>
        <p className="text-sm text-muted">
          We’ve opened your email app. Prefer something faster? Reach us on WhatsApp or book a call directly.
        </p>
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
          Name
        </label>
        <input
          id="name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Your name"
          className={inputCls}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-fg">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="you@example.com"
          className={inputCls}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-fg">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="How can we help?"
          className={cn(inputCls, "resize-y")}
        />
      </div>

      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink shadow-[0_0_30px_-10px_rgba(197,254,60,0.7)] transition-all hover:-translate-y-0.5 hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Send message
      </button>
    </form>
  );
}

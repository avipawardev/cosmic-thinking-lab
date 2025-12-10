"use client";

import React, { useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  budget: "",
  message: "",
};

export default function ContactCTA(): JSX.Element {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
    };

  const validate = (f: FormState) => {
    if (!f.name.trim()) return "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) return "Please enter a valid email.";
    if (!f.message.trim()) return "Please include a brief message.";
    return null;
    };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const v = validate(form);
    if (v) {
      setError(v);
      return;
    }
    setSubmitting(true);
    // Simulate async request
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d0d16] to-[#0b0b12] p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-12 items-start">
            <div className="md:col-span-6">
              <h2 className="text-2xl md:text-3xl font-semibold">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Ready to build something exceptional?
                </span>
              </h2>
              <p className="mt-4 text-white/70 max-w-2xl">
                Tell us about your project. We'll get back quickly with how we can help you
                reach your goals with clarity and speed.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 max-w-md">
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                  <div className="text-[11px] text-white/60">Response time</div>
                  <div className="text-sm">1–2 business days</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                  <div className="text-[11px] text-white/60">Engagements</div>
                  <div className="text-sm">Fixed or sprint-based</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-6">
              <form onSubmit={onSubmit} noValidate className="space-y-4" aria-live="polite">
                {submitted && (
                  <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-emerald-300 text-sm">
                    Thanks! Your message has been sent. We'll reply shortly.
                  </div>
                )}
                {error && (
                  <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-rose-300 text-sm">
                    {error}
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-xs text-white/70 mb-1">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={onChange("name")}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500/50"
                      placeholder="Jane Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs text-white/70 mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={onChange("email")}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500/50"
                      placeholder="jane@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className="block text-xs text-white/70 mb-1">
                      Company (optional)
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={onChange("company")}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500/40"
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-xs text-white/70 mb-1">
                      Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={onChange("budget")}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500/40"
                    >
                      <option value="">Select a range</option>
                      <option value="5k-15k">$5k–$15k</option>
                      <option value="15k-40k">$15k–$40k</option>
                      <option value="40k+">$40k+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs text-white/70 mb-1">
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={onChange("message")}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500/40"
                    placeholder="Tell us about your goals, timeline, and anything else we should know."
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 text-sm font-semibold shadow-lg shadow-purple-500/20 hover:opacity-90 transition disabled:opacity-60"
                  >
                    {submitting ? "Sending…" : "Send message"}
                  </button>
                  <div className="text-[11px] text-white/50">
                    We'll never share your information.
                  </div>
                </div>
              </form>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="mailto:hello@cosmicthinkinglabs.com"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-white/80 hover:bg-white/5 transition"
                >
                  Or email: hello@cosmicthinkinglabs.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

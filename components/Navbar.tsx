"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, profile } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header initial={{ y: -90 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
        <span className="rounded-lg border border-brand/40 bg-brand/10 px-3 py-2 font-mono text-base font-semibold">
        <span className="text-brand-light">&lt;</span>
        {profile.initials}
        <span className="text-brand-light"> /&gt;</span>
        </span>
        <span className="font-display text-2xl font-bold tracking-tight">{profile.short}</span>
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-muted transition hover:text-white">{l.label}</a>
            </li>
          ))}
          <li>
            <a href="/contact" className="rounded-xl border border-brand/40 bg-brand/10 px-5 py-3 font-medium transition hover:bg-brand/25">
              Let&apos;s Talk
            </a>
          </li>
        </ul>

        <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden">
          <span className="block h-0.5 w-6 bg-white" />
          <span className="mt-1.5 block h-0.5 w-6 bg-white" />
          <span className="mt-1.5 block h-0.5 w-6 bg-white" />
        </button>
      </nav>

      <AnimatePresence>
      {open && (
        <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden flex flex-col gap-4 border-t border-white/5 bg-bg px-6 py-5 md:hidden">
          {[...navLinks, { label: "Let's Talk", href: "/contact" }].map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="text-muted hover:text-white">{l.label}</a>
            </li>
          ))}
        </motion.ul>
      )}
      </AnimatePresence>
    </motion.header>
  );
}

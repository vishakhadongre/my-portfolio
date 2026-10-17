import Reveal from "./Reveal";
import { profile } from "@/data/portfolio";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const cards = [
  {
    title: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    color: "bg-violet-500/15 text-violet-400",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="m3.5 7 8.5 6 8.5-6" />
      </>
    ),
  },
  {
    title: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    color: "bg-pink-500/15 text-pink-400",
    icon: (
      <path d="M5 4h3.5l1.7 4.2-2.1 1.3a11 11 0 0 0 5.4 5.4l1.3-2.1L19 14.5V18a2 2 0 0 1-2 2A14 14 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    ),
  },
  {
  title: "Location",
  value: profile.location,
  href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.location)}`,
  external: true,
  color: "bg-blue-500/15 text-blue-400",
  icon: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 1 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
},
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
      <Reveal className="text-center">
        <p className="font-mono text-xs tracking-[0.2em] text-brand-light uppercase">06 / CONTACT</p>
        <h2 className="mt-3 font-display text-5xl font-bold tracking-tight md:text-6xl">
          Get In <span className="bg-gradient-to-r from-pink-300 via-pink-400 to-fuchsia-500 bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
          I&apos;m currently available for new opportunities. Whether you have a question or just want to say hi,
          I&apos;ll try my best to get back to you!
        </p>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
        {cards.map((c, i) => {
          const body = (
            <>
              <span className={`grid h-16 w-16 place-items-center rounded-full ${c.color}`}>
                <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" {...stroke}>
                  {c.icon}
                </svg>
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{c.title}</h3>
              <p className="mt-3 text-[15px] leading-6 text-muted [overflow-wrap:anywhere]">{c.value}</p>
            </>
          );
          const cls =
            "flex h-full flex-col items-center rounded-2xl border border-line bg-surface p-8 text-center transition";
          return (
            <Reveal key={c.title} delay={i * 0.1}>
              <a href={c.href}
              target={"external" in c ? "_blank" : undefined}
              rel={"external" in c ? "noreferrer" : undefined}
              className={`${cls} hover:-translate-y-1 hover:border-brand/50`}>
              {body}
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

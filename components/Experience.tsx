import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        index="03" label="EXPERIENCE" before="Where I've" accent="worked."
        text="Hands-on experience working on real-world web applications, dashboards, APIs and database-driven systems."
      />
      <div className="relative space-y-8 pl-14">
        <div className="absolute top-2 bottom-0 left-[15px] w-px bg-gradient-to-b from-brand via-brand/40 to-transparent" />
        {experience.map((e) => (
          <div key={e.company} className="relative">
            <span className="absolute top-8 -left-14 h-[18px] w-[18px] rounded-full border-2 border-brand bg-bg" />
            <Reveal className="rounded-2xl border border-line bg-surface p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-semibold">{e.title}</h3>
                  <p className="mt-1 text-sm text-brand-light">{e.company}</p>
                </div>
                <span className="font-mono text-[11px] tracking-widest text-muted">{e.badge}</span>
              </div>
              <p className="mt-6 text-sm leading-6 text-muted">{e.summary}</p>
              <ul className="mt-5 space-y-3">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[13px] leading-5 text-muted">
                    <span className="text-brand">→</span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}

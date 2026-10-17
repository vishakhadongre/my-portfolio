import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading index="05" label="EDUCATION" before="My" accent="education." />
      <div className="relative space-y-8 pl-14">
        <div className="absolute top-2 bottom-0 left-[15px] w-px bg-gradient-to-b from-brand via-brand/40 to-transparent" />
        {education.map((e) => (
          <div key={e.degree} className="relative">
            <span className="absolute top-8 -left-14 h-[18px] w-[18px] rounded-full border-2 border-brand bg-bg" />
            <Reveal className="rounded-2xl border border-line bg-surface p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-semibold">{e.degree}</h3>
                  <p className="mt-1 text-sm text-brand-light">{e.school}</p>
                </div>
                <span className="font-mono text-[11px] tracking-widest text-muted">{e.period}</span>
              </div>
              <p className="mt-5 text-sm text-muted">{e.note}</p>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}

import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading index="02" label="SKILLS" before="What I" accent="work with." text="Technologies and tools I use to build complete web applications." />
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 0.1} className="rounded-2xl border border-line bg-surface p-6">
            <h3 className="font-display text-xl font-semibold">{g.group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="rounded-lg border border-brand/25 bg-brand/10 px-3 py-1.5 text-sm text-violet-200">{s}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

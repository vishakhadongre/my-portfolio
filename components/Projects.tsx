import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        index="04"
        label="PROJECTS"
        before="Things I've"
        accent="built."
        text="A selection of applications I've designed and developed."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal
            key={p.title}
            delay={i * 0.1}
            className="flex flex-col rounded-2xl border border-line bg-surface p-6 transition hover:border-brand/50"
          >
            <h3 className="font-display text-xl font-semibold">{p.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{p.description}</p>

            {p.points && (
              <ul className="mt-5 space-y-2.5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-[13px] leading-5 text-muted">
                    <span className="text-pink-400">→</span>
                    {pt}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-5 flex flex-1 flex-wrap content-start gap-2">
              {p.tech.map((t) => (
                <span key={t} className="rounded-md bg-brand/10 px-2.5 py-1 font-mono text-xs text-violet-200">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-5 text-sm">
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="text-pink-400 hover:underline">
                  Live demo →
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
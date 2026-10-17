import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const glance = [
  ["Role", "Software Developer & Full-Stack Developer"],
  ["Training", "Java Full-Stack Developer Course"],
  ["Tech Stack", "Laravel, React, Next.js, Java, MySQL, HTML5, CSS3"],
  ["Experience", "Live, real-time projects"],
];

const highlights = [
  {
    no: "01",
    title: "Live Projects",
    text: "AI-based Skin & Hair Analysis applications and Event Management platforms.",
  },
  {
    no: "02",
    title: "End-to-End Development",
    text: "Frontend interfaces, backend logic, API integrations and database management.",
  },
  {
    no: "03",
    title: "Team Collaboration",
    text: "Sharing ideas, solving challenges together and delivering within deadlines.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading index="01" label="ABOUT" before="A bit" accent="about me." />

      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <Reveal className="space-y-6 text-base leading-8 text-muted md:text-lg">
        <p className="text-xl leading-9 text-white md:text-2xl md:leading-10">
        I&apos;m a Software Developer and Full-Stack Developer with hands-on experience in building modern,
        responsive and user-friendly web applications.
        </p>
        <p>
        Having completed a Java Full-Stack Developer course, I work across frontend and backend using Laravel,
        PHP, Next.js, Java and MySQL. I have worked on live projects, including AI-based Skin &amp; Hair Analysis
        applications and Event Management platforms, covering interfaces, APIs, databases and business logic.
        </p>
        <p>
        I&apos;m an adaptable team player who enjoys learning new technologies and solving challenging problems.
        My goal is to build reliable, scalable and impactful applications while growing as a professional
        Full-Stack Developer.
        </p>
        </Reveal>

        <Reveal delay={0.1} className="h-fit rounded-2xl border border-line bg-surface p-8">
          <p className="font-mono text-xs tracking-[0.2em] text-pink-400 uppercase">At a glance</p>
          <dl className="mt-6 divide-y divide-line">
            {glance.map(([k, v]) => (
              <div key={k} className="py-4 first:pt-0 last:pb-0">
                <dt className="font-mono text-xs tracking-widest text-muted uppercase">{k}</dt>
                <dd className="mt-1 font-medium text-white">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {highlights.map((h, i) => (
          <Reveal
            key={h.no}
            delay={i * 0.1}
            className="rounded-2xl border border-line bg-surface p-6 transition hover:-translate-y-1 hover:border-pink-400/40"
          >
            <span className="font-mono text-sm text-pink-400">{h.no}</span>
            <h3 className="mt-3 font-display text-xl font-semibold">{h.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{h.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

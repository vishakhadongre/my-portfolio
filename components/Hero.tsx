import * as motion from "framer-motion/client";
import { profile } from "@/data/portfolio";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

const stats = [
  ["BASED IN", profile.location],
  ["SPECIALIZATION", "Full Stack Development"],
  ["FOCUS", "Web Applications & APIs"],
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-[radial-gradient(ellipse_at_top_left,#2a1245_0%,#120a1f_40%,#07050d_75%)] pt-28 pb-16"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <motion.span
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 rounded-full border border-pink-400/30 bg-pink-500/10 px-4 py-2 font-mono text-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
          {profile.role}
        </motion.span>

        <motion.h1
          {...fadeUp(0.1)}
          className="mt-8 font-display text-5xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="block text-white">Hi, I&apos;m</span>
          <span className="bg-gradient-to-r from-pink-300 via-pink-400 to-fuchsia-500 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </motion.h1>

        <motion.p
        {...fadeUp(0.25)}
        className="mt-8 max-w-2xl text-lg leading-8 text-muted md:text-xl md:leading-9"
        >
        A <strong className="font-medium text-white">Full Stack Developer</strong> passionate about building{" "}
        <strong className="font-medium text-white">scalable web applications</strong> across frontend, backend
        and database layers. I turn ideas into clean, fast and production-ready products that are easy to use,
        simple to maintain and built to grow with your business.
        </motion.p>

        <motion.div {...fadeUp(0.4)} className="mt-10 flex flex-wrap gap-4">
          <a
            href="/projects"
            className="rounded-xl bg-gradient-to-r color-brand-light to-fuchsia-600 px-7 py-4 font-medium shadow-xl shadow-color-brand-light-500/30 transition hover:brightness-110">
            View My Work →
          </a>
          <a
            href="/contact"
            className="rounded-xl border border-line bg-white/5 px-7 py-4 font-medium transition hover:bg-white/10">
            Get In Touch
          </a>
        </motion.div>

        <motion.dl {...fadeUp(0.55)} className="mt-16 flex flex-wrap gap-x-12 gap-y-6">
          {stats.map(([k, v]) => (
            <div key={k}>
              <dt className="font-mono text-xs tracking-widest text-muted">{k}</dt>
              <dd className="mt-1">{v}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

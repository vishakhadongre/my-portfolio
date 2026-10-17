type Props = { index: string; label: string; before: string; accent: string; text?: string };

export default function SectionHeading({ index, label, before, accent, text }: Props) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs tracking-[0.2em] text-brand-light uppercase">
        {index} / {label}
      </p>
      <h2 className="mt-3 font-display text-5xl font-bold tracking-tight md:text-6xl">
        {before} <span className="bg-gradient-to-r from-pink-300 via-pink-400 to-fuchsia-500 bg-clip-text text-transparent">{accent}</span>
      </h2>
      {text && <p className="mt-4 max-w-2xl text-muted">{text}</p>}
    </div>
  );
}

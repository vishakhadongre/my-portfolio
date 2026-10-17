import { profile } from "@/data/portfolio";

const links = [
  {
    name: "GitHub",
    href: profile.github,
    icon: (
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    ),
  },
  {
    name: "LinkedIn",
    href: profile.linkedin,
    icon: (
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    ),
  },
  {
    name: "Email",
    href: `mailto:${profile.email}`,
    icon: (
      <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.3.4L12 11.6l7.7-5.7H4.3Zm15.7 2.4-7.4 5.5a1 1 0 0 1-1.2 0L4 8.3v10.2c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V8.3Z" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 md:flex-row">
        <p className="text-sm text-muted">© 2026 Vishakha Dongre. All rights reserved.</p>

        <ul className="flex flex-wrap items-center justify-center gap-3">
          {links.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                target={l.name === "Email" ? undefined : "_blank"}
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2 text-sm text-muted transition hover:border-brand/50 hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  {l.icon}
                </svg>
                {l.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

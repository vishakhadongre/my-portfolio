import Portfolio, { sections } from "@/components/Portfolio";

export const dynamicParams = false;

export function generateStaticParams() {
  return sections.map((section) => ({ section }));
}

export default function SectionPage() {
  return <Portfolio />;
}
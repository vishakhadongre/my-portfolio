"use client";
import { useEffect } from "react";

const paths = ["/", "/about", "/skills", "/experience", "/projects", "/education", "/contact"];

function scrollToPath(path: string, smooth: boolean) {
  const id = path === "/" ? "top" : path.slice(1);
  document.getElementById(id)?.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
}

export default function ScrollManager() {
  useEffect(() => {
    
    const first = window.setTimeout(() => scrollToPath(window.location.pathname, false), 150);

    const onClick = (e: MouseEvent) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      const a = (e.target as HTMLElement).closest("a");
      const href = a?.getAttribute("href");
      if (!href || !paths.includes(href)) return;
      e.preventDefault();
      window.history.pushState(null, "", href);
      scrollToPath(href, true);
    };

    const onPop = () => scrollToPath(window.location.pathname, true);

    document.addEventListener("click", onClick);
    window.addEventListener("popstate", onPop);
    return () => {
      window.clearTimeout(first);
      document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", onPop);
    };
  }, []);

  return null;
}
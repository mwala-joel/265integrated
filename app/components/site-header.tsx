import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header shell">
      <Link className="brand" href="/" aria-label="265Integrated home">
        <span className="brand-mark">265</span>
        <span>Integrated</span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <a href="mailto:hello@265integrated.com">Start a project</a>
      </nav>
    </header>
  );
}

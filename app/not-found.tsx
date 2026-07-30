import Link from "next/link";

export default function NotFound() {
  return <main id="main"><section className="page-hero"><div className="shell"><p className="eyebrow">404 · Outside the current atlas</p><h1 className="display">This path is not mapped.</h1><p className="lede">Search the atlas or return to the national view.</p><div className="hero-actions"><Link className="button" href="/">Return home</Link><Link className="button secondary" href="/search">Search BHARAT</Link></div></div></section></main>;
}

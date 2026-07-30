import Link from "next/link";

const columns = [
  {
    title: "Atlas",
    links: [["Explore", "/explore"], ["States", "/states"], ["History", "/history"], ["Data", "/data"]],
  },
  {
    title: "Collections",
    links: [["Culture", "/culture"], ["Nature", "/nature"], ["Innovation", "/innovation"], ["Stories", "/stories"]],
  },
  {
    title: "Project",
    links: [["About", "/about"], ["Methodology", "/methodology"], ["Sources", "/sources"], ["GitHub", "https://github.com/SatyajitBeura2468/bharat"]],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-mark">
            BHARAT <span lang="hi">भारत</span>
          </div>
          {columns.map((column) => (
            <div className="footer-column" key={column.title}>
              <h2>{column.title}</h2>
              {column.links.map(([label, href]) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-legal">
          <span>Independent educational project. Not affiliated with the Government of India.</span>
          <span>Evidence-led · Openly attributed · Last platform review July 2026</span>
        </div>
      </div>
    </footer>
  );
}

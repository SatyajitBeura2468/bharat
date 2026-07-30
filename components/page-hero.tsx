export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="page-hero">
      <div className="shell">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display">{title}</h1>
        <p className="lede">{description}</p>
      </div>
    </header>
  );
}

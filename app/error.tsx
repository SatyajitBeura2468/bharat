"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main id="main"><section className="page-hero"><div className="shell"><p className="eyebrow">The atlas paused</p><h1 className="display">Something interrupted this route.</h1><p className="lede">Your navigation is still available. Retry this view when ready.</p><button className="button" type="button" onClick={reset}>Try again</button></div></section></main>;
}

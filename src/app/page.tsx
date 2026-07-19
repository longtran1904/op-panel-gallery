export default function Home() {
	return (
		<main className="exhibition-shell">
			<section className="exhibition-intro" aria-labelledby="exhibition-title">
				<p className="kicker">Personal collection / panel study</p>
				<p className="folio">Foundation draft</p>
				<div className="intro-copy">
					<h1 id="exhibition-title" className="intro-title">
						Manga Panel Gallery
					</h1>
					<div className="foundation-rule" aria-hidden="true" />
					<p className="intro-statement">
						A warm paper surface for a curated sequence of favorite manga panels,
						with ink, notation, and spacing kept quiet enough for the artwork to
						lead.
					</p>
				</div>
				<footer className="intro-footer" aria-label="Exhibition status">
					<span className="kicker">Six-panel vertical slice</span>
					<span className="kicker">Typography and tokens established</span>
				</footer>
			</section>
		</main>
	);
}

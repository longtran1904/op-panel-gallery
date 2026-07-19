import Image from "next/image";
import type { MangaPanel } from "../../types/panel";
import styles from "./panel-gallery.module.css";

interface PanelGalleryProps {
	panels: readonly MangaPanel[];
}

const orientationLabel: Record<MangaPanel["orientation"], string> = {
	portrait: "Portrait",
	landscape: "Landscape",
	square: "Square",
	spread: "Double-page spread",
};

function formatRank(rank: number) {
	return rank.toString().padStart(2, "0");
}

function formatMetadata(panel: MangaPanel) {
	const chapter = panel.chapter === null ? null : `Chapter ${panel.chapter}`;
	const parts = [
		panel.series,
		panel.creator,
		chapter,
		panel.chapterTitle,
		panel.arc,
		panel.publicationYear?.toString(),
		orientationLabel[panel.orientation],
	].filter(Boolean);

	return parts.join(" / ");
}

export function PanelGallery({ panels }: PanelGalleryProps) {
	return (
		<section className={styles.gallerySection} aria-labelledby="gallery-title">
			<header className={styles.sectionHeader}>
				<p className={styles.eyebrow}>Selected sequence</p>
				<h2 id="gallery-title" className={styles.sectionTitle}>
					Six panels arranged as a reading room.
				</h2>
				<p className={styles.sectionText}>
					The sequence keeps each image intact and lets the rhythm come from
					scale, proportion, and marginal notes rather than identical cards.
				</p>
			</header>

			<ol className={styles.panelList}>
				{panels.map((panel) => (
					<li key={panel.id} className={styles.panelItem}>
						<article className={`${styles.panel} ${styles[panel.orientation]}`}>
							<figure className={styles.imageFrame}>
								<Image
									className={styles.image}
									src={panel.image.src}
									alt={panel.image.alt}
									width={panel.image.width}
									height={panel.image.height}
									sizes={
										panel.orientation === "spread"
											? "(min-width: 760px) 88vw, 100vw"
											: "(min-width: 760px) 62vw, 100vw"
									}
									priority={panel.featured}
								/>
							</figure>

							<div className={styles.caption}>
								<div className={styles.captionHeader}>
									<span className={styles.rank}>{formatRank(panel.rank)}</span>
									<h3 className={styles.title}>{panel.title}</h3>
								</div>
								<p className={styles.metadata}>{formatMetadata(panel)}</p>
								<p className={styles.commentary}>{panel.commentary}</p>
							</div>
						</article>
					</li>
				))}
			</ol>
		</section>
	);
}

export function Exhibition({ panels }: PanelGalleryProps) {
	return (
		<div className={styles.exhibition}>
			<section className={styles.intro} aria-labelledby="exhibition-title">
				<p className={styles.kicker}>Personal collection / panel study</p>
				<p className={styles.folio}>Six-panel vertical slice</p>
				<div className={styles.introCopy}>
					<h1 id="exhibition-title" className={styles.introTitle}>
						Manga Panel Gallery
					</h1>
					<div className={styles.rule} aria-hidden="true" />
					<p className={styles.introStatement}>
						A curated sequence of favorite manga panels, paced like a small
						exhibition where paper, ink, and notation stay quiet enough for the
						artwork to lead.
					</p>
				</div>
				<footer className={styles.introFooter} aria-label="Exhibition status">
					<span className={styles.kicker}>{panels.length} panels</span>
					<span className={styles.kicker}>Canonical local records</span>
				</footer>
			</section>

			<PanelGallery panels={panels} />
		</div>
	);
}

import type { MangaPanel } from "../../types/panel";
import { PanelGalleryExperience } from "./panel-gallery-experience";
import styles from "./panel-gallery.module.css";

interface PanelGalleryProps {
	panels: readonly MangaPanel[];
}

export function PanelGallery({ panels }: PanelGalleryProps) {
	return <PanelGalleryExperience panels={panels} />;
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

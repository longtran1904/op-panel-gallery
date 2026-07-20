import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
	formatMetadata,
	formatPosition,
	formatRank,
} from "../../../components/gallery/panel-format";
import styles from "../../../components/gallery/panel-gallery.module.css";
import { panels } from "../../../data/panels";

interface PanelPageProps {
	params: Promise<{
		slug: string;
	}>;
}

function getPanelIndex(slug: string) {
	return panels.findIndex((panel) => panel.slug === slug);
}

function getAdjacentPanel(index: number, direction: -1 | 1) {
	return panels[(index + direction + panels.length) % panels.length];
}

export function generateStaticParams() {
	return panels.map((panel) => ({
		slug: panel.slug,
	}));
}

export async function generateMetadata({
	params,
}: PanelPageProps): Promise<Metadata> {
	const { slug } = await params;
	const index = getPanelIndex(slug);
	const panel = index === -1 ? null : panels[index];

	if (!panel) {
		return {
			title: "Panel not found | Manga Panel Gallery",
		};
	}

	return {
		title: `${panel.title} | Manga Panel Gallery`,
		description: `${panel.series}, ${formatMetadata(panel)}. ${panel.commentary}`,
	};
}

export default async function PanelPage({ params }: PanelPageProps) {
	const { slug } = await params;
	const index = getPanelIndex(slug);

	if (index === -1) {
		notFound();
	}

	const panel = panels[index];
	const previousPanel = getAdjacentPanel(index, -1);
	const nextPanel = getAdjacentPanel(index, 1);

	return (
		<main className="exhibition-shell">
			<article className={styles.detailPage}>
				<Link className={styles.backLink} href="/#gallery-title">
					Gallery
				</Link>

				<div
					className={`${styles.detailPanel} ${styles.standaloneDetail} ${styles[panel.orientation]}`}
				>
					<div className={styles.detailArtwork}>
						<Image
							className={styles.detailImage}
							src={panel.image.src}
							alt={panel.image.alt}
							width={panel.image.width}
							height={panel.image.height}
							sizes="(min-width: 960px) 64vw, 100vw"
							priority
						/>
					</div>

					<section className={styles.detailCopy}>
						<div className={styles.detailTopline}>
							<span>{formatPosition(index, panels.length)}</span>
							<span>{panel.series}</span>
						</div>
						<div className={styles.detailHeader}>
							<p className={styles.rank}>{formatRank(panel.rank)}</p>
							<h1 className={styles.detailTitle}>{panel.title}</h1>
						</div>
						<p className={styles.detailMeta}>{formatMetadata(panel)}</p>
						<p className={styles.detailCommentary}>{panel.commentary}</p>
						<dl className={styles.detailList}>
							<div>
								<dt>Characters</dt>
								<dd>{panel.characters.join(", ")}</dd>
							</div>
							<div>
								<dt>Themes</dt>
								<dd>{panel.themes.join(", ")}</dd>
							</div>
						</dl>
						<nav className={styles.detailControls} aria-label="Panel navigation">
							<Link href={`/panels/${previousPanel.slug}`}>Previous</Link>
							<Link href="/#gallery-title">Close</Link>
							<Link href={`/panels/${nextPanel.slug}`}>Next</Link>
						</nav>
					</section>
				</div>
			</article>
		</main>
	);
}

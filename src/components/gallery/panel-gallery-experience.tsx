"use client";

import { track } from "@vercel/analytics/react";
import Image from "next/image";
import Link from "next/link";
import {
	type KeyboardEvent,
	type MouseEvent,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import type { MangaPanel } from "../../types/panel";
import { formatMetadata, formatPosition, formatRank } from "./panel-format";
import styles from "./panel-gallery.module.css";

interface PanelGalleryExperienceProps {
	panels: readonly MangaPanel[];
}

const panelParam = "panel";

function getPanelAnalyticsProperties(panel: MangaPanel, index: number) {
	return {
		panel_slug: panel.slug,
		panel_title: panel.title,
		panel_series: panel.series,
		panel_rank: panel.rank,
		panel_position: index + 1,
		panel_orientation: panel.orientation,
	};
}

function getCurrentPanelSlug(validSlugs: Set<string>) {
	const params = new URLSearchParams(window.location.search);
	const slug = params.get(panelParam);
	return slug && validSlugs.has(slug) ? slug : null;
}

function writePanelUrl(slug: string, method: "pushState" | "replaceState") {
	const url = new URL(window.location.href);
	url.searchParams.set(panelParam, slug);
	window.history[method]({}, "", `${url.pathname}${url.search}${url.hash}`);
}

function trackPanelPageview(slug: string) {
	window.va?.("pageview", {
		route: "/?panel=[slug]",
		path: `/?${panelParam}=${slug}`,
	});
}

function clearPanelUrl() {
	const url = new URL(window.location.href);
	url.searchParams.delete(panelParam);
	window.history.pushState({}, "", `${url.pathname}${url.search}${url.hash}`);
}

function getFocusableElements(container: HTMLElement) {
	return Array.from(
		container.querySelectorAll<HTMLElement>(
			'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
		),
	).filter((element) => !element.hasAttribute("disabled"));
}

export function PanelGalleryExperience({ panels }: PanelGalleryExperienceProps) {
	const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
	const closeButtonRef = useRef<HTMLButtonElement | null>(null);
	const dialogRef = useRef<HTMLDivElement | null>(null);
	const lastTriggerRef = useRef<HTMLElement | null>(null);
	const validSlugs = useMemo(
		() => new Set(panels.map((panel) => panel.slug)),
		[panels],
	);
	const selectedIndex = panels.findIndex((panel) => panel.slug === selectedSlug);
	const selectedPanel = selectedIndex === -1 ? null : panels[selectedIndex];

	const selectPanel = useCallback(
		(slug: string, method: "pushState" | "replaceState") => {
			if (!validSlugs.has(slug)) {
				return;
			}

			setSelectedSlug(slug);
			writePanelUrl(slug, method);
		},
		[validSlugs],
	);

	const openPanel = useCallback(
		(slug: string, trigger: HTMLElement) => {
			const panelIndex = panels.findIndex((panel) => panel.slug === slug);
			const panel = panels[panelIndex];

			if (panel) {
				track("Panel Open", getPanelAnalyticsProperties(panel, panelIndex));
			}

			lastTriggerRef.current = trigger;
			selectPanel(slug, "pushState");
			trackPanelPageview(slug);
		},
		[panels, selectPanel],
	);

	const closePanel = useCallback((source: "backdrop" | "button" | "escape") => {
		if (selectedPanel) {
			track("Panel Close", {
				...getPanelAnalyticsProperties(selectedPanel, selectedIndex),
				close_source: source,
			});
		}

		setSelectedSlug(null);
		clearPanelUrl();
		window.requestAnimationFrame(() => {
			lastTriggerRef.current?.focus();
		});
	}, [selectedIndex, selectedPanel]);

	const movePanel = useCallback(
		(direction: -1 | 1) => {
			if (selectedIndex === -1) {
				return;
			}

			const nextIndex =
				(selectedIndex + direction + panels.length) % panels.length;
			const nextPanel = panels[nextIndex];

			if (nextPanel) {
				track("Panel Navigation", {
					...getPanelAnalyticsProperties(nextPanel, nextIndex),
					from_panel_slug: selectedPanel?.slug,
					direction: direction === 1 ? "next" : "previous",
				});
				selectPanel(nextPanel.slug, "replaceState");
				trackPanelPageview(nextPanel.slug);
			}
		},
		[panels, selectPanel, selectedIndex, selectedPanel],
	);

	useEffect(() => {
		const syncFromUrl = () => {
			setSelectedSlug(getCurrentPanelSlug(validSlugs));
		};

		syncFromUrl();
		window.addEventListener("popstate", syncFromUrl);
		return () => window.removeEventListener("popstate", syncFromUrl);
	}, [validSlugs]);

	useEffect(() => {
		if (!selectedPanel) {
			return;
		}

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		closeButtonRef.current?.focus();

		const handleKeyDown = (event: globalThis.KeyboardEvent) => {
			if (event.key === "Escape") {
				event.preventDefault();
				closePanel("escape");
				return;
			}

			if (event.key === "ArrowLeft") {
				event.preventDefault();
				movePanel(-1);
				return;
			}

			if (event.key === "ArrowRight") {
				event.preventDefault();
				movePanel(1);
				return;
			}

			if (event.key !== "Tab" || !dialogRef.current) {
				return;
			}

			const focusableElements = getFocusableElements(dialogRef.current);
			const firstElement = focusableElements[0];
			const lastElement = focusableElements[focusableElements.length - 1];

			if (!firstElement || !lastElement) {
				return;
			}

			if (event.shiftKey && document.activeElement === firstElement) {
				event.preventDefault();
				lastElement.focus();
			}

			if (!event.shiftKey && document.activeElement === lastElement) {
				event.preventDefault();
				firstElement.focus();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [closePanel, movePanel, selectedPanel]);

	const handlePanelClick = (
		event: MouseEvent<HTMLAnchorElement>,
		slug: string,
	) => {
		event.preventDefault();
		openPanel(slug, event.currentTarget);
	};

	const handlePanelKeyDown = (
		event: KeyboardEvent<HTMLAnchorElement>,
		slug: string,
	) => {
		if (event.key !== " ") {
			return;
		}

		event.preventDefault();
		openPanel(slug, event.currentTarget);
	};

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
							<Link
								className={styles.imageLink}
								href={`/panels/${panel.slug}`}
								aria-label={`Open ${panel.title}`}
								onClick={(event) => handlePanelClick(event, panel.slug)}
								onKeyDown={(event) => handlePanelKeyDown(event, panel.slug)}
							>
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
							</Link>

							<div className={styles.caption}>
								<div className={styles.captionHeader}>
									<span className={styles.rank}>{formatRank(panel.rank)}</span>
									<h3 className={styles.title}>{panel.title}</h3>
								</div>
								<p className={styles.metadata}>{formatMetadata(panel)}</p>
								<p className={styles.commentary}>{panel.commentary}</p>
								<Link
									className={styles.textLink}
									href={`/panels/${panel.slug}`}
									onClick={(event) => handlePanelClick(event, panel.slug)}
									onKeyDown={(event) => handlePanelKeyDown(event, panel.slug)}
								>
									Open panel
								</Link>
							</div>
						</article>
					</li>
				))}
			</ol>

			{selectedPanel ? (
				<div
					className={styles.overlay}
					role="presentation"
					onMouseDown={(event) => {
						if (event.target === event.currentTarget) {
							closePanel("backdrop");
						}
					}}
				>
					<article
						ref={dialogRef}
						className={`${styles.detailPanel} ${styles[selectedPanel.orientation]}`}
						role="dialog"
						aria-modal="true"
						aria-labelledby="panel-detail-title"
						aria-describedby="panel-detail-commentary"
					>
						<div className={styles.detailArtwork}>
							<Image
								className={styles.detailImage}
								src={selectedPanel.image.src}
								alt={selectedPanel.image.alt}
								width={selectedPanel.image.width}
								height={selectedPanel.image.height}
								sizes="(min-width: 960px) 64vw, 100vw"
								priority
							/>
						</div>

						<section className={styles.detailCopy}>
							<div className={styles.detailTopline}>
								<span>{formatPosition(selectedIndex, panels.length)}</span>
								<span>{selectedPanel.series}</span>
							</div>
							<div className={styles.detailHeader}>
								<p className={styles.rank}>{formatRank(selectedPanel.rank)}</p>
								<h2 id="panel-detail-title" className={styles.detailTitle}>
									{selectedPanel.title}
								</h2>
							</div>
							<p className={styles.detailMeta}>{formatMetadata(selectedPanel)}</p>
							<p id="panel-detail-commentary" className={styles.detailCommentary}>
								{selectedPanel.commentary}
							</p>
							<dl className={styles.detailList}>
								<div>
									<dt>Characters</dt>
									<dd>{selectedPanel.characters.join(", ")}</dd>
								</div>
								<div>
									<dt>Themes</dt>
									<dd>{selectedPanel.themes.join(", ")}</dd>
								</div>
							</dl>
							<nav className={styles.detailControls} aria-label="Panel navigation">
								<button type="button" onClick={() => movePanel(-1)}>
									Previous
								</button>
								<button
									ref={closeButtonRef}
									type="button"
									onClick={() => closePanel("button")}
									aria-label="Close panel detail"
								>
									Close
								</button>
								<button type="button" onClick={() => movePanel(1)}>
									Next
								</button>
								<Link
									className={styles.detailRouteLink}
									href={`/panels/${selectedPanel.slug}`}
								>
									Page
								</Link>
							</nav>
						</section>
					</article>
				</div>
			) : null}
		</section>
	);
}

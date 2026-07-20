import type { MangaPanel } from "../../types/panel";

export const orientationLabel: Record<MangaPanel["orientation"], string> = {
	portrait: "Portrait",
	landscape: "Landscape",
	square: "Square",
	spread: "Double-page spread",
};

export function formatRank(rank: number) {
	return rank.toString().padStart(2, "0");
}

export function formatMetadata(panel: MangaPanel) {
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

export function formatPosition(index: number, total: number) {
	return `${formatRank(index + 1)} / ${formatRank(total)}`;
}

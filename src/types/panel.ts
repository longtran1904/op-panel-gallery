export type PanelOrientation = "portrait" | "landscape" | "square" | "spread";

export interface MangaPanel {
	id: string;
	slug: string;
	rank: number;
	title: string;
	series: string;
	creator: string;
	chapter: number | null;
	chapterTitle?: string;
	publicationYear?: number;
	arc?: string;
	characters: string[];
	themes: string[];
	commentary: string;
	featured?: boolean;
	image: {
		src: string;
		alt: string;
		width: number;
		height: number;
	};
	orientation: PanelOrientation;
}

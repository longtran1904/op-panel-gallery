import { Exhibition } from "../components/gallery/panel-gallery";
import { panels } from "../data/panels";

export default function Home() {
	return (
		<main className="exhibition-shell">
			<Exhibition panels={panels} />
		</main>
	);
}

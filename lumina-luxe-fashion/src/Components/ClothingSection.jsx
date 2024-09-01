import { Clothing } from "../Assets/AssetsLink";
import ClothCard from "./ClothCard";

function ClothingSection() {
	return (
		<section className="container mx-auto py-16" id="clothing">
			<h2 className="mb-8 text-center text-3xl tracking-[.2rem] lg:text-4xl">
				Our Clothings
			</h2>

			<div className="grid grid-cols-1 gap-8 md:grid-cols-5">
				{Clothing.map((project, idx) => (
					<ClothCard key={idx} project={project} />
				)) }
			</div>
		</section>
	);
}

export default ClothingSection;

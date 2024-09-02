import { Shopping } from "../Assets/AssetsLink";

function ShoppingSection() {
	return (
		<section id="shopping">
			<h2 className="my-8 text-center text-3x lg:text-4xl tracking-[.2rem]">
				Shop Here
			</h2>
			<div className="container mx-auto px-4">
				{Shopping.map((shop, idx) => (
					<div
						className="flex items-center border-b-4 border-dotted border-neutral-700/40 py-2"
						key={idx}
					>
						<div className="w-1/3 flex-shrink-0">
							<img
								src={shop.image}
								alt="shopping"
								className="h-[22rem] rounded-3xl aspect-square object-cover"
							/>
						</div>
						<div className=" pl-8">
							<h3 className="text-2xl uppercase">
								{shop.title}
							</h3>
							<p className="mt-4 text-lg">
								{shop.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default ShoppingSection;

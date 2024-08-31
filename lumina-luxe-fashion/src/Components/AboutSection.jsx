import about from "../Assets/Images/about.jpg";
import { About } from "../Assets/AssetsLink";
function AboutSection() {
	return (
		<div className="container mx-auto mb-8" id="about">
			<h2 className="mb-8 text-center text-3xl tracking-[.2rem] lg:text-4xl text-gray-500">
				About Us
			</h2>

			<div className="flex flex-wrap ">
				<div className="w-full p-4 lg:w-1/2">
					<img
						src={about}
						alt="about"
						className="rounded-3xl lg:-rotate-3"
					/>
				</div>
				<div className="w-full px-2 lg:w-1/2">
					<h2 className="text-4xl tracking-[.1rem] lg:text-6xl">
						{About.header}
					</h2>
					<div className="mb-8 mt-1 h-1.5 w-40 bg-rose-300 lg:-rotate-3"></div>
					<p className="m-8 text-2xl leading-relaxed tracking-[.1rem] lg:max-w-xl">
						{About.content}
					</p>
				</div>
			</div>
		</div>
	);
}

export default AboutSection;

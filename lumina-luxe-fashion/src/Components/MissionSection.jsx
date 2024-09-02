import { Mission } from "../Assets/AssetsLink";
import missionVideo from "../Assets/Videos/missionSection.mp4";
import missionImage from "../Assets/Images/missionSection.jpg";

function MissionSection() {
	return (
		<section id="mission">
			<div className="container mx-auto text-center">
				<h2 className="mb-4 text-3xl lg:text-4xl tracking-[.2rem] ">Our Mission</h2>
				<div className="relative flex items-center justify-center">
					<video
						autoPlay
						loop
						muted
						playsInline
						poster={missionImage}
						className="w-[90rem] rounded-3xl"
					>
						<source src={missionVideo} type="video/mp4" />
					</video>
					<div className="absolute h-full w-[90rem] rounded-3xl bg-[#141619]/70"></div>
					<p className="absolute max-w-lg lg:text-1xl">
						{Mission}
					</p>
				</div>
			</div>
		</section>
	);
}

export default MissionSection;

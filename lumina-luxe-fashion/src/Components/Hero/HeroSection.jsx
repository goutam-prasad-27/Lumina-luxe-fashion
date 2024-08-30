import heroVideo from "../../Assets/Videos/HeroSection.mp4";

function HeroSection() {
	return (
		<section className="relative flex h-screen items-center justify-center">
			<div className="absolute inset-0 -z-20 h-full overflow-hidden">
				<video src={heroVideo}></video>
			</div>
		</section>
	);
}

export default HeroSection;

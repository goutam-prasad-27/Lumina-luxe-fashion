import heroVideo from "../Assets/Videos/HeroSection.mp4";
import logo from "../Assets/Images/logo.png";
import heroImage from "../Assets/Images/heroSection.jpg";

function HeroSection() {
	return (
		<section className="relative flex h-screen items-center justify-center">
			<div className="absolute inset-0 -z-100 h-full overflow-hidden">
				<video
					src={heroVideo}
					muted
					autoPlay
					loop
					playsInline
					poster={heroImage}
					className="h-full w-full object-cover"
				></video>
			</div>

			<div>
				<div className="absolute inset-0  bg-gradient-to-bl from-transparent from-55% to-black">
					<div className="relative z-20 flex h-screen flex-col justify-end pb-20">
						<span className="flex items-center justify-center"><img
							src={logo}
							alt="Lumina Luxe"
							className="w-[70vw] p-4"
						/>
						</span>
						<p className="text-sm tracking-[.3rem] text-white uppercase pl-[15.5rem]">
							India
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;

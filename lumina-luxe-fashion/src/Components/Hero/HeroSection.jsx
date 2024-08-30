import heroVideo from "../../Assets/Videos/HeroSection.mp4";
import logo from "../../Assets/Images/logo.png";
import heroImage from "../../Assets/Images/heroSection.jpg";

function HeroSection() {
	return (
		<section className="relative flex h-screen items-center justify-center">
			<div className="absolute inset-0 -z-20 h-full overflow-hidden">
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
				<div className="absolute inset-0 -z-10 bg-gradient-to-bf from-transparent from-70% to-black">
					<div className="relative -z-20 flex h-screen flex-col justify-end pb-20">
						<img
							src={logo}
							alt="Lumina Luxe"
							className="w-full p-10"
						/>
						<p className="pl-10 text-lg tracking-widest text-white uppercase">
							India
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;

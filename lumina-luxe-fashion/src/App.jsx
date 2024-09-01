import React from "react";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import ClothingSection from "./Components/ClothingSection";
import AboutSection from "./Components/AboutSection";
import MissionSection from "./Components/MissionSection";
import ShoppingSection from "./Components/ShoppingSection";
import ReviewSection from "./Components/ReviewSection";

function App() {
	return (
		<main className="overflow-y-hidden text-neutral-200 antialiased">
			<HeroSection />
			<Navbar />
			<ClothingSection />
			<AboutSection />
			<MissionSection />
			<ShoppingSection />
			<ReviewSection />
		</main>
	);
}

export default App;

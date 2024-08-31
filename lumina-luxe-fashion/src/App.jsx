import React from "react";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import ClothingSection from "./Components/ClothingSection";
import AboutSection from "./Components/AboutSection";


function App() {
	return (
		<main className="overflow-y-hidden text-neutral-200 antialiased">
			<HeroSection/>
			<Navbar/>
			<ClothingSection/>
			<AboutSection/>
		</main>
	);
}

export default App;

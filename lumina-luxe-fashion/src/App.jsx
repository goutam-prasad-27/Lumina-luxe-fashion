import React from "react";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Cloths from "./Components/Cloths";


function App() {
	return (
		<main className="overflow-y-hidden text-neutral-200 antialiased">
			<HeroSection/>
			<Navbar/>
			<Cloths/>
		</main>
	);
}

export default App;

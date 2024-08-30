import { useState } from "react";
import logo from "../Assets/Images/logo.png";
import { Links } from "../Assets/AssetsLink";

import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const handleScroll = (event, targetId) => {
		event.preventDefault();
		const targetEl = document.getElementById(targetId);
		if (targetEl) {
			const offsetTop = targetEl.offsetTop - 80;
			window.scrollTo({
				top: offsetTop,
				behavior: "smooth",
			});
		}
		setIsMobileMenuOpen(false);
	};

	return (
		<nav className="fixed top-4 flex w-full flex-col items-center justify-center">
			<div className="flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-md lg:m-2 lg:w-[70rem] lg:rounded-full lg:shadow-lg">
				<img src={logo} alt="Lumina Luxe" width={120} height={22} />
				<div className="hidden space-x-6 lg:flex">
					{Links.map((link, idx) => (
						<a
							key={idx}
							href={`#${link.targetId}`}
							className={`text-sm ${
								idx !== 0
									? "border-l-2 border-neutral-300/20 pl-2"
									: ""
							} hover:opacity-50`}
							onClick={(e) =>
								handleScroll(e, link.targetId)
							}
						>
							{link.text}
						</a>
					))}
				</div>

				<div className="lg:hidden">
					<button onClick={toggleMobileMenu}>
						{isMobileMenuOpen ? <FaTimes /> : <FaBars />}
					</button>
				</div>
			</div>
			{isMobileMenuOpen && (
				<div className="w-full backdrop-blur-lg lg:hidden">
					{Links.map((link, idx) => (
						<a
							key={idx}
							href={`#${link.targetId}`}
							className="block p-4 uppercase tracking-wider"
							onClick={(e) =>
								handleScroll(e, link.targetId)
							}
						>
							{link.text}
						</a>
					))}
				</div>
			)}
		</nav>
	);
}

export default Navbar;

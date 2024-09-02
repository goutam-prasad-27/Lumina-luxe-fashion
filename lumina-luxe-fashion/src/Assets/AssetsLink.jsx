import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";

import mainImage1 from "./Images/img-1.jpg";
import mainImage2 from "./Images/img-2.jpg";
import mainImage3 from "./Images/img-3.jpg";
import mainImage4 from "./Images/img-4.jpg";
import mainImage5 from "./Images/img-5.jpg";
import mainImage6 from "./Images/img-6.jpg";
import mainImage7 from "./Images/img-7.jpg";
import mainImage8 from "./Images/img-8.jpg";
import mainImage9 from "./Images/img-9.jpg";
import mainImage10 from "./Images/img-10.jpg";

import forHer from "./Images/forHer.jpg";
import forHim from "./Images/forHim.jpg";
import forUs from "./Images/forUs.jpg";

export const Links = [
	{ text: "Clothing", targetId: "clothing" },
	{ text: "About", targetId: "about" },
	{ text: "Mission", targetId: "mission" },
	{ text: "Shopping", targetId: "shopping" },
	{ text: "Review", targetId: "review" },
	{ text: "Contact", targetId: "contact" },
];

export const Clothing = [
	{
		image: mainImage1,
		title: "Emerald Chic",
		description:
			"A captivating ensemble featuring an oversized green jacket cinched at the waist, paired with bold red high-heeled shoes against a minimalist backdrop.",
	},
	{
		image: mainImage2,
		title: "Coastal Chic",
		description:
			"Effortless summer style: a relaxed fit grey tee paired with breezy white shorts, embodying laid-back coastal elegance.",
	},
	{
		image: mainImage3,
		title: "Bohemian Chic",
		description:
			"A flowing, earth-toned skirt paired with a simple white top, capturing the essence of bohemian chic.",
	},
	{
		image: mainImage4,
		title: "Twilight Chic",
		description:
			"A dynamic silhouette against the night sky, showcasing a street-style ensemble mid-motion.",
	},
	{
		image: mainImage5,
		title: "Vest Chic",
		description:
			"Sleek navy vest paired with a crisp white shirt for a modern, smart-casual look.",
	},
	{
		image: mainImage6,
		title: "Cowboy Chic",
		description:
			"A silhouette in a wide-brimmed hat and classic vest, embodying rugged elegance at dusk.",
	},
	{
		image: mainImage7,
		title: "Rebel Chic",
		description:
			"A striking pose in a black leather jacket and distressed denim, illuminated by the night’s glow.",
	},
	{
		image: mainImage8,
		title: "Urban Chic",
		description:
			"High-waisted trousers paired with a relaxed white shirt, accented by suspenders, create a timeless yet modern ensemble.",
	},
	{
		image: mainImage9,
		title: "Street Chic",
		description:
			"Sleek black and white ensemble with bold sneakers, perfect for urban adventures.",
	},
	{
		image: mainImage10,
		title: "Retro Chic",
		description:
			"A poised stance in a textured tweed jumpsuit paired with a bold red blazer.",
	},
];

export const Shopping = [
	{
		number: "01.",
		image: forHer,
		title: "For Her",
		description:
			"Welcome to a world of fashion designed exclusively for ladies! Step in and explore the latest in fashion that celebrates femininity and sophistication.",
	},
	{
		number: "02.",
		image: forHim,
		title: "For Him",
		description:
			"Welcome to a hub of style crafted exclusively for boys and men! Dive into the latest fashion that embodies masculinity and elegance.",
	},
	{
		number: "03.",
		image: forUs,
		title: "For Us",
		description:
			"Welcome to a stylish haven for couples! Explore the latest in couple’s fashion and step out in style together, showcasing your love and sophistication.",
	},
];

export const About = {
	header: "Discover the Essence of Elegance with Lumina Luxe",
	content: "Welcome to Lumina Luxe, where elegance meets innovation. Our brand is dedicated to crafting timeless, luxurious fashion pieces that empower you to shine with confidence and grace. Discover the perfect blend of sophistication and modernity with Lumina Luxe.",
};

export const Mission =
	"At Lumina Luxe, our mission is to blend timeless elegance with innovative design, empowering individuals to express their unique style with confidence and sophistication.";

export const Review = {
	name: "Isabella Hart",
	profession: "Fashion Critic",
	content: "Lumina Luxe epitomizes elegance and sophistication, offering timeless fashion pieces that exude glamour and allure, making every wearer feel like a star on the red carpet.",
};

export const Contact = [
	{
		key: "address",
		value: "Address: 123 Fashion Street, Bandra West, Mumbai, Maharashtra, India",
	},
	{
		key: "phone",
		value: "Phone: +91 98765 43210",
	},
	{
		key: "email",
		value: "Email: contact@luminaluxe.in",
	},
];

export const Social = [
	{
		href: "http://instagram.com/",
		icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
	},
	{
		href: "http://x.com/",
		icon: <FaTwitter fontSize={30} className="hover:opacity-80" />,
	},
	{
		href: "http://facebook.com/",
		icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
	},
];

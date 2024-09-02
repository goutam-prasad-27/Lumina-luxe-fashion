import { Social } from "../Assets/AssetsLink";

function FooterSection() {
	return (
		<div className="mb-8 mt-20">
			<div className="flex items-center justify-center gap-8">
				{Social.map((link, idx) => (
					<a
						key={idx}
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
					>
						{link.icon}
					</a>
				))}
			</div>
		</div>
	);
}

export default FooterSection;

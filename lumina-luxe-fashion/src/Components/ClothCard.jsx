function ClothCard({ project }) {
	return (
		<div>
			<img
				src={project.image}
				alt={project.title}
				className="rounded-3xl p-2 h-[20rem] w-[20rem]  object-cover"
			/>
			<div className="p-4">
				<h3 className="mb-2 text-2xl font-bold">
					{project.title}
				</h3>
				<p className="text-sm"> {project.description}</p>
			</div>
		</div>
	);
}

export default ClothCard;

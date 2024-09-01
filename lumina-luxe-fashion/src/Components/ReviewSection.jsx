import reviewImage from "../Assets/Images/reviewSection.jpg";
import { Review } from "../Assets/AssetsLink";
import customer1 from "../Assets/Images/customer-1.jpg";
import customer2 from "../Assets/Images/customer-2.jpg";
import customer3 from "../Assets/Images/customer-3.jpg";
import customer4 from "../Assets/Images/customer-4.jpg";

function ReviewSection() {
	return (
		<section className="container mx-auto mb-8 mt-12 " id="review">
			<div className="flex flex-col">
				<p className="mb-10 text-3xl leading-normal tracking-[.1rem] lg:mx-40 lg:mt-40 lg:text-[3.5rem]">
					{Review.content}
				</p>
				<div className="flex items-center justify-center gap-6">
					<img
						src={reviewImage}
						alt={Review.name}
						className="w-[80px] aspect-square object-cover rounded-full border"
					/>
					<div className="tracking-[.1rem] ">
						<h6>{Review.name}</h6>
						<p className="text-sm text-neutral-500">
							{Review.profession}
						</p>
					</div>
				</div>
			</div>

			<div className="mt-14 flex flex-col items-center justify-center gap-2 md:flex-row">
				{[customer1, customer2, customer3, customer4].map(
					(customer, idx) => (
						<img
							key={idx}
							src={customer}
							alt="customer"
							className="h-[300px] w-[200px] rounded-t-3xl object-cover"
						/>
					)
				)}
			</div>
		</section>
	);
}

export default ReviewSection;

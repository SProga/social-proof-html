const testimonials = document.querySelectorAll(".testimonial");

console.log(testimonials);

let stars = document.querySelectorAll(".stars");

testimonials.forEach((testimonial, index) => {
	testimonial.style.marginTop = `${index * 40}px`;
});

let star_img = "./images/icon-star.svg";

stars.forEach((star) => {
	let count = 0;
	while (count < 5) {
		let img = document.createElement("img");
		img.src = star_img;
		star.append(img);
		count++;
	}
});

const testimonial_example = {
	name: "Chad Proverbs",
	status: "Verified User",
	text: "Lorem ipsum dolor, sit amet",
};

function addTestimonial(testimonial) {
	let testimonial_template = `<div class="testimonial">
    <div class="testimonial__info">
        <img class="testimonial__image" src="./images/image-irene.jpg" alt="" />
        <div class="testimonial__personal__info">
            <p class="mb-xs">${testimonial.name}</p>
            <p class="testimonial__status">${testimonial.status}</p>
        </div>
    </div>
    <p class="testimonial__text">"${testimonial.text}"</p>
    </div>`;

	let testimonials_list = document.querySelector(".testimonials");
	testimonials_list.innerHTML += testimonial_template;
}

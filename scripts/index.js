/** @format */
import { data, catagary } from "./data.js";
import {
	renderNav,
	renderFooter,
	renderlocate,
	setupAddToCart,
	setupLikeBtns,
	createProductCard,
} from "./repetedModules.js";

renderNav();
renderFooter();
renderlocate();

let sliderChilds = data.map((c) => createProductCard(c)).reduce((p, c) => p + " " + c, "");

document.addEventListener("DOMContentLoaded", function () {
	const carousel = document.querySelector(".carousel");

	carousel.innerHTML = sliderChilds;

	const arrowBtns = document.querySelectorAll(".wrapper i");
	const wrapper = document.querySelector(".wrapper");

	const firstCard = carousel.querySelector(".product-card ");
	const firstCardWidth = firstCard.offsetWidth; //widht used later for calculating scroll movement.

	let isDragging = false,
		startX,
		startScrollLeft,
		timeoutId;

	const dragStart = (e) => {
		// this func for mouse dragging
		isDragging = true;
		carousel.classList.add("dragging");
		startX = e.pageX; //provides the horizontal coordinate of the mouse pointer relative to the entire document.
		startScrollLeft = carousel.scrollLeft;
		console.log("erfg", carousel.scrollLeft, e.pageX); // Fixed typo "crousel" to "carousel"
	};

	const dragging = (e) => {
		if (!isDragging) return;

		const newScrollLeft = startScrollLeft - (e.pageX - startX);

		if (newScrollLeft <= 0 || newScrollLeft >= carousel.scrollWidth - carousel.offsetWidth) {
			isDragging = false;
			return;
		}

		carousel.scrollLeft = newScrollLeft;
	};

	const dragStop = () => {
		isDragging = false;
		carousel.classList.remove("dragging");
	};

	const autoPlay = () => {
		if (window.innerWidth < 800) return;

		const totalCardWidth = carousel.scrollWidth;
		const maxScrollLeft = totalCardWidth - carousel.offsetWidth;

		if (carousel.scrollLeft >= maxScrollLeft) return;

		timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2000);
	};

	carousel.addEventListener("mousedown", dragStart);
	carousel.addEventListener("mousemove", dragging);
	document.addEventListener("mouseup", dragStop);
	wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
	wrapper.addEventListener("mouseleave", autoPlay);

	// scroll the carousel left and right
	arrowBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
		});
	});

	setupAddToCart();
	setupLikeBtns();
});

let flex_card = document.getElementById("flex-card");
flex_card.innerHTML = sliderChilds;

let catagarydata = catagary
	.map(
		(c, count) =>
			`
			<li
					class="card-large card-light"
					id="sup-dog"
				>
					<div class="card-image">
						<img
							src="${c.image}"
						/>
					<ul>
						${c.title}
						<li><a href="#">${c.li5}</a></li>
						<li><a href="#">${c.li1}</a></li>
						<li><a href="#">${c.li2}</a></li>
						<li><a href="#">${c.li3}</a></li>
						<li><a href="#">${c.li4}</a></li>

						<button class="btn btn-outline-light">
							Shop All<span class="material-symbols-outlined"> > </span>
						</button>
					</ul>
					</div>
				</li>`
	)
	.reduce((p, c) => p + " " + c, "");

let catagarycards = document.getElementById("shop-pets");
catagarycards.innerHTML = catagarydata;

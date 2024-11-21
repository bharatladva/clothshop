/** @format */
import { data, catagary } from "./data.js";
import { renderNav, renderFooter, renderlocate } from "./repetedModules.js";
renderNav();
renderFooter();
renderlocate();

let sliderChilds = data
	.map(
		(c, count) =>
			`
			<a class="card" href="./prodcutCard.html?id=${count}">
					<div class="img">
						<img
							src="${c.image}"
							alt=""
							draggable="false"
						/>
					</div>
					<h2>${c.title}</h2>
					<span>${c.description}</span>
				</a>
				`
	)
	.reduce((p, c) => p + " " + c, "");
// [1, 2, 3, 3].reduce((prev, curn) => {
// 	console.log(prev, curn);
// 	return curn + prev;
// }, 0);

document.addEventListener("DOMContentLoaded", function () {
	const carousel = document.querySelector(".carousel");

	carousel.innerHTML = sliderChilds;

	const arrowBtns = document.querySelectorAll(".wrapper i");
	const wrapper = document.querySelector(".wrapper");

	const firstCard = carousel.querySelector(".card");
	const firstCardWidth = firstCard.offsetWidth;

	let isDragging = false,
		startX,
		startScrollLeft,
		timeoutId;

	const dragStart = (e) => {
		// this func for mouse daraging
		isDragging = true;
		carousel.classList.add("dragging");
		startX = e.pageX; //provides the horizontal coordinate of the mouse pointer relative to the entire document.
		startScrollLeft = carousel.scrollLeft;
	};

	const dragging = (e) => {
		if (!isDragging) return;

		// Calculate the new scroll position
		const newScrollLeft = startScrollLeft - (e.pageX - startX);

		// Check if the new scroll position exceeds
		// the carousel boundaries
		if (newScrollLeft <= 0 || newScrollLeft >= carousel.scrollWidth - carousel.offsetWidth) {
			// If so, prevent further dragging
			isDragging = false;
			return;
		}

		// Otherwise, update the scroll position of the carousel
		carousel.scrollLeft = newScrollLeft;
	};

	const dragStop = () => {
		isDragging = false;
		carousel.classList.remove("dragging");
	};

	const autoPlay = () => {
		// Return if window is smaller than 800
		if (window.innerWidth < 800) return;

		// Calculate the total width of all cards
		const totalCardWidth = carousel.scrollWidth;

		// Calculate the maximum scroll position
		const maxScrollLeft = totalCardWidth - carousel.offsetWidth;

		// If the carousel is at the end, stop autoplay
		if (carousel.scrollLeft >= maxScrollLeft) return;

		// Autoplay the carousel after every 2500ms
		timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
	};

	carousel.addEventListener("mousedown", dragStart);
	carousel.addEventListener("mousemove", dragging);
	document.addEventListener("mouseup", dragStop);
	wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
	wrapper.addEventListener("mouseleave", autoPlay);

	// Add event listeners for the arrow buttons to
	// scroll the carousel left and right
	arrowBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
		});
	});
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
					</div>
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
				</li>`
	)
	.reduce((p, c) => p + " " + c, "");

let catagarycards = document.getElementById("shop-pets");
catagarycards.innerHTML = catagarydata;

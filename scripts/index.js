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
			   <a href="./prodcutCard.html?id=${count}">

                <div class="product-card" id="product-card">
                <div class="product-img">
                <span class="discount-tag">
                ${100 - Math.round((c.price * 100) / c.discount)}% off</span>
                <img src="${c.image}"
                alt="card1" class="product-img">
                <div class="whislist-btn"><p>add to whislist</p></div>
                </div>
                <div class="card-texts">
                <h1>${c.title}</h1>
                <p>${c.description}</p>
                <h2>$${c.price}  <span> $${c.discount}</span></h2>
                </div>
                </div>

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

	const firstCard = carousel.querySelector(".product-card ");
	const firstCardWidth = firstCard.offsetWidth; //widht used later for calculating scroll movement.

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
		console.log("erfg", crousel.scrollLeft, e.pageX);
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
		if (window.innerWidth < 800) return; // stop is in smole srcreen

		const totalCardWidth = carousel.scrollWidth; // Calculate the total width of all cards

		// Calculate the maximum scroll position
		const maxScrollLeft = totalCardWidth - carousel.offsetWidth;

		// If the carousel is at the end, stop autoplay
		if (carousel.scrollLeft >= maxScrollLeft) return;

		// Autoplay the carousel after every 2500ms
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

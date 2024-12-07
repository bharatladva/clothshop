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
                <span class="cart-tag icone cart-icone" data-id="${c.id}" id="addToCartBtn" ></span>
                <img src="${c.image}"
                alt="card1" class="product-img">
                <div class="whislist-btn">
								<p id="likeBtn"  data-id="${c.id}">add to whislist</p>
								</div>
                </div>
                <div class="card-texts">
                <h1>${c.title}</h1>
                <p>${c.description}</p>
                <h2>$${c.price}  <span class="discount-tag"> $${c.discount}% off</span></h2>
                </div>
                </div>

                </a>

			`
	)
	.reduce((p, c) => p + " " + c, "");

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
	}); // <-- Closing bracket for forEach

	const addToCartBtnS = document.querySelectorAll("#addToCartBtn");
	addToCartBtnS.forEach((btn) => {
		btn.addEventListener("click", (event) => {
			event.preventDefault();
			const itemId = Number(event.target.dataset.id);
			let cart = JSON.parse(localStorage.getItem("cart")) || [];
			if (!cart.includes(itemId)) {
				cart.push(itemId);
				localStorage.setItem("cart", JSON.stringify(cart));
				// alert("Product liked!");
			} else {
				// alert("Product already liked!");
			}
		});
	});

	const likeBtns = document.querySelectorAll("#likeBtn");
	likeBtns.forEach((btn) => {
		btn.addEventListener("click", (event) => {
			event.preventDefault();
			const itemId = Number(event.target.dataset.id);
			let likes = JSON.parse(localStorage.getItem("likes")) || [];
			if (!likes.includes(itemId)) {
				likes.push(itemId);
				localStorage.setItem("likes", JSON.stringify(likes));
				// alert("Product liked!");
			} else {
				// alert("Product already liked!");
			}
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

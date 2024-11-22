/** @format */
import { renderNav, renderFooter, renderlocate } from "./repetedModules.js";
renderNav();
renderFooter();
renderlocate();

import { data } from "./data.js";

// Get cart items from localStorage
let likes = localStorage.getItem("likes");

if (likes) {
	likes = JSON.parse(likes).map((id) => Number(id)); // Ensure the cart IDs are numbers
	console.log("likes:", likes);
} else {
	console.log("likes is empty");
}

const liketemsContainer = document.getElementById("cart-items");
function renderLikeItems() {
	// Find the products in the data array that match the cart items
	const likeItems = data.filter((item) => likes.includes(item.id));

	likeItems.forEach((item, count) => {
		const likeItemDiv = document.createElement("div");
		likeItemDiv.classList.add("cart-item");

		likeItemDiv.innerHTML = `


    <a  href="./prodcutCard.html?id=${count}">

				  <img src="${item.image}" alt="${item.title}" /> 	</a>
      <div class="cart-item-info">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-price">Price: <span id="price-${item.id}">${item.price}</span>
			  </div>
      </div>
      <div class="quantity-adjust">
			 <button type="button" class="btn btn-filled-dark" id="addToCartBtn">Add To Cart</button>
        <button class="icone delete-icone" data-id="${item.id}"></button>
      </div>

    `;

		// Append the cart item to the container
		liketemsContainer.appendChild(likeItemDiv);
	});

	document.querySelectorAll(".delete-icone").forEach((button) => {
		button.addEventListener("click", handleDelete);
	});
	const addToCartBtn = document.getElementById("addToCartBtn");
	addToCartBtn.addEventListener("click", handleaddToCart);
}

function handleaddToCart() {
	e.stopPropagation();
	let cart = JSON.parse(localStorage.getItem("cart")) || []; // Get cart or initialize it
	if (!cart.includes(item.id)) {
		cart.push(item.id); // Add product ID if not already in cart
		localStorage.setItem("cart", JSON.stringify(cart)); // Update local storage
		alert("Product added to cart!");
	} else {
		alert("Product already in cart!");
	}
}

function handleDelete(event) {
	const itemId = Number(event.target.dataset.id);
	console.log(itemId);

	// Remove item from cart array
	likes = likes.filter((id) => id !== itemId);

	// Update localStorage
	localStorage.setItem("likes", JSON.stringify(likes));

	// Re-render the cart items
	renderLikeItems();
}

renderLikeItems();

/** @format */

import { renderNav, renderFooter, renderlocate } from "../repetedModules.js";
renderNav();
renderFooter();
renderlocate();

import { data } from "../data.js";

// Get cart items from localStorage
let cart = localStorage.getItem("cart");

if (cart) {
	cart = JSON.parse(cart).map((id) => Number(id)); // Ensure the cart IDs are numbers
	console.log("Cart:", cart);
} else {
	console.log("Cart is empty");
}
// Initial quantities for each product in the cart
let quantities = {};

// Function to render the cart items
function renderCartItems() {
	const cartItemsContainer = document.getElementById("cart-items");
	cartItemsContainer.innerHTML = ""; // Clear the container before rendering

	// Find the products in the data array that match the cart items
	const cartItems = data.filter((item) => cart.includes(item.id));

	cartItems.forEach((item) => {
		// Default quantity is 1 if not already set
		quantities[item.id] = quantities[item.id] || 1;

		// Create a new div for each cart item
		const cartItemDiv = document.createElement("div");
		cartItemDiv.classList.add("cart-item");

		cartItemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <div class="cart-item-info">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-price">Price: <span id="price-${item.id}">${
			item.price * quantities[item.id]
		}</span>
			  </div>
      </div>
      <div class="quantity-adjust">
        <button class="decrease-btn" data-id="${item.id}">-</button>
        <input type="text" id="quantity-${item.id}" value="${quantities[item.id]}" readonly />
        <button class="increase-btn" data-id="${item.id}">+</button>
        <button class="icone delete-icone" data-id="${item.id}"></button>


      </div>
    `;

		// Append the cart item to the container
		cartItemsContainer.appendChild(cartItemDiv);
	});

	// Add event listeners for increase and decrease buttons after rendering
	document.querySelectorAll(".increase-btn").forEach((button) => {
		button.addEventListener("click", handleIncrease);
	});
	document.querySelectorAll(".decrease-btn").forEach((button) => {
		button.addEventListener("click", handleDecrease);
	});
	document.querySelectorAll(".delete-icone").forEach((button) => {
		button.addEventListener("click", handleDelete);
	});
}

// Increase quantity and update price
function handleIncrease(event) {
	const itemId = Number(event.target.dataset.id);
	quantities[itemId]++;
	updateCartDisplay(itemId);
}

// Decrease quantity and update price
function handleDecrease(event) {
	const itemId = Number(event.target.dataset.id);
	if (quantities[itemId] > 1) {
		quantities[itemId]--;
		updateCartDisplay(itemId);
	}
}

// Delete item from cart and update localStorage
function handleDelete(event) {
	const itemId = Number(event.target.dataset.id);
	console.log(itemId);

	// Remove item from cart array
	cart = cart.filter((id) => id !== itemId);

	// Update localStorage
	localStorage.setItem("cart", JSON.stringify(cart));

	// Re-render the cart items
	renderCartItems();
}

// Update the cart display after a change in quantity
function updateCartDisplay(itemId) {
	// Update quantity display
	document.getElementById(`quantity-${itemId}`).value = quantities[itemId];

	// Update the price based on the new quantity
	const product = data.find((item) => item.id === itemId);
	document.getElementById(`price-${itemId}`).innerText = product.price * quantities[itemId];
}

// Initial render
renderCartItems();

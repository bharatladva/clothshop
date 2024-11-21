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

let flex_card = document.getElementById("flex-card");
function renderLikeItems() {
	// Find the products in the data array that match the cart items
	const likeItems = data.filter((item) => likes.includes(item.id));

	likeItems.forEach((item, count) => {
		const likeItemDiv = document.createElement("div");
		likeItemDiv.classList.add("card");

		likeItemDiv.innerHTML = `


    <a class="card" href="./prodcutCard.html?id=${count}">
					<div class="img">
						<img
							src="${item.image}"
							alt=""
							draggable="false"
						/>
					</div>
					<h2>${item.title}</h2>
          <div class="cart-item-price">Price: <span id="price-${item.id}">${item.price}</span></div>
					<span>${item.description}</span>
           <button class="icone delete-icone" data-id="${item.id}"></button>
				</a>
    `;

		// Append the cart item to the container
		flex_card.appendChild(likeItemDiv);
	});
}

renderLikeItems();

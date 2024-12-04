/** @format */

import { data, catagary } from "./data.js";
import { renderNav, renderFooter, renderlocate } from "./repetedModules.js";
renderNav();
renderFooter();
renderlocate();

const rangeInput = document.getElementById("rangeInput");
const rangeValue = document.getElementById("rangeValue");
const discountInput = document.getElementById("discountInput");
const discountValue = document.getElementById("discountValue");
const resultContainer = document.getElementById("flex-card");
const colorCheckboxes = document.querySelectorAll(".colorCheckbox");

// Function to get selected colors
function getSelectedColors() {
	const selectedColors = Array.from(colorCheckboxes)
		.filter((checkbox) => checkbox.checked)
		.map((checkbox) => checkbox.value);
	return selectedColors;
}

// Function to update the results when filters change
function updateResults() {
	const priceLimit = Number(rangeInput.value);
	const discountLimit = Number(discountInput.value);
	const selectedColors = getSelectedColors();

	// Filter items based on price, discount, and selected colors
	const filteredItems = data.filter((item) => {
		const withinPriceRange = item.price >= 0 && item.price <= priceLimit;
		const withinDiscountRange = item.discount >= 0 && item.discount <= discountLimit;
		const matchesSelectedColors =
			selectedColors.length === 0 ||
			item.color.some((color) => selectedColors.includes(color));

		return withinPriceRange && withinDiscountRange && matchesSelectedColors;
	});

	displayResults(filteredItems);
}

// Event listeners for range input, discount input, and color checkboxes
rangeInput.addEventListener("input", function () {
	rangeValue.textContent = rangeInput.value;
	updateResults();
});

discountInput.addEventListener("input", function () {
	discountValue.textContent = discountInput.value;
	updateResults();
});

colorCheckboxes.forEach((checkbox) => {
	checkbox.addEventListener("change", updateResults);
});

// Function to display filtered results
function displayResults(items) {
	resultContainer.innerHTML = ""; // Clear previous results
	items.forEach((item) => {
		const itemElement = document.createElement("div");
		itemElement.classList.add("item");
		itemElement.innerHTML = `





		<a class="card" href="./prodcutCard.html?id=${item.id}">
					<div class="img">
						<img
							src="${item.image}"
							alt=""
							draggable="false"
						/>
					</div>
					<h2>${item.title}</h2>
					<span>${item.price}</span>
				   <!--	<span>${item.discount}</span>   -->
				</a>
        `;
		resultContainer.appendChild(itemElement);
	});
}

// Initial display of results
updateResults();

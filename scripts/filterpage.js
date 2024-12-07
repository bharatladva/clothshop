/** @format */

import { data, catagary } from "./data.js";
import { renderNav, renderFooter, renderlocate, createProductCard } from "./repetedModules.js";
renderNav();
renderFooter();
renderlocate();

const rangeInput = document.getElementById("rangeInput");
const rangeValue = document.getElementById("rangeValue");
const discountInput = document.getElementById("discountInput");
const discountValue = document.getElementById("discountValue");
const resultContainer = document.getElementById("flex-card");
const colorCheckboxes = document.querySelectorAll(".colorCheckbox");
const categoryCheckboxes = document.querySelectorAll(".categoryCheckbox");
const brandCheckboxes = document.querySelectorAll(".brandCheckbox");
const sizeCheckboxes = document.querySelectorAll(".sizeCheckbox");

// Function to get selected colors
function getSelectedColors() {
	const selectedColors = Array.from(colorCheckboxes)
		.filter((checkbox) => checkbox.checked)
		.map((checkbox) => checkbox.value);
	return selectedColors;
}
function getSelectedCategories() {
	const selectedCategories = Array.from(categoryCheckboxes)
		.filter((checkbox) => checkbox.checked)
		.map((checkbox) => checkbox.value);
	return selectedCategories;
}

function getSelectedBrands() {
	const selectedBrands = Array.from(brandCheckboxes)
		.filter((checkbox) => checkbox.checked)
		.map((checkbox) => checkbox.value);
	return selectedBrands;
}

function getSelectedSizes() {
	const selectedSizes = Array.from(sizeCheckboxes)
		.filter((checkbox) => checkbox.checked)
		.map((checkbox) => checkbox.value);
	return selectedSizes;
}

// Function to update the results when filters change
function updateResults() {
	const priceLimit = Number(rangeInput.value);
	const discountLimit = Number(discountInput.value);
	const selectedColors = getSelectedColors();
	const selectedCategories = getSelectedCategories();
	const selectedBrands = getSelectedBrands();
	const selectedSizes = getSelectedSizes();

	// Filter items based on price, discount, and selected colors
	const filteredItems = data.filter((item) => {
		const withinPriceRange = item.price >= 0 && item.price <= priceLimit;
		const withinDiscountRange = item.discount >= 0 && item.discount <= discountLimit;
		const matchesSelectedColors =
			selectedColors.length === 0 ||
			item.color.some((color) => selectedColors.includes(color));
		const matchesSelectedCategories =
			selectedCategories.length === 0 ||
			item.catagary.some((category) => selectedCategories.includes(category));
		const matchesSelectedBrands =
			selectedBrands.length === 0 ||
			item.brand.some((brand) => selectedBrands.includes(brand));
		const matchesSelectedSizes =
			selectedSizes.length === 0 || item.size.some((size) => selectedSizes.includes(size));

		return (
			withinPriceRange &&
			withinDiscountRange &&
			matchesSelectedColors &&
			matchesSelectedCategories &&
			matchesSelectedBrands &&
			matchesSelectedSizes
		);
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

	categoryCheckboxes.forEach((checkbox) => {
		checkbox.addEventListener("change", updateResults);
	});
	brandCheckboxes.forEach((checkbox) => {
		checkbox.addEventListener("change", updateResults);
	});
	sizeCheckboxes.forEach((checkbox) => {
		checkbox.addEventListener("change", updateResults);
	});
});

// Function to display filtered results
function displayResults(items) {
	resultContainer.innerHTML = ""; // Clear previous results
	items.forEach((c) => {
		const itemElement = document.createElement("div");
		itemElement.classList.add("item");
		itemElement.innerHTML = createProductCard(c);
		resultContainer.appendChild(itemElement);
	});
}

// Initial display of results
updateResults();

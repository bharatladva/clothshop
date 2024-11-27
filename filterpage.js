/** @format */

import { data, catagary } from "./data.js";

const rangeInput = document.getElementById("rangeInput");
const rangeValue = document.getElementById("rangeValue");
const resultContainer = document.getElementById("resultContainer");

// Update the span with the current range value and filter items based on price
rangeInput.addEventListener("input", function () {
	const value = Number(rangeInput.value);
	rangeValue.textContent = value;
	console.log(value); // Log the value to the console

	// Filter items from the data array that have a price within the range
	const filteredItems = data.filter((item) => item.price >= 0 && item.price <= value);

	// Display the filtered items in the console and resultContainer (optional)
	console.log(filteredItems);
	displayResults(filteredItems);
});

// Function to display filtered results
function displayResults(items) {
	resultContainer.innerHTML = ""; // Clear previous results
	items.forEach((item) => {
		const itemElement = document.createElement("div");
		itemElement.classList.add("item");
		itemElement.innerHTML = `
			<h3>${item.title}</h3>
			<p>Price: $${item.price}</p>
			<p>${item.description}</p>
			<img src="${item.image}" alt="${item.title}" width="100">
		`;
		resultContainer.appendChild(itemElement);
	});
}

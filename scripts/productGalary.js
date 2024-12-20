/** @format */

import { data } from "./data.js";
import {
	renderNav,
	renderFooter,
	renderlocate,
	productGalaryCard,
	createProductCard,
} from "./repetedModules.js";

renderNav();
renderFooter();
renderlocate();

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const forto = urlParams.get("for");

let firstTenCardsData =
	forto == "Woman"
		? data.slice(0, 10) // First 10 items if 'forto' is 'woman'
		: data.slice(10, 20); // Next 10 items if 'forto' is not 'woman'

// Render slider with productGalaryCard
let firstTenCardsSlider = firstTenCardsData
	.map((c) => productGalaryCard(c))
	.reduce((p, c) => p + " " + c, "");
const slider = document.querySelector(".slider");
slider.innerHTML = firstTenCardsSlider;

// Render flex card with createProductCard
let firstTenCardsFlexCard = firstTenCardsData
	.map((c) => createProductCard(c))
	.reduce((p, c) => p + " " + c, "");
let flex_card = document.getElementById("flex-card");
flex_card.innerHTML = firstTenCardsFlexCard;

function activate(e) {
	const items = document.querySelectorAll(".item");
	if (e.target.matches(".next")) {
		slider.append(items[0]);
	}
	if (e.target.matches(".prev")) {
		slider.prepend(items[items.length - 1]);
	}
}

document.addEventListener("click", activate, false);

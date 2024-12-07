/** @format */

import { data } from "./data.js";
import {
	renderNav,
	renderFooter,
	renderlocate,
	setupAddToCart,
	setupLikeBtns,
	createProductCard,
} from "./repetedModules.js";
renderNav();
renderFooter();
renderlocate();

// get the id from search bar
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get("id");

console.log("Product ID:", productId);

const product = data.find((item) => item.id == productId);

if (product) {
	console.log("Product found:", product);
} else {
	console.log("Product not found for ID:", productId);
}

let productChilds = `
   <div class="product_container">
        <div class="image-container">
            <img src="${product.image}" alt="img">
        </div>
        <div class="product-details">
            <h1 class="title">${product.title}</h1>
            <p class="description">${product.description}</p>
            <p class="price">${product.price} <span class="discount">(${product.discount}% off)</span></p>
            <p class="colors"> Colors:
                <span class="color-box red"></span>
                <span class="color-box green"></span>
                <span class="color-box blue"></span>
            </p>
            <p class="sizes"> Sizes:
                <span>S</span> <span>M</span> <span>L</span> <span>XL</span>
            </p>
						<div class="btns-div">
            <button type="button" class="btn btn-outline-dark">buy now</button>
					  <button type="button" class="btn btn-filled-dark" id="addToCartBtn">Add To Cart</button>
					  <button type="button" class="btn btn-outline-like" id="likeBtn">Like</button>
						</div>
        </div>
    </div>

`;

let product_wrapper = document.getElementById("product-wrapper");
product_wrapper.innerHTML = productChilds;

// Generate grid of products
let gridChilds = data
	.map((c, count) => {
		let className = "";
		switch (count) {
			case 2:
			case 5:
			case 9:
				className = "tall";
				break;
			case 3:
			case 8:
				className = "wide";
				break;
			case 6:
				className = "big";
				break;
			default:
				className = "";
		}

		return createProductCard(c);
	})
	.reduce((p, c) => p + " " + c, ""); // Combine all the mapped elements into a single string

let grid_wrapper = document.getElementById("grid-wrapper");
grid_wrapper.innerHTML = gridChilds;

setupAddToCart();
setupLikeBtns();

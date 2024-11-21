/** @format */

import { data } from "./data.js";
import { renderNav, renderFooter, renderlocate } from "./navNfooterNlocat.js";
renderNav();
renderFooter();
renderlocate();

// Get the full URL
const queryString = window.location.search;

// Create a URLSearchParams object to parse the query string
const urlParams = new URLSearchParams(queryString);

// Get the 'id' parameter from the URL
const productId = urlParams.get("id");

// Log the value of 'id'
console.log("Product ID:", productId);

const product = data.find((item) => item.id == productId);

if (product) {
	console.log("Product found:", product);
} else {
	console.log("Product not found for ID:", productId);
}

let productChilds = `
			<div class="product-img">
				<img src="${product.image}" />
			</div>
			<div class="product-info">
				<div class="product-text">
					<h1>${product.title}</h1>
					<h2>by studio and friends</h2>
					<p>${product.description}</p>
				  <p class="pick">choose size</p>
          <div class="sizes">
            <div class="size">5</div>
            <div class="size">6</div>
            <div class="size">7</div>
            <div class="size">8</div>
					</div>
					<ul class="product-color">
            <li>COLOR</li>
            <li class="yellow"></li>
            <li class="black"></li>
            <li class="blue"></li>
          </ul>
				  <div class="product-price-btn">
					  <p><span>78</span>$</p>
					  <button type="button" class="btn btn-outline-dark">buy now</button>
					  <button type="button" class="btn btn-filled-dark" id="addToCartBtn">Add To Cart</button>
					  <button type="button" class="btn btn-outline-like" id="likeBtn">Like</button>
				  </div>
				</div>
      </div>
  </div>
				`;

let product_wrapper = document.getElementById("product-wrapper");
product_wrapper.innerHTML = productChilds;

// Add to Cart Functionality
const addToCartBtn = document.getElementById("addToCartBtn");

addToCartBtn.addEventListener("click", () => {
	let cart = JSON.parse(localStorage.getItem("cart")) || []; // Get cart or initialize it
	if (!cart.includes(productId)) {
		cart.push(productId); // Add product ID if not already in cart
		localStorage.setItem("cart", JSON.stringify(cart)); // Update local storage
		alert("Product added to cart!");
	} else {
		alert("Product already in cart!");
	}
});

// Add Like Functionality
const likeBtn = document.getElementById("likeBtn");

likeBtn.addEventListener("click", () => {
	let likes = JSON.parse(localStorage.getItem("likes")) || []; // Get likes or initialize it
	if (!likes.includes(productId)) {
		likes.push(productId); // Add product ID if not already liked
		localStorage.setItem("likes", JSON.stringify(likes)); // Update local storage
		alert("Product liked!");
	} else {
		alert("Product already liked!");
	}
});

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

		return `
    <div class="${className}">
    	<a href="./prodcutCard.html?id=${count}">
      <img src="${c.image}" alt="" />
      </a>
    </div>
    `;
	})
	.reduce((p, c) => p + " " + c, ""); // Combine all the mapped elements into a single string

let grid_wrapper = document.getElementById("grid-wrapper");
grid_wrapper.innerHTML = gridChilds;

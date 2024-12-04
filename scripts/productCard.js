/** @format */

import { data } from "./data.js";
import { renderNav, renderFooter, renderlocate } from "./repetedModules.js";
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

`
	<div class="product-data">

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
            <div class="size">S</div>
            <div class="size">M</div>
            <div class="size">L</div>
            <div class="size">XL</div>
					</div>
					<ul class="product-color">
            <li>COLOR</li>
            <li class="yellow"></li>
            <li class="black"></li>
            <li class="blue"></li>
          </ul>
				  <div class="product-price-btn">
					  <p><span>78</span>$</p>

				  </div>
				</div>
      </div>



	</div>

</div>

				`;

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

// Add to Cart Functionality
const addToCartBtn = document.getElementById("addToCartBtn");
addToCartBtn.addEventListener("click", () => {
	let cart = JSON.parse(localStorage.getItem("cart")) || [];
	if (!cart.includes(productId)) {
		cart.push(productId);
		localStorage.setItem("cart", JSON.stringify(cart));
		// alert("Product added to cart!");
	} else {
		// alert("Product already in cart!");
	}
});

// Add Like Functionality
const likeBtn = document.getElementById("likeBtn");
likeBtn.addEventListener("click", () => {
	let likes = JSON.parse(localStorage.getItem("likes")) || [];
	if (!likes.includes(productId)) {
		likes.push(productId);
		localStorage.setItem("likes", JSON.stringify(likes));
		// alert("Product liked!");
	} else {
		// alert("Product already liked!");
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

                <div class="product-card" id="product-card">
                <div class="product-img">
                <span class="discount-tag">
                ${100 - Math.round((c.price * 100) / c.discount)}% off</span>
                <img src="${c.image}"
                alt="card1" class="product-img">
                <div class="whislist-btn"><p>add to whislist</p></div>
                </div>
                <div class="card-texts">
                <h1>${c.title}</h1>
                <p>${c.description}</p>
                <h2>$${c.price}  <span> $${c.discount}</span></h2>
                </div>
                </div>

                </a>

    </div>
    `;
	})
	.reduce((p, c) => p + " " + c, ""); // Combine all the mapped elements into a single string

let grid_wrapper = document.getElementById("grid-wrapper");
grid_wrapper.innerHTML = gridChilds;

{
	/*
	<div class="comment-box">
			<h1>comments</h1>
      <div class="display-comments"></div>
      <div class="cooments-input">
		    <form id="commentForm">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="comment">Comment:</label>
            <textarea id="comment" name="comment" rows="5" required></textarea>

            <button type="submit">Send</button>
        </form>
			</div>
	</div>

			*/
}

// document.getElementById("commentForm").addEventListener("submit", function (event) {
// 	event.preventDefault();

// 	const formData = {
// 		name: document.getElementById("name").value,
// 		comment: document.getElementById("comment").value,
// 	};

// 	const productIndex = data.findIndex((item) => item.id == productId);

// 	if (productIndex !== -1) {
// 		const product = data[productIndex];

// 		if (!product.comments) {
// 			product.comments = [];
// 		}

// 		product.comments.push(formData);
// 		console.log("Updated product:", product);

// 		updateDataById(Number(productId), product);

// 		document.getElementById("name").value = "";
// 		document.getElementById("comment").value = "";

// 		displayComments(product.comments);
// 	} else {
// 		console.log("Product not found for ID:", productId);
// 	}
// });

// // Function to display comments in the DOM
// function displayComments(comments) {
// 	const commentsContainer = document.querySelector(".display-comments");
// 	commentsContainer.innerHTML = "";

// 	comments.forEach((comment) => {
// 		const commentElement = document.createElement("div");
// 		commentElement.classList.add("comment");
// 		commentElement.innerHTML = `<strong>${comment.name}:</strong> <p>${comment.comment}</p>`;
// 		commentsContainer.appendChild(commentElement);
// 	});
// }

// if (product) {
// 	displayComments(product.comments);
// }

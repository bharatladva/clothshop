/** @format */

export const navData = `
    <a
        href="./index.html"
        id="logo"
    >
        <img
            src="./images/Shirt Icons.svg"
            alt=""
        />
        bharat's <br />
        cloths Store
    </a>
    <ul class="navigation-menu">
        <li>
            <a  href="./filterpage.html"
						>Disover</a>
        </li>
        <li>
            <a href="#">Services</a>
        </li>
        <li><a href="#locate">Locations &amp; Hours</a></li>
        <li>
            <a href="#">About Us</a>
        </li>
    </ul>
    <div id="utility">
        <span class="search-icone icone"> </span>
        <a
            class="icone cart-icone"
            href="./cart.html"
        >
        </a>
        <a
            class="icone like-icone"
            href="./likes.html"
        >
        </a>
`;

export const renderNav = () => {
	let nav = document.getElementsByTagName("nav")[0]; // Access the first <nav> element
	console.log(nav);
	if (nav) {
		nav.innerHTML = navData;
	}
};

export const footerData = `

<ul>
				Categories
				<li><a href="#">Men's Clothing</a></li>
				<li><a href="#">Women's Clothing</a></li>
				<li><a href="#">Kid's Clothing</a></li>
				<li><a href="#">Accessories</a></li>
				<li><a href="#">Footwear</a></li>
				<li><a href="#">Outerwear</a></li>
			</ul>

			<ul>
				Shop by Style
				<li><a href="#">Casual</a></li>
				<li><a href="#">Formal</a></li>
				<li><a href="#">Athleisure</a></li>
				<li><a href="#">Partywear</a></li>
			</ul>

			<ul>
				Customer Services
				<li><a href="#">Shipping &amp; Returns</a></li>
				<li><a href="#">Size Guide</a></li>
				<li><a href="#">Track Order</a></li>
			</ul>

			<ul>
				About Us
				<li><a href="#">Our Story</a></li>
				<li><a href="#">Sustainability</a></li>
				<li><a href="#">Careers</a></li>
				<li><a href="#">Contact Us</a></li>
				<li><a href="#">Devloper</a></li>
			</ul>

`;

export const renderFooter = () => {
	let footer = document.getElementsByTagName("footer")[0]; // Access the first <nav> element
	console.log(footer);
	if (footer) {
		footer.innerHTML = footerData;
	}
};

export const locatedata = `
<div>
				<h2>Location &amp; Hours</h2>
				<p>
					Our knowledgeable and friendly staff is always ready to assist you in making the
					best choices for your furry, feathered, or finned friends.
				</p>
				<div class="btn-group">
					<button class="btn btn-filled-dark">
						<span class="icone pin_drop-icone"></span>Find a Store
					</button>
					<button class="btn btn-outline-dark btn-hover-color">
						<span class="icone contact_support-icone"></span> Contact Us
					</button>
				</div>
			</div>

`;

export const renderlocate = () => {
	let locate = document.getElementById("locate"); // Access the first <nav> element
	console.log(locate);
	if (locate) {
		locate.innerHTML = locatedata;
	}
};

// productCard.js

export function createProductCard(product) {
	return `
        <a href="./prodcutCard.html?id=${product.id}">
            <div class="product-card" id="product-card">
                <div class="product-img">
                    <span class="cart-tag icone cart-icone" data-id="${product.id}" id="addToCartBtn"></span>
                    <img src="${product.image}" alt="card1" class="product-img">
                    <div class="whislist-btn">
                        <p id="likeBtn" data-id="${product.id}">add to whislist</p>
                    </div>
                </div>
                <div class="card-texts">
                    <h1>${product.title}</h1>
                    <p>${product.description}</p>
                    <h2>$${product.price}  <span class="discount-tag"> $${product.discount}% off</span></h2>
                </div>
            </div>
        </a>
    `;
}

// eventHandlers.js

export function setupAddToCart() {
	const addToCartBtnS = document.querySelectorAll("#addToCartBtn");
	addToCartBtnS.forEach((btn) => {
		btn.addEventListener("click", (event) => {
			event.preventDefault();
			const itemId = Number(event.target.dataset.id);
			let cart = JSON.parse(localStorage.getItem("cart")) || [];
			if (!cart.includes(itemId)) {
				cart.push(itemId);
				localStorage.setItem("cart", JSON.stringify(cart));
				// alert("Product added to cart!");
			} else {
				// alert("Product already in cart!");
			}
		});
	});
}

export function setupLikeBtns() {
	const likeBtns = document.querySelectorAll("#likeBtn");
	likeBtns.forEach((btn) => {
		btn.addEventListener("click", (event) => {
			event.preventDefault();
			const itemId = Number(event.target.dataset.id);
			let likes = JSON.parse(localStorage.getItem("likes")) || [];
			if (!likes.includes(itemId)) {
				likes.push(itemId);
				localStorage.setItem("likes", JSON.stringify(likes));
				// alert("Product liked!");
			} else {
				// alert("Product already liked!");
			}
		});
	});
}

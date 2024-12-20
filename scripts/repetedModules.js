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
						> 	 <span class="search-icone icone"> </span>Disover</a>
        </li>
        <li><a href="./productGalary.html?for=Woman">Woman</a></li>
        <li><a href="./productGalary.html?for=man">man</a></li>
        <li>
            <a href="./aboutUs.html">About Us</a>
        </li>
        <li>
            <a href="./contact.html">Contact Us</a>
        </li>
    </ul>
    <div id="utility">

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

	<div class="col">
				<div>
			     	<img
				    	class="footer-logo"
				    	src="images/Shirt Icons.svg"
				    	alt="logo"
			     	/>
			    	<span>
			         	bharat's <br />
                cloths Store
				     </span>
				</div>
				<br/>

				<h4>Contact</h4>
				<p><strong>Address:</strong> 562 Maryland Ave, Downer road, Milwaukee</p>
				<p><strong>Phone:</strong> +1 111 1111/ +1 2345 678</p>
				<p><strong>Hours:</strong> 10:00 AM - 18:00 PM, Mon - Sat</p>
				<div class="follow">
					<h4>Follow us</h4>
					<div class="icon">
						<i class="fab fa-facebook-f"></i>
						<i class="fab fa-twitter"></i>
						<i class="fab fa-instagram"></i>
						<i class="fab fa-pinterest-p"></i>
						<i class="fab fa-youtube"></i>
					</div>
				</div>
			</div>
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
				<li    ><a  class="devloper-btn" href="https://bharatladva.github.io/cv/">Devloper</a></li>
			</ul>

				<div class="copyright">
				<p>© Bharat Ladva - Clothing Ecommerce Website</p>
			</div>

`;

export const renderFooter = () => {
	let footer = document.getElementsByTagName("footer")[0]; // Access the first <nav> element
	console.log(footer);
	if (footer) {
		footer.innerHTML = footerData;
	}
};

export const locatedata = `
<div >
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
            <div class="product-card " id="product-card">
                <div class="product-img">
                    <span class="cart-tag icone cart-icone" data-id="${product.id}" id="addToCartBtn"></span>
                    <img src="${product.image}" alt="card1" class="product-img">
                    <div class="whislist-btn">
										 <span class="icone like-icone"></span>
                        <p id="likeBtn" data-id="${product.id}">whislist</p>
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
export function createcollectionsCard(product) {
	return `
      	<li
					class="card-large card-dark card-wide"
					id="serv-groom"
				>
					<div class="card-image">
						<img
							src="${product.image}"
						/>
					</div>
					<ul>
					<h2>   ${product.collectionName}   </h2>

						<span class="subtitle">${product.subtitle}</span
						>
						<li><a href="#">${product.products[0].name}</a><span>${product.products[0].quantity}</span></li>
						<li><a href="#">${product.products[1].name}</a><span>${product.products[1].quantity}</span></li>
						<li><a href="#">${product.products[2].name}</a><span>${product.products[2].quantity}</span></li>
						<button class="btn btn-filled-dark">
							<span class="icone calendar-icone"></span>Book Now
						</button>
					</ul>
				</li>
    `;
}

export function productGalaryCard(product) {
	return `
      <li
			class="productGalaryitem"
			style="
				background-image: url('${product.image}');
			"
		>
			<div class="content">
				<h2 class="title">${product.title}</h2>
				<p class="description">
					${product.description}
				</p>
				<button>Read More</button>
			</div>
		</li>
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

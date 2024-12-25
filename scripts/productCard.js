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

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get("id");
const product = data.find((item) => item.id == productId);

function createColorSpans(colors) {
	return colors.map((color) => `<span class="color-box ${color.toLowerCase()}"></span>`).join("");
}

function createSizeSpans(sizes) {
	return sizes.map((size) => `<span>${size.toUpperCase()}</span>`).join("");
}

function createCategorySpans(categories) {
	return categories.map((category) => `<span class="category-tag">${category}</span>`).join("");
}

function createBrandSpans(brands) {
	return brands
		.map(
			(brand) =>
				`<span class="brand-tag">${brand.charAt(0).toUpperCase() + brand.slice(1)}</span>`
		)
		.join("");
}

const productChilds = `
    <div class="product_container">
        <div class="image-container">
            <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="product-details">
            <h1 class="title">${product.title}</h1>
            <p class="description">${product.description}</p>
            <p class="price">$${product.price}
                <span class="discount">(${product.discount}% off)</span>
            </p>
            <p class="categories">
                Categories: ${createCategorySpans(product.catagary)}
            </p>
            <p class="brands">
                Brands: ${createBrandSpans(product.brand)}
            </p>
            <p class="colors">
                Colors: ${createColorSpans(product.color)}
            </p>
            <p class="sizes">
                Sizes: ${createSizeSpans(product.size)}
            </p>
            <div class="btns-div">
                <button type="button" class="btn btn-outline-dark">Buy Now</button>
                <button type="button" class="btn btn-filled-dark" id="addToCartBtn">Add To Cart</button>
                <button type="button" class="btn btn-outline-like" id="likeBtn">Like</button>
            </div>
        </div>
    </div>
`;

document.getElementById("product-wrapper").innerHTML = productChilds;

// Similar products grid remains the same
const similarProducts = data
	.filter(
		(item) =>
			item.id !== product.id &&
			(item.catagary.some((cat) => product.catagary.includes(cat)) ||
				item.for.some((f) => product.for.includes(f)))
	)
	.slice(0, 12);

const gridChilds = similarProducts
	.map((item, index) => {
		const className = [2, 5, 9].includes(index)
			? "tall"
			: [3, 8].includes(index)
			? "wide"
			: index === 6
			? "big"
			: "";
		return createProductCard(item, className);
	})
	.join(" ");

document.getElementById("grid-wrapper").innerHTML = gridChilds;

setupAddToCart();
setupLikeBtns();

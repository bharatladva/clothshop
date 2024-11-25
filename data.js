/** @format */

export let data = [
	{
		id: 0,
		price: 10,
		title: "Slide 1",
		description: "This is the first slide",
		image: "images/woman/w1.2.jpg",
		comments: [{ name: "bharat ladva", comment: "sdfgh" }],
	},
	{
		id: 1,
		price: 10,
		title: "Slide 2",
		description: "This is the second slide",
		image: "images/woman/w2.3.jpg",
		comments: [{ name: "bharat ladva", comment: "sdfgh" }],
	},
	{
		id: 2,
		price: 10,
		title: "Slide 3",
		description: "This is the third slide",
		image: "images/woman/w2.4.jpg",
		comments: [{ name: "bharat ladva", comment: "sdfgh" }],
	},
	{
		id: 3,
		price: 10,
		title: "Slide 4",
		description: "This is the third slide",
		image: "images/woman/w3.2.jpg",
		comments: [{ name: "bharat ladva", comment: "sdfgh" }],
	},
	{
		id: 4,
		price: 10,
		title: "Slide 5",
		description: "This is the third slide",
		image: "images/woman/w4.2.jpg",
		comments: [{ name: "bharat ladva", comment: "sdfgh" }],
	},
	{
		id: 5,
		price: 10,
		title: "Slide 6",
		description: "This is the third slide",
		image: "images/woman/w4.1.jpg",
		comments: [{ name: "bharat ladva", comment: "sdfgh" }],
	},
	{
		id: 6,
		price: 10,
		title: "Slide 7",
		description: "This is the third slide",
		image: "images/woman/w6.2.jpg",
		comments: [{ name: "bharat ladva", comment: "sdfgh" }],
	},
	{
		id: 7,
		price: 10,
		title: "Slide 8",
		description: "This is the third slide",

		comments: [{ name: "bharat ladva", comment: "sdfgh" }],
		image: "images/woman/w7.2.jpg",
	},
	{
		id: 8,
		comments: [{ name: "bharat ladva", comment: "sdfgh" }],
		price: 10,
		title: "Slide 9",
		description: "This is the third slide",
		image: "images/woman/w7.jpg",
	},
	{
		comments: [{ name: "bharat ladva", comment: "sdfgh" }],
		id: 9,
		price: 10,
		title: "Slide 10",
		description: "This is the third slide",

		image: "images/woman/w5.1.jpg",
	},
];

// export function updateDataById(id, updatedObject) {
// 	// Convert id to a number to ensure proper comparison
// 	const index = data.findIndex((item) => item.id === Number(id));
// 	console.log("Updated Object:", updatedObject);

// 	if (index !== -1) {
// 		console.log("Found product at index", index);

// 		// Merge the existing item with the new object properties
// 		data[index] = { ...data[index], ...updatedObject };
// 		console.log("Data after update:", data[index]); // Log updated data
// 		return true;
// 	}

// 	console.log("No product found for ID", id);
// 	return false;
// }
// setInterval(() => console.log(data), 1000);

export const catagary = [
	{
		title: "Men's Clothing",
		image: "images/woman/w5.1.jpg",
		li1: "T-Shirts",
		li2: "Shirts",
		li3: "Pants",
		li4: "Jackets",
		li5: "Sweaters",
	},
	{
		title: "Women's Clothing",
		image: "images/woman/w5.1.jpg",
		li1: "Dresses",
		li2: "Skirts",
		li3: "Pants",
		li4: "Jackets",
		li5: "Shoes",
	},
	{
		title: "Kids' Clothing",
		image: "images/woman/w5.1.jpg",
		li1: "T-Shirts",
		li2: "Shirts",
		li3: "Pants",
		li4: "Sweaters",
		li5: "Jackets",
	},
	{
		title: "Kids' Clothing",
		image: "images/woman/w5.1.jpg",
		li1: "T-Shirts",
		li2: "Shirts",
		li3: "Pants",
		li4: "Sweaters",
		li5: "Jackets",
	},
];

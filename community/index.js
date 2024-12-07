/** @format */

document.addEventListener("DOMContentLoaded", function () {
	const communities = [
		{
			collectionName: "hollywood",
			name: "Hollywood",
			url: "https://image.tmdb.org/t/p/w500/fHpWVib37vk3v8N6IKC6sBT5TcD.jpg",
			logo: "./catagory-imgs/hollywood-logo.svg",
			logoStyle: "scale(0.7)",
		},
		{
			collectionName: "got",
			name: "GOT Fans",
			url: "https://image.tmdb.org/t/p/w500/jJojoFmsuLPQz8AOdkeV0b686RN.jpg",
			logo: "https://image.tmdb.org/t/p/w500/mqOhYnLT7cRkYTY9dDEWfMxoQJS.png",
			logoStyle: "scale(0.7)",
		},
		{
			collectionName: "marvel",
			name: "Marvel Fans",
			url: "https://www.themoviedb.org/t/p/w500/wMFad1v8SwyVvrKXmsIkLhSxCEC.jpg",
			logo: "./catagory-imgs/viewers-marvel.png",
			logoStyle: "scale(1.3)",
		},
		{
			collectionName: "dc",
			name: "DC Fans",
			url: "https://image.tmdb.org/t/p/w500/3xyth9V7S3hQJeKtfbSgvVf0Pry.jpg",
			logo: "./catagory-imgs/dc-logo.svg",
		},
		{
			collectionName: "classics",
			name: "Classics",
			url: "https://image.tmdb.org/t/p/w500/7d7RFBhnSMd9jhcOwmYkkcr7oFg.jpg",
			logo: "./catagory-imgs/classics-logo.svg",
			logoStyle: "scale(0.7)",
		},
		{
			collectionName: "comedy",
			name: "Comedy & Sitcom",
			url: "https://image.tmdb.org/t/p/w500/ykDYy50mHU52PqYEu4xiFFOw5mw.jpg",
			logo: "./catagory-imgs/sitcom-logo.svg",
			logoStyle: "scale(0.5)",
		},
		{
			collectionName: "fiction",
			name: "Sci-fi",
			url: "https://image.tmdb.org/t/p/w500/kcF2iOIZwYVrLnEOyCY31j8pNhP.jpg",
			logo: "./catagory-imgs/sci-fi-logo.svg",
			logoStyle: "scale(0.6)",
		},
		{
			collectionName: "western",
			name: "Western",
			url: "https://image.tmdb.org/t/p/w500/3kjOh1sWjh54y6Lx8k5Mu9kAAGS.jpg",
			logo: "./catagory-imgs/western-logo.svg",
			logoStyle: "scale(0.7)",
		},
	];

	const communitySections = document.getElementById("community-sections");

	communities.forEach((item) => {
		const communityContainer = document.createElement("div");
		communityContainer.classList.add("community-container");

		communityContainer.innerHTML = `
      <div class="community-bg" style="background-image: url('${item.url}')">
        <div class="community-logo">
          <img src="${item.logo}" style="transform: ${item.logoStyle || "scale(1)"};" alt="${
			item.name
		} Logo" />
        </div>
        <div class="community-details-main-wrapper">
          <div class="community-details-wrapper">
            <p class="community-details">${item.name}</p>
          </div>
        </div>
      </div>
      <div class="community-button" onclick="navigateToCommunity('${item.collectionName}')"></div>
    `;

		communitySections.appendChild(communityContainer);
	});
});

function navigateToCommunity(collectionName) {
	window.location.href = `/community/${collectionName}`;
}

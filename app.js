const API_URL = "https://dummyjson.com/products";

//selecting elements
const eProduct = document.querySelector(".inner-product");
//fetching the api url

async function getProducts(url) {
  const res = await fetch(url);
  const data = await res.json();
  if (data.products.length > 0) {
    displayProducts(data.products);
  }
}

getProducts(API_URL);

function displayProducts(product) {
  product.forEach((product) => {
    const innerProuduct = document.createElement("div");
    innerProuduct.classList.add("product");
    const { images, title, price, stock, rating } = product;
    innerProuduct.innerHTML = ` 
  <img src="${images[0]}" alt="${title}" />
  <div>
    <h3>${title} </h3>
     <div class="price"> <p>$${price}</p></div>
    <p class="stock">${stock} items left</p>
    <p class="rate">Rating:${rating}</p>
    </div>
    `;
    eProduct.appendChild(innerProuduct);
  });
}

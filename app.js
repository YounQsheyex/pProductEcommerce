const API_URL = "https://dummyjson.com/products";

//selecting elements
const eProduct = document.querySelector(".inner-product");
//fetching the api url

async function getProducts() {
  const res = await fetch(API_URL);
  const data = await res.json();
  const { products } = data;
  displayProducts(products);
}

getProducts();

function displayProducts(products) {
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    // innerProuduct.classList.add("product");
    productDiv.className = "product";
    const { images, title, price, stock, rating } = product;
    productDiv.innerHTML = ` 
  <img src="${images[0]}" alt="${title}" />
  <div>
    <h3>${title} </h3>
     <div class="price"> <p>$${price}</p></div>
    <p class="stock">${stock} items left</p>
    <p class="rate">Rating:${rating}</p>
    </div>
    `;
    eProduct.appendChild(productDiv);
  });
}

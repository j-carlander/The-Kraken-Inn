function createCard(imgSrc, name, descr, price) {
  // First create the HTML for the card.
  let productCard = document.createElement("div");

  let imgContainer = document.createElement("div");
  let productImg = document.createElement("img");

  let productInfo = document.createElement("div");
  let productName = document.createElement("h4");
  let productDescription = document.createElement("p");
  let productPrice = document.createElement("p");
  let addToCartBtns = document.createElement("div");
  let subtrQtyBtn = document.createElement("button");
  let productQtyDisp = document.createElement("div");
  let addQtyBtn = document.createElement("button");

  // Add classes to HTML
  productCard.classList.add("product-card");
  imgContainer.classList.add("img-container");
  productImg.classList.add("product-img");

  productInfo.classList.add("product-info");
  productName.classList.add("product-title");
  productDescription.classList.add("product-description");
  productPrice.classList.add("product-price");

  addToCartBtns.classList.add("add-to-cart-btns");
  subtrQtyBtn.classList.add("subtr-qty-btn");
  productQtyDisp.classList.add("product-qty-disp");
  addQtyBtn.classList.add("add-qty-btn");

  // Add inner text and source attribute
  productImg.setAttribute("src", imgSrc);

  productName.innerText = name;

  productDescription.innerText = descr;

  productPrice.innerText = price;

  // eventlisteners for buttons

  subtrQtyBtn.addEventListener("click", (e) => {
    console.log(e.target.parentNode.nextElementSibling);
  });

  addQtyBtn.addEventListener("click", (e) => {
    console.log(e.target.previousElementSibling);
  });

  // Append HTML structure to card
  imgContainer.append(productImg);

  addToCartBtns.append(subtrQtyBtn, productQtyDisp, addQtyBtn);

  productInfo.append(name, descr, price, addToCartBtns);

  productCard.append(imgContainer, productInfo);


  let beveragesDiv = document.getElementById('beverages');

  beveragesDiv.append(productCard);
}

// test
let subtrQtyBtn = document.querySelector(".subtr-qty-btn");
subtrQtyBtn.addEventListener("click", (e) => {
  console.log(e.target.nextElementSibling);
});

let addQtyBtn = document.querySelector(".add-qty-btn");
addQtyBtn.addEventListener("click", (e) => {
  console.log(e.target.previousElementSibling);
});


function renderCards() {
  for (const key in foodItems) {
    createCard(foodItems[key].img, foodItems[key].name, foodItems[key].dsc, foodItems[key].price);
  }
}


renderCards();
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

  subtrQtyBtn.innerText = "-";

  productQtyDisp.innerText = 0;

  addQtyBtn.innerText = "+";

  // eventlisteners for buttons

  subtrQtyBtn.addEventListener("click", (e) => {
    console.log(e.target.nextElementSibling);
  });

  addQtyBtn.addEventListener("click", (e) => {
    console.log(e.target.previousElementSibling);
  });

  // Append HTML structure to card
  imgContainer.append(productImg);

  addToCartBtns.append(subtrQtyBtn, productQtyDisp, addQtyBtn);

  productInfo.append(productName, productDescription, productPrice, addToCartBtns);

  productCard.append(imgContainer, productInfo);

  return productCard;
}

function renderCards() {
  for (const key in foodItems) {
    
    let container = document.getElementById(`${key}`);

    for (const item in foodItems[key]) {
      container.append(
        createCard(
          foodItems[key][item].img,
          foodItems[key][item].name,
          foodItems[key][item].dsc,
          foodItems[key][item].price
        )
      );
    }
  }
}

function renderFeaturedCards() {
  const featuredBeverage = document.getElementById('featuredBeverage');
  const featuredMainCourse= document.getElementById('featuredMainCourse');
  const featuredDessert = document.getElementById('featuredDessert');
  

  let bevItem = Math.floor(Math.random() * 3);
  let mainItem = Math.floor(Math.random() * 10);
  let dessertItem = Math.floor(Math.random() * 2);

  for(key in foodItems[bevItem]){

    featuredBeverage.append(
      createCard(
        foodItems.Beverages[bevItem].img,
        foodItems.Beverages[bevItem].name,
        foodItems.Beverages[bevItem].dsc,
        foodItems.Beverages[bevItem].price
      )
    );
  }

  for(key in foodItems[mainItem]){

    featuredMainCourse.append(
      createCard(
        foodItems.mainCourse[mainItem].img,
        foodItems.mainCourse[mainItem].name,
        foodItems.mainCourse[mainItem].dsc,
        foodItems.mainCourse[mainItem].price
      )
    );
  }

  for(key in foodItems[dessertItem]){

    featuredDessert.append(
      createCard(
        foodItems.Desserts[dessertItem].img,
        foodItems.Desserts[dessertItem].name,
        foodItems.Desserts[dessertItem].dsc,
        foodItems.Desserts[dessertItem].price
      )
    );
  }
}

renderFeaturedCards();
renderCards();



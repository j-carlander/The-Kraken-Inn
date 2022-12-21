let shoppingList = [];

// checkout-page
let shoppingCart = document.querySelector(".shopping-cart");
// let addToCheckoutBtn = document.querySelector(".add-qty-btn");
let plusBtn = document.querySelector(".cart-plus-btn");

// addToCheckoutBtn.addEventListener('click', addToCheckoutClicked)
// function addToCheckoutClicked(event){
//     console.log("clicked")
//     let button = event.target; // refererar till det klickade elementet (behövs den ?)
//     let foodName = foodItems[0].name; // ska det stå [i] för varje i värde eller [0] ??
//     let foodPrice = foodItems[0].price;
//     let foodimgSrc = foodItems[0].src; // ska vi ha img eller inte ?
//     allProducts(foodName, foodPrice, foodimgSrc); // skicka vidare den infon vi behöver (namn, pris, img) till nästa funktion
//     updateTotalAmount(); // skicka vidare till en funktion som uppdaterar totalsumman
// }
// function allProducts(foodName, foodPrice, foodimgSrc){
//     // let checkout = foodName.foodPrice;
//     // let item = checkout.foodimgSrc;
//     // item.append(allProducts);
// }
// let productToCart = document.q

function findIndexOf(article) {
  return shoppingList.findIndex((item) => item.title == article.title); // returns the index of article or -1 if not found
}

function pushToShoppingList(article, index) {
  if (index >= 0) {
    shoppingList[index].quantity = article.quantity;
    shoppingList[index].price = article.price;
  } else {
    shoppingList.push(article);
  }
}

function removeFromShoppingList(article, index) {
  if (index == -1) {
    return;
  }
  if (article.quantity == 0) {
    // console.log(`index: ${index}`);
    shoppingList.splice(index, 1);
  } else {
    shoppingList[index].quantity = article.quantity;
    shoppingList[index].price = article.price;
  }
}

function createCartArticleObject(e, productQty) {
  let productInfo = e.target.parentNode.parentNode;
  let productTitle = productInfo.querySelector(".product-title").innerText;
  let productPrice = productInfo.querySelector(".product-price").innerText;
  let articleTotal = (productQty * productPrice).toFixed(2);

  let article = {
    title: productTitle,
    quantity: productQty,
    price: articleTotal,
  };
  return article;
}

function incrementProductQty(e) {
  let productQtyDis = e.target.previousElementSibling;
  let productQty = e.target.previousElementSibling.innerText;

  productQty = Number(productQty);
  productQty++;
  productQtyDis.innerText = productQty;

  return productQty;
}

function decrementProductQty(e) {
  let productQtyDis = e.target.nextElementSibling;
  let productQty = e.target.nextElementSibling.innerText;

  productQty = Number(productQty);
  if (productQty > 0) {
    productQty--;
    productQtyDis.innerText = productQty;
  }

  return productQty;
}

function addToCart(e) {
  let productQty = incrementProductQty(e);

  let article = createCartArticleObject(e, productQty);

  let foundIndex = findIndexOf(article);
  //   console.log(`found on index: ${foundIndex}`);

  pushToShoppingList(article, foundIndex);
  //   console.log(`shoppinglist: ${shoppingList}`);
}

function subtrFromCart(e) {
  let productQty = decrementProductQty(e);

  let article = createCartArticleObject(e, productQty);

  let foundIndex = findIndexOf(article);

  removeFromShoppingList(article, foundIndex);
}
// for (let index = 0; index < productQty.length; index++) {
//     const element = productQty[index];

// }

// }
//SKA DETTA VARA MED?? TIPS FRÅN YOUTUBE
// if (document.readyState == "loading") { //om sidan laddar kör den
//     document.addEventListener("DOMContentLoaded", ready)
// } else { //om den inte laddar eller redan laddat
//     ready()
// }

function listProductsInCart(shoppingList) {
  console.log();
  let cartProducts = "";
  for (let i = 0; i < shoppingList.length; i++) {
    cartProducts += `          <li>
    <div class="add-to-cart-btns">
      <button class="subtr-qty-btn">-</button>
      <div class="product-qty-disp">${shoppingList[i].quantity}</div>
      <button class="add-qty-btn">+</button>
    </div>
    <span class="cart-product-name">${shoppingList[i].title}</span>                      
    <span class="cart-product-price">${shoppingList[i].price}</span>
    <button class="cart-delete-btn">X</button>
  </li>`;
  }
  document.querySelector(".shopping-cart-list").innerHTML = cartProducts;

  let delButtons = document
    .querySelector(".shopping-cart-list")
    .querySelectorAll(".cart-delete-btn"); // finding all buttons just created in the for-loop listing cartProducts

  for (let i = 0; i < delButtons.length; i++) {
    delButtons[i].addEventListener("click", () => {
      delButtons[i].parentElement.remove(); // When the button is clicked it removes its parent elemnet in the DOM
      shoppingCart.splice(i, 1); // and removes corresponding item in the shoppingCart array.
      updateCart();
    });
  }
  let subtrQtyBtns = document
    .querySelector(".shopping-cart-list")
    .querySelectorAll(".subtr-qty-btn");
  for (i = 0; i < subtrQtyBtns.length; i++) {
    subtrQtyBtns[i].addEventListener("click", (e) => {
      // console.log(e.target.nextElementSibling);
      // subtrFromCart(e);
    });
  }
  let addQtyBtns = document
    .querySelector(".shopping-cart-list")
    .querySelectorAll(".add-to-cart-btns");

  for (i = 0; i < addQtyBtns.length; i++) {
    addQtyBtns[i].addEventListener("click", (e) => {
      // console.log(e.target.previousElementSibling);
      addToCart(e);
    });
  }
}

document.getElementById("open-cart").addEventListener("click", function () {
  document.getElementById("cart").classList.toggle("hide");
  listProductsInCart(shoppingList);
});

//ska läggas till på varje produkt i vår lista
let removeCartProductBtn = document.getElementsByClassName("cart-delete-btn");
console.log(removeCartProductBtn);
for (let index = 0; index < removeCartProductBtn.length; index++) {
  let removeBtn = removeCartProductBtn[index];
  removeBtn.addEventListener("click", function (event) {
    let clickedRemoveBtn = event.target; // tar bort cart från inköpslistan
    clickedRemoveBtn.parentElement.parentElement.remove();
    updateCartTotal(); //funktionen updateCartTotal körs igenom när den "kallas"
  });
}
// ska funktionen på rad 35 ligga här nedan? updateTotalAmount
function updateCartTotal() {
  //funktionen går igenom varukorgens alla artiklar och addera för varje rad
  let cartArticleContainer =
    document.getElementsByClassName("shopping-cart")[0]; //ger tillbaka en array coh vi vill bara ha en, därav [0]
  let titleShoppingcart =
    cartArticleContainer.getElementsByClassName("title-shoppingcart");
  let totalPrice = 0;

  for (let index = 0; index < titleShoppingcart.length; index++) {
    let titleShoppingcart = titleShoppingcart[i];
    let priceElement =
      titleShoppingcart.getElementsByClassName("cart-product-price")[0];
    let quantityElement =
      titleShoppingcart.getElementsByClassName("cart-quantity")[0];

    let price = parseFloat(priceElement.innerText.replace("€", "")); //parseFloat, converts all strings till tal med decimaler
    let quantity = quantityElement.value; //fungerar bara med input-funktionen!
    totalPrice = tital + price * quantity; //för att se!
  }
  document.getElementsByClassName("total-price")[0].innerText = total; //
}

//Adding history function to orders by saving to local
//storage when pressing order button

const orderBtn = document.querySelector(".order-now-btn");

orderBtn.addEventListener("click", storePrevOrder);

function storePrevOrder() {
  for (item of shoppingList) {
    localStorage.setItem(JSON.stringify(item), history);
    console.log(localStorage);
  }
}

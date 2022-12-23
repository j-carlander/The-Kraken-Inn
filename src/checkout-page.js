// The array for storing items customer choose from the menu
let shoppingList = [];

// checkout-page
let shoppingCart = document.querySelector(".shopping-cart");
// let addToCheckoutBtn = document.querySelector(".add-qty-btn");
let plusBtn = document.querySelector(".cart-plus-btn");
// DOM variables
const openCartBtn = document.getElementById("open-cart");
const cartContainer = document.getElementById("cart");
const shoppingCartList = document.querySelector(".shopping-cart-list");

const payBtn = document.querySelector(".pay-btn");
const thanksPopUp = document.querySelector(".thanks-pop-up");
const thanksPopUpBtn = document.querySelector(".thanks-pop-up-btn");
const confirmPopUp = document.querySelector(".confirm-pop-up");
const confirmPopUpBtnYes = document.querySelector(".confirm-pop-up-yes-btn");
const confirmPopUpBtnNo = document.querySelector(".confirm-pop-up-no-btn");

// Eventlisteners for displaying pop up messages at checkout
payBtn.addEventListener("click", () => {
  confirmPopUp.classList.remove("hide");
});

thanksPopUpBtn.addEventListener("click", () => {
  thanksPopUp.classList.add("hide");
  confirmPopUp.classList.add("hide");
});

confirmPopUpBtnYes.addEventListener("click", () => {
  thanksPopUp.classList.remove("hide");
});

confirmPopUpBtnNo.addEventListener("click", () => {
  confirmPopUp.classList.add("hide");
});

// function to find the index of an article in the shopping list
function findIndexOf(article) {
  return shoppingList.findIndex((item) => item.title == article.title); // returns the index of article or -1 if not found
}

// function that checks if an article allready exist in the shopping list and updates it's quantity and price, if it doesn't exist it adds the article to the list
function pushToShoppingList(article, index) {
  if (index >= 0) {
    shoppingList[index].quantity = article.quantity;
    shoppingList[index].price = article.price;
  } else {
    shoppingList.push(article);
  }
}

// function that updates the shopping list with reduced quantity and price of an article and if the quantyty becomes 0 removes it from the list
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

// function that takes in an event from a product card and a product qty and returns an object of that product
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

// function that increase the shown product quantity
function incrementProductQty(e) {
  let productQtyDis = e.target.previousElementSibling;
  let productQty = e.target.previousElementSibling.innerText;

  productQty = Number(productQty);
  productQty++;
  productQtyDis.innerText = productQty;

  return productQty;
}

// function that reduces the shown product quantity
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

// function that handles what will happen when the '+' button is clicked on a product card
function addToCart(e) {
  let productQty = incrementProductQty(e);

  let article = createCartArticleObject(e, productQty);

  let foundIndex = findIndexOf(article);
  //   console.log(`found on index: ${foundIndex}`);

  pushToShoppingList(article, foundIndex);
  //   console.log(`shoppinglist: ${shoppingList}`);
}

// function that handles what will happen when the '-' button is clicked on a product card
function subtrFromCart(e) {
  let productQty = decrementProductQty(e);

  let article = createCartArticleObject(e, productQty);

  let foundIndex = findIndexOf(article);

  removeFromShoppingList(article, foundIndex);
}

// function to add the calculatetd total of the cart to the right HTML element
function addTotalToCart(shoppingList) {
  let totalPrice = document.querySelector(".total-price");
  totalPrice.innerText = calculateCartTotal(shoppingList);
}

// function to list all products from the array "shopping cart" to the html-list in the cart
function listProductsInCart(shoppingList) {
  console.log();
  let cartProducts = "";
  for (let i = 0; i < shoppingList.length; i++) {
    cartProducts += `<li>
    <div class="product-qty-disp">${shoppingList[i].quantity}</div>
    <span class="cart-product-name">${shoppingList[i].title}</span>                      
    <span class="cart-product-price">${shoppingList[i].price}</span>
  </li>`;
  }
  shoppingCartList.innerHTML = cartProducts;
}

// adding eventlistener to open the shopping cart and list the items in shopping list
openCartBtn.addEventListener("click", function () {
  cartContainer.classList.toggle("hide");
  listProductsInCart(shoppingList);
  addTotalToCart(shoppingList);
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

    let price = parseFloat(priceElement.innerText.replace("€", "")); //parseFloat, converts all strings to decimal numbers
    let quantity = quantityElement.value; //fungerar bara med input-funktionen!
    totalPrice = tital + price * quantity; //för att se!
  }
  document.getElementsByClassName("total-price")[0].innerText = total; //
}

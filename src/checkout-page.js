let shoppingList = [];

// checkout-page
let shoppingCart = document.querySelector(".shopping-cart");
// let addToCheckoutBtn = document.querySelector(".add-qty-btn");
let plusBtn = document.querySelector(".cart-plus-btn");

const payBtn = document.querySelector(".pay-btn");


payBtn.addEventListener("click", () => {
  alert("Thank you for your order!");
});

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


function addTotalToCart(shoppingList) {
  let totalPrice = document.querySelector(".total-price");
  totalPrice.innerText = calculateCartTotal(shoppingList);
}

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
  document.querySelector(".shopping-cart-list").innerHTML = cartProducts;
}

document.getElementById("open-cart").addEventListener("click", function () {
  document.getElementById("cart").classList.toggle("hide");
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

    let price = parseFloat(priceElement.innerText.replace("€", "")); //parseFloat, converts all strings till tal med decimaler
    let quantity = quantityElement.value; //fungerar bara med input-funktionen!
    totalPrice = tital + price * quantity; //för att se!
  }
  document.getElementsByClassName("total-price")[0].innerText = total; //
}

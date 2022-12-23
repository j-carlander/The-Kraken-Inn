function storePrevOrder() {
  const testOrderHistorys = getFromLocalStorage();
  const testCurrentOrder = { Order: shoppingList };
  const mergeOrders = testOrderHistorys.concat(testCurrentOrder);

  // const previousOrders = getFromLocalStorage();
  //     const mergeOrders = previousOrders.concat(shoppingList);

  localStorage.setItem("shoppingList", JSON.stringify(mergeOrders));
}

function listProductsInHistory(listIn, container) {
  let cartProducts = "";
  let list = Object.assign({}, listIn);
  console.log(list);
  for (let i in list) {
    console.log(list[i]);
    console.log(`i: ${i}`);
    cartProducts += `<li> Order ${Number(i) + 1}:</li>`;
    console.log(list[i].length);
    for (let j in list[i]) {
      console.log(`J: ${j}`);
      for (let k in list[i][j]) {
        console.log(list[i][j][k].title);
        cartProducts += `<li>
      <div class="product-qty-disp">${list[i][j][k].quantity}</div>
      <span class="cart-product-name">${list[i][j][k].title}</span>                      
      <span class="cart-product-price">${list[i][j][k].price}</span>
    </li>`;
      }
    }
  }
  container.innerHTML = cartProducts;
}

function displayHistory() {
  historyPopUp.classList.remove("hide");

  const testOrderHistorys = getFromLocalStorage();

  const totalHistoryPrice = document.querySelector(".total-history-price");
  totalHistoryPrice.innerText =
    "Total: € " + calculateCartTotal(testOrderHistorys);
  listProductsInHistory(testOrderHistorys, historyPopUpList);
}

function getFromLocalStorage(localStorageKey = "shoppingList") {
  return JSON.parse(localStorage.getItem(localStorageKey)) || [];
}




let shoppingList = [] 

// checkout-page
let shoppingCart = document.querySelector(".shopping-cart");
// let addToCheckoutBtn = document.querySelector(".add-qty-btn");
let plusBtn = document.querySelector('.cart-plus-btn')

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
function addToCart (e) {
console.log(e.target.previousElementSibling);
    console.log(e.target.parentNode.parentNode);
    let productInfo = e.target.parentNode.parentNode;
    // console.log(productInfo);
    let productQtyDis = e.target.previousElementSibling;
    let productQty = e.target.previousElementSibling.innerText;


    productQty = Number(productQty);
    productQty++
    productQtyDis.innerText = productQty;
    let productTitle = productInfo.querySelector(".product-title").innerText;
    let productPrice = productInfo.querySelector(".product-price").innerText;
    let articleTotal = productQty * productPrice;

    console.log(productTitle);
    console.log(productPrice);
    console.log(productQty);

    let article = {
        title: productTitle, 
        quantity: productQty,
        price: articleTotal
    }
    shoppingList.push(article);
    
        if (article) {
            let menu = document.querySelectorAll(".cart-menu")

        }
        return (article)
        
    
       
}
 

//ska läggas till på varje produkt i vår lista
let removeCartProductBtn = document.getElementsByClassName("cart-delete-btn");
console.log(removeCartProductBtn);
for (let index = 0; index < removeCartProductBtn.length; index++) {
    let removeBtn = removeCartProductBtn[index];
    removeBtn.addEventListener('click', function(event) {
        let clickedRemoveBtn = event.target      // tar bort cart från inköpslistan
        clickedRemoveBtn.parentElement.parentElement.remove();
        updateCartTotal(); //funktionen updateCartTotal körs igenom när den "kallas"
    })
}
// ska funktionen på rad 35 ligga här nedan? updateTotalAmount
function updateCartTotal() { //funktionen går igenom varukorgens alla artiklar och addera för varje rad
    let cartArticleContainer = document.getElementsByClassName("shopping-cart")[0]; //ger tillbaka en array coh vi vill bara ha en, därav [0]
    let titleShoppingcart = cartArticleContainer.getElementsByClassName("title-shoppingcart");
    let totalPrice = 0;

    for (let index = 0; index < titleShoppingcart.length; index++) {
        let titleShoppingcart = titleShoppingcart[i];
        let priceElement = titleShoppingcart.getElementsByClassName("cart-product-price")[0];
        let quantityElement = titleShoppingcart.getElementsByClassName("cart-quantity")[0];
        
        let price = parseFloat(priceElement.innerText.replace('€', '')) //parseFloat, converts all strings till tal med decimaler
        let quantity = quantityElement.value //fungerar bara med input-funktionen!
        totalPrice = tital + (price * quantity) //för att se!        
    }
    document.getElementsByClassName("total-price")[0].innerText = "€" + total //
}


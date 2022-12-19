

// let tryOrder = [
//     { qry: 1, 
//         name: "cola",
//         price: 20
//     }, 
//     { qry: 2, 
//         name: "pepsi",
//         price: 28
//     },
//     { qry: 3, 
//         name: "fanta",
//         price: 25
//     }
// ] 

// console.log(tryOrder[0].name);

// checkout-page
let shoppingCart = document.querySelector(".shopping-cart");
let addToCheckoutBtn = document.querySelector(".add-qty-btn");



function fromMenuToCheckout(){
    for (let i = 0; i < addToCheckoutBtn; i++){
        let button = addToCheckoutBtn[i];
        button.addEventListener('click', console.log("clicked"));
    }
}


function addToCheckoutClicked(event){
    let button = event.target; // refererar till det klickade elementet (behövs den ?)
    let foodName = foodItems[0].name; // ska det stå [i] för varje i värde eller [0] ??
    let foodPrice = foodItems[0].price;
    let foodimgSrc = foodItems[0].src; // ska vi ha img eller inte ?
    console.log("clicked")
    allProducts(foodName, foodPrice, foodimgSrc); // skicka vidare den infon vi behöver (namn, pris, img) till nästa funktion
    updateTotalAmount(); // skicka vidare till en funktion som uppdaterar totalsumman
}

function allProducts(foodName, foodPrice, foodimgSrc){
    /*let checkout = foodName.foodPrice;
    let item = checkout.foodimgSrc; 
    item.append(allProducts);*/
}

console.log(foodItems[1].name); // testar skriva ut en av produkternas namn 

let removeCartProductBtn = document.getElementsByClassName("cart-delete-btn");
console.log(removeCartProductBtn);
for (let index = 0; index < removeCartProductBtn.length; index++) {
    let removeBtn = removeCartProductBtn[index];
    removeBtn.addEventListener('click', function(event) {
        let clickedRemoveBtn = event.target      // ta bort cart från inköpslistan
        clickedRemoveBtn.parentElement.parentElement.remove();
    })
}

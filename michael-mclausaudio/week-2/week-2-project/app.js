/* global foodInventory*/

//ELEMENT SELECTORS
//cat1 = food
//cat2 = drinks
//cat3 = snacks
let cat1 = document.getElementById('cat1');
let cat2 = document.getElementById('cat2');
let cat3 = document.getElementById('cat3');

let categoryDisplay = document.getElementById('category-display');
let listDisplay = document.getElementById('list-display') //this is the UL
    //EVENT LISTENERS
cat1.addEventListener('click', function() {
    populateCategoryDisplay('food');
});
cat2.addEventListener('click', function() {
    populateCategoryDisplay('drink');
});
cat3.addEventListener('click', function() {
    populateCategoryDisplay('snack');
});

function populateCategoryDisplay(category) {
    categoryDisplay.innerHTML = '';
    //loop over inventory
    foodInventory.forEach((item, i) => {
        if (item.category.toLowerCase() === category) {
            //select the display div
            let element = document.createElement('div');
            //set up a dynamic id to assign to each item
            let cartId = `${category}-${i}`;
            //make each items html
            element.innerHTML = (
              `<div class="card text-center mr-2 mb-2 align-self-stretch" style="width: 15rem;">
                <img src = "${item.img}" class = "card-img-top" alt = "..." >
                <div class = "card-body" >
                  <h5 class = "card-title" >${item.name}</h5>
                  <p class = "card-text" >$${item.price}</p>
                  <p href="#" class="btn mb-0 btn-primary btn-block" id = "${cartId}"> Add To Cart </p>
                </div>
              </div>`
            );
            //add it to the display div
            categoryDisplay.appendChild(element);
            //add an event listener to detect which item was clicked
            //when clicked, fire a function that'll add it's name to the cart div
            document.getElementById(cartId).addEventListener('click', () => {
                addItemToCart(item.name, item.price)
            });
        }
    });
}

let cartItemId = 1;

function addItemToCart(itemName, price) {
    let cartItem = document.createElement('li');
    let domId = `${itemName}-${cartItemId}`
    let newItem = `<li id="${domId}" class="mb-1 list-group-item list-group-item-action">${itemName}: $${price} <span id="delete-${cartItemId}" class="pl-5"><i class="far fa-trash-alt"></i></span></li>`;
    // btn btn-primary btn-block
    cartItem.innerHTML = newItem;
    let disp = document.getElementById('list-display');
    disp.appendChild(cartItem);
    updatePriceTotal(price);
    let deleteId = `delete-${cartItemId}`;
    let deleteButton = document.getElementById(deleteId);
    deleteButton.addEventListener('click', () => {
        removeItemFromCart(domId, price);
    })
    cartItemId++;
}

function removeItemFromCart(domElement, price) {
    let toDelete = document.getElementById(domElement);
    toDelete.parentNode.remove();
    let negative = (price * -1);
    updatePriceTotal(negative);
}

function updatePriceTotal(price) {
    let totalDisplay = document.getElementById('cart-total');
    let currentTotal = parseFloat(totalDisplay.innerHTML);
    console.log(currentTotal, price)
    totalDisplay.innerHTML = '';
    totalDisplay.innerHTML = (currentTotal + price);
}

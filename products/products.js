let menuIcon = document.querySelector("#menu_icon");
let menuOpen = false;

menuIcon.addEventListener('click', () => {
    let menuItems = document.querySelector(".menu_items");

    menuOpen = !menuOpen;

    menuIcon.innerHTML = menuOpen ? 'close' : 'menu';

    if(menuOpen) {
        menuItems.classList.remove("menuClosed");
        menuItems.classList.add("menuOpen");
    } else {
        menuItems.classList.remove("menuOpen");
        menuItems.classList.add("menuClosed");
    }
});

//collection of elements and storing them in variables from the HTML sheet
let buyBtns = Array.from(document.querySelectorAll('.buy_btn'));
let overlay = document.querySelector(".overlay");
let formContainer = document.querySelector(".form_container");
let closeBtn = document.querySelector("#closebtn");
let body = document.querySelector("body");

let finalProduct = document.querySelector(".final_product");
let finalPrice = document.querySelector(".final_price");
let orderBtn = document.querySelector(".order_btn");

let prices = Array.from(document.querySelectorAll("#price"));
let productNames = Array.from(document.querySelectorAll(".product_name"));

let selectedPrice;//this variable stores the value of the specific product corresponding to button clicked

buyBtns.forEach((buyBtn, i) => buyBtn.addEventListener('click', () => {
    //style to display the shipping details form
    overlay.style.display = "block";
    formContainer.classList.add("formOpen");
    formContainer.classList.remove("formClosed");
    body.classList.add("no-scroll"); // Add class to disable scrolling
    
    //getting the product name for each specific product
    let productName = productNames[i].innerText;

    //variables for the final product name on the form
    let finalProduct = document.querySelector(".final_product");

    //getting the price for each specific product
    let price = prices[i].innerText;
    selectedPrice = parseInt(price);

    finalProduct.textContent = productName;
}));

//variable for the quantity of the products
let quantity = document.querySelector("#quantity");
quantity.addEventListener('input', (prices, i) => {
    let quantityInput = parseInt(quantity.value);

    //calculating the price by the quantity
    let total = selectedPrice * quantityInput;

    finalPrice.textContent = ` Ksh ${total}`;
});

//this function closes the form
closeBtn.addEventListener('click', () => {
    overlay.style.display = "none";
    formContainer.classList.add("formClosed");
    formContainer.classList.remove("formOpen");
    body.classList.remove("no-scroll"); // Remove class to enable scrolling
});

//confirm order button
let confirmOrder = document.querySelector(".order_btn");

confirmOrder.addEventListener('click', () => {
    window.location.href = "../contacts/contacts.html";
});

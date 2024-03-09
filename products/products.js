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


let buyBtns = Array.from(document.querySelectorAll('.buy_btn'));
let overlay = document.querySelector(".overlay");
let formContainer = document.querySelector(".form_container");
let closeBtn = document.querySelector("#closebtn");
let body = document.querySelector("body");

buyBtns.forEach(buyBtn => buyBtn.addEventListener('click', () => {
    overlay.style.display = "block";
    formContainer.classList.add("formOpen");
    formContainer.classList.remove("formClosed");
    body.classList.add("no-scroll"); // Add class to disable scrolling
}))
closeBtn.addEventListener('click', () => {
    overlay.style.display = "none";
    formContainer.classList.add("formClosed");
    formContainer.classList.remove("formOpen");
    body.classList.remove("no-scroll"); // Remove class to enable scrolling
})
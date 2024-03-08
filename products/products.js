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

buyBtns.forEach(buyBtn => buyBtn.addEventListener('click', () => {
    overlay.style.display = "block";
    formContainer.classList.add("formOpen");
    formContainer.classList.remove("formClosed");
}))
closeBtn.addEventListener('click', () => {
    overlay.style.display = "none";
    formContainer.classList.add("formClosed");
    formContainer.classList.remove("formOpen");
})
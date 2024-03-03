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


/*let closeBtn = document.querySelector("#close_btn");
let buyBtns = Array.from(document.querySelectorAll(".buy_btn"));
let formSection = document.querySelector(".form_section");
let formSectionOpen = false;

closeBtn.addEventListener('click', () => {
    formSection.classList.remove("formSectionOpened");
    formSection.classList.add("formSectionClosed");
    formSectionOpen = false;
    
});

buyBtns.forEach(buyBtn => buyBtn.addEventListener('click', () => {
    formSection.classList.remove("formSectionClosed");
    formSection.classList.add("formSectionOpened");
    formSectionOpen = true;
}));*/

document.getElementByclass('buy_btn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('formContainer').style.display = 'block';
    document.body.style.overflow = 'hidden';
});

document.getElementById('close_btn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('formContainer').style.display = 'none';
    document.body.style.overflow = 'auto';
});

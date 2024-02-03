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


/*function enableEndlessAutoScroll() {
    // Get the container element
    var container = document.querySelector('.customer_main_card');

    // Calculate the width of a single card including its margin
    var cardWidth = container.querySelector('.customer_card').offsetWidth + 20; // Assuming a gap of 20px

    // Calculate the number of cards in the container
    var cardCount = container.querySelectorAll('.customer_card').length;

    // Calculate the total width of all cards
    var totalWidth = cardWidth * cardCount;

    // Check if there's room to scroll
    if (totalWidth > container.offsetWidth) {
      // Clone the container content to create an endless effect
      container.innerHTML += container.innerHTML;

      // Set up an interval to scroll to the right every 3 seconds
      setInterval(function () {
        container.scrollLeft += cardWidth;

        // Reset to the beginning when reaching the end
        if (container.scrollLeft >= totalWidth) {
          container.scrollLeft = 0;
        }
      }, 3000);
    }
  }
  document.addEventListener('DOMContentLoaded', enableEndlessAutoScroll);*/
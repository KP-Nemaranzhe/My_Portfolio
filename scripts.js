/**
 * Function to toggle the visibility of the menu and the appearance of the hamburger icon.
 */
function toggleMenu() {
    // Select the element with the class "menu-links"
    const menu = document.querySelector(".menu-links");
    
    // Select the element with the class "hamburger-icon"
    const icon = document.querySelector(".hamburger-icon");
    
    // Toggle the "open" class on the menu element
    // This will either add or remove the "open" class, depending on its current state
    menu.classList.toggle("open");
    
    // Toggle the "open" class on the hamburger icon
    // This will either add or remove the "open" class, depending on its current state
    icon.classList.toggle("open");
}

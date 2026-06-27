"use strict";

function showProduct(productId) {
    // This hides the hoodies on page load
    const allProducts = document.querySelectorAll("#product1, #product2, #product3");
    allProducts.forEach(function(product) {
        product.classList.remove("currentItem");
        product.classList.add("hiddenItem");
    });

    // Show only the selected hoodie
    const selected = document.getElementById(productId);
        selected.classList.remove("hiddenItem");
        selected.classList.add("currentItem");

    // Update the active button
    const allButtons = document.querySelectorAll(".product-button");
        allButtons.forEach(function(btn) {
        btn.classList.remove("activeBtn");
    });

}
    // Adding event listener for when the page loads
document.addEventListener("DOMContentLoaded", function() {
    // I want to set the gray hoodie to be active on page load
    const firstBtn = document.querySelector(".product-button");
    firstBtn.classList.add("activeBtn");

    //Adding event listeners for the hoodie buttons
    const allButtons = document.querySelectorAll(".product-button");
    allButtons.forEach(function(btn) {
        btn.addEventListener("click", function() {
            const productId = btn.dataset.product;
            showProduct(productId);
            btn.classList.add("activeBtn");
        })
    })

})
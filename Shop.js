let iconCart = document.querySelector(".icon-cart");
let closeCart = document.querySelector(".close");
let body = document.querySelector("body");

let products = [
  [1, "Product 1", 200, "Pictures\\Shop\\T-shirt_1.png"],
  [1, "Product 1", 200, "Pictures\\Shop\\T-shirt_1.png"],
  [1, "Product 1", 200, "Pictures\\Shop\\T-shirt_1.png"],
];

iconCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

closeCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});


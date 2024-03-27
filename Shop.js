let iconCart = document.querySelector(".icon-cart");
let closeCart = document.querySelector(".close");
let body = document.querySelector("body");
let listProductHTML = document.querySelector(".listProduct");
let products = [
  {
    id: 1,
    name: "T-shirt 1",
    price: 100,
    image: "Pictures/Shop/T-shirt_1.png",
  },
  {
    id: 2,
    name: "T-shirt 2",
    price: 200,
    image: "Pictures/Shop/T-shirt_2.png",
  },
  {
    id: 3,
    name: "T-shirt 3",
    price: 300,
    image: "Pictures/Shop/T-shirt_1.png",
  },
  {
    id: 4,
    name: "T-shirt 4",
    price: 400,
    image: "Pictures/Shop/T-shirt_2.png",
  },
  {
    id: 5,
    name: "T-shirt 5",
    price: 500,
    image: "Pictures/Shop/T-shirt_1.png",
  },
  {
    id: 6,
    name: "T-shirt 6",
    price: 600,
    image: "Pictures/Shop/T-shirt_2.png",
  },
  {
    id: 7,
    name: "T-shirt 7",
    price: 700,
    image: "Pictures/Shop/T-shirt_1.png",
  },
  {
    id: 8,
    name: "T-shirt 8",
    price: 800,
    image: "Pictures/Shop/T-shirt_2.png",
  },
];

iconCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

closeCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

const addDataToHTML = () => {
  listProductHTML.innerHTML = "";
  products.forEach((product) => {
    let newProduct = document.createElement("div");
    newProduct.classList.add("item");
    newProduct.innerHTML =
      '<img src="' +
      product.image +
      '" alt="T-shirt_1" width="181px" height="200px"><h2>' +
      product.name +
      '</h2> <div class="price">&#163;' +
      product.price +
      '</div> <button class="addCart">Add to Cart</button>';
    listProductHTML.appendChild(newProduct);
  });
};

addDataToHTML();

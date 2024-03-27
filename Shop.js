let iconCart = document.querySelector(".icon-cart");
let closeCart = document.querySelector(".close");
let body = document.querySelector("body");
let listProductHTML = document.querySelector(".listProduct");
let listCartHTML = document.querySelector(".listCart");
let iconCartSpan = document.querySelector(".icon-cart span");

let carts = [];
let listProducts = [
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
  if (listProducts.length > 0) {
    listProducts.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.classList.add("item");
      newProduct.dataset.id = product.id;
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
  }
};

listProductHTML.addEventListener("click", (event) => {
  let positionClick = event.target;
  if (positionClick.classList.contains("addCart")) {
    let product_id = positionClick.parentElement.dataset.id;
    addToCart(product_id);
  }
});

const addToCart = (product_id) => {
  let positionThisProductInCart = carts.findIndex(
    (value) => value.product_id == product_id
  );
  if (carts.length <= 0) {
    carts = [
      {
        product_id: product_id,
        quantity: 1,
      },
    ];
  } else if (positionThisProductInCart < 0) {
    carts.push({
      product_id: product_id,
      quantity: 1,
    });
  } else {
    carts[positionThisProductInCart].quantity += 1;
  }
  addCartToHTML();
};

const addCartToHTML = () => {
  listCartHTML.innerHTML = "";
  let totalQuantity = 0;
  if (carts.length > 0) {
    carts.forEach((cart) => {
      totalQuantity += cart.quantity;
      let newCart = document.createElement("div");
      newCart.classList.add("item");
      newCart.dataset.id = cart.product_id;
      let positionProduct = listProducts.findIndex(
        (value) => value.id == cart.product_id
      );
      let info = listProducts[positionProduct];
      newCart.innerHTML =
        '<div class="image"> <img src="' +
        info.image +
        '" alt="T-shirt_1" width="181px" height="200px"> </div> <div class="name">' +
        info.name +
        '</div> <div class="totalPrice">&#163;' +
        info.price * cart.quantity +
        '</div> <div class="quantity"> <span class="minus"><</span> <span>' +
        cart.quantity +
        '</span> <span class="plus">></span> </div>';
      listCartHTML.appendChild(newCart);
    });
  }
  iconCartSpan.innerText = totalQuantity;
};

listCartHTML.addEventListener("click", (event) => {
  let positionClick = event.target;
  if (
    positionClick.classList.contains("minus") ||
    positionClick.classList.contains("plus")
  ) {
    let product_id = positionClick.parentElement.parentElement.dataset.id;
    let type = "minus";
    if (positionClick.classList.contains("plus")) {
      type = "plus";
    }
    changeQuantity(product_id, type);
  }
});

const changeQuantity = (product_id, type) => {
  let positionItemInCart = carts.findIndex(
    (value) => value.product_id == product_id
  );
  if (positionItemInCart >= 0) {
    switch (type) {
      case "plus":
        carts[positionItemInCart].quantity += 1;
        break;
      default:
        let valueChange = carts[positionItemInCart].quantity - 1;
        if (valueChange > 0) {
          carts[positionItemInCart].quantity = valueChange;
        } else {
          carts.splice(positionItemInCart, 1);
        }
        break;
    }
  }
  addCartToHTML();
};

addDataToHTML();

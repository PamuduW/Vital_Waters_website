let body = document.querySelector("body");
let listOfProduct = document.querySelector(".listOfProduct");
let listOfCartItems = document.querySelector(".listOfCartItems");
let carts = [];
let listProducts = [
  {
    id: 1,
    name: "T-shirt 1",
    price: 100,
    color: ["black", "white"],
    image: [
      "Pictures/Shop/T-shirt1_black.png",
      "Pictures/Shop/T-shirt1_white.png",
    ],
  },
  {
    id: 2,
    name: "Coffee-Mug",
    price: 200,
    color: ["black", "white"],
    image: [
      "Pictures/Shop/coffee-mug_black.png",
      "Pictures/Shop/coffee-mug_white.png",
    ],
  },
];

document.querySelector(".cart-icon").addEventListener("click", () => {
  body.classList.toggle("showCart");
});

document.querySelector(".closeButton").addEventListener("click", () => {
  body.classList.toggle("showCart");
});

const showingShopBody = () => {
  listOfProduct.innerHTML = "";
  listProducts.forEach((product) => {
    let colorChoiseOpt = 0;
    let newProductItem = document.createElement("div");
    newProductItem.classList.add("currentProductItem");
    newProductItem.dataset.id = product.id;
    newProductItem.innerHTML = `
        <img src = "${product.image[colorChoiseOpt]}" alt = "${product.name}" width = "200px" height = "285px" class = "currentProductItem-image">
        <h2>${product.name}</h2>
        <div class = "colorchoise">
          <input class = "color1" type = "radio" name = "${product.name}" id = "0" value = 0 checked>
          <input class = "color2" type = "radio" name = "${product.name}" id = "1" value = 1>
        </div>
        <div class = "price">&#163; ${product.price}</div>
        <button class = "addCart">
          Add to Cart
        </button>
        `;
    newProductItem.querySelectorAll(".colorchoise input").forEach((choice) => {
      choice.addEventListener("change", (event) => {
        const value = event.target.value;
        newProductItem.querySelector(".currentProductItem-image").src =
          product.image[value];
      });
    });
    listOfProduct.appendChild(newProductItem);
  });
};

listOfProduct.addEventListener("click", (event) => {
  let clickedOn = event.target;
  if (clickedOn.classList.contains("addCart")) {
    let cartProductId = clickedOn.parentElement.dataset.id;
    let colorChoice = parseInt(
      clickedOn.parentElement.querySelector(".color2").checked ? "1" : "0"
    );
    addToCart(cartProductId, colorChoice);
  }
});

const addToCart = (cartProductId, colorChoice) => {
  let productInCart = carts.find(
    (value) =>
      value.cartProductId == cartProductId && value.colorChoice == colorChoice
  );
  if (carts.length <= 0) {
    carts = [
      {
        cartProductIdmix: cartProductId+colorChoice,
        cartProductId: cartProductId,
        quantity: 1,
        colorChoice: colorChoice,
      },
    ];
  } else if (!productInCart) {
    carts.push({
      cartProductIdmix: cartProductId+colorChoice,
      cartProductId: cartProductId,
      quantity: 1,
      colorChoice: colorChoice,
    });
  } else {
    productInCart.quantity += 1;
  }
  addCartToHTML();
};

const addCartToHTML = () => {
  listOfCartItems.innerHTML = "";
  let totalQuantity = 0;
  let totalPrice = 0;
  if (carts.length > 0) {
    carts.forEach((cart) => {
      totalQuantity += cart.quantity;
      let newCart = document.createElement("div");
      newCart.classList.add("cartItem");
      newCart.dataset.id = cart.cartProductIdmix;
      let positionProduct = listProducts.findIndex(
        (value) => value.id == cart.cartProductId
      );
      let info = listProducts[positionProduct];
      totalPrice += info.price * cart.quantity;
      let selectedImage = info.image[cart.colorChoice];
      newCart.innerHTML = `<div class="image">
          <img src="${selectedImage}" alt="${
        info.name
      }" width="200px" height="285px">
        </div>
        <div class="name">
          ${info.name} <br> Color : ${info.color[cart.colorChoice]}
        </div>
        <div class="totalPrice">
          £ ${info.price * cart.quantity}
        </div>
        <div class="quantity">
          <span class="minus"><</span>
          <span>${cart.quantity}</span>
          <span class="plus">></span>
        </div>`;
      listOfCartItems.appendChild(newCart);
    });
  }
  document.querySelector(".cart-icon span").innerText = totalQuantity;
  document.querySelector(
    ".completeTotalPrice"
  ).innerHTML = `Total Price : £ ${totalPrice}`;
};

listOfCartItems.addEventListener("click", (event) => {
  let clickedOn = event.target;
  if (
    clickedOn.classList.contains("minus") ||
    clickedOn.classList.contains("plus")
  ) {
    let cartProductId = clickedOn.parentElement.parentElement.dataset.id;
    let type = "minus";
    if (clickedOn.classList.contains("plus")) {
      type = "plus";
    }
    changeQuantity(cartProductId, type);
  }
});

const changeQuantity = (cartProductId, type) => {
  let positionItemInCart = carts.findIndex(
    (value) => value.cartProductIdmix == cartProductId
  );
  if (positionItemInCart >= 0) {
    let product = carts[positionItemInCart];
    switch (type) {
      case "plus":
        product.quantity += 1;
        break;
      case "minus":
        let valueChange = product.quantity - 1;
        if (valueChange > 0) {
          product.quantity = valueChange;
        } else {
          carts.splice(positionItemInCart, 1);
        }
        break;
    }
  }
  addCartToHTML();
};

function checkOut() {
  if (carts.length > 0) {
    let cartDetails = carts.map((cartItem) => {
      let product = listProducts.find((p) => p.id == cartItem.cartProductId);
      if (cartItem.colorChoice == 0) {
        color = "Black";
      } else {
        color = "White";
      }
      return {
        start: "...",
        name: "/" + product.name + "/",
        price: "/" + product.price + "/",
        quantity: "/" + cartItem.quantity + "/",
        colorChoice: "/" + color + "/",
      };
    });

    // Convert the array to a JSON string and URL-encode it
    let encodedCartDetails = encodeURIComponent(JSON.stringify(cartDetails));
    let totalPrice = document
      .querySelector(".completeTotalPrice")
      .innerText.replace("£", " £ ");
    window.location.href = `checkout.html?totalPrice=${totalPrice}&cartDetails=${encodedCartDetails}`;
  } else {
    alert("Please select an item first");
  }
}

showingShopBody();

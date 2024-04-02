let iconCart = document.querySelector(".cart-icon");
let closeCart = document.querySelector(".close");
let body = document.querySelector("body");
let listProductHTML = document.querySelector(".listOfProduct");
let listCartHTML = document.querySelector(".listOfCartItems");
let iconCartSpan = document.querySelector(".cart-icon span");

let carts = [];
let listProducts = [
  {
    id: 1,
    name: "T-shirt 1",
    price: 100,
    color: ["black", "white"],
    alt: "T-shirt 1",
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
    alt: "Coffee-Mug",
    image: [
      "Pictures/Shop/coffee-mug_black.png",
      "Pictures/Shop/coffee-mug_white.png",
    ],
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
      let colorChoiseOpt = 0;
      let newProduct = document.createElement("div");
      newProduct.classList.add("productItem");
      newProduct.dataset.id = product.id;
      newProduct.innerHTML = `
        <img src="${product.image[colorChoiseOpt]}" alt="${product.alt}" width="260px" height="200px" class="productItem-image">
        <h2>${product.name}</h2>
        <div class="colorchoise">
          <input class="color1" type="radio" name="${product.name}" id="0" value="0" checked>
          <input class="color2" type="radio" name="${product.name}" id="1" value="1">
        </div>
        <div class="price">&#163; ${product.price}</div>
        <button class="addCart">
          Add to Cart
        </button>
        `;
      const colorChoices = newProduct.querySelectorAll(".colorchoise input");
      colorChoices.forEach((choice) => {
        choice.addEventListener("change", (event) => {
          const value = event.target.value;
          const newImage = product.image[parseInt(value)];
          newProduct.querySelector(".productItem-image").src = newImage;
        });
      });

      listProductHTML.appendChild(newProduct);
    });
  }
};

listProductHTML.addEventListener("click", (event) => {
  let positionClick = event.target;
  if (positionClick.classList.contains("addCart")) {
    let product_id = positionClick.parentElement.dataset.id;
    let colorChoice = parseInt(
      positionClick.parentElement.querySelector(".color2").checked ? "1" : "0"
    );
    addToCart(product_id, colorChoice);
  }
});

const addToCart = (product_id, colorChoice) => {
  let productInCart = carts.find(
    (value) =>
      value.product_id == product_id && value.colorChoice == colorChoice
  );
  if (carts.length <= 0) {
    carts = [
      {
        product_id: product_id,
        quantity: 1,
        colorChoice: colorChoice,
      },
    ];
  } else if (!productInCart) {
    carts.push({
      product_id: product_id,
      quantity: 1,
      colorChoice: colorChoice,
    });
  } else {
    productInCart.quantity += 1;
  }
  addCartToHTML();
};

const addCartToHTML = () => {
  listCartHTML.innerHTML = "";
  let totalQuantity = 0;
  let totalPrice = 0;
  if (carts.length > 0) {
    carts.forEach((cart) => {
      totalQuantity += cart.quantity;
      let newCart = document.createElement("div");
      newCart.classList.add("cartItem");
      newCart.dataset.id = cart.product_id;
      let positionProduct = listProducts.findIndex(
        (value) => value.id == cart.product_id
      );
      let info = listProducts[positionProduct];
      totalPrice += info.price * cart.quantity;
      let selectedImage = info.image[cart.colorChoice];
      newCart.innerHTML = `<div class="image">
          <img src="${selectedImage}" alt="${
        info.alt
      }" width="200px" height="260px">
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
      listCartHTML.appendChild(newCart);
    });
  }
  iconCartSpan.innerText = totalQuantity;
  document.querySelector(
    ".completeTotalPrice"
  ).innerHTML = `Total Price : £ ${totalPrice}`;
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

const changeQuantity = (product_id, type, colorChoice) => {
  let positionItemInCart = carts.findIndex(
    (value) => value.product_id == product_id
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

    if (colorChoice !== undefined) {
      product.colorChoice = colorChoice;
    }
  }
  addCartToHTML();
};

function checkOut() {
  if (carts.length > 0) {
    let cartDetails = carts.map((cartItem) => {
      let product = listProducts.find((p) => p.id == cartItem.product_id);
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

addDataToHTML();

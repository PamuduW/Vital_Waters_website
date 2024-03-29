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
  let colorChoiseOpt = 0
  if (listProducts.length > 0) {
    listProducts.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.classList.add("item");
      newProduct.dataset.id = product.id;
      newProduct.innerHTML = `
        <img src="${product.image[colorChoiseOpt]}" alt="${product.alt}" width="181px" height="200px"> 
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
      listProductHTML.appendChild(newProduct);
    });
  }
};

// Add event listener to color choise radio buttons
listProductHTML.addEventListener("change", (event) => {
  if (event.target.classList.contains("color1") || event.target.classList.contains("color2")) {
    let product_id = event.target.parentElement.parentElement.dataset.id;
    let colorChoiseOpt = event.target.value;
    updateProductImage(product_id, colorChoiseOpt);
  }
});

// Function to update product image according to the chosen color
const updateProductImage = (product_id, colorChoiseOpt) => {
  let productElements = document.querySelectorAll(`[data-id="${product_id}"] .item`);
  if (productElements.length > 0) {
    let productElement = productElements[0];
    productElement.querySelector("img").src = listProducts.find(product => product.id == product_id).image[colorChoiseOpt];
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
  let totalPrice = 0;
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
      totalPrice += info.price * cart.quantity;
      newCart.innerHTML = `<div class="image">
          <img src="${
            info.image
          }" alt="${info.alt}" width="181px" height="200px"> 
        </div>
        <div class="name">
          ${info.name} 
        </div> 
        <div class="totalPrice">
          &#163;${info.price * cart.quantity}
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
  document.querySelector(".totalPriceFull").innerHTML = `Total Price : &#163;&nbsp;${totalPrice}`;
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

function checkOut() {
  if (carts.length > 0) {
    window.location.href = "Checkout.html";
  }else{
    alert("Plese select an item first")
  }
}

addDataToHTML();
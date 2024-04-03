let urlParams = new URLSearchParams(window.location.search);
let totalPrice = urlParams.get("totalPrice");
let cartDetails = urlParams.get("cartDetails");

function gettingCartDetails() {
  document.getElementById("total-price").innerHTML = `<b>${totalPrice}</b>`;
  let items = cartDetails.split("...");
  let cartDetailsElement = document.getElementById("cart-Details");
  let cartItemsHTML = "";
  for (let i = 1; i < items.length; i++) {
    let itemDetails = items[i].split("/");
    cartItemsHTML += `<p>Item Name&nbsp;&nbsp;: ${itemDetails[1]} <br> 
    Item Color&nbsp;&nbsp;&nbsp;: ${itemDetails[7]} <br> 
    Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: £ ${itemDetails[3]} <br> 
    Quantity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ${itemDetails[5]} </p>`;
  }
  cartDetailsElement.innerHTML = cartItemsHTML;
}

function finishing() {
  document.body.innerHTML = "";
  let message = document.createElement("div");
  message.innerHTML =
    '<span class="message"><strong>Success!</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Redirecting back to the shop...</span>';
  setTimeout(function () {
    document.body.appendChild(message);
  }, 800);
  setTimeout(function () {
    window.location.href = "shop.html";
  }, 2500);
}
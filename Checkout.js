let urlParams = new URLSearchParams(window.location.search);
let totalPrice = urlParams.get("totalPrice");

function totalPricetext(){
    document.getElementById("total-price").innerHTML= totalPrice;
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
    window.location.href = "Shop.html";
  }, 2500);
}

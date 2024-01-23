const tbody = document.querySelector("tbody");
const total = document.querySelector(".total");
const basketCount = document.querySelector(".basket-count");

let basket = getFavFromStroge();
calculateBasket();

drawTable(basket);

function drawTable(data) {
  tbody.innerHTML = "";
  data.forEach((element) => {
    const tr = document.createElement("tr");
 
    tr.innerHTML = `
        <td>${element.id}</td>
        <td>
        <img src="${element.image}" alt="">
        </td>
        <td>${element.title}</td>
        <td>${element.price}</td>
        <td>
        <button class="basket-btn" onclick=incBtn(${element.id},this)>+</button>
        <span>${element.count}</span>
        <button class="basket-btn" onclick="decBtn(${element.id},this)">-</button>
        </td>
        <td>
        <button  class="btn btn-danger" onclick=deleteBtn(${element.id},this)>Delete</button>
        </td>
        `;
    tbody.append(tr);
  });
}

function incBtn(id, btn) {
  let inc = basket.find((item) => item.id == id);
  inc.count += 1;
  drawTable(basket);
  setFavFromStroge(basket);
  calculateBasket(basket.length);
  totalPrice();
}

function decBtn(id,button) {
  let dec = basket.find((item) => item.id === id);

  if (dec.count > 1) {
    dec.count -= 1;
  } else{
    button.closest("tr").remove();
}

  drawTable(basket);
  setFavFromStroge(basket);
  calculateBasket(basket.length);
  totalPrice();
}

function deleteBtn(id, btn) {
  basket = basket.filter((item) => item.id != id);
  btn.closest("tr").remove();

  setFavFromStroge(basket);
  calculateBasket(basket.length);
  drawTable(basket)
  totalPrice();
}

function setFavFromStroge(favs) {
  localStorage.setItem("favs", JSON.stringify(favs));
}

function getFavFromStroge() {
  return JSON.parse(localStorage.getItem("favs")) ?? [];
}

function calculateBasket() {
  basketCount.textContent = basket.reduce((acc, curr) => acc + curr.count, 0);
}

function totalPrice() {
  let sum = basket.reduce((acc, curr) => acc + curr.count * curr.price, 0);
  total.textContent = sum;
}
totalPrice();

const BASE_URL = "http://localhost:8000/product";
const product = document.querySelector(".product");
async function getData() {
  let res = await axios(`${BASE_URL}`);
  console.log(res.data);
  drawCard(res.data);
}
getData();

function drawCard(data) {
  product.innerHTML = "";
  data.forEach((element) => {
    product.innerHTML += `
        <div class="product-cards">
        <div class="p-image">
       <img src="${element.image}" alt="">
   </div>
   <div class="p-text">
       <h5>${element.title}</h5>
       <p>${element.desc}</p>
       <i class="fa-regular fa-heart"></i>
       <i class="fa-solid fa-cart-shopping"></i>

       <a href="details.html?id=${element.id}"><i class="fa-brands fa-readme"></i></a>

   </div>
   </div>
        
        
        `;
  });
}
 




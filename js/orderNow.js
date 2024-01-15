const addToCardBox = document.getElementById("addToCard-Box");

function addItem(url,titel,price){

    addToCardBox.innerHTML = addToCardBox.innerHTML + `<div class="border-bottom border-dark-subtle py-2 my-2 d-flex position-relative">
    <img src="${url}" class="w-25 rounded">
    <div class="ms-3">
      <p class="mb-1">${titel}</p>
      <p>Rs. ${price}/-</p>
      <span role="button" class="position-absolute top-0 end-0 ha fs-4">x</span>
    </div>
  </div>`;
  alert('Your Order Placed 🎊🎉');
}
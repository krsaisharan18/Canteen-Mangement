let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayCartItems() {
  const cartItemsDiv = document.getElementById('cart-items');
  const totalPriceElem = document.getElementById('total-price');
  cartItemsDiv.innerHTML = '';
  let totalPrice = 0;

  cart.forEach((entry, index) => {
    const itemTotal = entry.price * entry.quantity;
    totalPrice += itemTotal;
    cartItemsDiv.innerHTML += `
      <div class="cart-item">
        <img src="${entry.imageUrl}" class="cart-item-image">
        <div class="item-details">
          <h3>${entry.item}</h3>
          <p>₹${entry.price} × ${entry.quantity} = ₹${itemTotal}</p>
        </div>
        <button onclick="removeItem(${index})">Remove</button>
      </div>`;
  });
  totalPriceElem.textContent = `Total: ₹${totalPrice}`;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartItems();
}

function checkout() {
  if (cart.length === 0) { alert("Your cart is empty!"); return; }
  document.getElementById('cart-section').style.display = 'none';
  document.getElementById('payment-section').style.display = 'block';
}

document.getElementById('payment-form').onsubmit = (e) => {
  e.preventDefault();
  const method = document.querySelector('input[name="payment-method"]:checked');
  if (!method) { alert("Select payment method"); return; }
  showOrderSummary(method.value);
  localStorage.removeItem('cart');
  cart = [];
};

function showOrderSummary(paymentMethod) {
  document.getElementById('payment-section').style.display = 'none';
  document.getElementById('order-summary').style.display = 'block';
  const orderItemsDiv = document.getElementById('order-items');
  orderItemsDiv.innerHTML = '';
  let totalPrice = 0;

  cart.forEach((entry) => {
    const itemTotal = entry.price * entry.quantity;
    totalPrice += itemTotal;
    orderItemsDiv.innerHTML += `<p>${entry.item} – ₹${itemTotal}</p>`;
  });

  document.getElementById('order-code').innerHTML = `<p><strong>Payment Method:</strong> ${paymentMethod}</p>`;
}

function backToHomePage() {
  window.location.href = 'index.html';
}

displayCartItems();


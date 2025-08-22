let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
document.getElementById('cart-count').textContent = cartCount;

// Fake Signup
document.getElementById("signup-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Signup successful! (Demo only)");
});

// Fake Login
document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Login successful! (Demo only)");
  window.location.href = 'index.html';
});

// Add item to cart
function addToCart(item, price, imageUrl) {
  const existing = cart.find(c => c.item === item);
  if (existing) existing.quantity++;
  else cart.push({ item, price, imageUrl, quantity: 1 });
  cartCount++;
  localStorage.setItem('cart', JSON.stringify(cart));
  document.getElementById('cart-count').textContent = cartCount;
}

function viewCart() {
  window.location.href = 'cart.html';
}

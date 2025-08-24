let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);
if (document.getElementById('cart-count')) {
  document.getElementById('cart-count').textContent = cartCount;
}

// Signup (frontend only)
if (document.getElementById("signup-form")) {
  document.getElementById("signup-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.querySelector("#signup-form input[placeholder='Enter your Username']").value;
    const email = document.querySelector("#signup-form input[placeholder='Enter your Email']").value;
    const password = document.querySelector("#signup-form input[placeholder='Create a Password']").value;
    const confirmPassword = document.querySelector("#signup-form input[placeholder='Confirm Password']").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Save user details in localStorage
    localStorage.setItem("user", JSON.stringify({ username, email, password }));
    alert("Signup successful! You can now login.");
  });
}

// Login (frontend only)
if (document.getElementById("login-form")) {
  document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.querySelector("#login-form input[placeholder='Username']").value;
    const password = document.querySelector("#login-form input[placeholder='Password']").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      alert("Login successful!");
      window.location.href = 'index.html';  // redirect to home page
    } else {
      alert("Invalid username or password!");
    }
  });
}

// Add item to cart
function addToCart(item, price, imageUrl) {
  const existing = cart.find(c => c.item === item);
  if (existing) existing.quantity++;
  else cart.push({ item, price, imageUrl, quantity: 1 });

  cartCount++;
  localStorage.setItem('cart', JSON.stringify(cart));
  if (document.getElementById('cart-count')) {
    document.getElementById('cart-count').textContent = cartCount;
  }
}

function viewCart() {
  window.location.href = 'cart.html';
}

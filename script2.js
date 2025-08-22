
let isLoggedIn = false;
let cart = [];
let cartCount = 0;

// Handle login form submission
// Function to handle form submission for signup
document.getElementById("signup-form").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Extracting form data
    const username = document.querySelector("#signup-form input[placeholder='Enter your Username']").value;
    const email = document.querySelector("#signup-form input[placeholder='Enter your Email']").value;
    const password = document.querySelector("#signup-form input[placeholder='Create a Password']").value;
    const confirmPassword = document.querySelector("#signup-form input[placeholder='Confirm Password']").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    try {
        // Sending data to the backend
        const response = await fetch("http://localhost:5000/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password })
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message || "Signup successful!");
        } else {
            alert(result.message || "Signup failed!");
        }
    } catch (error) {
        console.error("Error during signup:", error);
        alert("An error occurred during signup. Please try again.");
    }
});

// Function to handle form submission for login
document.getElementById("login-form").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Extracting form data
    const username = document.querySelector("#login-form input[placeholder='Username']").value;
    const password = document.querySelector("#login-form input[placeholder='Password']").value;

    try {
        // Sending data to the backend
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message || "Login successful!");
            if (response.ok) {
                window.location.href = 'fwd.html';
               
            } else {
                alert(result.message || "Login failed!");
            }
            
        } else {
            alert(result.message || "Login failed!");
        }
    } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred during login. Please try again.");
    }
});


function addToCart(item, price, imageUrl) {
    const existingItem = cart.find(cartItem => cartItem.item === item);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ item, price, imageUrl, quantity: 1 });
    }

    cartCount++;
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
    document.getElementById('cart-count').textContent = cartCount;
}


function viewCart() {
    window.location.href = 'cart.html';
}

// Close the cart modal
function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    closeCart();  // Close cart modal
    
    const paymentModal = document.getElementById('payment-modal');
    paymentModal.style.display = 'block';

    // Handle payment confirmation
    document.getElementById('payment-form').onsubmit = function(event) {
        event.preventDefault();
        
        const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;

        

        closePayment();  // Close payment modal
    };
}

// Close the payment modal
function closePayment() {
    document.getElementById('payment-modal').style.display = 'none';
}

// Function to show order summary after payment
function showOrderSummary() {
    document.getElementById('payment-modal').style.display = 'none';
    document.getElementById('order-summary').style.display = 'block';
}


// Function to show order summary after payment
function showOrderSummary() {
    document.getElementById('payment-modal').style.display = 'none';
    document.getElementById('order-summary').style.display = 'block';
}

 

// Show order summary after successful checkout
function showOrderSummary() {
    document.getElementById('payment-modal').style.display = 'none'; // Close payment modal

    const orderSummary = document.getElementById('order-summary');
    const orderItems = document.getElementById('order-items');
    
    // Clear previous order items
    orderItems.innerHTML = '';

    // Add each item in the cart to the order summary
    cart.forEach((entry) => {
        orderItems.innerHTML += `
            <div class="order-item">
                <img src="${entry.imageUrl}" alt="${entry.item}" style="width: 50px; height: 50px;">
                <div class="item-details">
                    <h3>${entry.item}</h3>
                    <p>Price: ₹${entry.price} | Quantity: ${entry.quantity}</p>
                    <p>Total: ₹${entry.price * entry.quantity}</p>
                </div>
            </div>
        `;
    });
    cart = [];
        cartCount = 0;
        document.getElementById('cart-count').textContent = cartCount;

    orderSummary.style.display = 'block';  // Show order summary
}

// Function to close the Order Summary
function closeOrderSummary() {
    document.getElementById('order-summary').style.display = 'none';
}

// Back to home page and hide order summary
function backToHomePage() {
    document.getElementById('order-summary').style.display = 'none';  // Hide order summary
    document.getElementById('home-page').style.display = 'none';      // Hide home page content

    // Show the login and signup sections again
    document.getElementById('signup').style.display = 'block';
    document.getElementById('login').style.display = 'block';
}

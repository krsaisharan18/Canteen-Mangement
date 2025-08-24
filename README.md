# 🍕📚 College Canteen & Stationery Management

A simple **frontend-based web application** to manage a **college canteen & stationery shop**.
This project is built using **HTML, CSS, and JavaScript** with **LocalStorage** acting as the backend for user authentication, cart management, and order handling.

---

## 🚀 Features

* **Signup & Login System** (saved in browser LocalStorage)
* **Interactive Canteen Menu** (Pizza, Burger, Fries, Coffee, etc.)
* **Stationery Store Section** (Notebooks, Pens, Pencils, Markers, etc.)
* **Add to Cart** with quantity update and removal
* **Cart & Checkout Flow** with LocalStorage persistence
* **Multiple Payment Options** (Credit Card, Debit Card, UPI, Cash on Delivery – frontend only)
* **Order Summary** with:

  * Random Order Code generator
  * WhatsApp integration for order confirmation
  * "Copy Order Code" feature
* **Responsive & Styled UI** with **hover effects and animations**

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend Simulation:** LocalStorage (no real backend/server)
* **Styling:** Custom CSS + Font Awesome Icons

---

## 📂 Project Structure

```
📦 Canteen-Management
 ┣ 📜 index.html        # Homepage with menu & stationery items
 ┣ 📜 signup.html       # Signup & login page
 ┣ 📜 cart.html         # Cart & checkout page
 ┣ 📜 style1.css        # Stylesheet for UI/UX
 ┣ 📜 script2.js        # Handles signup, login & cart operations
 ┣ 📜 cart.js           # Handles cart display, checkout & order summary
 ┗ 📜 README.md         # Project documentation
```

---

## ▶️ How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/canteen-management.git
   cd canteen-management
   ```
2. Open `signup.html` in your browser.

   * Create an account (data saved in LocalStorage).
   * Login with your credentials.
3. Browse menu items in `index.html`.

   * Add food or stationery items to your cart.
4. Go to the **Cart Page (`cart.html`)**.

   * Update quantity / remove items.
   * Proceed to checkout & choose payment method.
5. View **Order Summary** with an **order code & WhatsApp order option**.

---

## 📸 Screenshots (Optional)

* 🛒 **Canteen & Stationery Menu**
* 📦 **Cart Page**
* 💳 **Payment Options**
* ✅ **Order Summary with WhatsApp Integration**

---

## ⚠️ Limitations

* No real database or backend – everything is stored in **LocalStorage**.
* Data is **browser-specific** (cleared if cache is cleared).
* Payment system is **mock only**.

---

## ✨ Future Improvements

* Add a **real backend (Node.js/Express + DB)** for persistent storage.
* Implement **role-based access** (Admin to manage inventory, Students to order).
* Add **order history** and **profile management**.
* Improve **mobile responsiveness**.

---

## 👨‍💻 Author

**Sai Sharan**
📌 BMS College of Engineering
🔗 [LinkedIn](https://www.linkedin.com/in/sai-sharan-791782330/)

---

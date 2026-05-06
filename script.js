const defaultProducts = [
  {
    id: "flower-fun",
    name: "Flower Fun Bracelet",
    price: 16.0,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
    description: "Bright flower beads with a sparkling charm. Perfect for sharing with friends."
  },
  {
    id: "sunshine-twist",
    name: "Sunshine Twist",
    price: 18.5,
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=700&q=80",
    description: "Yellow, orange, and gold beads for a happy summer style."
  },
  {
    id: "rainbow-smile",
    name: "Rainbow Smile",
    price: 19.0,
    image: "https://images.unsplash.com/photo-1500305153788-1a1110c9f0b1?auto=format&fit=crop&w=700&q=80",
    description: "A cheerful stack of colourful beads that shows off your brightest mood."
  },
  {
    id: "moonlight-gem",
    name: "Moonlight Gem",
    price: 17.25,
    image: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=700&q=80",
    description: "Soft sparkly pastels and a little moon charm for gentle nighttime magic."
  },
  {
    id: "berry-sprinkle",
    name: "Berry Sprinkle",
    price: 15.5,
    image: "https://images.unsplash.com/photo-1473448916294-50a111265d0e?auto=format&fit=crop&w=700&q=80",
    description: "Pink, purple, and glitter beads for a sweet bracelet that feels like candy."
  },
  {
    id: "ocean-breeze",
    name: "Ocean Breeze",
    price: 20.0,
    image: "https://images.unsplash.com/photo-1458956486364-9e5f8d25f228?auto=format&fit=crop&w=700&q=80",
    description: "Cool blue beads with tiny shell accents for seaside adventure style."
  }
];

const cartKey = "imeldasBraceletsCart";
const productKey = "imeldasBraceletsProducts";
const adminUsersKey = "imeldasBraceletsAdminUsers";
const adminSessionKey = "imeldasBraceletsAdminSession";

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

function saveProducts(products) {
  localStorage.setItem(productKey, JSON.stringify(products));
}

function getProducts() {
  const stored = localStorage.getItem(productKey);
  if (!stored) return [...defaultProducts];

  try {
    const parsed = JSON.parse(stored);
    if (Array.isArray(parsed)) {
      return parsed.filter((product) => product && product.id && product.name && Number.isFinite(Number(product.price)));
    }
  } catch (_error) {
    return [...defaultProducts];
  }

  return [...defaultProducts];
}

function ensureProductCatalog() {
  if (!localStorage.getItem(productKey)) {
    saveProducts(defaultProducts);
  }
}

function getAdminUsers() {
  const stored = localStorage.getItem(adminUsersKey);
  if (!stored) return [];

  try {
    const parsed = JSON.parse(stored);
    if (Array.isArray(parsed)) {
      return parsed.filter((user) => user && user.username && user.password);
    }
  } catch (_error) {
    return [];
  }

  return [];
}

function saveAdminUsers(users) {
  localStorage.setItem(adminUsersKey, JSON.stringify(users));
}

function ensureAdminUsers() {
  const users = getAdminUsers();
  if (users.length === 0) {
    saveAdminUsers([{ username: "admin", password: "admin123" }]);
  }
}

function getAdminSession() {
  return localStorage.getItem(adminSessionKey);
}

function setAdminSession(username) {
  localStorage.setItem(adminSessionKey, username);
}

function clearAdminSession() {
  localStorage.removeItem(adminSessionKey);
}

function getCart() {
  const cartJSON = localStorage.getItem(cartKey);
  return cartJSON ? JSON.parse(cartJSON) : [];
}

function saveCart(cart) {
  localStorage.setItem(cartKey, JSON.stringify(cart));
}

function addToCart(productId) {
  const cart = getCart();
  const product = getProducts().find((item) => item.id === productId);
  if (!product) return;

  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: product.id, quantity: 1 });
  }

  saveCart(cart);
  alert(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
  const cart = getCart().filter((item) => item.id !== productId);
  saveCart(cart);
  renderCart();
}

function calculateCartTotal() {
  const products = getProducts();
  const cart = getCart();
  return cart.reduce((total, cartItem) => {
    const product = products.find((item) => item.id === cartItem.id);
    return total + (product ? product.price * cartItem.quantity : 0);
  }, 0);
}

function formatPrice(value) {
  return `$${value.toFixed(2)}`;
}

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div class="card-content">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="product-action">
        <span class="price">${formatPrice(product.price)}</span>
        <button class="button add-button" data-product-id="${product.id}">Add to Cart</button>
      </div>
    </div>
  `;
  return card;
}

function renderProductList() {
  const list = document.getElementById("product-list");
  if (!list) return;
  list.innerHTML = "";

  const products = getProducts();
  products.forEach((product) => {
    const linkCard = createProductCard(product);
    linkCard.querySelector(".add-button").addEventListener("click", () => addToCart(product.id));
    linkCard.addEventListener("click", (event) => {
      const target = event.target;
      if (target && typeof target === "object" && target !== null && "closest" in target) {
        const element = /** @type {HTMLElement} */ (target);
        if (element.closest("button")) return;
      }
      window.location.href = `product.html?id=${product.id}`;
    });
    list.appendChild(linkCard);
  });
}

function renderFeaturedProducts() {
  const grid = document.getElementById("featured-grid");
  if (!grid) return;

  const featured = getProducts().slice(0, 4);
  featured.forEach((product) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="card-content">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-action">
          <span class="price">${formatPrice(product.price)}</span>
          <button class="button add-button" data-product-id="${product.id}">Add to Cart</button>
        </div>
      </div>
    `;
    card.querySelector(".add-button").addEventListener("click", (event) => {
      event.stopPropagation();
      addToCart(product.id);
    });
    grid.appendChild(card);
  });
}

function renderProductDetail() {
  const detail = document.getElementById("product-detail");
  if (!detail) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  const product = getProducts().find((item) => item.id === productId);

  if (!product) {
    detail.innerHTML = `<p>Product not found. <a href="products.html">Back to shop</a></p>`;
    return;
  }

  detail.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div class="product-detail-content">
      <p class="eyebrow">Product details</p>
      <h2>${product.name}</h2>
      <p class="product-detail-description">${product.description}</p>
      <p class="product-price">${formatPrice(product.price)}</p>
      <button class="button button-primary" id="add-product-button">Add to Cart</button>
    </div>
  `;

  const addButton = document.getElementById("add-product-button");
  if (addButton) {
    addButton.addEventListener("click", () => addToCart(product.id));
  }
}

function renderCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  if (!cartItemsContainer || !cartTotal) return;

  const products = getProducts();
  const cart = getCart();
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<div class="card"><div class="card-content"><p>Your cart is empty. <a href="products.html">Start shopping</a>.</p></div></div>`;
    cartTotal.textContent = "Total: $0.00";
    return;
  }

  cart.forEach((cartItem) => {
    const product = products.find((item) => item.id === cartItem.id);
    if (!product) return;

    const itemEl = document.createElement("article");
    itemEl.className = "cart-item";
    itemEl.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="cart-item-content">
        <h3 class="cart-item-title">${product.name}</h3>
        <p class="cart-item-meta">${cartItem.quantity} x ${formatPrice(product.price)}</p>
        <p class="cart-total">${formatPrice(product.price * cartItem.quantity)}</p>
      </div>
      <div class="cart-item-actions">
        <button class="remove-button" data-product-id="${product.id}">Remove</button>
      </div>
    `;

    itemEl.querySelector(".remove-button").addEventListener("click", () => removeFromCart(product.id));
    cartItemsContainer.appendChild(itemEl);
  });

  cartTotal.textContent = `Total: ${formatPrice(calculateCartTotal())}`;
}

function upsertProduct(event) {
  event.preventDefault();

  const idInput = document.getElementById("product-id");
  const nameInput = document.getElementById("product-name");
  const priceInput = document.getElementById("product-price");
  const imageInput = document.getElementById("product-image");
  const descriptionInput = document.getElementById("product-description");

  if (!idInput || !nameInput || !priceInput || !imageInput || !descriptionInput) return;

  const existingId = idInput.value.trim();
  const name = nameInput.value.trim();
  const price = Number(priceInput.value);
  const image = imageInput.value.trim();
  const description = descriptionInput.value.trim();

  if (!name || !Number.isFinite(price) || price <= 0 || !image || !description) {
    alert("Please fill in all fields with valid values.");
    return;
  }

  const products = getProducts();
  const generatedId = slugify(name) || `bracelet-${Date.now()}`;
  const id = existingId || generatedId;

  const duplicate = products.find((product) => product.id === id && product.id !== existingId);
  if (duplicate) {
    alert("A bracelet with that name already exists. Please use a different name.");
    return;
  }

  const product = { id, name, price, image, description };
  const index = products.findIndex((item) => item.id === id);

  if (index >= 0) {
    products[index] = product;
  } else {
    products.push(product);
  }

  saveProducts(products);
  document.getElementById("admin-form").reset();
  idInput.value = "";
  document.getElementById("admin-submit").textContent = "Add Bracelet";
  renderAdminProducts();
}

function editProduct(productId) {
  const product = getProducts().find((item) => item.id === productId);
  if (!product) return;

  document.getElementById("product-id").value = product.id;
  document.getElementById("product-name").value = product.name;
  document.getElementById("product-price").value = product.price;
  document.getElementById("product-image").value = product.image;
  document.getElementById("product-description").value = product.description;
  document.getElementById("admin-submit").textContent = "Save Changes";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function deleteProduct(productId) {
  const current = getProducts();
  if (current.length <= 1) {
    alert("Keep at least one bracelet in the shop.");
    return;
  }

  const next = current.filter((item) => item.id !== productId);
  saveProducts(next);
  saveCart(getCart().filter((item) => item.id !== productId));
  renderAdminProducts();
}

function renderAdminProducts() {
  const list = document.getElementById("admin-product-list");
  if (!list) return;

  list.innerHTML = "";

  getProducts().forEach((product) => {
    const item = document.createElement("article");
    item.className = "admin-item";
    item.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="admin-item-content">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">${formatPrice(product.price)}</p>
      </div>
      <div class="admin-item-actions">
        <button class="add-button" data-action="edit" data-id="${product.id}">Edit</button>
        <button class="remove-button" data-action="delete" data-id="${product.id}">Delete</button>
      </div>
    `;

    item.querySelector('[data-action="edit"]').addEventListener("click", () => editProduct(product.id));
    item.querySelector('[data-action="delete"]').addEventListener("click", () => deleteProduct(product.id));
    list.appendChild(item);
  });
}

function renderAdminUsers() {
  const userList = document.getElementById("admin-user-list");
  const currentUserName = getAdminSession();
  const currentUserEl = document.getElementById("admin-current-user");
  if (!userList) return;

  if (currentUserEl) {
    currentUserEl.textContent = currentUserName || "Not logged in";
  }

  userList.innerHTML = "";

  getAdminUsers().forEach((user) => {
    const item = document.createElement("article");
    item.className = "admin-item";
    item.innerHTML = `
      <div class="admin-item-content">
        <h3>${user.username}</h3>
        <p>Can access admin page</p>
      </div>
      <div class="admin-item-actions">
        <button class="add-button" data-action="edit-user" data-username="${user.username}">Edit</button>
        <button class="remove-button" data-action="delete-user" data-username="${user.username}">Delete</button>
      </div>
    `;

    item.querySelector('[data-action="edit-user"]').addEventListener("click", () => {
      document.getElementById("admin-user-original").value = user.username;
      document.getElementById("admin-user-username").value = user.username;
      document.getElementById("admin-user-password").value = user.password;
      document.getElementById("admin-user-submit").textContent = "Save User";
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    item.querySelector('[data-action="delete-user"]').addEventListener("click", () => deleteAdminUser(user.username));
    userList.appendChild(item);
  });
}

function deleteAdminUser(username) {
  const users = getAdminUsers();
  if (users.length <= 1) {
    alert("Keep at least one admin user.");
    return;
  }

  const currentUserName = getAdminSession();
  if (currentUserName === username) {
    alert("You cannot delete the user currently logged in.");
    return;
  }

  saveAdminUsers(users.filter((user) => user.username !== username));
  renderAdminUsers();
}

function upsertAdminUser(event) {
  event.preventDefault();

  const originalInput = document.getElementById("admin-user-original");
  const usernameInput = document.getElementById("admin-user-username");
  const passwordInput = document.getElementById("admin-user-password");
  if (!originalInput || !usernameInput || !passwordInput) return;

  const originalUsername = originalInput.value.trim();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) {
    alert("Please enter a username and password.");
    return;
  }

  const users = getAdminUsers();
  const usernameTaken = users.find((user) => user.username === username && user.username !== originalUsername);
  if (usernameTaken) {
    alert("That username is already in use.");
    return;
  }

  const nextUser = { username, password };
  const existingIndex = users.findIndex((user) => user.username === originalUsername || user.username === username);

  if (existingIndex >= 0) {
    users[existingIndex] = nextUser;
  } else {
    users.push(nextUser);
  }

  saveAdminUsers(users);
  if (getAdminSession() === originalUsername || (!originalUsername && getAdminSession() === username)) {
    setAdminSession(username);
  }

  document.getElementById("admin-user-form").reset();
  originalInput.value = "";
  document.getElementById("admin-user-submit").textContent = "Add User";
  renderAdminUsers();
}

function updateAdminVisibility(isLoggedIn) {
  const loginSection = document.getElementById("admin-login-section");
  const dashboardSection = document.getElementById("admin-dashboard");
  if (!loginSection || !dashboardSection) return;

  loginSection.hidden = isLoggedIn;
  dashboardSection.hidden = !isLoggedIn;
}

function handleAdminLogin(event) {
  event.preventDefault();

  const usernameInput = document.getElementById("admin-login-username");
  const passwordInput = document.getElementById("admin-login-password");
  if (!usernameInput || !passwordInput) return;

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const user = getAdminUsers().find((item) => item.username === username && item.password === password);

  if (!user) {
    alert("Invalid username or password.");
    return;
  }

  setAdminSession(user.username);
  document.getElementById("admin-login-form").reset();
  updateAdminVisibility(true);
  renderAdminProducts();
  renderAdminUsers();
}

function handleAdminLogout() {
  clearAdminSession();
  updateAdminVisibility(false);
}

function setupAdminPage() {
  const loginForm = document.getElementById("admin-login-form");
  const form = document.getElementById("admin-form");
  const userForm = document.getElementById("admin-user-form");
  if (!form || !loginForm || !userForm) return;

  ensureAdminUsers();

  const existingSession = getAdminSession();
  const hasValidSession = Boolean(getAdminUsers().find((user) => user.username === existingSession));
  if (!hasValidSession) {
    clearAdminSession();
  }

  updateAdminVisibility(hasValidSession);

  loginForm.addEventListener("submit", handleAdminLogin);

  form.addEventListener("submit", upsertProduct);

  const resetButton = document.getElementById("admin-reset");
  const idInput = document.getElementById("product-id");
  if (resetButton && idInput) {
    resetButton.addEventListener("click", () => {
      idInput.value = "";
      document.getElementById("admin-submit").textContent = "Add Bracelet";
    });
  }

  userForm.addEventListener("submit", upsertAdminUser);

  const userResetButton = document.getElementById("admin-user-reset");
  const userOriginal = document.getElementById("admin-user-original");
  if (userResetButton && userOriginal) {
    userResetButton.addEventListener("click", () => {
      userOriginal.value = "";
      document.getElementById("admin-user-submit").textContent = "Add User";
    });
  }

  const logoutButton = document.getElementById("admin-logout");
  if (logoutButton) {
    logoutButton.addEventListener("click", handleAdminLogout);
  }

  renderAdminProducts();
  renderAdminUsers();
}

function handleCheckout() {
  const checkoutForm = document.getElementById("checkout-form");
  if (!checkoutForm) return;

  const stripe = Stripe("pk_test_YOUR_TEST_PUBLISHABLE_KEY_HERE");
  const elements = stripe.elements();
  const cardElement = elements.create("card");
  cardElement.mount("#card-element");

  cardElement.on("change", (event) => {
    const displayError = document.getElementById("card-errors");
    if (event.error) {
      displayError.textContent = event.error.message;
    } else {
      displayError.textContent = "";
    }
  });

  checkoutForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = document.getElementById("submit-button");
    submitButton.disabled = true;
    submitButton.textContent = "Processing...";

    try {
      const total = calculateCartTotal();
      const amountInCents = Math.round(total * 100);

      const response = await fetch("/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ amount: amountInCents })
      });

      const { clientSecret, error } = await response.json();
      if (error) {
        throw new Error(error);
      }

      const { error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement
        }
      });

      if (confirmError) {
        throw new Error(confirmError.message);
      }

      localStorage.removeItem(cartKey);
      alert("Thank you! Your payment was successful.");
      window.location.href = "index.html";
    } catch (error) {
      alert(`Payment failed: ${error.message}`);
      submitButton.disabled = false;
      submitButton.textContent = "Complete Payment";
    }
  });
}

function initPage() {
  ensureProductCatalog();
  renderFeaturedProducts();
  renderProductList();
  renderProductDetail();
  renderCart();
  setupAdminPage();
  handleCheckout();
}

window.addEventListener("DOMContentLoaded", initPage);

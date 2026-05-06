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

const cartCookieName = "imeldasBraceletsCartId";
const adminSessionCookieName = "imeldasBraceletsAdminSession";
const slideshowSettingKey = "hero_slideshow";

let supabaseClient = null;
let supabaseReady = false;
let warnedAboutSupabase = false;

const defaultSlideshow = {
  intervalSeconds: 4,
  images: [
    {
      id: "colourful-handmade-bracelets",
      src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=700&q=80",
      alt: "Colourful handmade bracelets"
    },
    {
      id: "pink-and-gold-jewellery",
      src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
      alt: "Pink and gold jewellery on a dressing table"
    },
    {
      id: "bright-bead-colours",
      src: "https://images.unsplash.com/photo-1500305153788-1a1110c9f0b1?auto=format&fit=crop&w=700&q=80",
      alt: "Bright colourful beads"
    }
  ]
};

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

function readCookie(name) {
  const cookie = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${name}=`));
  return cookie ? decodeURIComponent(cookie.split("=").slice(1).join("=")) : "";
}

function writeCookie(name, value, maxAgeSeconds = 60 * 60 * 24 * 365) {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAgeSeconds}; SameSite=Lax`;
}

function clearCookie(name) {
  document.cookie = `${name}=; path=/; max-age=0; SameSite=Lax`;
}

function createId(prefix) {
  const randomPart = typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  return `${prefix}-${randomPart}`;
}

function getCartId() {
  const existing = readCookie(cartCookieName);
  if (existing) return existing;

  const next = createId("cart");
  writeCookie(cartCookieName, next);
  return next;
}

async function initSupabase() {
  if (supabaseReady) return supabaseClient;

  try {
    const response = await fetch("/supabase-config");
    const config = response.ok ? await response.json() : {};
    const url = config.url || window.SUPABASE_URL || "";
    const anonKey = config.anonKey || window.SUPABASE_ANON_KEY || "";

    if (url && anonKey && window.supabase) {
      supabaseClient = window.supabase.createClient(url, anonKey);
    }
  } catch (_error) {
    supabaseClient = null;
  }

  supabaseReady = true;
  return supabaseClient;
}

async function getDb() {
  const db = await initSupabase();
  if (!db && !warnedAboutSupabase) {
    console.warn("Supabase is not configured. Add SUPABASE_URL and SUPABASE_ANON_KEY to your server environment.");
    warnedAboutSupabase = true;
  }
  return db;
}

function normalizeProducts(products) {
  return products
    .filter((product) => product && product.id && product.name && Number.isFinite(Number(product.price)))
    .map((product) => ({
      id: product.id,
      name: product.name,
      price: Number(product.price),
      image: product.image,
      description: product.description
    }));
}

function getAdminSession() {
  return readCookie(adminSessionCookieName);
}

function setAdminSession(username) {
  writeCookie(adminSessionCookieName, username, 60 * 60 * 12);
}

function clearAdminSession() {
  clearCookie(adminSessionCookieName);
}

async function saveProducts(products) {
  const db = await getDb();
  if (!db) return;

  const rows = normalizeProducts(products);
  const { error } = await db.from("products").upsert(rows, { onConflict: "id" });
  if (error) throw error;
}

async function deleteProductRecord(productId) {
  const db = await getDb();
  if (!db) return;

  const { error } = await db.from("products").delete().eq("id", productId);
  if (error) throw error;
}

async function getProducts() {
  const db = await getDb();
  if (!db) return [...defaultProducts];

  const { data, error } = await db.from("products").select("id,name,price,image,description");
  if (error) {
    console.error(error);
    return [...defaultProducts];
  }

  const products = normalizeProducts(data || []);
  return products.length > 0 ? products : [...defaultProducts];
}

async function ensureProductCatalog() {
  const db = await getDb();
  if (!db) return;

  const { count, error } = await db.from("products").select("id", { count: "exact", head: true });
  if (!error && count === 0) {
    await saveProducts(defaultProducts);
  }
}

async function getAdminUsers() {
  const db = await getDb();
  if (!db) return [];

  const { data, error } = await db.from("admin_users").select("username,password").order("username");
  if (error) {
    console.error(error);
    return [];
  }

  return (data || []).filter((user) => user && user.username && user.password);
}

async function saveAdminUsers(users) {
  const db = await getDb();
  if (!db) return;

  const current = await getAdminUsers();
  const nextUsernames = users.map((user) => user.username);
  const removed = current.filter((user) => !nextUsernames.includes(user.username)).map((user) => user.username);

  if (removed.length > 0) {
    const { error: deleteError } = await db.from("admin_users").delete().in("username", removed);
    if (deleteError) throw deleteError;
  }

  if (users.length > 0) {
    const { error } = await db.from("admin_users").upsert(users, { onConflict: "username" });
    if (error) throw error;
  }
}

async function ensureAdminUsers() {
  const users = await getAdminUsers();
  if (users.length === 0) {
    await saveAdminUsers([{ username: "admin", password: "admin123" }]);
  }
}

function normalizeSlideshowSettings(value) {
  const images = Array.isArray(value && value.images)
    ? value.images
          .filter((image) => image && image.src)
          .map((image, index) => ({
            id: image.id || `slide-${index + 1}`,
            src: image.src,
            alt: image.alt || "Homepage bracelet slideshow image"
          }))
    : [];
  const intervalSeconds = Number(value && value.intervalSeconds);

  return {
    intervalSeconds: Number.isFinite(intervalSeconds) ? Math.min(Math.max(intervalSeconds, 1), 30) : defaultSlideshow.intervalSeconds,
    images: images.length > 0 ? images : [...defaultSlideshow.images]
  };
}

async function getSlideshowSettings() {
  const db = await getDb();
  if (!db) return { ...defaultSlideshow, images: [...defaultSlideshow.images] };

  const { data, error } = await db.from("app_settings").select("value").eq("key", slideshowSettingKey).maybeSingle();
  if (error || !data) {
    if (error) console.error(error);
    return { ...defaultSlideshow, images: [...defaultSlideshow.images] };
  }

  return normalizeSlideshowSettings(data.value);
}

async function saveSlideshowSettings(settings) {
  const db = await getDb();
  if (!db) return;

  const { error } = await db.from("app_settings").upsert(
    { key: slideshowSettingKey, value: normalizeSlideshowSettings(settings) },
    { onConflict: "key" }
  );
  if (error) throw error;
}

async function ensureSlideshowSettings() {
  const db = await getDb();
  if (!db) return;

  const { data, error } = await db.from("app_settings").select("key").eq("key", slideshowSettingKey).maybeSingle();
  if (!error && !data) {
    await saveSlideshowSettings(defaultSlideshow);
  }
}

async function getCart() {
  const db = await getDb();
  if (!db) return [];

  const { data, error } = await db.from("cart_items").select("product_id,quantity").eq("cart_id", getCartId());
  if (error) {
    console.error(error);
    return [];
  }

  return (data || [])
    .filter((item) => item && item.product_id && Number.isFinite(Number(item.quantity)))
    .map((item) => ({ id: item.product_id, quantity: Number(item.quantity) }));
}

async function saveCart(cart) {
  const db = await getDb();
  if (!db) return;

  const cartId = getCartId();
  const { error: deleteError } = await db.from("cart_items").delete().eq("cart_id", cartId);
  if (deleteError) throw deleteError;

  const rows = cart
    .filter((item) => item && item.id && Number(item.quantity) > 0)
    .map((item) => ({
      cart_id: cartId,
      product_id: item.id,
      quantity: Number(item.quantity)
    }));

  if (rows.length > 0) {
    const { error } = await db.from("cart_items").insert(rows);
    if (error) throw error;
  }
}

async function clearCart() {
  const db = await getDb();
  if (!db) return;

  const { error } = await db.from("cart_items").delete().eq("cart_id", getCartId());
  if (error) throw error;
}

async function addToCart(productId) {
  const cart = await getCart();
  const product = (await getProducts()).find((item) => item.id === productId);
  if (!product) return;

  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: product.id, quantity: 1 });
  }

  await saveCart(cart);
  alert(`${product.name} added to cart!`);
}

async function removeFromCart(productId) {
  const cart = (await getCart()).filter((item) => item.id !== productId);
  await saveCart(cart);
  await renderCart();
}

async function calculateCartTotal() {
  const products = await getProducts();
  const cart = await getCart();
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

async function renderProductList() {
  const list = document.getElementById("product-list");
  if (!list) return;
  list.innerHTML = "";

  const products = await getProducts();
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

async function renderFeaturedProducts() {
  const grid = document.getElementById("featured-grid");
  if (!grid) return;

  grid.innerHTML = "";

  const featured = (await getProducts()).slice(0, 4);
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

async function renderHeroSlideshow() {
  const slideshow = document.getElementById("hero-slideshow");
  if (!slideshow) return;

  const settings = await getSlideshowSettings();
  const images = settings.images;
  slideshow.innerHTML = "";

  images.forEach((image, index) => {
    const img = document.createElement("img");
    img.className = `hero-slide${index === 0 ? " is-active" : ""}`;
    img.src = image.src;
    img.alt = image.alt;
    slideshow.appendChild(img);
  });

  if (images.length <= 1 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let activeIndex = 0;
  window.setInterval(() => {
    const slides = slideshow.querySelectorAll(".hero-slide");
    if (slides.length <= 1) return;

    slides[activeIndex].classList.remove("is-active");
    activeIndex = (activeIndex + 1) % slides.length;
    slides[activeIndex].classList.add("is-active");
  }, settings.intervalSeconds * 1000);
}

async function renderProductDetail() {
  const detail = document.getElementById("product-detail");
  if (!detail) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  const product = (await getProducts()).find((item) => item.id === productId);

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

async function renderCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  if (!cartItemsContainer || !cartTotal) return;

  const products = await getProducts();
  const cart = await getCart();
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

  cartTotal.textContent = `Total: ${formatPrice(await calculateCartTotal())}`;
}

async function upsertProduct(event) {
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

  const products = await getProducts();
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

  await saveProducts(products);
  document.getElementById("admin-form").reset();
  idInput.value = "";
  document.getElementById("admin-submit").textContent = "Add Bracelet";
  await renderAdminProducts();
}

async function editProduct(productId) {
  const product = (await getProducts()).find((item) => item.id === productId);
  if (!product) return;

  document.getElementById("product-id").value = product.id;
  document.getElementById("product-name").value = product.name;
  document.getElementById("product-price").value = product.price;
  document.getElementById("product-image").value = product.image;
  document.getElementById("product-description").value = product.description;
  document.getElementById("admin-submit").textContent = "Save Changes";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function deleteProduct(productId) {
  const current = await getProducts();
  if (current.length <= 1) {
    alert("Keep at least one bracelet in the shop.");
    return;
  }

  await deleteProductRecord(productId);
  await saveCart((await getCart()).filter((item) => item.id !== productId));
  await renderAdminProducts();
}

async function renderAdminProducts() {
  const list = document.getElementById("admin-product-list");
  if (!list) return;

  list.innerHTML = "";

  (await getProducts()).forEach((product) => {
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

async function renderAdminUsers() {
  const userList = document.getElementById("admin-user-list");
  const currentUserName = getAdminSession();
  const currentUserEl = document.getElementById("admin-current-user");
  if (!userList) return;

  if (currentUserEl) {
    currentUserEl.textContent = currentUserName || "Not logged in";
  }

  userList.innerHTML = "";

  (await getAdminUsers()).forEach((user) => {
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

async function renderAdminSlideshow() {
  const list = document.getElementById("admin-slideshow-list");
  const intervalInput = document.getElementById("slideshow-interval");
  if (!list) return;

  const settings = await getSlideshowSettings();
  if (intervalInput) {
    intervalInput.value = settings.intervalSeconds;
  }

  list.innerHTML = "";

  settings.images.forEach((image) => {
    const item = document.createElement("article");
    item.className = "admin-item";
    item.innerHTML = `
      <img src="${image.src}" alt="${image.alt}" />
      <div class="admin-item-content">
        <h3>${image.alt}</h3>
        <p>${image.src}</p>
      </div>
      <div class="admin-item-actions">
        <button class="add-button" data-action="edit-slide" data-id="${image.id}">Edit</button>
        <button class="remove-button" data-action="delete-slide" data-id="${image.id}">Delete</button>
      </div>
    `;

    item.querySelector('[data-action="edit-slide"]').addEventListener("click", () => editSlideshowImage(image.id));
    item.querySelector('[data-action="delete-slide"]').addEventListener("click", () => deleteSlideshowImage(image.id));
    list.appendChild(item);
  });
}

async function saveSlideshowTiming(event) {
  event.preventDefault();

  const intervalInput = document.getElementById("slideshow-interval");
  if (!intervalInput) return;

  const intervalSeconds = Number(intervalInput.value);
  if (!Number.isFinite(intervalSeconds) || intervalSeconds < 1 || intervalSeconds > 30) {
    alert("Please choose a display time from 1 to 30 seconds.");
    return;
  }

  const settings = await getSlideshowSettings();
  await saveSlideshowSettings({ ...settings, intervalSeconds });
  await renderAdminSlideshow();
}

function resetSlideshowImageForm() {
  const imageForm = document.getElementById("admin-slideshow-image-form");
  const idInput = document.getElementById("slideshow-image-id");
  const submitButton = document.getElementById("admin-slideshow-submit");
  if (imageForm) imageForm.reset();
  if (idInput) idInput.value = "";
  if (submitButton) submitButton.textContent = "Add Image";
}

async function upsertSlideshowImage(event) {
  event.preventDefault();

  const idInput = document.getElementById("slideshow-image-id");
  const urlInput = document.getElementById("slideshow-image-url");
  const altInput = document.getElementById("slideshow-image-alt");
  if (!idInput || !urlInput || !altInput) return;

  const existingId = idInput.value.trim();
  const src = urlInput.value.trim();
  const alt = altInput.value.trim();
  if (!src || !alt) {
    alert("Please enter an image URL and description.");
    return;
  }

  const settings = await getSlideshowSettings();
  const id = existingId || `slide-${Date.now()}`;
  const nextImage = { id, src, alt };
  const existingIndex = settings.images.findIndex((image) => image.id === id);

  if (existingIndex >= 0) {
    settings.images[existingIndex] = nextImage;
  } else {
    settings.images.push(nextImage);
  }

  await saveSlideshowSettings(settings);
  resetSlideshowImageForm();
  await renderAdminSlideshow();
}

async function editSlideshowImage(imageId) {
  const image = (await getSlideshowSettings()).images.find((item) => item.id === imageId);
  if (!image) return;

  document.getElementById("slideshow-image-id").value = image.id;
  document.getElementById("slideshow-image-url").value = image.src;
  document.getElementById("slideshow-image-alt").value = image.alt;
  document.getElementById("admin-slideshow-submit").textContent = "Save Image";
  document.getElementById("admin-slideshow-image-form").scrollIntoView({ behavior: "smooth", block: "start" });
}

async function deleteSlideshowImage(imageId) {
  const settings = await getSlideshowSettings();
  if (settings.images.length <= 1) {
    alert("Keep at least one slideshow image.");
    return;
  }

  await saveSlideshowSettings({
    ...settings,
    images: settings.images.filter((image) => image.id !== imageId)
  });
  resetSlideshowImageForm();
  await renderAdminSlideshow();
}

async function deleteAdminUser(username) {
  const users = await getAdminUsers();
  if (users.length <= 1) {
    alert("Keep at least one admin user.");
    return;
  }

  const currentUserName = getAdminSession();
  if (currentUserName === username) {
    alert("You cannot delete the user currently logged in.");
    return;
  }

  await saveAdminUsers(users.filter((user) => user.username !== username));
  await renderAdminUsers();
}

async function upsertAdminUser(event) {
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

  const users = await getAdminUsers();
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

  await saveAdminUsers(users);
  if (getAdminSession() === originalUsername || (!originalUsername && getAdminSession() === username)) {
    setAdminSession(username);
  }

  document.getElementById("admin-user-form").reset();
  originalInput.value = "";
  document.getElementById("admin-user-submit").textContent = "Add User";
  await renderAdminUsers();
}

function updateAdminVisibility(isLoggedIn) {
  const loginSection = document.getElementById("admin-login-section");
  const dashboardSection = document.getElementById("admin-dashboard");
  if (!loginSection || !dashboardSection) return;

  loginSection.hidden = isLoggedIn;
  dashboardSection.hidden = !isLoggedIn;
}

async function handleAdminLogin(event) {
  event.preventDefault();

  const usernameInput = document.getElementById("admin-login-username");
  const passwordInput = document.getElementById("admin-login-password");
  if (!usernameInput || !passwordInput) return;

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const user = (await getAdminUsers()).find((item) => item.username === username && item.password === password);

  if (!user) {
    alert("Invalid username or password.");
    return;
  }

  setAdminSession(user.username);
  document.getElementById("admin-login-form").reset();
  updateAdminVisibility(true);
  await renderAdminProducts();
  await renderAdminSlideshow();
  await renderAdminUsers();
}

function handleAdminLogout() {
  clearAdminSession();
  updateAdminVisibility(false);
}

async function setupAdminPage() {
  const loginForm = document.getElementById("admin-login-form");
  const form = document.getElementById("admin-form");
  const userForm = document.getElementById("admin-user-form");
  if (!form || !loginForm || !userForm) return;

  await ensureAdminUsers();
  await ensureSlideshowSettings();

  const existingSession = getAdminSession();
  const hasValidSession = Boolean((await getAdminUsers()).find((user) => user.username === existingSession));
  if (!hasValidSession) {
    clearAdminSession();
  }

  updateAdminVisibility(hasValidSession);

  loginForm.addEventListener("submit", handleAdminLogin);

  form.addEventListener("submit", upsertProduct);

  const slideshowSettingsForm = document.getElementById("admin-slideshow-settings-form");
  if (slideshowSettingsForm) {
    slideshowSettingsForm.addEventListener("submit", saveSlideshowTiming);
  }

  const slideshowImageForm = document.getElementById("admin-slideshow-image-form");
  if (slideshowImageForm) {
    slideshowImageForm.addEventListener("submit", upsertSlideshowImage);
  }

  const slideshowResetButton = document.getElementById("admin-slideshow-reset");
  if (slideshowResetButton) {
    slideshowResetButton.addEventListener("click", () => {
      window.setTimeout(resetSlideshowImageForm, 0);
    });
  }

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

  await renderAdminProducts();
  await renderAdminSlideshow();
  await renderAdminUsers();
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
      const total = await calculateCartTotal();
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

      await clearCart();
      alert("Thank you! Your payment was successful.");
      window.location.href = "index.html";
    } catch (error) {
      alert(`Payment failed: ${error.message}`);
      submitButton.disabled = false;
      submitButton.textContent = "Complete Payment";
    }
  });
}

async function initPage() {
  await initSupabase();
  await ensureProductCatalog();
  await ensureSlideshowSettings();
  await renderHeroSlideshow();
  await renderFeaturedProducts();
  await renderProductList();
  await renderProductDetail();
  await renderCart();
  await setupAdminPage();
  handleCheckout();
}

window.addEventListener("DOMContentLoaded", () => {
  initPage().catch((error) => {
    console.error(error);
    alert("There was a problem loading the shop data. Check your Supabase setup and try again.");
  });
});

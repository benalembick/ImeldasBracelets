const defaultProducts = [
  {
    id: "flower-fun",
    name: "Flower Fun Bracelet",
    price: 16.0,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
    description: "Bright flower beads with a sparkling charm. Perfect for sharing with friends.",
    color: "pink",
    type: "bracelet",
    beaded: true,
    charm: true,
    category: "bracelets",
    badge: "Best Seller",
    rating: 4.9,
    sortRank: 1
  },
  {
    id: "sunshine-twist",
    name: "Sunshine Twist",
    price: 18.5,
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=700&q=80",
    description: "Yellow, orange, and gold beads for a happy summer style.",
    color: "yellow",
    type: "bracelet",
    beaded: true,
    charm: false,
    category: "bracelets",
    badge: "Waterproof",
    rating: 4.8,
    sortRank: 4
  },
  {
    id: "rainbow-smile",
    name: "Rainbow Smile",
    price: 19.0,
    image: "https://images.unsplash.com/photo-1500305153788-1a1110c9f0b1?auto=format&fit=crop&w=700&q=80",
    description: "A cheerful stack of colourful beads that shows off your brightest mood.",
    color: "multi",
    type: "bracelet",
    beaded: true,
    charm: false,
    category: "bracelets",
    badge: "Trending",
    rating: 5,
    sortRank: 2
  },
  {
    id: "moonlight-gem",
    name: "Moonlight Gem",
    price: 17.25,
    image: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=700&q=80",
    description: "Soft sparkly pastels and a little moon charm for gentle nighttime magic.",
    color: "purple",
    type: "bracelet",
    beaded: true,
    charm: true,
    category: "bracelets",
    badge: "New",
    rating: 4.7,
    sortRank: 9
  },
  {
    id: "berry-sprinkle",
    name: "Berry Sprinkle",
    price: 15.5,
    image: "https://images.unsplash.com/photo-1473448916294-50a111265d0e?auto=format&fit=crop&w=700&q=80",
    description: "Pink, purple, and glitter beads for a sweet bracelet that feels like candy.",
    color: "pink",
    type: "bracelet",
    beaded: true,
    charm: false,
    category: "sale",
    badge: "Save 20%",
    rating: 4.8,
    sortRank: 5
  },
  {
    id: "ocean-breeze",
    name: "Ocean Breeze",
    price: 20.0,
    image: "https://images.unsplash.com/photo-1458956486364-9e5f8d25f228?auto=format&fit=crop&w=700&q=80",
    description: "Cool blue beads with tiny shell accents for seaside adventure style.",
    color: "blue",
    type: "bracelet",
    beaded: true,
    charm: true,
    category: "bracelets",
    badge: "Beach Pick",
    rating: 4.9,
    sortRank: 3
  },
  {
    id: "strawberry-pop",
    name: "Strawberry Pop",
    price: 16.75,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=700&q=80",
    description: "Juicy red and soft pink beads with a playful fruit charm for bright days.",
    color: "pink",
    type: "bracelet",
    beaded: true,
    charm: true,
    category: "bracelets",
    badge: "New",
    rating: 4.8,
    sortRank: 7
  },
  {
    id: "mermaid-wishes",
    name: "Mermaid Wishes",
    price: 21.5,
    image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=700&q=80",
    description: "Shimmery teal, lilac, and pearl beads inspired by treasure-box sparkle.",
    color: "blue",
    type: "bracelet",
    beaded: true,
    charm: false,
    category: "bracelets",
    badge: "Trending",
    rating: 4.9,
    sortRank: 6
  },
  {
    id: "confetti-party",
    name: "Confetti Party",
    price: 18.0,
    image: "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?auto=format&fit=crop&w=700&q=80",
    description: "A mix of bright beads that feels ready for birthdays, sleepovers, and celebrations.",
    color: "multi",
    type: "bracelet",
    beaded: true,
    charm: false,
    category: "bracelets",
    badge: "Best Seller",
    rating: 4.9,
    sortRank: 8
  },
  {
    id: "bestie-beam",
    name: "Bestie Beam",
    price: 14.5,
    image: "https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?auto=format&fit=crop&w=700&q=80",
    description: "A sweet friendship bracelet with happy colour blocks and a tiny heart accent.",
    color: "pink",
    type: "custom",
    beaded: true,
    charm: true,
    category: "bracelets",
    badge: "Gift Pick",
    rating: 4.7,
    sortRank: 10
  },
  {
    id: "garden-spark",
    name: "Garden Spark",
    price: 19.75,
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=700&q=80",
    description: "Green, pink, and gold beads with floral details for a fresh garden-party look.",
    color: "green",
    type: "bracelet",
    beaded: true,
    charm: true,
    category: "bracelets",
    badge: "New",
    rating: 4.8,
    sortRank: 11
  },
  {
    id: "cloud-candy",
    name: "Cloud Candy",
    price: 17.0,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=700&q=80",
    description: "Soft blue, white, and pastel rainbow beads for a dreamy everyday bracelet.",
    color: "blue",
    type: "custom",
    beaded: true,
    charm: false,
    category: "bracelets",
    badge: "Customizable",
    rating: 4.9,
    sortRank: 12
  },
  {
    id: "starry-night-stack",
    name: "Starry Night Stack",
    price: 22.0,
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=700&q=80",
    description: "Navy, silver, and crystal beads made to layer with favourite bracelets.",
    color: "blue",
    type: "bracelet",
    beaded: true,
    charm: false,
    category: "bracelets",
    badge: "Bundle",
    rating: 4.8,
    sortRank: 13
  },
  {
    id: "lemonade-smile",
    name: "Lemonade Smile",
    price: 15.75,
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=700&q=80",
    description: "Yellow and white beads with a zesty charm that brings sunny picnic energy.",
    color: "yellow",
    type: "bracelet",
    beaded: true,
    charm: true,
    category: "sale",
    badge: "Save 20%",
    rating: 4.7,
    sortRank: 14
  },
  {
    id: "bubblegum-dream",
    name: "Bubblegum Dream",
    price: 16.25,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
    description: "Pink glassy beads and sparkle details for a bracelet that feels extra fun.",
    color: "pink",
    type: "bracelet",
    beaded: true,
    charm: false,
    category: "bracelets",
    badge: "Trending",
    rating: 4.9,
    sortRank: 15
  },
  {
    id: "crystal-rainbow",
    name: "Crystal Rainbow",
    price: 23.0,
    image: "https://images.unsplash.com/photo-1500305153788-1a1110c9f0b1?auto=format&fit=crop&w=700&q=80",
    description: "Clear crystal beads with rainbow pops for a dressier gift-ready favourite.",
    color: "multi",
    type: "bracelet",
    beaded: true,
    charm: true,
    category: "bracelets",
    badge: "Best Seller",
    rating: 5,
    sortRank: 16
  }
];

const defaultCategories = [
  { id: "bracelets", name: "Bracelets", slug: "bracelets", parentId: null, isActive: true, sortOrder: 10 },
  { id: "friendship-bracelets", name: "Friendship Bracelets", slug: "friendship-bracelets", parentId: "bracelets", isActive: true, sortOrder: 10 },
  { id: "paracord-survival-bracelets", name: "Paracord Survival Bracelets", slug: "paracord-survival-bracelets", parentId: "bracelets", isActive: true, sortOrder: 20 },
  { id: "gifts", name: "Gifts", slug: "gifts", parentId: null, isActive: true, sortOrder: 20 },
  { id: "winter-gifts", name: "Winter Gifts", slug: "winter-gifts", parentId: "gifts", isActive: true, sortOrder: 10 },
  { id: "general-gifts", name: "General Gifts", slug: "general-gifts", parentId: "gifts", isActive: true, sortOrder: 20 },
  { id: "resin-products", name: "Resin Products", slug: "resin-products", parentId: null, isActive: true, sortOrder: 30 }
];

const cartCookieName = "imeldasBraceletsCartId";
const adminSessionCookieName = "imeldasBraceletsAdminSession";
const slideshowSettingKey = "hero_slideshow";

let supabaseClient = null;
let supabaseReady = false;
let warnedAboutSupabase = false;
let productMetadataColumnsAvailable = true;
let productHoverImageColumnAvailable = true;
let productStockColumnAvailable = true;
let productCategoryColumnsAvailable = true;
let categoriesTableAvailable = true;
let productCategoryLinksAvailable = true;
let ordersTableAvailable = true;

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

function formatFileSize(bytes) {
  const size = Number(bytes) || 0;
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
  return `${(size / (1024 * 1024)).toFixed(2)} MB`;
}

function loadImageFromFile(file) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const url = URL.createObjectURL(file);

    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Could not read that image file."));
    };
    image.src = url;
  });
}

async function optimiseImageFile(file) {
  if (!file || !file.type.startsWith("image/")) {
    throw new Error("Please choose an image file.");
  }

  const image = await loadImageFromFile(file);
  const maxDimension = 1400;
  const scale = Math.min(1, maxDimension / Math.max(image.naturalWidth, image.naturalHeight));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
  canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));

  const context = canvas.getContext("2d");
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  let quality = 0.82;
  let dataUrl = canvas.toDataURL("image/webp", quality);
  const maxDataUrlLength = 900 * 1024 * 1.37;

  while (dataUrl.length > maxDataUrlLength && quality > 0.5) {
    quality -= 0.08;
    dataUrl = canvas.toDataURL("image/webp", quality);
  }

  return {
    dataUrl,
    width: canvas.width,
    height: canvas.height,
    originalBytes: file.size,
    optimisedBytes: Math.round((dataUrl.length - "data:image/webp;base64,".length) * 0.75)
  };
}

async function uploadProductImage(file) {
  const optimised = await optimiseImageFile(file);
  let response;

  try {
    response = await fetch("/upload-product-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        filename: file.name,
        dataUrl: optimised.dataUrl
      })
    });
  } catch (_error) {
    throw new Error("Image upload failed because the local server is not running. Start the app with npm start, then open it from http://localhost:3000/admin.html.");
  }

  const responseText = await response.text();
  let result = {};

  try {
    result = responseText ? JSON.parse(responseText) : {};
  } catch (_error) {
    result = {};
  }

  if (!response.ok) {
    if (response.status === 404 || responseText.includes("Cannot POST /upload-product-image")) {
      throw new Error("Image upload failed because the running server is old. Stop it and restart with npm start so the upload route is available.");
    }

    throw new Error(result.error || responseText || "Image upload failed.");
  }

  return {
    ...result,
    ...optimised
  };
}

async function handleProductImageUpload(event, options = {}) {
  const file = event.target.files && event.target.files[0];
  const imageInput = document.getElementById(options.inputId || "product-image");
  const status = document.getElementById(options.statusId || "product-image-upload-status");
  const savedMessage = options.savedMessage || "in media/products.";

  if (!file || !imageInput || !status) return;

  try {
    status.textContent = `Optimising ${file.name}...`;
    event.target.disabled = true;
    const uploaded = await uploadProductImage(file);
    imageInput.value = uploaded.url;
    status.textContent = `Saved ${formatFileSize(uploaded.originalBytes)} as ${formatFileSize(uploaded.bytes || uploaded.optimisedBytes)} ${savedMessage}`;
  } catch (error) {
    status.textContent = error.message || "Image upload failed.";
    await showPageAlert(status.textContent);
  } finally {
    event.target.disabled = false;
  }
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
    .map((product, index) => {
      const fallback = productMerchandising[product.id] || {};
      const rating = Number(product.rating ?? fallback.rating);
      const sortRank = Number(product.sort_rank ?? product.sortRank ?? fallback.sortRank);

      return {
        id: product.id,
        name: product.name,
        price: Number(product.price),
        image: product.image,
        hoverImage: product.hover_image || product.hoverImage || "",
        description: product.description,
        color: product.color || fallback.color || "multi",
        type: product.type || (fallback.style === "custom" ? "custom" : "bracelet"),
        beaded: typeof product.beaded === "boolean" ? product.beaded : true,
        charm: typeof product.charm === "boolean" ? product.charm : (fallback.style || "") === "charm",
        category: product.category || fallback.category || "bracelets",
        categoryId: product.category_id || product.categoryId || product.category || fallback.category || "bracelets",
        categoryIds: Array.isArray(product.categoryIds)
          ? product.categoryIds.filter(Boolean)
          : Array.isArray(product.category_ids)
            ? product.category_ids.filter(Boolean)
            : [],
        badge: product.badge || fallback.badge || (index % 3 === 0 ? "New" : "Handmade"),
        rating: Number.isFinite(rating) ? rating : 4.8,
        sortRank: Number.isFinite(sortRank) ? sortRank : index + 20,
        stock: Math.max(0, Math.floor(Number(product.stock_quantity ?? product.stock ?? 12) || 0))
      };
    });
}

function toProductRow(product, includeHoverImage = true) {
  const row = {
    id: product.id,
    name: product.name,
    price: Number(product.price),
    image: product.image,
    description: product.description,
    color: product.color,
    type: product.type,
    beaded: Boolean(product.beaded),
    charm: Boolean(product.charm),
    category: product.category,
    badge: product.badge,
    rating: Number(product.rating),
    sort_rank: Number(product.sortRank)
  };

  if (productCategoryColumnsAvailable) {
    row.category_id = product.categoryId || product.category || "bracelets";
  }

  if (includeHoverImage) {
    row.hover_image = product.hoverImage || null;
  }

  if (productStockColumnAvailable) {
    row.stock_quantity = Math.max(0, Math.floor(Number(product.stock) || 0));
  }

  return row;
}

function normalizeCategories(categories) {
  const source = Array.isArray(categories) && categories.length > 0 ? categories : defaultCategories;
  return source
    .filter((category) => category && category.name)
    .map((category, index) => {
      const slug = category.slug || slugify(category.name);
      return {
        id: category.id || slug,
        name: category.name,
        slug,
        parentId: category.parent_id ?? category.parentId ?? null,
        isActive: category.is_active ?? category.isActive ?? true,
        sortOrder: Number(category.sort_order ?? category.sortOrder ?? index * 10)
      };
    })
    .sort((a, b) => a.sortOrder - b.sortOrder || a.name.localeCompare(b.name));
}

function toCategoryRow(category) {
  const now = new Date().toISOString();
  return {
    id: category.id || category.slug,
    name: category.name,
    slug: category.slug,
    parent_id: category.parentId || null,
    is_active: Boolean(category.isActive),
    sort_order: Number(category.sortOrder) || 0,
    updated_at: now
  };
}

function toBaseProductRow(product) {
  const row = {
    id: product.id,
    name: product.name,
    price: Number(product.price),
    image: product.image,
    description: product.description,
  };

  if (productStockColumnAvailable) {
    row.stock_quantity = Math.max(0, Math.floor(Number(product.stock) || 0));
  }

  return row;
}

function toMinimalProductRow(product) {
  return {
    id: product.id,
    name: product.name,
    price: Number(product.price),
    image: product.image,
    description: product.description
  };
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
  if (!db) return true;

  const normalizedProducts = normalizeProducts(products);
  const rows = normalizedProducts.map((product) => toProductRow(product, productHoverImageColumnAvailable));
  const { error } = await db.from("products").upsert(rows, { onConflict: "id" });
  if (!error) {
    return saveProductCategoryLinks(normalizedProducts);
  }

  if (productCategoryColumnsAvailable) {
    productCategoryColumnsAvailable = false;
    console.warn("Product category_id column is not available yet. Run the README Supabase migration to persist category assignments.");
    return saveProducts(normalizedProducts);
  }

  if (productStockColumnAvailable) {
    productStockColumnAvailable = false;
    console.warn("Product stock column is not available yet. Run the README Supabase migration to persist stock quantities.");
    return saveProducts(normalizedProducts);
  }

  if (productHoverImageColumnAvailable) {
    productHoverImageColumnAvailable = false;
    console.warn("Product hover image column is not available yet. Run the README Supabase migration to persist hover images.");

    const rowsWithoutHoverImage = normalizedProducts.map((product) => toProductRow(product, false));
    const { error: retryError } = await db.from("products").upsert(rowsWithoutHoverImage, { onConflict: "id" });
    if (!retryError) return saveProductCategoryLinks(normalizedProducts);
  }

  if (productMetadataColumnsAvailable) {
    productMetadataColumnsAvailable = false;
    console.warn("Product metadata columns are not available yet. Run the README Supabase migration to persist color, type, beaded, charm, and hover image fields.");
  }

  const fallbackRows = normalizedProducts.map(toBaseProductRow);
  const { error: fallbackError } = await db.from("products").upsert(fallbackRows, { onConflict: "id" });
  if (!fallbackError) return saveProductCategoryLinks(normalizedProducts);

  const minimalRows = normalizedProducts.map(toMinimalProductRow);
  const { error: minimalError } = await db.from("products").upsert(minimalRows, { onConflict: "id" });
  if (minimalError) throw minimalError;

  return saveProductCategoryLinks(normalizedProducts);
}

async function deleteProductRecord(productId) {
  const db = await getDb();
  if (!db) return;

  if (productCategoryLinksAvailable) {
    const { error: linkError } = await db.from("product_categories").delete().eq("product_id", productId);
    if (linkError) {
      productCategoryLinksAvailable = false;
      console.warn("Product category links table is not available yet. Run the README Supabase migration to enable subcategory links.");
    }
  }

  const { error } = await db.from("products").delete().eq("id", productId);
  if (error) throw error;
}

async function saveProductCategoryLinks(products) {
  const db = await getDb();
  if (!db) return true;
  if (!productCategoryLinksAvailable) return products.every((product) => (product.categoryIds || []).length === 0);

  const productIds = products.map((product) => product.id).filter(Boolean);
  if (productIds.length === 0) return true;

  const validCategoryIds = new Set((await getCategories({ includeInactive: true })).map((category) => category.id));
  const rows = products.flatMap((product) => {
    const categoryIds = Array.from(new Set([product.categoryId, ...(product.categoryIds || [])].filter((categoryId) => validCategoryIds.has(categoryId))));
    return categoryIds.map((categoryId) => ({
      product_id: product.id,
      category_id: categoryId
    }));
  });

  const { error: deleteError } = await db.from("product_categories").delete().in("product_id", productIds);
  if (deleteError) {
    productCategoryLinksAvailable = false;
    console.warn("Product category links table is not available yet. Run the README Supabase migration to enable subcategory links.");
    return products.every((product) => (product.categoryIds || []).length === 0);
  }

  if (rows.length > 0) {
    const { error } = await db.from("product_categories").insert(rows);
    if (error) {
      productCategoryLinksAvailable = false;
      console.warn("Product category links could not be saved. Check the product_categories migration.");
      return products.every((product) => (product.categoryIds || []).length === 0);
    }
  }

  return true;
}

async function getProductCategoryLinks(productIds = []) {
  const db = await getDb();
  if (!db || !productCategoryLinksAvailable || productIds.length === 0) return {};

  const { data, error } = await db
    .from("product_categories")
    .select("product_id,category_id")
    .in("product_id", productIds);

  if (error) {
    productCategoryLinksAvailable = false;
    console.warn("Product category links table is not available yet. Run the README Supabase migration to enable subcategory links.");
    return {};
  }

  return (data || []).reduce((groups, row) => {
    if (!groups[row.product_id]) groups[row.product_id] = [];
    groups[row.product_id].push(row.category_id);
    return groups;
  }, {});
}

async function getProducts() {
  const db = await getDb();
  if (!db) return normalizeProducts(defaultProducts);

  const productColumns = productMetadataColumnsAvailable
    ? `id,name,price,image,${productHoverImageColumnAvailable ? "hover_image," : ""}description,color,type,beaded,charm,category${productCategoryColumnsAvailable ? ",category_id" : ""},badge,rating,sort_rank${productStockColumnAvailable ? ",stock_quantity" : ""}`
    : `id,name,price,image,${productHoverImageColumnAvailable ? "hover_image," : ""}description${productStockColumnAvailable ? ",stock_quantity" : ""}`;
  const { data, error } = await db.from("products").select(productColumns);
  if (error) {
    if (productCategoryColumnsAvailable) {
      productCategoryColumnsAvailable = false;
      return getProducts();
    }

    if (productStockColumnAvailable) {
      productStockColumnAvailable = false;
      return getProducts();
    }

    if (productHoverImageColumnAvailable) {
      productHoverImageColumnAvailable = false;
      return getProducts();
    }

    if (productMetadataColumnsAvailable) {
      productMetadataColumnsAvailable = false;
      return getProducts();
    }
    console.error(error);
    return normalizeProducts(defaultProducts);
  }

  const linksByProduct = await getProductCategoryLinks((data || []).map((product) => product.id));
  const products = normalizeProducts((data || []).map((product) => ({
    ...product,
    categoryIds: linksByProduct[product.id] || []
  })));
  return products.length > 0 ? products : normalizeProducts(defaultProducts);
}

async function getCategories(options = {}) {
  const db = await getDb();
  if (!db || !categoriesTableAvailable) {
    return normalizeCategories(defaultCategories).filter((category) => options.includeInactive || category.isActive);
  }

  const { data, error } = await db
    .from("categories")
    .select("id,name,slug,parent_id,is_active,sort_order")
    .order("sort_order", { ascending: true })
    .order("name", { ascending: true });

  if (error) {
    categoriesTableAvailable = false;
    console.warn("Categories table is not available yet. Run the README Supabase migration to manage categories in admin.");
    return normalizeCategories(defaultCategories).filter((category) => options.includeInactive || category.isActive);
  }

  const categories = normalizeCategories(data || []);
  return categories.filter((category) => options.includeInactive || category.isActive);
}

async function saveCategory(category) {
  const db = await getDb();
  if (!db || !categoriesTableAvailable) return;

  const { error } = await db.from("categories").upsert(toCategoryRow(category), { onConflict: "id" });
  if (error) throw error;
}

async function deleteCategoryRecord(categoryId) {
  const db = await getDb();
  if (!db || !categoriesTableAvailable) return;

  const products = await getProducts();
  const isUsed = products.some((product) => product.categoryId === categoryId || (product.categoryIds || []).includes(categoryId));
  const hasChildren = (await getCategories({ includeInactive: true })).some((category) => category.parentId === categoryId);

  if (isUsed || hasChildren) {
    const { error } = await db.from("categories").update({ is_active: false, updated_at: new Date().toISOString() }).eq("id", categoryId);
    if (error) throw error;
    return "disabled";
  }

  if (productCategoryLinksAvailable) {
    await db.from("product_categories").delete().eq("category_id", categoryId);
  }

  const { error } = await db.from("categories").delete().eq("id", categoryId);
  if (error) throw error;
  return "deleted";
}

async function ensureCategories() {
  const db = await getDb();
  if (!db || !categoriesTableAvailable) return;

  const { data, error } = await db.from("categories").select("id");
  if (error) {
    categoriesTableAvailable = false;
    console.warn("Categories table is not available yet. Run the README Supabase migration to enable category admin.");
    return;
  }

  const existingIds = new Set((data || []).map((category) => category.id));
  const missing = defaultCategories.filter((category) => !existingIds.has(category.id));
  if (missing.length > 0) {
    const { error: insertError } = await db.from("categories").upsert(missing.map(toCategoryRow), { onConflict: "id" });
    if (insertError) throw insertError;
  }
}

async function ensureProductCatalog() {
  const db = await getDb();
  if (!db) return;

  const { data, error } = await db.from("products").select("id");
  if (error) {
    console.error(error);
    return;
  }

  const existingIds = new Set((data || []).map((product) => product.id));
  const missingDefaults = defaultProducts.filter((product) => !existingIds.has(product.id));

  if (missingDefaults.length > 0) {
    await saveProducts(missingDefaults);
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

function buildOrderRows(data) {
  return (data || [])
    .filter((order) => order && order.id)
    .map((order) => ({
      id: order.id,
      createdAt: order.created_at || "",
      customerName: order.customer_name || "",
      customerEmail: order.customer_email || "",
      shippingAddress: order.shipping_address || "",
      items: Array.isArray(order.items) ? order.items : [],
      subtotal: Number(order.subtotal) || 0,
      shippingAmount: Number(order.shipping_amount) || 0,
      total: Number(order.total) || 0,
      paymentIntentId: order.payment_intent_id || "",
      status: order.status || "paid"
    }));
}

async function getOrders() {
  const db = await getDb();
  if (!db || !ordersTableAvailable) return [];

  const { data, error } = await db
    .from("orders")
    .select("id,created_at,customer_name,customer_email,shipping_address,items,subtotal,shipping_amount,total,payment_intent_id,status")
    .order("created_at", { ascending: false });

  if (error) {
    ordersTableAvailable = false;
    console.warn("Orders table is not available yet. Run the README Supabase migration to store and view orders.");
    return [];
  }

  return buildOrderRows(data);
}

async function saveOrder(order) {
  const db = await getDb();
  if (!db || !ordersTableAvailable) return null;

  const row = {
    id: order.id,
    customer_name: order.customerName,
    customer_email: order.customerEmail,
    shipping_address: order.shippingAddress,
    items: order.items,
    subtotal: order.subtotal,
    shipping_amount: order.shippingAmount,
    total: order.total,
    payment_intent_id: order.paymentIntentId,
    status: order.status
  };

  const { error } = await db.from("orders").insert(row);
  if (error) {
    ordersTableAvailable = false;
    console.warn("Order could not be saved. Run the README Supabase migration to enable order history.");
    return null;
  }

  return row.id;
}

async function decrementStockForOrder(orderItems) {
  const products = await getProducts();
  const nextProducts = products.map((product) => {
    const orderedItem = orderItems.find((item) => item.productId === product.id);
    if (!orderedItem) return product;

    return {
      ...product,
      stock: Math.max(0, Math.floor(Number(product.stock) || 0) - orderedItem.quantity)
    };
  });

  await saveProducts(nextProducts);
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

function getStockLabel(product) {
  const stock = Math.max(0, Math.floor(Number(product.stock) || 0));
  if (stock === 0) return "Out of stock";
  if (stock <= 3) return `Only ${stock} left`;
  return `${stock} in stock`;
}

async function validateCartStock(cart = null, products = null) {
  const sourceCart = cart || await getCart();
  const sourceProducts = products || await getProducts();
  const unavailable = sourceCart
    .map((cartItem) => {
      const product = sourceProducts.find((item) => item.id === cartItem.id);
      if (!product) return null;
      const stock = Math.max(0, Math.floor(Number(product.stock) || 0));
      return cartItem.quantity > stock ? { product, requested: cartItem.quantity, stock } : null;
    })
    .filter(Boolean);

  return unavailable;
}

async function addToCart(productId) {
  const cart = await getCart();
  const product = (await getProducts()).find((item) => item.id === productId);
  if (!product) return;

  if (product.stock <= 0) {
    await showPageAlert("Sorry, this bracelet is currently out of stock.");
    return;
  }

  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    if (existing.quantity >= product.stock) {
      await showPageAlert(`Only ${product.stock} available for ${product.name}.`);
      return;
    }
    existing.quantity += 1;
  } else {
    cart.push({ id: product.id, quantity: 1 });
  }

  await saveCart(cart);
  await updateHeaderState();
  await openCartDrawer(product.id);
}

async function removeFromCart(productId) {
  const cart = (await getCart()).filter((item) => item.id !== productId);
  await saveCart(cart);
  await renderCart();
  await renderCartDrawer();
  await updateHeaderState();
}

async function setCartItemQuantity(productId, quantity) {
  const nextQuantity = Math.max(0, Number(quantity) || 0);
  const cart = await getCart();
  const product = (await getProducts()).find((item) => item.id === productId);
  const existing = cart.find((item) => item.id === productId);
  const cappedQuantity = product ? Math.min(nextQuantity, Math.max(0, product.stock)) : nextQuantity;

  if (product && nextQuantity > product.stock) {
    await showPageAlert(`Only ${product.stock} available for ${product.name}.`);
  }

  if (!existing && cappedQuantity > 0) {
    cart.push({ id: productId, quantity: cappedQuantity });
  } else if (existing) {
    existing.quantity = cappedQuantity;
  }

  await saveCart(cart.filter((item) => item.quantity > 0));
  await renderCart();
  await renderCartDrawer();
  await updateHeaderState();
}

async function calculateCartTotal() {
  const products = await getProducts();
  const cart = await getCart();
  return cart.reduce((total, cartItem) => {
    const product = products.find((item) => item.id === cartItem.id);
    return total + (product ? product.price * cartItem.quantity : 0);
  }, 0);
}

async function updateHeaderState() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav-links a[href]").forEach((link) => {
    const linkPage = link.getAttribute("href");
    const isProductDetail = currentPage === "product.html" && linkPage === "products.html";
    if (linkPage === currentPage || isProductDetail) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  const cartCount = document.querySelector(".cart-count");
  if (!cartCount) return;

  const itemCount = (await getCart()).reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = String(itemCount);
}

function setupCartDrawerTriggers() {
  ensureCartDrawer();

  document.querySelectorAll(".nav-cart").forEach((link) => {
    link.addEventListener("click", (event) => {
      const currentPage = window.location.pathname.split("/").pop() || "index.html";
      if (currentPage === "cart.html") return;

      event.preventDefault();
      openCartDrawer();
    });
  });
}

function formatPrice(value) {
  return `$${value.toFixed(2)}`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const productMerchandising = {
  "flower-fun": { badge: "Best Seller", color: "pink", style: "charm", category: "bracelets", rating: 4.9, sortRank: 1 },
  "sunshine-twist": { badge: "Waterproof", color: "yellow", style: "beaded", category: "bracelets", rating: 4.8, sortRank: 4 },
  "rainbow-smile": { badge: "Trending", color: "multi", style: "beaded", category: "bracelets", rating: 5, sortRank: 2 },
  "moonlight-gem": { badge: "New", color: "purple", style: "charm", category: "bracelets", rating: 4.7, sortRank: 9 },
  "berry-sprinkle": { badge: "Save 20%", color: "pink", style: "beaded", category: "sale", rating: 4.8, sortRank: 5 },
  "ocean-breeze": { badge: "Beach Pick", color: "blue", style: "charm", category: "bracelets", rating: 4.9, sortRank: 3 },
  "strawberry-pop": { badge: "New", color: "pink", style: "charm", category: "bracelets", rating: 4.8, sortRank: 7 },
  "mermaid-wishes": { badge: "Trending", color: "blue", style: "beaded", category: "bracelets", rating: 4.9, sortRank: 6 },
  "confetti-party": { badge: "Best Seller", color: "multi", style: "beaded", category: "bracelets", rating: 4.9, sortRank: 8 },
  "bestie-beam": { badge: "Gift Pick", color: "pink", style: "custom", category: "bracelets", rating: 4.7, sortRank: 10 },
  "garden-spark": { badge: "New", color: "green", style: "charm", category: "bracelets", rating: 4.8, sortRank: 11 },
  "cloud-candy": { badge: "Customizable", color: "blue", style: "custom", category: "bracelets", rating: 4.9, sortRank: 12 },
  "starry-night-stack": { badge: "Bundle", color: "blue", style: "beaded", category: "bracelets", rating: 4.8, sortRank: 13 },
  "lemonade-smile": { badge: "Save 20%", color: "yellow", style: "beaded", category: "sale", rating: 4.7, sortRank: 14 },
  "bubblegum-dream": { badge: "Trending", color: "pink", style: "beaded", category: "bracelets", rating: 4.9, sortRank: 15 },
  "crystal-rainbow": { badge: "Best Seller", color: "multi", style: "charm", category: "bracelets", rating: 5, sortRank: 16 }
};

const collectionState = {
  search: "",
  category: "all",
  subcategory: "all",
  availability: "all",
  color: "all",
  style: "all",
  type: "all",
  feature: "all",
  price: "all",
  sort: "best"
};

function getProductMeta(product, index = 0) {
  const fallback = productMerchandising[product.id] || {};
  const hasOnlyMigrationDefaults = Boolean(
    fallback.badge &&
    product.color === "multi" &&
    product.type === "bracelet" &&
    product.beaded === true &&
    product.charm === false &&
    product.category === "bracelets" &&
    product.badge === "Handmade"
  );
  const source = hasOnlyMigrationDefaults ? {} : product;

  return {
    badge: source.badge || fallback.badge || (index % 3 === 0 ? "New" : "Handmade"),
    color: source.color || fallback.color || "multi",
    type: source.type || (fallback.style === "custom" ? "custom" : "bracelet"),
    beaded: typeof source.beaded === "boolean" ? source.beaded : true,
    charm: typeof source.charm === "boolean" ? source.charm : (fallback.style || "") === "charm",
    category: source.category || fallback.category || "bracelets",
    categoryId: product.categoryId || product.category_id || source.category || fallback.category || "bracelets",
    categoryIds: Array.isArray(product.categoryIds) ? product.categoryIds : [],
    rating: Number(source.rating ?? fallback.rating) || 4.8,
    sortRank: Number(source.sortRank ?? fallback.sortRank) || index + 20
  };
}

function getLegacyStyle(meta) {
  if (meta.type === "custom") return "custom";
  if (meta.charm) return "charm";
  if (meta.beaded) return "beaded";
  return meta.type || "bracelet";
}

function getProductWithMeta(product, index) {
  return { ...product, meta: getProductMeta(product, index) };
}

function getProductCategoryIds(product) {
  return Array.from(new Set([product.meta.categoryId, product.meta.category, ...(product.meta.categoryIds || [])].filter(Boolean)));
}

function getCategorySearchText(product) {
  const names = [];
  const categoryMap = window.imeldasCategoryMap || {};
  getProductCategoryIds(product).forEach((categoryId) => {
    const category = categoryMap[categoryId];
    names.push(category ? `${category.name} ${category.slug}` : categoryId);
  });
  return names.join(" ");
}

function productMatchesCollection(product) {
  const { meta } = product;
  const search = collectionState.search.trim().toLowerCase();
  const categoryIds = getProductCategoryIds(product);
  const searchText = [
    product.name,
    product.description,
    meta.category,
    meta.categoryId,
    meta.type,
    getLegacyStyle(meta),
    getCategorySearchText(product)
  ].join(" ").toLowerCase();
  const matchesSearch = !search || searchText.includes(search);
  const matchesColor = collectionState.color === "all" || meta.color === collectionState.color;
  const matchesStyle = collectionState.style === "all" || getLegacyStyle(meta) === collectionState.style;
  const matchesType = collectionState.type === "all" || meta.type === collectionState.type || categoryIds.includes(collectionState.type);
  const matchesCategory = collectionState.category === "all" || categoryIds.includes(collectionState.category);
  const matchesSubcategory = collectionState.subcategory === "all" || categoryIds.includes(collectionState.subcategory) || meta.type === collectionState.subcategory;
  const matchesAvailability =
    collectionState.availability === "all" ||
    (collectionState.availability === "in-stock" && Number(product.stock) > 0) ||
    (collectionState.availability === "sold-out" && Number(product.stock) <= 0);
  const matchesFeature =
    collectionState.feature === "all" ||
    (collectionState.feature === "beaded" && meta.beaded) ||
    (collectionState.feature === "charm" && meta.charm);
  const matchesPrice =
    collectionState.price === "all" ||
    (collectionState.price === "under-17" && product.price < 17) ||
    (collectionState.price === "17-20" && product.price >= 17 && product.price <= 20) ||
    (collectionState.price === "over-20" && product.price > 20) ||
    (collectionState.price === "sale" && (meta.category === "sale" || /save|sale/i.test(meta.badge)));

  return matchesSearch && matchesColor && matchesStyle && matchesType && matchesCategory && matchesSubcategory && matchesAvailability && matchesFeature && matchesPrice;
}

function sortCollectionProducts(products) {
  return [...products].sort((a, b) => {
    if (collectionState.sort === "newest") return b.meta.sortRank - a.meta.sortRank;
    if (collectionState.sort === "price-low") return a.price - b.price;
    if (collectionState.sort === "price-high") return b.price - a.price;
    return a.meta.sortRank - b.meta.sortRank;
  });
}

function formatMetaLabel(value) {
  return String(value || "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function createProductMetaChips(meta) {
  const categoryMap = window.imeldasCategoryMap || {};
  const chips = [
    categoryMap[meta.categoryId] ? categoryMap[meta.categoryId].name : formatMetaLabel(meta.category),
    formatMetaLabel(meta.color),
    formatMetaLabel(meta.type)
  ];
  (meta.categoryIds || [])
    .filter((categoryId) => categoryId !== meta.categoryId)
    .forEach((categoryId) => chips.push(categoryMap[categoryId] ? categoryMap[categoryId].name : formatMetaLabel(categoryId)));
  if (meta.beaded) chips.push("Beaded");
  if (meta.charm) chips.push("Charm");

  return `<div class="product-meta-chips">${Array.from(new Set(chips.filter(Boolean))).map((chip) => `<span>${escapeHtml(chip)}</span>`).join("")}</div>`;
}

function updateCollectionUrl() {
  const params = new URLSearchParams();
  ["search", "category", "subcategory", "availability", "color", "style", "type", "feature", "price", "sort"].forEach((key) => {
    if (collectionState[key] && collectionState[key] !== "all" && !(key === "sort" && collectionState[key] === "best")) {
      params.set(key, collectionState[key]);
    }
  });

  const query = params.toString();
  const nextUrl = query ? `${window.location.pathname}?${query}` : window.location.pathname;
  window.history.replaceState({}, "", nextUrl);
}

function setActiveFilterPills() {
  document.querySelectorAll(".filter-pill").forEach((pill) => {
    const group = pill.dataset.filterGroup;
    pill.classList.toggle("is-active", Boolean(group) && pill.dataset.filterValue === collectionState[group]);
  });
}

function buildCategoryMaps(categories) {
  const map = categories.reduce((groups, category) => {
    groups[category.id] = category;
    groups[category.slug] = category;
    return groups;
  }, {});
  window.imeldasCategoryMap = map;
  return map;
}

function getMainCategories(categories) {
  return categories.filter((category) => !category.parentId);
}

function getSubcategories(categories, parentId = "all") {
  return categories.filter((category) => {
    if (!category.parentId) return false;
    return parentId === "all" || category.parentId === parentId;
  });
}

function optionMarkup(value, label) {
  return `<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`;
}

async function populateCollectionFilters() {
  const categories = await getCategories();
  buildCategoryMaps(categories);

  const categoryFilter = document.getElementById("collection-category-filter");
  const subcategoryFilter = document.getElementById("collection-subcategory-filter");

  if (categoryFilter) {
    categoryFilter.innerHTML = [
      optionMarkup("all", "All categories"),
      ...getMainCategories(categories).map((category) => optionMarkup(category.id, category.name))
    ].join("");
    categoryFilter.value = categories.some((category) => category.id === collectionState.category) ? collectionState.category : "all";
    collectionState.category = categoryFilter.value;
  }

  if (subcategoryFilter) {
    const subcategories = getSubcategories(categories, collectionState.category);
    subcategoryFilter.innerHTML = [
      optionMarkup("all", "All subcategories"),
      ...subcategories.map((category) => optionMarkup(category.id, category.name))
    ].join("");
    subcategoryFilter.disabled = subcategories.length === 0;
    subcategoryFilter.value = subcategories.some((category) => category.id === collectionState.subcategory) ? collectionState.subcategory : "all";
    collectionState.subcategory = subcategoryFilter.value;
  }
}

function showToast(message) {
  let toast = document.getElementById("shop-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "shop-toast";
    toast.className = "shop-toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("is-visible");
  window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function showPageAlert(message, title = "Imelda's Bracelets") {
  return new Promise((resolve) => {
    let alertOverlay = document.getElementById("page-alert");
    if (!alertOverlay) {
      alertOverlay = document.createElement("div");
      alertOverlay.id = "page-alert";
      alertOverlay.className = "page-alert";
      alertOverlay.setAttribute("aria-hidden", "true");
      alertOverlay.innerHTML = `
        <div class="page-alert-backdrop" data-page-alert-close></div>
        <section class="page-alert-panel" role="alertdialog" aria-modal="true" aria-labelledby="page-alert-title" aria-describedby="page-alert-message">
          <h2 id="page-alert-title"></h2>
          <p id="page-alert-message"></p>
          <button class="button button-primary" type="button" data-page-alert-close>OK</button>
        </section>
      `;
      document.body.appendChild(alertOverlay);
    }

    const titleEl = document.getElementById("page-alert-title");
    const messageEl = document.getElementById("page-alert-message");
    const closeButtons = alertOverlay.querySelectorAll("[data-page-alert-close]");
    const closeButton = alertOverlay.querySelector(".page-alert-panel button");

    if (titleEl) titleEl.textContent = title;
    if (messageEl) messageEl.textContent = message;

    function closeAlert() {
      alertOverlay.classList.remove("is-open");
      alertOverlay.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", handleAlertKeydown);
      closeButtons.forEach((button) => button.removeEventListener("click", closeAlert));
      resolve();
    }

    function handleAlertKeydown(event) {
      if (event.key === "Escape" || event.key === "Enter") {
        closeAlert();
      }
    }

    closeButtons.forEach((button) => button.addEventListener("click", closeAlert));
    document.addEventListener("keydown", handleAlertKeydown);
    alertOverlay.classList.add("is-open");
    alertOverlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    if (closeButton) closeButton.focus();
  });
}

function ensureCartDrawer() {
  let drawer = document.getElementById("cart-drawer");
  if (drawer) return drawer;

  drawer = document.createElement("aside");
  drawer.id = "cart-drawer";
  drawer.className = "cart-drawer";
  drawer.setAttribute("aria-hidden", "true");
  drawer.innerHTML = `
    <div class="cart-drawer-overlay" data-close-cart-drawer></div>
    <section class="cart-drawer-panel" role="dialog" aria-modal="true" aria-labelledby="cart-drawer-title">
      <header class="cart-drawer-header">
        <div class="cart-drawer-title-row">
          <span class="cart-drawer-bag" aria-hidden="true">&#128722;</span>
          <h2 id="cart-drawer-title">Your Cart</h2>
        </div>
        <button class="cart-drawer-close" type="button" data-close-cart-drawer aria-label="Close cart preview">x</button>
      </header>
      <div class="cart-drawer-body" id="cart-drawer-body"></div>
      <footer class="cart-drawer-footer" id="cart-drawer-footer"></footer>
    </section>
  `;

  document.body.appendChild(drawer);
  drawer.querySelectorAll("[data-close-cart-drawer]").forEach((button) => {
    button.addEventListener("click", closeCartDrawer);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && drawer.classList.contains("is-open")) {
      closeCartDrawer();
    }
  });

  return drawer;
}

function closeCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  if (!drawer) return;

  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");

  const quickView = document.getElementById("quick-view");
  if (!quickView || !quickView.classList.contains("is-open")) {
    document.body.classList.remove("modal-open");
  }
}

async function openCartDrawer(highlightProductId = "") {
  const drawer = ensureCartDrawer();
  await renderCartDrawer(highlightProductId);
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

async function renderCartDrawer(highlightProductId = "") {
  const drawer = ensureCartDrawer();
  const body = drawer.querySelector("#cart-drawer-body");
  const footer = drawer.querySelector("#cart-drawer-footer");
  const title = drawer.querySelector("#cart-drawer-title");
  if (!body || !footer || !title) return;

  const products = await getProducts();
  const cart = await getCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, cartItem) => {
    const product = products.find((item) => item.id === cartItem.id);
    return total + (product ? product.price * cartItem.quantity : 0);
  }, 0);
  const freeShippingTarget = 45;
  const remaining = Math.max(0, freeShippingTarget - subtotal);
  const progress = Math.min(100, (subtotal / freeShippingTarget) * 100);

  title.textContent = itemCount === 1 ? "1 item" : `${itemCount} items`;

  if (cart.length === 0) {
    body.innerHTML = `
      <div class="cart-drawer-empty">
        <h3>Your cart is empty</h3>
        <p>Pick a bright bracelet and your mini cart will keep it handy here.</p>
        <a class="button button-primary" href="products.html">Shop bracelets</a>
      </div>
    `;
    footer.innerHTML = "";
    return;
  }

  const cartItems = cart
    .map((cartItem) => {
      const product = products.find((item) => item.id === cartItem.id);
      if (!product) return "";
      const isHighlighted = product.id === highlightProductId;
      return `
        <article class="cart-drawer-item${isHighlighted ? " is-new" : ""}">
          <img src="${product.image}" alt="${product.name}" />
          <div class="cart-drawer-item-copy">
            <div>
              <h3>${product.name}</h3>
              <p>${formatPrice(product.price)}</p>
            </div>
            <div class="quantity-control" aria-label="Quantity for ${product.name}">
              <button type="button" data-cart-quantity="${product.id}" data-quantity="${cartItem.quantity - 1}" aria-label="Decrease ${product.name} quantity">-</button>
              <span>${cartItem.quantity}</span>
              <button type="button" data-cart-quantity="${product.id}" data-quantity="${cartItem.quantity + 1}" aria-label="Increase ${product.name} quantity">+</button>
            </div>
          </div>
          <div class="cart-drawer-item-side">
            <strong>${formatPrice(product.price * cartItem.quantity)}</strong>
            <button type="button" data-cart-remove="${product.id}">Remove</button>
          </div>
        </article>
      `;
    })
    .join("");

  const recommendations = products
    .filter((product) => Number(product.stock) > 0 && !cart.some((item) => item.id === product.id))
    .slice(0, 4)
    .map((product) => `
      <article class="cart-recommendation">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${formatPrice(product.price)}</p>
        <button type="button" data-cart-recommendation="${product.id}">Add</button>
      </article>
    `)
    .join("");

  body.innerHTML = `
    <div class="shipping-meter">
      <p>${remaining > 0 ? `Add ${formatPrice(remaining)} to unlock free shipping!` : "You unlocked free shipping!"}</p>
      <span><i style="width: ${progress}%"></i></span>
    </div>
    <div class="cart-drawer-items">${cartItems}</div>
    <div class="cart-drawer-urgency">These handmade favourites are going fast.</div>
    ${recommendations ? `
      <section class="cart-recommendations">
        <h3>Handpicked for you</h3>
        <div class="cart-recommendation-grid">${recommendations}</div>
      </section>
    ` : ""}
  `;

  footer.innerHTML = `
    <div class="cart-drawer-subtotal">
      <span>Subtotal</span>
      <strong>${formatPrice(subtotal)}</strong>
    </div>
    <a class="button button-primary cart-drawer-checkout" href="checkout.html">Checkout</a>
    <a class="cart-drawer-cart-link" href="cart.html">View full cart</a>
  `;

  body.querySelectorAll("[data-cart-quantity]").forEach((button) => {
    button.addEventListener("click", () => setCartItemQuantity(button.dataset.cartQuantity, button.dataset.quantity));
  });
  body.querySelectorAll("[data-cart-remove]").forEach((button) => {
    button.addEventListener("click", () => removeFromCart(button.dataset.cartRemove));
  });
  body.querySelectorAll("[data-cart-recommendation]").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.cartRecommendation));
  });
}

function createProductCard(product, options = {}) {
  const card = document.createElement("article");
  const hasHoverImage = Boolean(product.hoverImage);
  const isInStock = Number(product.stock) > 0;
  card.className = `card${hasHoverImage ? " has-hover-image" : ""}`;
  card.innerHTML = `
    <div class="product-media">
      <span class="product-badge">${product.meta.badge}</span>
      <img class="product-image product-image-primary" src="${product.image}" alt="${product.name}" />
      ${hasHoverImage ? `<img class="product-image product-image-hover" src="${product.hoverImage}" alt="" aria-hidden="true" />` : ""}
      <div class="quick-actions">
        <button class="button add-button" data-product-id="${product.id}" ${isInStock ? "" : "disabled"}>${isInStock ? "Quick Add" : "Sold Out"}</button>
        <button class="quick-view-button" type="button" data-quick-view="${product.id}">Quick View</button>
      </div>
    </div>
    <div class="card-content">
      <h3>${product.name}</h3>
      ${options.compact ? "" : `<p>${product.description}</p>`}
      ${options.compact ? "" : createProductMetaChips(product.meta)}
      <p class="stock-note ${isInStock ? "" : "is-empty"}">${getStockLabel(product)}</p>
      <p class="rating" aria-label="${product.meta.rating} out of 5 stars">★★★★★ <span>${product.meta.rating}</span></p>
      <div class="product-action">
        <span class="price">${formatPrice(product.price)}</span>
        <a href="product.html?id=${product.id}">Details</a>
      </div>
    </div>
  `;
  return card;
}

function attachProductCardEvents(card, product) {
  const addButton = card.querySelector(".add-button");
  const quickViewButton = card.querySelector(".quick-view-button");

  if (addButton) {
    addButton.addEventListener("click", (event) => {
      event.stopPropagation();
      addToCart(product.id);
    });
  }

  if (quickViewButton) {
    quickViewButton.addEventListener("click", (event) => {
      event.stopPropagation();
      openQuickView(product);
    });
  }

  card.addEventListener("click", (event) => {
    const target = event.target;
    if (target && typeof target === "object" && target !== null && "closest" in target) {
      const element = /** @type {HTMLElement} */ (target);
      if (element.closest("button") || element.closest("a")) return;
    }
    window.location.href = `product.html?id=${product.id}`;
  });
}

function openQuickView(product) {
  const modal = document.getElementById("quick-view");
  const content = document.getElementById("quick-view-content");
  if (!modal || !content) return;
  const isInStock = Number(product.stock) > 0;

  content.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div class="quick-view-copy">
      <p class="product-badge">${product.meta.badge}</p>
      <h2 id="quick-view-title">${product.name}</h2>
      <p>${product.description}</p>
      ${createProductMetaChips(product.meta)}
      <p class="stock-note ${isInStock ? "" : "is-empty"}">${getStockLabel(product)}</p>
      <p class="rating">★★★★★ <span>${product.meta.rating}</span></p>
      <p class="product-price">${formatPrice(product.price)}</p>
      <div class="bundle-note">Bundle deal: add any 3 bracelets and save 15%.</div>
      <button class="button button-primary" id="quick-view-add" ${isInStock ? "" : "disabled"}>${isInStock ? "Add to Cart" : "Sold Out"}</button>
      <a class="quick-view-link" href="product.html?id=${product.id}">View full details</a>
    </div>
  `;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  document.getElementById("quick-view-add").addEventListener("click", () => addToCart(product.id));
}

function closeQuickView() {
  const modal = document.getElementById("quick-view");
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function insertCollectionPromo(list, index) {
  const promo = document.createElement("article");
  promo.className = index === 5 ? "grid-promo grid-promo-sale" : "grid-promo";
  promo.innerHTML = index === 5
    ? `<p class="eyebrow">Sale</p><h2>Up to 40% off happy little extras</h2><p>Grab a few bright picks while they last.</p>`
    : `<p class="eyebrow">Custom</p><h2>Build your own sunny stack</h2><p>Choose colours, charms, and letter beads.</p>`;
  list.appendChild(promo);
}

async function setupCollectionControls() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("search")) collectionState.search = params.get("search");
  if (params.get("category")) collectionState.category = params.get("category");
  if (params.get("subcategory")) collectionState.subcategory = params.get("subcategory");
  if (params.get("availability")) collectionState.availability = params.get("availability");
  if (params.get("color")) collectionState.color = params.get("color");
  if (params.get("sort")) collectionState.sort = params.get("sort");
  if (params.get("style")) collectionState.style = params.get("style");
  if (params.get("type")) collectionState.type = params.get("type");
  if (params.get("feature")) collectionState.feature = params.get("feature");
  if (params.get("price")) collectionState.price = params.get("price");

  await populateCollectionFilters();
  setActiveFilterPills();

  const searchInput = document.getElementById("collection-search");
  if (searchInput) searchInput.value = collectionState.search;

  const categoryFilter = document.getElementById("collection-category-filter");
  if (categoryFilter) categoryFilter.value = collectionState.category;

  const subcategoryFilter = document.getElementById("collection-subcategory-filter");
  if (subcategoryFilter) subcategoryFilter.value = collectionState.subcategory;

  const availabilityFilter = document.getElementById("collection-availability-filter");
  if (availabilityFilter) availabilityFilter.value = collectionState.availability;

  const priceFilter = document.getElementById("collection-price-filter");
  if (priceFilter) priceFilter.value = collectionState.price;

  const sortControl = document.getElementById("collection-sort");
  if (sortControl) sortControl.value = collectionState.sort;

  document.querySelectorAll("[data-close-quick-view]").forEach((button) => {
    button.addEventListener("click", closeQuickView);
  });

  document.querySelectorAll(".filter-pill").forEach((button) => {
    button.addEventListener("click", async () => {
      const group = button.dataset.filterGroup;
      const value = button.dataset.filterValue || "all";
      if (!group) return;

      collectionState[group] = value;
      document.querySelectorAll(`.filter-pill[data-filter-group="${group}"]`).forEach((pill) => {
        pill.classList.toggle("is-active", pill === button);
      });
      updateCollectionUrl();
      await renderProductList();
    });
  });

  if (searchInput) {
    let searchTimer = null;
    searchInput.addEventListener("input", () => {
      window.clearTimeout(searchTimer);
      searchTimer = window.setTimeout(async () => {
        collectionState.search = searchInput.value.trim();
        updateCollectionUrl();
        await renderProductList();
      }, 180);
    });
  }

  if (categoryFilter) {
    categoryFilter.addEventListener("change", async (event) => {
      collectionState.category = event.target.value;
      collectionState.subcategory = "all";
      await populateCollectionFilters();
      updateCollectionUrl();
      await renderProductList();
    });
  }

  if (subcategoryFilter) {
    subcategoryFilter.addEventListener("change", async (event) => {
      collectionState.subcategory = event.target.value;
      updateCollectionUrl();
      await renderProductList();
    });
  }

  if (availabilityFilter) {
    availabilityFilter.addEventListener("change", async (event) => {
      collectionState.availability = event.target.value;
      updateCollectionUrl();
      await renderProductList();
    });
  }

  if (priceFilter) {
    priceFilter.addEventListener("change", async (event) => {
      collectionState.price = event.target.value;
      updateCollectionUrl();
      await renderProductList();
    });
  }

  if (sortControl) {
    sortControl.addEventListener("change", async (event) => {
      collectionState.sort = event.target.value;
      updateCollectionUrl();
      await renderProductList();
    });
  }

  const resetButton = document.getElementById("collection-reset-filters");
  if (resetButton) {
    resetButton.addEventListener("click", async () => {
      Object.assign(collectionState, {
        search: "",
        category: "all",
        subcategory: "all",
        availability: "all",
        color: "all",
        style: "all",
        type: "all",
        feature: "all",
        price: "all",
        sort: "best"
      });
      if (searchInput) searchInput.value = "";
      if (priceFilter) priceFilter.value = "all";
      if (availabilityFilter) availabilityFilter.value = "all";
      if (sortControl) sortControl.value = "best";
      await populateCollectionFilters();
      setActiveFilterPills();
      updateCollectionUrl();
      await renderProductList();
    });
  }
}

async function renderProductList() {
  const list = document.getElementById("product-list");
  if (!list) return;
  list.innerHTML = "";

  const categories = await getCategories();
  buildCategoryMaps(categories);
  const products = (await getProducts()).map(getProductWithMeta);
  const visibleProducts = sortCollectionProducts(products.filter(productMatchesCollection));
  const count = document.getElementById("collection-count");
  if (count) {
    count.textContent = `${visibleProducts.length} ${visibleProducts.length === 1 ? "product" : "products"} found`;
  }

  if (visibleProducts.length === 0) {
    list.innerHTML = `
      <article class="collection-empty-state">
        <h2>No products match those filters</h2>
        <p>Try clearing a category, search term, or price range to see more handmade pieces.</p>
        <button class="button button-primary" type="button" id="collection-empty-reset">Reset filters</button>
      </article>
    `;
    const emptyReset = document.getElementById("collection-empty-reset");
    if (emptyReset) {
      emptyReset.addEventListener("click", () => {
        const resetButton = document.getElementById("collection-reset-filters");
        if (resetButton) resetButton.click();
      });
    }
    await renderTrendingProducts(products);
    return;
  }

  visibleProducts.forEach((product, index) => {
    if (index === 4 || index === 9) insertCollectionPromo(list, index);
    const linkCard = createProductCard(product);
    attachProductCardEvents(linkCard, product);
    list.appendChild(linkCard);
  });

  await renderTrendingProducts(products);
}

async function renderFeaturedProducts() {
  const grid = document.getElementById("featured-grid");
  if (!grid) return;

  grid.innerHTML = "";

  const featured = (await getProducts()).map(getProductWithMeta).slice(0, 4);
  featured.forEach((product) => {
    const card = createProductCard(product);
    attachProductCardEvents(card, product);
    grid.appendChild(card);
  });
}

async function renderTrendingProducts(products = null) {
  const grid = document.getElementById("trending-grid");
  if (!grid) return;

  const source = products || (await getProducts()).map(getProductWithMeta);
  grid.innerHTML = "";

  source
    .filter((product) => ["Best Seller", "Trending", "Beach Pick"].includes(product.meta.badge))
    .slice(0, 4)
    .forEach((product) => {
      const card = createProductCard(product, { compact: true });
      attachProductCardEvents(card, product);
      grid.appendChild(card);
    });
}

async function renderHeroSlideshow() {
  const slideshow = document.getElementById("hero-slideshow");
  if (!slideshow) return;

  const settings = await getSlideshowSettings();
  const images = settings.images;
  slideshow.innerHTML = "";
  const slideEls = [];

  images.forEach((image, index) => {
    const img = document.createElement("img");
    img.className = `hero-slide${index === 0 ? " is-active" : ""}`;
    img.src = image.src;
    img.alt = image.alt;
    slideshow.appendChild(img);
    slideEls.push(img);
  });

  if (images.length <= 1) return;

  const dots = document.createElement("div");
  dots.className = "hero-slideshow-dots";
  dots.setAttribute("aria-label", "Choose slideshow image");
  slideshow.appendChild(dots);

  const dotEls = images.map((image, index) => {
    const button = document.createElement("button");
    button.className = `hero-slideshow-dot${index === 0 ? " is-active" : ""}`;
    button.type = "button";
    button.setAttribute("aria-label", `Show image ${index + 1}: ${image.alt}`);
    button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
    dots.appendChild(button);
    return button;
  });

  let activeIndex = 0;
  let timerId;

  function showSlide(nextIndex) {
    slideEls[activeIndex].classList.remove("is-active");
    dotEls[activeIndex].classList.remove("is-active");
    dotEls[activeIndex].setAttribute("aria-pressed", "false");
    activeIndex = nextIndex;
    slideEls[activeIndex].classList.add("is-active");
    dotEls[activeIndex].classList.add("is-active");
    dotEls[activeIndex].setAttribute("aria-pressed", "true");
  }

  function showNextSlide() {
    showSlide((activeIndex + 1) % slideEls.length);
  }

  function startTimer() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timerId = window.setInterval(showNextSlide, settings.intervalSeconds * 1000);
  }

  dotEls.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      if (index === activeIndex) return;
      showSlide(index);
      if (timerId) {
        window.clearInterval(timerId);
        startTimer();
      }
    });
  });

  startTimer();
}

async function renderProductDetail() {
  const detail = document.getElementById("product-detail");
  if (!detail) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  const product = getProductWithMeta((await getProducts()).find((item) => item.id === productId) || {}, 0);

  if (!product.id) {
    detail.innerHTML = `<p>Product not found. <a href="products.html">Back to shop</a></p>`;
    return;
  }
  const isInStock = Number(product.stock) > 0;

  detail.innerHTML = `
    <div class="product-detail-media">
      <span class="product-badge">${product.meta.badge}</span>
      <img src="${product.image}" alt="${product.name}" />
    </div>
    <div class="product-detail-content">
      <p class="eyebrow">Stack-ready favourite</p>
      <h2>${product.name}</h2>
      <p class="product-detail-description">${product.description}</p>
      ${createProductMetaChips(product.meta)}
      <p class="stock-note ${isInStock ? "" : "is-empty"}">${getStockLabel(product)}</p>
      <p class="rating">★★★★★ <span>${product.meta.rating}</span></p>
      <p class="product-price">${formatPrice(product.price)}</p>
      <div class="bundle-note">Bundle deal: add any 3 bracelets and save 15%.</div>
      <div class="personalise-box">
        <h3>Personalise it</h3>
        <p>Add a tiny initial charm or custom colour note at checkout.</p>
      </div>
      <button class="button button-primary" id="add-product-button" ${isInStock ? "" : "disabled"}>${isInStock ? "Add to Cart" : "Sold Out"}</button>
    </div>
  `;

  const sticky = document.createElement("div");
  sticky.className = "sticky-product-bar";
  sticky.innerHTML = `
    <div>
      <strong>${product.name}</strong>
      <span>${formatPrice(product.price)}</span>
    </div>
    <button class="button button-primary" type="button" id="sticky-add-product-button" ${isInStock ? "" : "disabled"}>${isInStock ? "Add to Cart" : "Sold Out"}</button>
  `;
  document.body.appendChild(sticky);

  const addButton = document.getElementById("add-product-button");
  if (addButton) {
    addButton.addEventListener("click", () => addToCart(product.id));
  }

  const stickyAddButton = document.getElementById("sticky-add-product-button");
  if (stickyAddButton) {
    stickyAddButton.addEventListener("click", () => addToCart(product.id));
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

async function renderCheckoutSummary() {
  const itemsContainer = document.getElementById("checkout-summary-items");
  const countEl = document.getElementById("checkout-summary-count");
  const subtotalEl = document.getElementById("checkout-subtotal");
  const shippingEl = document.getElementById("checkout-shipping");
  const totalEl = document.getElementById("checkout-total");
  if (!itemsContainer || !countEl || !subtotalEl || !shippingEl || !totalEl) return false;

  const products = await getProducts();
  const cart = await getCart();
  const summaryItems = cart
    .map((cartItem) => {
      const product = products.find((item) => item.id === cartItem.id);
      if (!product) return null;
      return {
        product,
        quantity: cartItem.quantity,
        lineTotal: product.price * cartItem.quantity
      };
    })
    .filter(Boolean);

  const itemCount = summaryItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = summaryItems.reduce((total, item) => total + item.lineTotal, 0);
  const shippingAmount = 0;
  const total = subtotal + shippingAmount;

  countEl.textContent = `${itemCount} ${itemCount === 1 ? "item" : "items"}`;
  subtotalEl.textContent = formatPrice(subtotal);
  shippingEl.textContent = shippingAmount === 0 ? "Free" : formatPrice(shippingAmount);
  totalEl.textContent = formatPrice(total);

  if (summaryItems.length === 0) {
    itemsContainer.innerHTML = `<p class="summary-empty">Your cart is empty. <a href="products.html">Add a bracelet</a> before checkout.</p>`;
    return false;
  }

  itemsContainer.innerHTML = summaryItems
    .map(({ product, quantity, lineTotal }) => `
      <article class="checkout-summary-item">
        <img src="${product.image}" alt="${product.name}" />
        <div>
          <h3>${product.name}</h3>
          <p>${quantity} x ${formatPrice(product.price)}</p>
        </div>
        <strong class="checkout-summary-price">${formatPrice(lineTotal)}</strong>
      </article>
    `)
    .join("");

  return true;
}

function formatGeoapifyAddress(result) {
  if (!result) return "";
  if (result.formatted) return result.formatted;

  const street = [result.housenumber, result.street].filter(Boolean).join(" ");
  const city = result.city || result.town || result.village || result.suburb || result.county;
  const state = result.state || result.region;
  const postcode = result.postcode;
  const country = result.country;

  return [street, city, state, postcode, country].filter(Boolean).join(", ");
}

function setupAddressLookup() {
  const lookupInput = document.getElementById("address-lookup");
  const statusEl = document.getElementById("address-lookup-status");
  const resultsEl = document.getElementById("address-lookup-results");
  const addressInput = document.getElementById("address");
  if (!lookupInput || !statusEl || !resultsEl || !addressInput) return;

  let controller;
  let debounceTimer;
  let geoapifyApiKey = "";

  function setStatus(message) {
    statusEl.textContent = message;
  }

  function clearResults() {
    resultsEl.innerHTML = "";
  }

  async function getAddressLookupKey() {
    if (geoapifyApiKey) return geoapifyApiKey;

    const response = await fetch("/address-lookup-config");
    const config = await response.json();
    geoapifyApiKey = config.geoapifyApiKey || "";
    return geoapifyApiKey;
  }

  async function fetchGeoapifySuggestions(query, options = {}) {
    const params = new URLSearchParams({
      text: query,
      format: "json",
      limit: "5",
      apiKey: geoapifyApiKey
    });

    if (options.australiaOnly) {
      params.set("filter", "countrycode:au");
    } else {
      params.set("bias", "countrycode:au");
    }

    const response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?${params.toString()}`, {
      headers: {
        Accept: "application/json"
      },
      signal: controller.signal
    });

    if (!response.ok) {
      throw new Error("Address suggestions are unavailable right now. Please type your address manually.");
    }

    const data = await response.json();
    return Array.isArray(data.results) ? data.results : [];
  }

  async function searchAddress() {
    const query = lookupInput.value.trim();
    clearResults();

    if (query.length < 4) {
      setStatus("Type at least 4 characters for Australian address suggestions.");
      return;
    }

    if (controller) controller.abort();
    controller = new AbortController();
    setStatus("Searching Australian addresses...");

    try {
      await getAddressLookupKey();
      if (!geoapifyApiKey) {
        setStatus("Add GEOAPIFY_API_KEY to .env to enable automatic address suggestions.");
        return;
      }

      let results = await fetchGeoapifySuggestions(query, { australiaOnly: true });
      let usedFallback = false;

      if (results.length === 0) {
        results = await fetchGeoapifySuggestions(query, { australiaOnly: false });
        usedFallback = true;
      }

      if (results.length === 0) {
        setStatus("No matching addresses found. Try adding a suburb, city, or postcode.");
        return;
      }

      setStatus(usedFallback ? "No Australian match found. Showing wider suggestions." : "Select the correct Australian address below.");
      resultsEl.innerHTML = results
        .map((result, index) => `
          <button class="address-lookup-result" type="button" data-address-index="${index}">
            ${escapeHtml(formatGeoapifyAddress(result))}
          </button>
        `)
        .join("") +
        `<p class="address-lookup-attribution">Address suggestions by <a href="https://www.geoapify.com/" target="_blank" rel="noopener">Geoapify</a>.</p>`;

      resultsEl.querySelectorAll("[data-address-index]").forEach((button) => {
        button.addEventListener("click", () => {
          const selected = results[Number(button.dataset.addressIndex)];
          addressInput.value = formatGeoapifyAddress(selected);
          addressInput.focus();
          clearResults();
          setStatus("Address added. Check it looks right before payment.");
        });
      });
    } catch (error) {
      if (error.name !== "AbortError") {
        setStatus(error.message);
      }
    }
  }

  lookupInput.addEventListener("input", () => {
    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(searchAddress, 500);
  });

  lookupInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      window.clearTimeout(debounceTimer);
      searchAddress();
    }
  });
}

async function upsertProduct(event) {
  event.preventDefault();

  const idInput = document.getElementById("product-id");
  const nameInput = document.getElementById("product-name");
  const priceInput = document.getElementById("product-price");
  const stockInput = document.getElementById("product-stock");
  const imageInput = document.getElementById("product-image");
  const hoverImageInput = document.getElementById("product-hover-image");
  const descriptionInput = document.getElementById("product-description");
  const colorInput = document.getElementById("product-color");
  const typeInput = document.getElementById("product-type");
  const beadedInput = document.getElementById("product-beaded");
  const charmInput = document.getElementById("product-charm");
  const categoryInput = document.getElementById("product-category");
  const subcategoryInputs = Array.from(document.querySelectorAll('input[name="productSubcategories"]:checked'));
  const badgeInput = document.getElementById("product-badge");

  if (!idInput || !nameInput || !priceInput || !stockInput || !imageInput || !hoverImageInput || !descriptionInput || !colorInput || !typeInput || !beadedInput || !charmInput || !categoryInput || !badgeInput) return;

  const existingId = idInput.value.trim();
  const name = nameInput.value.trim();
  const price = Number(priceInput.value);
  const stock = Math.max(0, Math.floor(Number(stockInput.value)));
  const image = imageInput.value.trim();
  const hoverImage = hoverImageInput.value.trim();
  const description = descriptionInput.value.trim();
  const color = colorInput.value;
  const type = typeInput.value;
  const beaded = beadedInput.checked;
  const charm = charmInput.checked;
  const category = categoryInput.value;
  const categoryIds = subcategoryInputs.map((input) => input.value);
  const badge = badgeInput.value.trim() || "Handmade";

  if (!name || !Number.isFinite(price) || price <= 0 || !Number.isFinite(stock) || !image || !description || !category) {
    await showPageAlert("Please fill in all fields with valid values.");
    return;
  }

  const products = await getProducts();
  const generatedId = slugify(name) || `bracelet-${Date.now()}`;
  const id = existingId || generatedId;

  const duplicate = products.find((product) => product.id === id && product.id !== existingId);
  if (duplicate) {
    await showPageAlert("A bracelet with that name already exists. Please use a different name.");
    return;
  }

  const existingProduct = products.find((item) => item.id === id);
  const existingMeta = getProductMeta(existingProduct || {}, products.length);
  const product = {
    id,
    name,
    price,
    stock,
    image,
    hoverImage,
    description,
    color,
    type,
    beaded,
    charm,
    category,
    categoryId: category,
    categoryIds,
    badge,
    rating: existingProduct ? existingMeta.rating : 4.8,
    sortRank: existingProduct ? existingMeta.sortRank : products.length + 20
  };
  const index = products.findIndex((item) => item.id === id);

  if (index >= 0) {
    products[index] = product;
  } else {
    products.push(product);
  }

  const savedCategoryLinks = await saveProducts(products);
  if (!savedCategoryLinks && categoryIds.length > 0) {
    await showPageAlert("The product was saved, but its subcategories could not be saved. Run the product_categories migration in the README, then edit this product again.", "Subcategory Save Failed");
    return;
  }

  document.getElementById("admin-form").reset();
  idInput.value = "";
  const imageUploadStatus = document.getElementById("product-image-upload-status");
  if (imageUploadStatus) imageUploadStatus.textContent = "Images are optimised before saving to the media folder.";
  const hoverImageUploadStatus = document.getElementById("product-hover-image-upload-status");
  if (hoverImageUploadStatus) hoverImageUploadStatus.textContent = "Optional alternate image shown on hover.";
  document.getElementById("admin-submit").textContent = "Add Product";
  await populateAdminProductCategoryFields();
  await renderAdminProducts();
}

async function populateAdminProductCategoryFields(selectedMain = "", selectedSubcategories = []) {
  const categoryInput = document.getElementById("product-category");
  const subcategoryWrap = document.getElementById("product-subcategories");
  if (!categoryInput || !subcategoryWrap) return;

  const categories = await getCategories();
  buildCategoryMaps(categories);
  const mainCategories = getMainCategories(categories);
  const selectedCategory = selectedMain || categoryInput.value || (mainCategories[0] && mainCategories[0].id) || "";

  categoryInput.innerHTML = mainCategories.map((category) => optionMarkup(category.id, category.name)).join("");
  categoryInput.value = mainCategories.some((category) => category.id === selectedCategory) ? selectedCategory : (mainCategories[0] && mainCategories[0].id) || "";

  const subcategories = getSubcategories(categories, categoryInput.value);
  const selected = new Set(selectedSubcategories);
  subcategoryWrap.innerHTML = subcategories.length > 0
    ? subcategories.map((category) => `
        <label>
          <input name="productSubcategories" type="checkbox" value="${escapeHtml(category.id)}" ${selected.has(category.id) ? "checked" : ""} />
          ${escapeHtml(category.name)}
        </label>
      `).join("")
    : `<p class="admin-upload-note">No subcategories yet for this main category.</p>`;
}

async function upsertCategory(event) {
  event.preventDefault();

  const idInput = document.getElementById("category-id");
  const nameInput = document.getElementById("category-name");
  const parentInput = document.getElementById("category-parent");
  const sortInput = document.getElementById("category-sort-order");
  const activeInput = document.getElementById("category-active");
  if (!idInput || !nameInput || !parentInput || !sortInput || !activeInput) return;

  const existingId = idInput.value.trim();
  const name = nameInput.value.trim();
  const slug = slugify(name);
  if (!name || !slug) {
    await showPageAlert("Please enter a category name.");
    return;
  }

  const categories = await getCategories({ includeInactive: true });
  const id = existingId || slug;
  const duplicate = categories.find((category) => category.id !== existingId && (category.id === id || category.slug === slug));
  if (duplicate) {
    await showPageAlert("That category already exists. Use a different name.");
    return;
  }

  await saveCategory({
    id,
    name,
    slug,
    parentId: parentInput.value || null,
    isActive: activeInput.checked,
    sortOrder: Number(sortInput.value) || 50
  });

  resetCategoryForm();
  await renderAdminCategories();
  await populateAdminProductCategoryFields();
}

function resetCategoryForm() {
  const form = document.getElementById("admin-category-form");
  const idInput = document.getElementById("category-id");
  const submitButton = document.getElementById("admin-category-submit");
  if (form) form.reset();
  if (idInput) idInput.value = "";
  if (submitButton) submitButton.textContent = "Add Category";
}

async function editCategory(categoryId) {
  const category = (await getCategories({ includeInactive: true })).find((item) => item.id === categoryId);
  if (!category) return;

  document.getElementById("category-id").value = category.id;
  document.getElementById("category-name").value = category.name;
  document.getElementById("category-parent").value = category.parentId || "";
  document.getElementById("category-sort-order").value = category.sortOrder;
  document.getElementById("category-active").checked = category.isActive;
  document.getElementById("admin-category-submit").textContent = "Save Category";
  document.getElementById("admin-categories").scrollIntoView({ behavior: "smooth", block: "start" });
}

async function deleteCategory(categoryId) {
  const result = await deleteCategoryRecord(categoryId);
  await renderAdminCategories();
  await populateAdminProductCategoryFields();
  if (result === "disabled") {
    await showPageAlert("That category is used by existing products, so it was disabled instead of deleted.");
  }
}

async function editProduct(productId) {
  const product = (await getProducts()).find((item) => item.id === productId);
  if (!product) return;
  const meta = getProductMeta(product);

  document.getElementById("product-id").value = product.id;
  document.getElementById("product-name").value = product.name;
  document.getElementById("product-price").value = product.price;
  document.getElementById("product-stock").value = product.stock;
  document.getElementById("product-image").value = product.image;
  const imageUploadStatus = document.getElementById("product-image-upload-status");
  if (imageUploadStatus) imageUploadStatus.textContent = product.image.startsWith("/media/") ? "Using uploaded media folder image." : "Using an external image URL.";
  document.getElementById("product-hover-image").value = product.hoverImage || "";
  const hoverImageUploadStatus = document.getElementById("product-hover-image-upload-status");
  if (hoverImageUploadStatus) {
    hoverImageUploadStatus.textContent = product.hoverImage
      ? product.hoverImage.startsWith("/media/")
        ? "Using uploaded media folder hover image."
        : "Using an external hover image URL."
      : "Optional alternate image shown on hover.";
  }
  document.getElementById("product-description").value = product.description;
  document.getElementById("product-color").value = meta.color;
  document.getElementById("product-type").value = meta.type;
  document.getElementById("product-beaded").checked = meta.beaded;
  document.getElementById("product-charm").checked = meta.charm;
  document.getElementById("product-category").value = meta.category;
  await populateAdminProductCategoryFields(meta.categoryId || meta.category, meta.categoryIds || []);
  document.getElementById("product-badge").value = meta.badge;
  document.getElementById("admin-submit").textContent = "Save Changes";
  document.getElementById("admin-products").scrollIntoView({ behavior: "smooth", block: "start" });
}

async function deleteProduct(productId) {
  const current = await getProducts();
  if (current.length <= 1) {
    await showPageAlert("Keep at least one bracelet in the shop.");
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
  await populateAdminProductCategoryFields();

  (await getProducts()).map(getProductWithMeta).forEach((product) => {
    const item = document.createElement("article");
    item.className = "admin-item";
    item.innerHTML = `
      <div class="admin-product-images">
        <img src="${product.image}" alt="${product.name}" />
        ${product.hoverImage ? `<img src="${product.hoverImage}" alt="" aria-hidden="true" />` : ""}
      </div>
      <div class="admin-item-content">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        ${createProductMetaChips(product.meta)}
        ${product.hoverImage ? `<p>Hover image set</p>` : ""}
        <p class="stock-note ${product.stock > 0 ? "" : "is-empty"}">${getStockLabel(product)}</p>
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

async function renderAdminCategories() {
  const list = document.getElementById("admin-category-list");
  const parentInput = document.getElementById("category-parent");
  if (!list) return;

  const categories = await getCategories({ includeInactive: true });
  buildCategoryMaps(categories);

  if (parentInput) {
    const currentValue = parentInput.value;
    parentInput.innerHTML = [
      optionMarkup("", "Main category"),
      ...getMainCategories(categories).map((category) => optionMarkup(category.id, category.name))
    ].join("");
    parentInput.value = currentValue;
  }

  list.innerHTML = "";

  if (!categoriesTableAvailable) {
    list.innerHTML = `
      <article class="admin-item admin-order-item">
        <div class="admin-item-content">
          <h3>Categories are not connected yet</h3>
          <p>Run the README category migration in Supabase, then refresh this page.</p>
        </div>
      </article>
    `;
    return;
  }

  categories.forEach((category) => {
    const parent = category.parentId ? categories.find((item) => item.id === category.parentId) : null;
    const item = document.createElement("article");
    item.className = "admin-item admin-category-item";
    item.innerHTML = `
      <div class="admin-item-content">
        <h3>${escapeHtml(category.name)}</h3>
        <p>${parent ? `Under ${escapeHtml(parent.name)}` : "Main category"} - ${category.isActive ? "Active" : "Disabled"} - Sort ${category.sortOrder}</p>
      </div>
      <div class="admin-item-actions">
        <button class="add-button" data-action="edit-category" data-id="${escapeHtml(category.id)}">Edit</button>
        <button class="remove-button" data-action="delete-category" data-id="${escapeHtml(category.id)}">${category.isActive ? "Delete/Disable" : "Delete"}</button>
      </div>
    `;

    item.querySelector('[data-action="edit-category"]').addEventListener("click", () => editCategory(category.id));
    item.querySelector('[data-action="delete-category"]').addEventListener("click", () => deleteCategory(category.id));
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

async function renderAdminOrders() {
  const orderList = document.getElementById("admin-order-list");
  if (!orderList) return;

  const orders = await getOrders();
  orderList.innerHTML = "";

  if (!ordersTableAvailable) {
    orderList.innerHTML = `
      <article class="admin-item admin-order-item">
        <div class="admin-item-content">
          <h3>Orders are not connected yet</h3>
          <p>Add the orders table from the README migration, then new paid checkouts will appear here.</p>
        </div>
      </article>
    `;
    return;
  }

  if (orders.length === 0) {
    orderList.innerHTML = `
      <article class="admin-item admin-order-item">
        <div class="admin-item-content">
          <h3>No orders yet</h3>
          <p>Paid checkouts will show customer, shipping, and item details here.</p>
        </div>
      </article>
    `;
    return;
  }

  orders.forEach((order) => {
    const item = document.createElement("article");
    item.className = "admin-item admin-order-item";
    const placedDate = order.createdAt ? new Date(order.createdAt).toLocaleString() : "Just now";
    const itemLines = order.items
      .map((orderItem) => `${orderItem.quantity} x ${orderItem.name} (${formatPrice(Number(orderItem.price) || 0)} each)`)
      .join("<br />");

    item.innerHTML = `
      <div class="admin-item-content">
        <h3>${order.customerName || "Customer"} - ${formatPrice(order.total)}</h3>
        <p><strong>Placed:</strong> ${placedDate}</p>
        <p><strong>Email:</strong> ${order.customerEmail || "Not supplied"}</p>
        <p><strong>Shipping:</strong> ${order.shippingAddress || "Not supplied"}</p>
        <p><strong>Status:</strong> ${formatMetaLabel(order.status)}</p>
        <p><strong>Payment:</strong> ${order.paymentIntentId || "Recorded after payment"}</p>
        <p><strong>Items:</strong><br />${itemLines || "No item details saved"}</p>
      </div>
    `;
    orderList.appendChild(item);
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
    await showPageAlert("Please choose a display time from 1 to 30 seconds.");
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
    await showPageAlert("Please enter an image URL and description.");
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
    await showPageAlert("Keep at least one slideshow image.");
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
    await showPageAlert("Keep at least one admin user.");
    return;
  }

  const currentUserName = getAdminSession();
  if (currentUserName === username) {
    await showPageAlert("You cannot delete the user currently logged in.");
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
    await showPageAlert("Please enter a username and password.");
    return;
  }

  const users = await getAdminUsers();
  const usernameTaken = users.find((user) => user.username === username && user.username !== originalUsername);
  if (usernameTaken) {
    await showPageAlert("That username is already in use.");
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

function showAdminSection(sectionId = "admin-products") {
  const sections = document.querySelectorAll("[data-admin-section]");
  if (sections.length === 0) return;

  const targetId = Array.from(sections).some((section) => section.id === sectionId) ? sectionId : "admin-products";

  sections.forEach((section) => {
    section.hidden = section.id !== targetId;
  });

  document.querySelectorAll("[data-admin-section-link]").forEach((link) => {
    const isActive = link.getAttribute("href") === `#${targetId}`;
    link.classList.toggle("is-active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  if (window.location.hash !== `#${targetId}`) {
    window.history.replaceState({}, "", `${window.location.pathname}#${targetId}`);
  }
}

async function renderAdminDashboard() {
  await renderAdminProducts();
  await renderAdminCategories();
  await renderAdminOrders();
  await renderAdminSlideshow();
  await renderAdminUsers();
}

function updateAdminVisibility(isLoggedIn) {
  const loginSection = document.getElementById("admin-login-section");
  const dashboardSection = document.getElementById("admin-dashboard");
  if (!loginSection || !dashboardSection) return;

  loginSection.hidden = isLoggedIn;
  dashboardSection.hidden = !isLoggedIn;
  if (isLoggedIn) {
    showAdminSection((window.location.hash || "#admin-products").replace("#", ""));
  }
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
    await showPageAlert("Invalid username or password.");
    return;
  }

  setAdminSession(user.username);
  document.getElementById("admin-login-form").reset();
  updateAdminVisibility(true);
  await renderAdminDashboard();
}

function handleAdminLogout() {
  clearAdminSession();
  updateAdminVisibility(false);
}

async function setupAdminPage() {
  const loginForm = document.getElementById("admin-login-form");
  const form = document.getElementById("admin-form");
  const categoryForm = document.getElementById("admin-category-form");
  const userForm = document.getElementById("admin-user-form");
  if (!form || !loginForm || !categoryForm || !userForm) return;

  await ensureAdminUsers();
  await ensureCategories();
  await ensureSlideshowSettings();

  const existingSession = getAdminSession();
  const hasValidSession = Boolean((await getAdminUsers()).find((user) => user.username === existingSession));
  if (!hasValidSession) {
    clearAdminSession();
  }

  updateAdminVisibility(hasValidSession);

  loginForm.addEventListener("submit", handleAdminLogin);

  form.addEventListener("submit", upsertProduct);
  categoryForm.addEventListener("submit", upsertCategory);

  const productCategoryInput = document.getElementById("product-category");
  if (productCategoryInput) {
    productCategoryInput.addEventListener("change", () => {
      populateAdminProductCategoryFields(productCategoryInput.value, []);
    });
  }

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
      document.getElementById("admin-submit").textContent = "Add Product";
      const imageUploadStatus = document.getElementById("product-image-upload-status");
      if (imageUploadStatus) imageUploadStatus.textContent = "Images are optimised before saving to the media folder.";
      const hoverImageUploadStatus = document.getElementById("product-hover-image-upload-status");
      if (hoverImageUploadStatus) hoverImageUploadStatus.textContent = "Optional alternate image shown on hover.";
      window.setTimeout(() => populateAdminProductCategoryFields(), 0);
    });
  }

  const categoryResetButton = document.getElementById("admin-category-reset");
  if (categoryResetButton) {
    categoryResetButton.addEventListener("click", () => {
      window.setTimeout(resetCategoryForm, 0);
    });
  }

  const imageUploadInput = document.getElementById("product-image-upload");
  if (imageUploadInput) {
    imageUploadInput.addEventListener("change", handleProductImageUpload);
  }

  const hoverImageUploadInput = document.getElementById("product-hover-image-upload");
  if (hoverImageUploadInput) {
    hoverImageUploadInput.addEventListener("change", (event) => {
      handleProductImageUpload(event, {
        inputId: "product-hover-image",
        statusId: "product-hover-image-upload-status",
        savedMessage: "as the hover image."
      });
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

  document.querySelectorAll("[data-admin-section-link]").forEach((link) => {
    link.addEventListener("click", async (event) => {
      event.preventDefault();
      const sectionId = (link.getAttribute("href") || "#admin-products").replace("#", "");
      showAdminSection(sectionId);
      if (sectionId === "admin-categories") {
        await renderAdminCategories();
      }
      if (sectionId === "admin-orders") {
        await renderAdminOrders();
      }
    });
  });

  window.addEventListener("hashchange", () => {
    showAdminSection((window.location.hash || "#admin-products").replace("#", ""));
  });

  await renderAdminDashboard();
}

function handleCheckout() {
  const checkoutForm = document.getElementById("checkout-form");
  if (!checkoutForm) return;

  let stripe;
  let cardNumberElement;
  let cardExpiryElement;
  let cardCvcElement;
  let stripeReady = false;
  let checkoutHasItems = false;

  const submitButton = document.getElementById("submit-button");
  const displayError = document.getElementById("card-errors");
  const billingPostcodeInput = document.getElementById("billing-postcode");

  function updateSubmitState() {
    submitButton.disabled = !(stripeReady && checkoutHasItems);
  }

  renderCheckoutSummary()
    .then((hasItems) => {
      checkoutHasItems = hasItems;
      updateSubmitState();
    })
    .catch((error) => {
      displayError.textContent = error.message;
      checkoutHasItems = false;
      updateSubmitState();
    });

  async function initStripe() {
    try {
      const response = await fetch("/stripe-config");
      const { publishableKey } = await response.json();

      if (!publishableKey) {
        throw new Error("Stripe publishable key is not configured. Add STRIPE_PUBLISHABLE_KEY=pk_test_... to .env.");
      }

      stripe = Stripe(publishableKey);
      const elements = stripe.elements();
      const elementStyle = {
        base: {
          color: "#183642",
          fontFamily: 'Inter, "Avenir Next", system-ui, sans-serif',
          fontSize: "16px",
          "::placeholder": {
            color: "#7c8e96"
          }
        },
        invalid: {
          color: "#ff6f7d"
        }
      };

      cardNumberElement = elements.create("cardNumber", {
        showIcon: true,
        placeholder: "4242 4242 4242 4242",
        style: elementStyle
      });
      cardExpiryElement = elements.create("cardExpiry", {
        placeholder: "MM / YY",
        style: elementStyle
      });
      cardCvcElement = elements.create("cardCvc", {
        placeholder: "CVC",
        style: elementStyle
      });

      cardNumberElement.mount("#card-number-element");
      cardExpiryElement.mount("#card-expiry-element");
      cardCvcElement.mount("#card-cvc-element");

      [cardNumberElement, cardExpiryElement, cardCvcElement].forEach((element) => {
        element.on("change", (event) => {
          displayError.textContent = event.error ? event.error.message : "";
        });
      });

      stripeReady = true;
      updateSubmitState();
    } catch (error) {
      displayError.textContent = error.message;
      stripeReady = false;
      updateSubmitState();
    }
  }

  submitButton.disabled = true;
  initStripe();

  checkoutForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!stripe || !cardNumberElement) return;

    submitButton.disabled = true;
    submitButton.textContent = "Processing...";

    try {
      const products = await getProducts();
      const cart = await getCart();
      if (cart.length === 0) {
        throw new Error("Your cart is empty.");
      }

      const unavailable = await validateCartStock(cart, products);
      if (unavailable.length > 0) {
        throw new Error(unavailable.map((item) => `${item.product.name} has ${item.stock} available`).join(". "));
      }

      const orderItems = cart
        .map((cartItem) => {
          const product = products.find((item) => item.id === cartItem.id);
          if (!product) return null;
          return {
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity: cartItem.quantity,
            lineTotal: product.price * cartItem.quantity
          };
        })
        .filter(Boolean);
      const subtotal = orderItems.reduce((total, item) => total + item.lineTotal, 0);
      const shippingAmount = subtotal >= 45 ? 0 : 0;
      const total = subtotal + shippingAmount;
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

      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardNumberElement,
          billing_details: {
            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim(),
            address: {
              postal_code: billingPostcodeInput ? billingPostcodeInput.value.trim() : ""
            }
          }
        }
      });

      if (confirmError) {
        throw new Error(confirmError.message);
      }

      await saveOrder({
        id: createId("order"),
        customerName: document.getElementById("name").value.trim(),
        customerEmail: document.getElementById("email").value.trim(),
        shippingAddress: document.getElementById("address").value.trim(),
        items: orderItems,
        subtotal,
        shippingAmount,
        total,
        paymentIntentId: paymentIntent ? paymentIntent.id : "",
        status: "paid"
      });
      await decrementStockForOrder(orderItems);
      await clearCart();
      await showPageAlert("Thank you! Your payment was successful.", "Payment Successful");
      window.location.href = "index.html";
    } catch (error) {
      await showPageAlert(`Payment failed: ${error.message}`, "Payment Failed");
      submitButton.textContent = "Complete Payment";
      updateSubmitState();
    }
  });
}

async function initPage() {
  await initSupabase();
  await ensureCategories();
  await ensureProductCatalog();
  await ensureSlideshowSettings();
  await setupCollectionControls();
  await renderHeroSlideshow();
  await renderFeaturedProducts();
  await renderProductList();
  await renderProductDetail();
  await renderCart();
  await updateHeaderState();
  setupCartDrawerTriggers();
  await setupAdminPage();
  setupAddressLookup();
  handleCheckout();
}

window.addEventListener("DOMContentLoaded", () => {
  initPage().catch((error) => {
    console.error(error);
    showPageAlert("There was a problem loading the shop data. Check your Supabase setup and try again.", "Shop Data Error");
  });
});

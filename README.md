# Imelda's Bracelets

Simple e-commerce demo site built with HTML, CSS, vanilla JavaScript, Supabase data storage, and Stripe test payments.

## netstat -ano | findstr :3000
## taskkill /PID 62448 /F
## npm start



## Files

- `index.html` - homepage with brand intro and featured products.
- `products.html` - product listing page.
- `product.html` - single product detail page.
- `cart.html` - shopping cart page backed by Supabase.
- `checkout.html` - checkout form with Stripe payment integration.
- `admin.html` - admin tools for products, stock, orders, slideshow images, and admin users.
- `styles.css` - responsive styling.
- `script.js` - product rendering, cart logic, Supabase persistence, and Stripe payment handling.
- `server.js` - Express server for static files, Supabase config, and Stripe payment intents.
- `media/products/` - locally uploaded and optimised product images.

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```

2. Create a Supabase project, then run this SQL in the Supabase SQL editor:
   ```sql
   create table if not exists products (
     id text primary key,
     name text not null,
     price numeric not null,
     image text not null,
     hover_image text,
     description text not null,
     color text not null default 'multi',
     type text not null default 'bracelet',
     beaded boolean not null default true,
     charm boolean not null default false,
     category text not null default 'bracelets',
     category_id text,
     badge text not null default 'Handmade',
     rating numeric not null default 4.8,
     sort_rank integer not null default 20,
     stock_quantity integer not null default 12 check (stock_quantity >= 0)
   );

   create table if not exists categories (
     id text primary key,
     name text not null,
     slug text not null unique,
     parent_id text references categories(id) on delete restrict,
     is_active boolean not null default true,
     sort_order integer not null default 50,
     created_at timestamptz not null default now(),
     updated_at timestamptz not null default now()
   );

   create table if not exists product_categories (
     product_id text not null references products(id) on delete cascade,
     category_id text not null references categories(id) on delete cascade,
     primary key (product_id, category_id)
   );

   insert into categories (id, name, slug, parent_id, is_active, sort_order)
   values
     ('bracelets', 'Bracelets', 'bracelets', null, true, 10),
     ('friendship-bracelets', 'Friendship Bracelets', 'friendship-bracelets', 'bracelets', true, 10),
     ('paracord-survival-bracelets', 'Paracord Survival Bracelets', 'paracord-survival-bracelets', 'bracelets', true, 20),
     ('gifts', 'Gifts', 'gifts', null, true, 20),
     ('winter-gifts', 'Winter Gifts', 'winter-gifts', 'gifts', true, 10),
     ('general-gifts', 'General Gifts', 'general-gifts', 'gifts', true, 20),
     ('resin-products', 'Resin Products', 'resin-products', null, true, 30)
   on conflict (id) do nothing;

   update products
   set category_id = category
   where category_id is null;

   insert into product_categories (product_id, category_id)
   select products.id, coalesce(products.category_id, products.category)
   from products
   join categories on categories.id = coalesce(products.category_id, products.category)
   on conflict do nothing;

   create table if not exists admin_users (
     username text primary key,
     password text not null
   );

   create table if not exists app_settings (
     key text primary key,
     value jsonb not null
   );

   create table if not exists cart_items (
     cart_id text not null,
     product_id text not null references products(id) on delete cascade,
     quantity integer not null check (quantity > 0),
     primary key (cart_id, product_id)
   );

   create table if not exists orders (
     id text primary key,
     created_at timestamptz not null default now(),
     customer_name text not null,
     customer_email text not null,
     shipping_address text not null,
     items jsonb not null,
     subtotal numeric not null,
     shipping_amount numeric not null default 0,
     total numeric not null,
     payment_intent_id text,
     status text not null default 'paid'
   );
   ```

   If you already created the `products` table before this update, run this migration:
   ```sql
   alter table products add column if not exists color text not null default 'multi';
   alter table products add column if not exists hover_image text;
   alter table products add column if not exists type text not null default 'bracelet';
   alter table products add column if not exists beaded boolean not null default true;
   alter table products add column if not exists charm boolean not null default false;
   alter table products add column if not exists category text not null default 'bracelets';
   alter table products add column if not exists category_id text;
   alter table products add column if not exists badge text not null default 'Handmade';
   alter table products add column if not exists rating numeric not null default 4.8;
   alter table products add column if not exists sort_rank integer not null default 20;
   alter table products add column if not exists stock_quantity integer not null default 12 check (stock_quantity >= 0);

   create table if not exists categories (
     id text primary key,
     name text not null,
     slug text not null unique,
     parent_id text references categories(id) on delete restrict,
     is_active boolean not null default true,
     sort_order integer not null default 50,
     created_at timestamptz not null default now(),
     updated_at timestamptz not null default now()
   );

   create table if not exists product_categories (
     product_id text not null references products(id) on delete cascade,
     category_id text not null references categories(id) on delete cascade,
     primary key (product_id, category_id)
   );

   insert into categories (id, name, slug, parent_id, is_active, sort_order)
   values
     ('bracelets', 'Bracelets', 'bracelets', null, true, 10),
     ('friendship-bracelets', 'Friendship Bracelets', 'friendship-bracelets', 'bracelets', true, 10),
     ('paracord-survival-bracelets', 'Paracord Survival Bracelets', 'paracord-survival-bracelets', 'bracelets', true, 20),
     ('gifts', 'Gifts', 'gifts', null, true, 20),
     ('winter-gifts', 'Winter Gifts', 'winter-gifts', 'gifts', true, 10),
     ('general-gifts', 'General Gifts', 'general-gifts', 'gifts', true, 20),
     ('resin-products', 'Resin Products', 'resin-products', null, true, 30)
   on conflict (id) do nothing;

   update products
   set category_id = category
   where category_id is null;

   insert into product_categories (product_id, category_id)
   select products.id, coalesce(products.category_id, products.category)
   from products
   join categories on categories.id = coalesce(products.category_id, products.category)
   on conflict do nothing;

   create table if not exists orders (
     id text primary key,
     created_at timestamptz not null default now(),
     customer_name text not null,
     customer_email text not null,
     shipping_address text not null,
     items jsonb not null,
     subtotal numeric not null,
     shipping_amount numeric not null default 0,
     total numeric not null,
     payment_intent_id text,
     status text not null default 'paid'
   );
   ```

3. Create a local `.env` file from `.env.example`, then add your real keys:
   ```sh
   copy .env.example .env
   ```

   Your `.env` should look like this:
   ```env
   SUPABASE_URL=https://your-project-ref.supabase.co
   SUPABASE_ANON_KEY=your_supabase_anon_key
   STRIPE_SECRET_KEY=sk_test_your_stripe_test_secret_key
   STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_test_publishable_key
   ```

4. In Stripe, use the API keys from Developers > API keys. The publishable key starts with `pk_test_` and goes in `STRIPE_PUBLISHABLE_KEY`. The secret key starts with `sk_test_` and goes in `STRIPE_SECRET_KEY`.

5. Run the server:
   ```sh
   npm start
   ```

6. Visit `http://localhost:3000`.

## Notes

- Products, stock quantities, slideshow settings, admin users, carts, and orders are stored in Supabase.
- Product categories are managed from Admin > Categories. Create a main category by leaving Parent category set to "Main category"; create a subcategory by choosing a parent. Disabled categories stay in admin for existing products but are hidden from shop filters and product assignment.
- Product filters on `products.html` are built from active admin categories, so future categories like Keyrings, Phone charms, Puffy paint cases, and Custom gifts can be added without changing the storefront code.
- Product images uploaded in the admin Products section are compressed in the browser, saved under `media/products/`, and the saved media path is stored against the product.
- The cart uses a browser cookie as an anonymous cart id.
- `.env` is ignored by git so your real keys stay local.
- The default admin login is `admin` / `admin123`; change it from the admin page after first login.
- Demo admin passwords are stored as plain text for simplicity. Do not use this approach for production.

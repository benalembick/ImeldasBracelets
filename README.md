# Imelda's Bracelets

Simple e-commerce demo site built with HTML, CSS, vanilla JavaScript, Supabase data storage, and Stripe test payments.

## Files

- `index.html` - homepage with brand intro and featured products.
- `products.html` - product listing page.
- `product.html` - single product detail page.
- `cart.html` - shopping cart page backed by Supabase.
- `checkout.html` - checkout form with Stripe payment integration.
- `admin.html` - admin tools for products, slideshow images, and admin users.
- `styles.css` - responsive styling.
- `script.js` - product rendering, cart logic, Supabase persistence, and Stripe payment handling.
- `server.js` - Express server for static files, Supabase config, and Stripe payment intents.

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
     description text not null
   );

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
   ```

3. Create a local `.env` file from `.env.example`, then add your real keys:
   ```sh
   copy .env.example .env
   ```

   Your `.env` should look like this:
   ```env
   SUPABASE_URL=https://your-project-ref.supabase.co
   SUPABASE_ANON_KEY=your_supabase_anon_key
   STRIPE_SECRET_KEY=your_stripe_test_secret_key
   ```

4. In `script.js`, replace `pk_test_YOUR_TEST_PUBLISHABLE_KEY_HERE` with your Stripe test publishable key.

5. Run the server:
   ```sh
   npm start
   ```

6. Visit `http://localhost:3000`.

## Notes

- Products, slideshow settings, admin users, and carts are stored in Supabase.
- The cart uses a browser cookie as an anonymous cart id.
- `.env` is ignored by git so your real keys stay local.
- The default admin login is `admin` / `admin123`; change it from the admin page after first login.
- Demo admin passwords are stored as plain text for simplicity. Do not use this approach for production.

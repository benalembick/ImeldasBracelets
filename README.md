<<<<<<< HEAD
# Imelda’s Bracelets

Simple e-commerce demo site built with HTML, CSS, and vanilla JavaScript, now with Stripe test payments.

## Files

- `index.html` — homepage with brand intro and featured products.
- `products.html` — product listing page with mock products.
- `product.html` — single product detail page.
- `cart.html` — shopping cart page with localStorage support.
- `checkout.html` — checkout form with Stripe payment integration.
- `styles.css` — responsive styling.
- `script.js` — product rendering, cart logic, localStorage, and Stripe payment handling.
- `server.js` — Express server for serving static files and creating Stripe payment intents.
- `package.json` — Node.js dependencies.

## Setup

1. **Install dependencies:**
   ```
   npm install
   ```

2. **Get Stripe test keys:**
   - Sign up for a free Stripe account at [stripe.com](https://stripe.com)
   - Go to the Dashboard > Developers > API keys
   - Copy your **Test Publishable key** (starts with `pk_test_`)
   - Copy your **Test Secret key** (starts with `sk_test_`)

3. **Configure keys:**
   - In `server.js`, replace `'sk_test_YOUR_TEST_SECRET_KEY_HERE'` with your test secret key
   - In `script.js`, replace `'pk_test_YOUR_TEST_PUBLISHABLE_KEY_HERE'` with your test publishable key

4. **Run the server:**
   ```
   npm start
   ```
   - Visit `http://localhost:3000`

## Testing Payments

Use these test card details:
- Card number: `4242 4242 4242 4242`
- Expiry: Any future date (e.g., 12/34)
- CVC: Any 3 digits (e.g., 123)

Payments are in test mode and won't charge real cards.

## Notes

- Cart data is stored in `localStorage`.
- Product pages are generated from mock data in `script.js`.
- Checkout uses Stripe Elements for secure payment processing.
=======
# ImeldasBracelets
>>>>>>> cd146a84d468364eda8cdcb1f63c8ab63062ebea

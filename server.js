const express = require('express');
const fs = require('fs');
const path = require('path');

function loadEnvFile() {
  const envPath = path.join(__dirname, '.env');
  if (!fs.existsSync(envPath)) return;

  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);
  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;

    const equalsIndex = trimmed.indexOf('=');
    if (equalsIndex === -1) return;

    const key = trimmed.slice(0, equalsIndex).trim();
    const rawValue = trimmed.slice(equalsIndex + 1).trim();
    const value = rawValue.replace(/^["']|["']$/g, '');

    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  });
}

loadEnvFile();

const stripeSecretKey = process.env.STRIPE_SECRET_KEY || '';
const stripePublishableKey = process.env.STRIPE_PUBLISHABLE_KEY || '';
const mediaDir = path.join(__dirname, 'media');
const productMediaDir = path.join(mediaDir, 'products');

if (!stripeSecretKey.startsWith('sk_')) {
  console.warn('Stripe is not configured: STRIPE_SECRET_KEY must start with sk_test_ or sk_live_.');
}

const stripe = stripeSecretKey.startsWith('sk_') ? require('stripe')(stripeSecretKey) : null;

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json({ limit: '12mb' }));
app.use(express.static(path.join(__dirname)));

fs.mkdirSync(productMediaDir, { recursive: true });

app.get('/supabase-config', (_req, res) => {
  res.send({
    url: process.env.SUPABASE_URL || '',
    anonKey: process.env.SUPABASE_ANON_KEY || '',
  });
});

app.get('/stripe-config', (_req, res) => {
  res.send({
    publishableKey: stripePublishableKey.startsWith('pk_') ? stripePublishableKey : '',
  });
});

app.post('/upload-product-image', async (req, res) => {
  try {
    const { filename, dataUrl } = req.body || {};
    const match = typeof dataUrl === 'string'
      ? dataUrl.match(/^data:image\/(webp|jpeg|jpg|png);base64,([A-Za-z0-9+/=]+)$/)
      : null;

    if (!match) {
      return res.status(400).send({ error: 'Please upload a valid image file.' });
    }

    const extension = match[1] === 'jpeg' || match[1] === 'jpg' ? 'jpg' : match[1];
    const buffer = Buffer.from(match[2], 'base64');
    const maxBytes = 4 * 1024 * 1024;

    if (!buffer.length || buffer.length > maxBytes) {
      return res.status(400).send({ error: 'Optimised image must be under 4MB.' });
    }

    const safeBaseName = path
      .basename(filename || `product-${Date.now()}`)
      .replace(/\.[^.]+$/, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 48) || 'product-image';
    const savedName = `${safeBaseName}-${Date.now()}.${extension}`;
    const outputPath = path.join(productMediaDir, savedName);

    fs.writeFileSync(outputPath, buffer);

    res.send({
      url: `/media/products/${savedName}`,
      bytes: buffer.length,
    });
  } catch (error) {
    res.status(500).send({
      error: error.message || 'Image upload failed.',
    });
  }
});

// Create payment intent
app.post('/create-payment-intent', async (req, res) => {
  try {
    if (!stripe) {
      throw new Error('Stripe secret key is not configured. Add STRIPE_SECRET_KEY=sk_test_... to .env.');
    }

    const { amount } = req.body; // Amount in cents

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(400).send({
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

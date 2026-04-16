# ChinaBuy Frontend MVP (React + Vite)

ChinaBuy is a **Buy from China** cross-border shopping demo for users in USA/UK/Canada/Australia.
This project is a runnable front-end MVP with mock data and an extensible architecture for future production features.

## Features Completed (Demo)

- Home page with hero, advantages, countries, categories, shipping timeline, and order flow.
- Shop page with 12 mock products, category filter, search, tags, price in RMB + selected currency, add-to-cart.
- Product detail page with gallery, variants, quantity, shipping notes, recommended products.
- Cart page with quantity updates, remove, subtotal, proceed to checkout.
- Checkout page with full shipping form, country/method selection, dynamic shipping fee calculation, optional service fee, order summary, and place order flow.
- Payment method selector placeholder (PayPal / Stripe-Credit Card).
- Order success page with mock order number and status timeline.
- Submit Product Link page with required form and success alert.
- Shipping page with process, shipping cards, fee examples, FAQ.
- Contact page with form + support block.
- React Router routes and componentized layout (Navbar, Footer, ProductCard, ShippingOptionCard, OrderSummary).
- Responsive layout for desktop/mobile.

## Extensibility Reserved (Scaffolded)

- Auth routes/pages: `/login`, `/register`, `/forgot-password`.
- Auth module foundations: `context/AuthContext.jsx`, `services/authService.js`, `features/auth/`.
- Admin route/page: `/admin` with module cards for Orders/Products/Customers/Shipping Rules/Quotes/Payments.
- Payment placeholders: `payment/`, `components/PaymentMethodSelector.jsx`, `services/paymentService.js`.
- Order status system: `constants/orderStatus.js`, `utils/orderHelpers.js`.
- Multi-currency support foundations (USD/GBP/CAD/AUD):
  - `currency/exchangeRates.js`
  - `currency/currencyConfig.js`
  - `context/CurrencyContext.jsx`
  - `utils/currencyFormatter.js`
- Shipping rules engine foundations:
  - `shipping/shippingRules.js`
  - `shipping/shippingCalculator.js`
- Feature modular directories under `src/features/` for future business-domain expansion.

## Tech Stack

- React 18
- Vite 5
- React Router DOM 6

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Start development server

```bash
npm run dev
```

### 3) Build production bundle

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

## Project Structure

```text
src/
  admin/
  components/
  config/
  constants/
  context/
  currency/
  data/
  features/
    auth/
    cart/
    checkout/
    orders/
    payments/
    shipping/
    admin/
  hooks/
  layouts/
  pages/
    admin/
  payment/
  services/
  shipping/
  utils/
```

## Mock Data Notes

- Product data: `src/data/products.js`.
- Shipping fee rules: `src/shipping/shippingRules.js`.
- Exchange rates are mock values for demo only.

## Suggested Next Development Roadmap

1. **Auth**: replace mock AuthContext with real token/session flow and protected routes.
2. **Payment**: integrate Stripe + PayPal SDK and webhook-backed payment status sync.
3. **Admin**: implement CRUD for orders/products/shipping rules/quotes.
4. **Order Management**: order detail page + timeline updates + tracking integration.
5. **Currency System**: connect exchange-rate API and geo/default currency strategy.
6. **Shipping Rules Engine**: add first-weight/continued-weight, volumetric weight, remote area surcharge, sensitive goods rules.

## Demo Disclaimer

This is a front-end demo project. Payment, logistics provider APIs, and database integration are not connected.

# 🏍️ Moto-Heritage

> **Curated Vintage Motorcycle Parts, Restored Components & Custom Foundry Archive**

Moto-Heritage is a modern e-commerce and archival web application dedicated to vintage motorcycle enthusiasts, custom builders, and restorers. It features a curated catalog of precision-restored parts, custom workshop fabrications, community builds, and historical archive blueprints.

---

## 🔗 Live Demo

https://moto-heritage-neon.vercel.app/

## 📸 Overview & Features

- **🔍 Interactive Parts Catalog (Explore)**: Filter by motorcycle platform (*Panhead, Shovelhead, Knucklehead, Cafe Racer, Bobber*), component category (*Carburetion, Saddles, Plumbing, Foundry, Ignition, Lighting*), and search query.
- **⚡ Quick View Modal**: Inspect detailed engineering specifications, condition ratings, model compatibility, and high-res imagery.
- **🛒 Dynamic Shopping Cart**: Full cart management with local storage persistence, quantity controls, coupon/discount codes, and instant checkout flow.
- **🛠️ Workshop & Foundry Showcase**: Deep dive into custom fabrication processes, precision restoration standards, and machining capabilities.
- **👥 Community & Builder Journal**: Showcase of custom garage builds, rider stories, and community submissions.
- **📜 Vintage Technical Archive**: Historical blueprints, technical manuals, and archival documentation for classic motorcycles.
- **👤 User Profile & Order Management**: Track orders, manage saved parts, and customize builder profiles.
- **🎨 Premium Dark Foundry Aesthetic**: Built with high-performance animations, responsive design, and tailored typography.

---

## 🛠️ Tech Stack

- **Framework / UI**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/) (Framer Motion)
- **AI Integration**: [@google/genai](https://www.npmjs.com/package/@google/genai) (Google Gemini API ready)

---

## 🚀 Getting Started (Local Host Setup)

Follow these steps to run **Moto-Heritage** on your local machine:

### 1. Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version **18.x** or higher recommended, Node 20+ preferred)
- [npm](https://www.npmjs.com/) (bundled with Node.js) or `yarn` / `pnpm`
- [Git](https://git-scm.com/)

### 2. Clone the Repository

```bash
git clone <repository-url>
cd Moto-heritage-
```
*(Or navigate to the `Moto-heritage-` directory if already cloned).*

### 3. Install Dependencies

Install the project dependencies using npm:

```bash
npm install
```

### 4. Configure Environment Variables (Optional)

If using Google Gemini AI features or custom hosting URLs:

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
2. Open `.env` and configure the variables:
   ```env
   # GEMINI_API_KEY: Required for Gemini AI integrations
   GEMINI_API_KEY="your-gemini-api-key-here"

   # APP_URL: The URL where this app is hosted locally or in production
   APP_URL="http://localhost:3000"
   ```

> **Note**: The core catalog, cart, workshop, community, and archive views run out-of-the-box even without an API key.

### 5. Start the Local Development Server

Run the development command:

```bash
npm run dev
```

The Vite dev server will start. Open your web browser and navigate to:

👉 **[http://localhost:3000](http://localhost:3000)**

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local dev server on port `3000` with hot module replacement (HMR). |
| `npm run build` | Compiles TypeScript and builds the optimized production bundle in the `dist/` directory. |
| `npm run preview` | Locally previews the production build created by `npm run build`. |
| `npm run lint` | Runs the TypeScript compiler (`tsc --noEmit`) to check for type errors. |
| `npm run clean` | Cleans up the `dist/` build directory. |

---

## 📁 Project Structure

```text
Moto-heritage-/
├── assets/                # Static assets, branding & media
├── src/
│   ├── components/        # Reusable React components
│   │   ├── ArchiveView.tsx     # Historical blueprints & documents
│   │   ├── CartDrawer.tsx      # Slide-out shopping cart & checkout
│   │   ├── CommunityView.tsx   # Builder journal & community stories
│   │   ├── FilterBar.tsx       # Search, filter & sorting controls
│   │   ├── Footer.tsx          # Footer with quick links & newsletter
│   │   ├── Header.tsx          # Navigation bar, search & cart badge
│   │   ├── Hero.tsx            # Hero banner & primary CTA
│   │   ├── LegalModal.tsx      # Terms, Privacy & Warranty modals
│   │   ├── ProductCard.tsx     # Individual product display card
│   │   ├── QuickViewModal.tsx  # Product details & specs modal
│   │   ├── UserModal.tsx       # Account & order management modal
│   │   └── WorkshopView.tsx    # Foundry & custom fabrication view
│   ├── data/
│   │   └── products.ts         # Product catalog and specifications dataset
│   ├── types.ts           # TypeScript interfaces & types
│   ├── App.tsx            # Main application root component
│   ├── main.tsx           # React DOM entry point
│   └── index.css          # Global Tailwind styles & custom utilities
├── .env.example           # Example environment variables
├── index.html             # HTML entry file
├── package.json           # Dependencies and project scripts
├── tsconfig.json          # TypeScript compiler configuration
└── vite.config.ts         # Vite build and plugin configuration
```

---

## 🛡️ License

This project is licensed under the [Apache-2.0 License](LICENSE).

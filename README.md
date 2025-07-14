# Backflare

> **Your private, open-source Google Drive backup – built on Cloudflare's edge**

Backflare is an open-source, privacy-focused backup service inspired by Google Drive – powered entirely by Cloudflare’s modern developer stack. Designed for creators, engineers, and indie hackers who value **control, speed, and scalability**.

## 🔥 Why Backflare?

* **Own your data**: Everything is open-source. Your files, your control.
* **Built on Cloudflare**: Leverages Durable Objects, R2, D1, KV, and Workflows.
* **Per-tenant architecture**: Every user gets isolated, high-performance storage.
* **Smart versioning & snapshots**: File changes are tracked intelligently.
* **Fast sync across devices**: Think Dropbox + Git, but serverless.

## ⚙️ Architecture Overview

```
                ┌───────────────┐
                │   Web App    │ (Next.js + Tailwind + shadcn)
                └──────┬────────┘
                       │
                 Auth via next-auth
                       │
                ┌──────▼─────────────┐
                │  Durable Object    │ (Per-tenant DB logic)
                └──────┬─────────────┘
                       │
         ┌─────────────┴──────────────┐
         │           SQL (DO Attached)│ ← File/folder metadata, snapshots, settings
         │           R2               │ ← File/object storage
         │           D1               │ ← Global stats, usage, plans
         └────────────────────────────┘
                       │
              Workflows & KV (as needed)
```

## 🧱 Stack

* **Frontend**: Next.js (via OpenNext), TailwindCSS, shadcn/ui
* **Auth**: next-auth
* **Infra**: Cloudflare Workers, Durable Objects, R2, D1, KV, Workflows
* **Storage**:

  * **Durable Object + SQL**: Per-tenant DB for metadata & state
  * **R2**: File/object storage
  * **D1**: Global data (user count, usage, plans)

## 🧩 Features (Planned)

* [x] Multi-tenant architecture
* [ ] File/folder creation + upload
* [ ] File versioning + snapshots
* [ ] User dashboard
* [ ] Authentication + authz
* [ ] Object deduplication (R2 layer)
* [ ] Trash + Recovery system
* [ ] File previews
* [ ] Sync client (CLI and/or desktop app)

## 🚀 Getting Started

```bash
# Clone the repo
npx create-next-app backflare

# Install dependencies
pnpm install

# Set up Cloudflare environment
wrangler login
wrangler dev
```

More detailed steps will be added as we progress.

## 🧪 Build In Public

Backflare is built in public. Follow the journey:

* [x] GitHub Projects → [Project Board](https://github.com/YOUR_USERNAME/backflare/projects/1)
* [ ] Twitter threads (coming soon)
* [ ] Devlog on Hashnode/Medium

## 🤝 Contribute

* **Star** this repo
* **Fork** and submit a PR
* Open issues or ideas
* Join the Discord (soon)

## 🛡 License

MIT – built for hackers, by hackers.

---

### 👋 Creator

Shivam Dwivedi – Indie hacker, systems thinker, and builder of useful internet tools.

> Inspired by real problems. Backed by modern infra. Built for speed.

---

Want to help or have ideas? DM me on X \[@yourhandle] or raise an issue.

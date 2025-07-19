# 💾 Basic Informational Site with Node.js

This is a beginner-friendly Node.js project that builds a simple informational website by serving static HTML files using only **core Node.js modules**. It demonstrates how to create an HTTP server, handle routing manually, and read files from the filesystem.

---

## 📚 Project Pages

You will create a website with the following pages:

* `index.html` – Homepage
* `about.html` – About page
* `contact-me.html` – Contact page
* `404.html` – Not Found page (for invalid URLs)

---

## 🌐 URL Routing Behavior

| URL                                | Served File       |
| ---------------------------------- | ----------------- |
| `http://localhost:8000/`           | `index.html`      |
| `http://localhost:8000/about`      | `about.html`      |
| `http://localhost:8000/contact-me` | `contact-me.html` |
| Any other URL                      | `404.html`        |

---

## 📁 Project Structure

```
Basic-Informational-Site/
├── script.js           # Node.js server file
└── public/             # HTML files stored here
    ├── index.html
    ├── about.html
    ├── contact-me.html
    └── 404.html
```

> ⚠️ All HTML files must be placed inside the `public/` directory.

---

## 🔧 Setup & Run Instructions

### ✅ 1. Install Node.js

Check if Node.js is installed by running:

```bash
node -v
```

If not, download and install it from [https://nodejs.org](https://nodejs.org)

---

### ✅ 2. Navigate to the project directory

```bash
cd path/to/Basic-Informational-Site
```

---

### ✅ 3. Run the server

```bash
node script.js
```

You should see this in the terminal:

```
Listening on http://127.0.0.1:8000
```

---

### ✅ 4. Open your browser and test

Visit the following pages in your browser:

* [http://localhost:8000/](http://localhost:8000/)
* [http://localhost:8000/about](http://localhost:8000/about)
* [http://localhost:8000/contact-me](http://localhost:8000/contact-me)
* Try something random like [http://localhost:8000/banana](http://localhost:8000/banana) — it should show your 404 page.

---

## 💡 How It Works

In `script.js`, your server:

1. Reads the URL path (e.g., `/about`)
2. Matches it to a corresponding HTML file in the `public` folder
3. Uses `fs.readFile()` to read the file content
4. Sends the appropriate HTTP status and content
5. Defaults to `404.html` for unknown routes

The server listens only on the local machine using:

```js
server.listen(port, '127.0.0.1', () => {
  console.log(`Listening on http://127.0.0.1:${port}`);
});
```

---

## 🛠️ Core Concepts Used

* `http` module — creates the server
* `fs` module — reads HTML files from disk
* `path` module — builds correct file paths
* Manual routing — no external libraries like Express

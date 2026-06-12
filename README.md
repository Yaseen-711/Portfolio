# Yaseen | AI & Data Science Portfolio

A custom-built, highly optimized professional portfolio website built entirely with **Vanilla HTML5, CSS3, and JavaScript** — absolutely zero external frameworks or heavy dependencies. Designed specifically for showcasing AI, Data Science, and Full-Stack Engineering skills.

## 🚀 Key Features

- **Dark Olive Aesthetic:** A custom, flat minimalist design (`#1a1a12` base) completely avoiding generic gradients, blur effects, or glassmorphism.
- **Dynamic Profile Image Rotation:** Alternates automatically between two profile pictures (`profile1.png` and `profile2.png`) upon page reload using `localStorage` logic.
- **Anti-Bot Email Obfuscation:** The contact popup uses an interactive "Click to Reveal" system that dynamically constructs the `mailto:` link upon human interaction, completely protecting the email address from automated web scrapers.
- **Developer Easter Egg:** Inspect the DOM (F12) to find a massive custom ASCII art message hidden right below the `<body>` tag.
- **Inline Vector Favicon:** A custom geometric monogram (`Y`) built as an SVG and embedded directly as a base64 Data URI to bypass cross-origin/local fetching issues and ensure instant rendering.
- **Geometric Parallax Background:** A lightweight, math-driven JS background generator drawing floating geometric shapes matched to the color theme.
- **Fully Responsive:** Two-column asymmetric desktop layout that elegantly stacks on mobile devices.
- **Theme Toggling:** Built-in dark/light mode toggle with persistence.

## 🛠️ Tech Stack & Skills Highlighted

- **Languages:** Python, JavaScript, C, Java, SQL
- **AI / ML Focus:** Local LLMs, RAG Architectures, Scikit-Learn, TensorFlow
- **Development & Tooling:** Full-Stack Web Development, AI-Assisted Coding, FastAPI
- **Engineering:** Interactive Logic & Rendering, Systems Architecture

## 📂 Project Structure

```text
portfolio/
├── index.html              Main markup (Content, Easter Egg, UI Structure)
├── style.css               Design system (Olive palette, Typography, Layout)
├── script.js               Interactivity (Email obfuscation, Parallax, Image rotation)
├── favicon.svg             Original vector source for the custom tab icon
├── vercel.json             Vercel edge-routing configuration
├── .gitignore              Optimized ignore rules (Vercel, NPM logs, OS caches)
└── assets/
    ├── hero-illustration.png   Tech/AI right-side illustration
    ├── profile1.png            Profile image variant A
    ├── profile2.png            Profile image variant B
    ├── resume.pdf              Downloadable CV
    └── certificates/           Verified PDF certificates (IBM SkillsBuild)
```

## 🚀 Quick Start (Local Development)

Because there are no `node_modules` or build steps required, running this project is instant.

1. Clone or download the repository.
2. Open the directory in your terminal.
3. Start a local server (or use VS Code Live Server):
   ```bash
   python -m http.server 8000
   ```
4. Visit `http://localhost:8000`

## ☁️ Deployment

This project is pre-configured for seamless deployment to [Vercel](https://vercel.com):
1. Push to a GitHub repository.
2. Import the project in Vercel.
3. Vercel will auto-detect it as a static site and deploy it instantly.

# AI & Data Science Portfolio

A professional portfolio website built with **HTML5, CSS3, and Vanilla JavaScript** — no frameworks.

## Features

- Two-column asymmetric layout (fixed sidebar + scrollable content)
- Dark / Light mode toggle with localStorage persistence
- Geometric parallax background with olive-green shades
- Responsive design (mobile, tablet, desktop)
- Contact popup modal
- Project cards grid
- Certification downloads
- Resume/CV download
- SEO optimized with Open Graph meta tags

## Quick Start

1. **Edit content** — Open `index.html` and update all `<!-- EDITABLE -->` sections with your personal information.
2. **Add your profile image** — Place your photo at `assets/profile.jpg`
3. **Add your resume** — Place your PDF at `assets/resume.pdf`
4. **Add certificates** — Place certificate PDFs in `assets/certificates/`
5. **Update social links** — Replace `#` placeholder URLs for GitHub and LinkedIn

## Local Development

```bash
# Option 1: Python
python -m http.server 8000

# Option 2: VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

Then visit `http://localhost:8000`

## Deploy to Vercel

1. Push this repository to GitHub
2. Connect the repo to [Vercel](https://vercel.com)
3. Vercel auto-detects the static site — no build step needed
4. Your site is live!

## File Structure

```
portfolio/
├── index.html              Main HTML (edit content here)
├── style.css               All styling (edit colors/fonts here)
├── script.js               Interactivity (parallax, theme, popup)
├── vercel.json             Vercel deployment config
├── .gitignore              Git ignore rules
├── README.md               This file
└── assets/
    ├── profile.jpg         Your profile photo
    ├── resume.pdf          Your resume PDF
    └── certificates/
        ├── cert1.pdf       Certificate 1
        ├── cert2.pdf       Certificate 2
        └── cert3.pdf       Certificate 3
```

## Customization

- **Colors** — Edit CSS variables in `:root` and `[data-theme="light"]` in `style.css`
- **Fonts** — Change the Google Fonts import in `index.html` and `--font-family` in `style.css`
- **Skills** — Add/remove `<span class="skill-tag">` elements in `index.html`
- **Projects** — Add/remove `.project-card` articles in `index.html`

## Browser Support

Chrome, Firefox, Safari (latest 2 versions), Edge 90+

## License

© 2026 Your Name. All rights reserved.

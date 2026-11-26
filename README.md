# Zachary Manning — Developer Portfolio

Personal portfolio website showcasing my professional experience, technical skills, education, and software development projects.

**Website:** [zacharymanning.dev](https://zacharymanning.dev)

## Tech Stack

- **HTML5** — Website structure and content
- **CSS3** — Styling and responsive design
- **JavaScript** — Active navigation and linked project expansion
- **Cloudflare Pages** — Static hosting and CDN
- **GitHub** — Version control and automated deployment integration

The website uses no frontend frameworks, backend services, or runtime dependencies.
It is intentionally designed to be lightweight, fast, and accessible.

## Project Structure

```text
/
├── index.html          - Portfolio
├── assets/
│   ├── css/
│   │   ├── reset.css
│   │   └── style.css
│   ├── images/
│   └── js/
│       └── navigation.js - Progressive navigation enhancements
├── favicon.svg
├── .gitignore
├── .gitattributes
├── LICENSE
└── README.md
```

## Local Development

Clone the repository and open `index.html` in a browser.
Alternatively, use a local HTTP server to test the website, particularly its root-relative links.
No installation or build process is required.

University project groups use native disclosures and start collapsed. Navigation and disclosures remain usable without JavaScript. The blank portrait placeholder is decorative (`alt=""`); replace this with descriptive alternative text when adding the real portrait.

## Deployment

The website is hosted on Cloudflare Pages, integrated directly with GitHub.
Changes pushed to the `main` branch automatically trigger a production deployment.
No custom GitHub Actions or deployment secrets are required.

## License

The source code is licensed under the [MIT License](LICENSE).

Personal content, photographs, branding, and other non-code assets are excluded from this license unless otherwise stated.

---

© 2026 Zachary Manning. All rights reserved for personal content.

Additional language icons in `assets/images/languages/` are from [Devicon](https://github.com/devicons/devicon), with its MIT licence included in that folder.

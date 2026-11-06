# Sarthak Dev Nepal — Personal Website

My personal lifestyle site: a little corner of the internet for my daily life, writing,
photography, and the things I love doing.

**Live site → [sarthaknepal547-cloud.github.io/sarthakdev](https://sarthaknepal547-cloud.github.io/sarthakdev/)**

---

## About

This is a single-page personal website built with plain HTML, CSS, and JavaScript — no build
step, no frameworks, no dependencies. It is hosted for free on GitHub Pages straight from the
`main` branch.

## Rooms

The site is a 3D animated hub, not a scrolling page. Six rooms open as full-screen
spatial views:

| Room | What's there |
| --- | --- |
| **Photos** | Masonry gallery with lightbox |
| **Writing** | Blog posts, opened in a reader overlay |
| **Motion** | Video and audio (YouTube/Vimeo embeds, or link cards) |
| **About** | Intro, facts, and hobbies |
| **Study** | College / course timeline |
| **Contact** | Email, phone, map, socials, and a form |

## Tech stack

- **HTML5** — single `index.html`
- **CSS3** — custom properties (theme colors), flexbox/grid, responsive media queries
- **Vanilla JavaScript** — mobile menu, smooth scrolling, scroll animations, image modal, form handling
- **Font Awesome 6.4** — icons, via CDN
- **Placeholder images** — [picsum.photos](https://picsum.photos) (stand-ins for my own photos)

No installation, no build tools, no package manager required.

## Running locally

Open the file directly:

```bash
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

Or serve it locally so relative paths behave exactly like production:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

The site deploys automatically via **GitHub Pages**:

- **Source:** `main` branch, repository root
- **Live URL:** <https://sarthaknepal547-cloud.github.io/sarthakdev/>

Any commit merged into `main` goes live within a minute or two. Nothing else to run or configure.

## Project structure

```
.
├── index.html                          # The entire site: markup, styles, and scripts
├── .nojekyll                           # Tells GitHub Pages to serve files as-is (no Jekyll)
├── LICENSE                             # MIT
├── README.md                           # You are here
├── docs/
│   └── MANAGING-THIS-REPO.md           # How I track work: issues, labels, milestones
└── .github/
    ├── ISSUE_TEMPLATE/
    │   ├── bug_report.yml              # Report something broken on the site
    │   ├── content_request.yml         # Add or change blog posts, gallery, hobbies, copy
    │   └── config.yml                  # Issue template chooser settings
    └── PULL_REQUEST_TEMPLATE.md        # Checklist shown when opening a PR
```

## How I manage this project

All work is tracked with GitHub issues, labels, and milestones — see
[docs/MANAGING-THIS-REPO.md](docs/MANAGING-THIS-REPO.md) for the workflow and label reference.

**Quick version:**

- 🐛 A bug found on the site → open a **Bug report** issue
- ✍️ A new blog post or gallery update → open a **Content request** issue
- 🎯 Things I want finished before sharing the site widely → attach to the **v1.0 Launch Ready** milestone
- 🔀 All changes go through a pull request into `main`, never a direct push

## License

[MIT](LICENSE) © 2025–2026 Sarthak Dev Nepal — the code is free to learn from and reuse.
Personal photos, writing, and content are mine; please don't republish them as your own.

## Contact

Use the contact form on the [live site](https://sarthaknepal547-cloud.github.io/sarthakdev/#contact),
or start a conversation in [Discussions](../../discussions).

---

## Editing the site (owner only)

The site's text, photos, posts and links live in **`content.json`** — not in the HTML. That
means you can change anything without touching code.

1. Open **https://sarthakdev.com.np/admin.html**
2. Paste your GitHub token once (fine-grained, `Contents: Read and write` on this repo)
3. Edit in the left panel — the real page updates live on the right
4. Press **Publish** — live in about 40 seconds

Visitors never see this. `admin.html` is `noindex`, unlinked, and inert without your token.

### Media

- **Photos** — upload in the editor, compressed to WebP automatically before upload
- **Video and audio** — link to YouTube/Vimeo or a file hosted elsewhere (Cloudflare R2).
  GitHub rejects files over 100 MB, and large media bloats the repo permanently.

### How it fits together

| File | Purpose |
| --- | --- |
| `index.html` | The whole site — styling and rendering, no content |
| `content.json` | All editable content |
| `admin.html` | Owner editor (token-gated) |
| `404.html` | Friendly not-found page |
| `assets/img/` | Photos uploaded through the editor |

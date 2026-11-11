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
- **No stock photography** — every photo on the site is my own upload.

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

## Features

Beyond the six rooms, the site ships with:

- **Ambient music** — generated live with the Web Audio API (a soft pad plus
  random pentatonic bells). No audio files, nothing to host.
- **Command palette** — `⌘K` / `Ctrl+K` to search posts, jump to rooms, switch
  theme, change accent colour, toggle data saver, take a photo.
- **Visitors choose their accent** — six colours, remembered per browser.
- **Camera** — take a photo in the Photos room with five filters, then download,
  share, or keep it in a local strip.
- **Three soundscapes** — Bells, Night and Rain, all synthesised in the browser
  (the rain is filtered noise). Pick one from the command palette.
- **Read time + reading progress bar** on every post.
- **Post to post navigation** — Previous / Next buttons at the end of an article,
  with a `3 / 7` counter, so you never have to close and reopen.
- **Reading list** — tap the star on any post to pin it; saved posts appear as
  chips at the top of the Writing room and are remembered per browser.
- **Photo lightbox extras** — image counter, download button, tap to zoom, and
  swipe left/right on a phone.
- **Share** any room via the native share sheet, or copy the link.
- **Save contact** — downloads a `.vcf` card.
- **Surprise me** — jump to a random room from the palette.
- **Follow the system theme** — one palette action tracks `prefers-color-scheme`.
- **Data saver** — disables particles, spotlight and blur for slow connections.
- **Installable** — web app manifest plus a service worker, so it opens offline
  and can be added to a home screen, with long-press shortcuts to Photos,
  Writing and Contact.
- **Keyboard** — `1`–`6` open rooms, `M` music, `T` theme, `?` shortcut sheet,
  `Esc` steps back, `⌘K` opens search.

### Navigation that respects the back button

Every full-screen view — a room, an article, a photo, the camera — pushes one
history entry. On a phone, the back gesture closes that view and returns you to
exactly where you were (article → room → hub) instead of leaving the site, and
the address bar keeps up (`#/writing`) so links stay shareable.

### The one thing that needs a server

Visitor photos are **not** published to the site. A static GitHub Pages site has
nowhere to store an upload, so snapshots stay in the visitor's own browser.
Making them public needs object storage and an upload endpoint (Cloudflare R2
plus a small Worker, both on the free tier) — that's a separate piece of work.

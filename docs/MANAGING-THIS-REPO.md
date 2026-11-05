# Managing this project

Everything about this site is tracked in GitHub itself — no external tools, no spreadsheets.
This is the playbook.

---

## The three places work lives

| Where | What goes there |
| --- | --- |
| **Issues** | Every piece of work, big or small. One issue = one change. |
| **Milestones** | Groups of issues that ship together, e.g. "v1.0 Launch Ready". |
| **Pull requests** | The actual code/content change that closes an issue. |

Rule of thumb: **if it's not an issue, it's not real work.** A vague "I should fix the gallery
someday" becomes an issue so it stops living in your head.

---

## The workflow

```
Idea / problem
     │
     ▼
Open an issue  ──►  add labels + milestone
     │
     ▼
Create a branch  ──►  make the change  ──►  open a PR ("Closes #12")
     │
     ▼
Review the PR checklist  ──►  merge into main
     │
     ▼
Issue closes automatically  ──►  GitHub Pages deploys in ~1 minute
```

### 1. Capture the work

Open an issue using the right template:

- **🐛 Bug report** — something is broken or looks wrong
- **✍️ Content request** — new blog post, photo, or text change
- **Blank issue** — anything else (repo housekeeping, new feature)

Give it a title that says what "done" looks like. Good: *"Fix broken lightbox image on 2nd gallery
photo"*. Bad: *"gallery"*.

### 2. Triage it

Every open issue should have **at least one label** and, if it's part of a release,
**a milestone**. If an issue has neither, it will get lost — that's the one habit that matters.

### 3. Do the work on a branch

Never edit `main` directly. Every change gets a branch and a PR, even a one-line typo fix —
it gives you a checkpoint and a record of *why* something changed.

```bash
git checkout main && git pull
git checkout -b fix/gallery-lightbox
# ... make changes ...
git commit -am "Fix lightbox src for second gallery photo"
git push -u origin fix/gallery-lightbox
gh pr create --fill
```

### 4. Merge and ship

Merge the PR into `main`. GitHub Pages picks it up automatically and the live site updates
within a minute or two. Nothing to deploy manually.

---

## Labels

Default GitHub labels plus the ones custom to this project:

### Project labels

| Label | Meaning |
| --- | --- |
| `site-content` | Blog posts, gallery photos, hobbies, copy, About text |
| `design` | Layout, colors, typography, responsive behaviour |
| `accessibility` | Screen reader support, contrast, keyboard navigation |
| `performance` | Image sizes, load speed, render blocking |
| `infrastructure` | GitHub Pages, deployment, repo config |
| `priority: high` | Do this next |
| `priority: low` | Nice to have, no rush |
| `blocked` | Waiting on something else — say what in a comment |

### Default labels worth using

| Label | Meaning |
| --- | --- |
| `bug` | Something is broken |
| `enhancement` | New feature or improvement |
| `documentation` | README, guides, comments |
| `question` | Needs a decision before work can start |
| `good first issue` | Small, self-contained, easy to pick up |
| `wontfix` | Decided not to do — close it with a reason |
| `duplicate` | Already tracked elsewhere — link the original |

**Keep the label list short.** If a label hasn't been used in months, delete it. A label
nobody picks is just noise in the sidebar.

---

## Milestones

A milestone is a release. Keep at most **two open at a time** — one you're working on, one
next — or it stops meaning anything.

Current:

- **v1.0 Launch Ready** — the site is solid enough to share with anyone: real contact route,
  no broken images, works on phones, has a README and license.

When every issue in a milestone is closed, close the milestone and cut a release:

```bash
gh release create v1.0 --generate-notes --title "v1.0 — Launch Ready"
```

A release is a permanent, dated snapshot of "the site as it was on this day". Worth doing the
first time you share the link publicly, and after any big content update.

---

## Choosing what to work on next

Work top to bottom and stop at the first issue that fits:

1. `priority: high` — regardless of anything else
2. Anything in the **current milestone** with the `bug` label
3. Anything in the **current milestone** at all
4. `good first issue` when you have 20 spare minutes
5. Everything else — or close it

If you haven't touched an issue in three months and it's not in a milestone, either schedule it
or close it. **A closed issue is not a failure — it's a decision.**

---

## Weekly 10-minute review

Once a week, do this:

- [ ] Open the issue list, sort by **oldest** — any issue with no label or milestone? Fix or close it.
- [ ] Look at the current milestone — is it still what you want to finish next?
- [ ] Close anything the PR already solved.
- [ ] Open the live site on a phone. Anything broken? Open an issue.
- [ ] Check the [Actions tab](../../actions) and Pages build — is the last deploy green?

That's the whole maintenance cost of this repo.

---

## Housekeeping rules

- **Never push directly to `main`.** PRs only — even solo.
- **One issue per concern.** Don't bundle three unrelated fixes in one PR.
- **Commit messages say why, not just what.** *"Fix form to actually send"* beats *"update html"*.
- **Screenshots in PRs for visual changes.** Your future self won't remember what it looked like.
- **Delete merged branches.** Keeps the branch list readable.
- **No secrets in the repo.** This is a public site — API keys for any future contact service
  will need a backend or a form service, never a key in `index.html`.

---

## Known debt (tracked as issues)

These are real problems in the current `index.html`, logged so they don't get forgotten:

| Problem | Label |
| --- | --- |
| Contact form shows "message sent" but sends nothing | `bug`, `priority: high` |
| Empty `src=""` on the lightbox `<img>` causes a broken-image request | `bug`, `accessibility` |
| Gallery uses random placeholder images from picsum.photos | `site-content` |
| No SEO/social metadata — link previews are blank | `enhancement` |

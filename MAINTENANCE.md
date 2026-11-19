<!-- markdownlint-disable MD013 -->
# Portfolio Maintenance Guide

A quick, practical reference for maintaining Guillermo Brachetta's portfolio.

---

## 1. Environment & Commands

Always use **Node 22** (`.nvmrc` pins `22.23.4`). Higher Node versions trigger
Gatsby datastore buffer errors.

```bash
# Load correct Node version
nvm use

# Start local development server (http://localhost:8000)
npm start

# Clean Gatsby cache (run if build behaves oddly)
npm run clean

# Test production build
npm run build

# Run ESLint on changed files
npx eslint src/data/index.js src/pages/index.jsx
```

---

## 2. Adding a New Project

Adding a project requires updating two files and adding two images. All
numbering, counts, alternating tilts, and color cycles are automated.

### Step 1: Add Project Entry in `src/data/index.js`

Add an object to the `projectsData` array:

```javascript
{
  id: "my-project",
  title: "My Project Title",
  type: "DISPATCH // CATEGORY",
  lead: "Punchy one-liner summary.",
  description:
    "First sentence of description adhering to the line limit. "
    + "Second sentence joined with plus operator to stay under 100 chars. "
    + "Third sentence highlights technology and impact.",
  tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  url: "https://myproject.com/",
  repo: "https://github.com/GBrachetta/my-project", // optional
},
```

> **Note on `+` concatenation:** ESLint enforces a strict 100-character line
> limit (`max-len`). Join long sentences with `"..." + "..."` to preserve exact
> spaces without unwanted line breaks or indentation.

### Step 2: Add Screenshots

Generate two WebP images with an aspect ratio of approximately **1.65:1** (e.g.
700×424 px and 1200×728 px) and drop them into `src/images/`:

- `src/images/my-project-700.webp`
- `src/images/my-project-1200.webp`

### Step 3: Register in `src/pages/index.jsx`

1. Import both image files near the top:

```javascript
import myProject from "../images/my-project-700.webp";
import myProject2x from "../images/my-project-1200.webp";
```

1. Add the item to the `selected` array:

```javascript
{
  ...projectsData.find((project) => project.id === "my-project"),
  image: myProject,
  srcSet: `${myProject} 700w, ${myProject2x} 1200w`,
},
```

### What Happens Automatically

- **Case Archive Count:** Header automatically updates (`01—07` to `01—08`).
- **Issue Stamp Number:** Card stamp gets numbered automatically (`ISSUE #08`).
- **Issue Stamp Color & Tilt:** Alternates between gold (`-3deg`) on odd cards
  and mint (`+3deg`) on even cards.
- **Card Tilts:** Container and eyebrow pills alternate between slight
  negative and positive angles.
- **Color Cycling:** Eyebrow pills cycle across 7 comic colors; photo frames
  cycle across 5 pastel tones. Halftone dots remain intact across all cards.

---

## 3. Updating the CV

The CV lives in two synced places:

- **Web CV (`/cv`):** Edit [src/pages/cv.jsx](file:///Users/guille/Code/Ongoing/my-portfolio/src/pages/cv.jsx).
- **Downloadable PDF:** Edit LaTeX source [docs/cv-guillermo.tex](file:///Users/guille/Code/Ongoing/my-portfolio/docs/cv-guillermo.tex)
  and compile directly to `src/images/`:

```bash
xelatex -output-directory=src/images docs/cv-guillermo.tex
```

---

## 4. Updating Social Preview (Open Graph)

The Open Graph preview image is located at `src/images/portfolio-og.png`
(1200×630 px). If you need to refresh it, ensure the image is exported at
standard 1.91:1 ratio.

---

## 5. Rules & Quality Checklist

Before committing changes:

- [ ] Node version was `22.x` via `nvm use`.
- [ ] Modified JS/JSX files pass `npx eslint <filepath>`.
- [ ] No string literals exceed 100 characters per line.
- [ ] Gatsby builds clean (`npm run build`).
- [ ] Changes are reviewed locally before committing.

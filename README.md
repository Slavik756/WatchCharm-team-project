# WatchCharm

A team frontend project: a responsive watch-brand landing page built with HTML and CSS. It presents the brand, product collections, a featured offer, customer reviews and a contact section.

[Live demo — maintained version](https://watchcharm-ochre.vercel.app/)

This demo deploys from this repository and includes the mobile-navigation fix. The [original team demo](https://nastjademchyk.github.io/WatchCharm-team-project/) is hosted from another contributor's repository and may differ.

## Page sections

- Header and anchor navigation.
- Hero section and brand introduction.
- Product catalog and promotional banner.
- Featured watch with a sale price and image gallery layout.
- Customer reviews.
- Contact form and footer.

Responsive images use `picture` and `srcset` with separate mobile, tablet and desktop assets. Section markup and styles are kept in separate files so the team can work on individual parts of the page.

## Stack

- HTML5 and CSS3.
- Vite 4 for development and production builds.
- `vite-plugin-html-inject` for composing the page from HTML partials.
- `vite-plugin-full-reload` for refreshing HTML changes.
- GitHub Actions configuration for publishing the build to GitHub Pages.

## Run locally

With Node.js and npm installed:

```sh
git clone https://github.com/Slavik756/WatchCharm-team-project.git
cd WatchCharm-team-project
npm ci
npm run dev
```

Open the local URL printed by Vite, normally [http://localhost:5173](http://localhost:5173).

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Generate the site in `dist/` |
| `npm run build:vercel` | Generate a build for the root of a Vercel domain |
| `npm run preview` | Preview the generated build |

The build command uses the base path `/WatchCharm-team-project/`. Use the URL printed by the preview server, including that path.

## Structure

```text
src/
├── index.html       # Main page composed from partials
├── partials/        # Header, hero, catalog, sale, reviews, contact and footer
├── css/             # Base styles and section styles
├── images/          # Responsive product images and icons
├── fonts/           # Local font files and font declarations
├── public/          # Public assets
└── main.js          # JavaScript entry point
vite.config.js
.github/workflows/deploy.yml
```

Edit section content in `src/partials/` and its corresponding styles in `src/css/`. Generated files in `dist/` should not be edited.

## Current scope

This repository demonstrates page layout and responsive asset handling. It is not a complete online store: there is no cart, checkout, payment integration or server-side contact submission.

The mobile navigation uses a native dialog with open/close buttons, Escape and backdrop dismissal, keyboard focus containment, and background scroll locking. Selecting a section closes the menu; switching to the desktop layout also closes it and restores scrolling.

The maintained Vercel demo above includes these changes. Changes to this fork do not update the original team's GitHub Pages deployment.

## Publishing

The Vercel project is connected to this repository's `main` branch. `vercel.json` configures Vite, `npm ci`, `npm run build:vercel`, and the `dist/` output directory. The app runs at the domain root; no environment variables are required for this static landing page.

The existing workflow builds on pushes to `main` and publishes `dist/` to the `gh-pages` branch. GitHub Pages must be configured to serve that branch. If the repository name or hosting path changes, update the `--base` value in the build script.

## Team context

WatchCharm was developed as a team project using the GoIT Vite starter. This README describes the repository as a whole; individual contributions are recorded in its commit history.


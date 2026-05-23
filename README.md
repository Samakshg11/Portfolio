# Responsive Portfolio Website

## Overview
This repository contains a personal portfolio website for Samaksh Garg.
It is built with semantic HTML, a shared CSS stylesheet, and lightweight JavaScript for interactions.

## Tech Stack
- HTML5
- CSS3
- Vanilla JavaScript
- Flexbox
- CSS Grid
- Media Queries

## Project Structure
- `index.html`: Main landing page with hero and featured projects preview
- `about.html`: About page with profile narrative and skills
- `projects.html`: Featured projects and visual gallery
- `contact.html`: Contact form and social links
- `home.html`: Redirect page to `index.html` for backward compatibility
- `css/style.css`: Global styles and responsive behavior
- `js/main.js`: Shared interactions (back-to-top, dynamic year, and navbar scroll state)
- `js/contact.js`: Contact form validation and feedback state
- `robots.txt`: Crawl directives for search engines
- `sitemap.xml`: Public page URLs for indexing

## Highlights
- Consistent metadata and canonical tags across public pages
- Open Graph and Twitter cards for better social sharing previews
- Structured data (`WebSite`, `Person`, and `ItemList`) for richer indexing
- Skip links and keyboard focus states for accessibility
- Responsive navigation and section layouts for mobile screens
- Contact form with semantic labels and inline validation feedback
- Contact form with accessible live-region validation announcements
- Reduced-motion support for users with motion sensitivity
- Back-to-top button with smooth-scroll behavior and visibility state management
- Project gallery served from local image assets for improved privacy and control

## Recent Homepage Improvements
- Improved homepage SEO title and social preview image links
- Upgraded hero content semantics with a true `<h1>` and better accessibility labels
- Added recruiter-friendly availability messaging in the hero section
- Replaced decorative preview backgrounds with lazy-loaded semantic images
- Enriched structured data with `sameAs` social profile references

## Recent Reliability Improvements
- Fixed back-to-top visibility behavior by aligning CSS with the `hidden` attribute
- Hardened active-nav matching for URLs that include query params or hash fragments
- Added robust guards in contact form JavaScript for missing DOM nodes

## Run Locally
1. Clone this repository.
2. Open the project folder.
3. Start a local static server from the project root:
   - `python3 -m http.server 5500`
4. Open `http://localhost:5500/index.html` in your browser.

## Deployment Notes
- Base URL: `https://samakshgarg.github.io/portfolio/`
- Keep `robots.txt` and `sitemap.xml` aligned with public page URLs.
- Update structured data URLs when adding new pages.

## Live Demo
`https://samakshgarg.github.io/portfolio/`

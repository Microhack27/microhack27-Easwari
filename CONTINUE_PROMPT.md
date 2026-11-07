# Prompt to continue MICROHACK'27 website work in another AI

You are a senior front-end engineer. Continue improving the static site in this folder (plain HTML/CSS/JS, GitHub Pages friendly, no build step).
UI reference: https://pechacks.org/ · Live current site: https://microhack27.github.io/#home

## Structure
index.html (Home, About, Tracks, Timeline, PPT Template, Guidelines, FAQ, Support) · ps.html?id=1..10 (problem statement detail, rendered by js/main.js from js/data.js) · css/style.css (palette tokens in :root) · assets/img.

## Fixed palette (do not add colours)
bg #030a1a / #071630 · blue #1b8cff · cyan #2de2ff · ice #cfeaff · text #e8f2ff · muted #9bb2d0 · glass rgba(24,70,140,.16) with blur.

## Already done
Nav with Easwari + Microchip + MICROHACK'27 logos on the left and Guidelines/Support links; hero with FREE REGISTRATION badge, 25–26 Feb 2027, 8:00 AM IST, venue (Geetham Auditorium, Maps link), team size 1–4, live countdown, particle canvas; About with auto-fading slider + marquee; Tracks as scroll-snap cards with animated borders linking to ps.html; PS detail page (description, hardware kits with Microchip links, laptop + software prerequisites, Register button to the Google Form); animated timeline (incl. Round 1 PPT shortlisting); PPT Template download (assets/files/microhack27-ppt-template.pptx, replace with the final file); FAQ accordion; Guidelines; Support (no phone numbers); custom cursor; scroll progress bar; reveal animations; responsive down to 360px.

## Also done in the latest pass
Timeline cards no longer vanish on scroll-up or anchor jumps; footer/hero overflow at 360px fixed (no horizontal scroll at 360/390/820/1440); mobile menu has Register button, Escape closes it, aria-expanded; skip link and visible keyboard focus; Open Graph/Twitter tags, favicon set, apple-touch-icon, og-image.jpg, 404.html; images compressed (about 2.4 MB down to about 1.1 MB) with width/height set; invalid ps.html?id falls back to PS 01; particle canvas pauses when the tab is hidden and stops for reduced motion.

## Remaining / to verify (please do these)
1. Review every text for grammar and consistency (British spelling used: organise, analyse).
2. Confirm the General Rules in the Guidelines section with the organisers (they are standard hackathon rules, not from the provided document).
3. Add a short "What to bring / Day-wise schedule" once the organisers share it.
4. (done) Open Graph, favicons and 404.html. Check the og:url and image URLs match the final domain.
5. Add a proper image for each track (optional) and a sponsor strip when available.
6. Run a Lighthouse pass on the live URL (logos already compressed, width/height set).
7. Test on real iOS Safari and Android Chrome; check the custom cursor is disabled on touch and keyboard focus styles are visible.
8. Keep prefers-reduced-motion support.

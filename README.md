# Kalastajatorpan Tennisklubi — website

A single-page marketing site for Kalastajatorpan Tennisklubi (Munkkiniemi, Helsinki).
Bilingual (Finnish / English), fully static, no build step.

## Live site

Published with GitHub Pages — see the repository's **Settings → Pages** for the URL.

## Structure

```
index.html            Markup + all styles (inline <style>)
app.js                Content (FI/EN), language toggle, interactions, 3D ball
assets/               Images, videos, logos, fonts loader
  intro.mp4           Hero background + full intro video (with sound in the modal)
  vendor/three.min.js Self-hosted Three.js (r128) for the 3D tennis ball
```

## Features

- Full-screen intro video background (muted autoplay loop)
- "Katso intro / Play intro" button → fullscreen modal that plays the full intro **with sound**
- Interactive aerial map: numbered markers (01–06) pinned on the aerial photo,
  cross-highlighting the facilities list on hover
- Language toggle (FI / EN) covering all copy
- Clay-court / restaurant / booking / pricing / events sections
- Google-style member reviews with an animated rating counter
- Social links (Instagram, YouTube, Facebook) + an Instagram-style post grid
- Google Maps embed, responsive layout, cookie notice

## Editing content

All text lives in `app.js` in the `FI` and `EN` objects — edit those to change copy,
prices, opening hours, events, and reviews. Images are in `assets/`.

## Notes

- The site is fully self-contained except two external embeds that require the
  network at view time: Google Fonts and the Google Maps iframe. These are
  standard and expected.
- Placeholder content to replace before going public:
  - **Reviews** — sample testimonials + the 4.9 rating / count in `app.js`.
  - **Instagram grid** — tiles reuse club photos; swap the `src`s in the
    `<div class="ig-grid">` (index.html) for real IG post images. Instagram has
    no free native live-feed embed, so this grid links to the profile instead.
  - **Map markers** — marker positions (left/top %) are in the `.map-marker`
    buttons in index.html; nudge them if you want a more exact fit.
- `assets/intro.mp4` is ~49 MB. If you want faster loading, re-encode it to a
  smaller 720p/1080p version.

## Local preview

```
python3 -m http.server 8000
# then open http://localhost:8000
```

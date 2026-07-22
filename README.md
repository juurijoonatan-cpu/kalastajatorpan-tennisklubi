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
- "Watch the film" button → fullscreen modal that plays the full intro **with sound**
- Interactive 3D tennis ball (Three.js) that spins and reacts to the cursor
- Language toggle (FI / EN) covering all copy
- Clay-court / restaurant / booking / pricing / events sections
- Member reviews (sample content — replace with real testimonials)
- Social links (Instagram, YouTube, Facebook) + live Facebook post feed
- Google Maps embed, responsive layout, cookie notice

## Editing content

All text lives in `app.js` in the `FI` and `EN` objects — edit those to change copy,
prices, opening hours, events, and reviews. Images are in `assets/`.

## Notes

- The site is fully self-contained except three external embeds that require the
  network at view time: Google Fonts, the Google Maps iframe, and the Facebook
  page plugin. These are standard and expected.
- The **reviews are placeholder content** and should be replaced with real
  member testimonials before going public.
- `assets/intro.mp4` is ~49 MB. If you want faster loading, re-encode it to a
  smaller 720p/1080p version.

## Local preview

```
python3 -m http.server 8000
# then open http://localhost:8000
```

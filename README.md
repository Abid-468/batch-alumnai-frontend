# Batch Alumni Directory

A modern, frontend-only alumni directory website for a batch (e.g. Batch CSE 20XX). Built with HTML, CSS, and vanilla JavaScript — no frameworks or backend.

## Features

- **Home page** — Hero, search, filterable student grid, notice board, recent updates
- **Find alumni** — Live search by name and filter by city
- **Student cards** — Profile image, profession, city, social links, view profile
- **Login & Register** — UI only (no backend); forms show an alert on submit
- **Responsive** — Mobile-friendly layout with a hamburger menu on small screens

## Tech Stack

- HTML5
- CSS3 (custom properties, Grid, Flexbox)
- Vanilla JavaScript (no React or other frameworks)
- [Google Fonts: Poppins](https://fonts.google.com/specimen/Poppins)

## Project Structure

```
batch-alumnai-frontend/
├── index.html          # Main page
├── login.html          # Login page
├── register.html       # Registration page
├── css/
│   └── style.css      # All styles
├── js/
│   ├── script.js      # Data, rendering, search & filter
│   └── auth.js        # Login/register form handling
├── assets/
│   └── images/        # Optional image assets
└── README.md
```

## How to Run

1. Clone or download this folder.
2. Open `index.html` in a browser, or serve the folder locally:
   - **Python:** `python3 -m http.server 8000` then visit `http://localhost:8000`
   - **Node:** `npx serve .` and use the URL shown

No build step or backend required.

## Dummy Data

Student list and notices/updates are defined in `js/script.js`. Profile images use placeholder URLs. You can replace them with real image paths under `assets/images/` when you add a backend.

## Future Backend Integration

The structure is kept simple so you can later:

- Replace the in-memory student array with API calls
- Wire login/register to a real auth API
- Load notices and updates from a database

---

© 2025 Batch Alumni Directory — frontend only.

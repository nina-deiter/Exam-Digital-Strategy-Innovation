# Study website – GitHub Pages

This repository includes the original Langdock JSX study website, wrapped as a React/Vite project with Tailwind CSS.

## Publish on GitHub

1. Create a **public** GitHub repository (for example `lernwebsite`) with the default branch **main**.
2. Upload the **contents of this folder**, including `.github/workflows/deploy.yml`, to the repository root. The `.github` directory may be hidden on your computer.
3. In GitHub go to **Settings > Pages > Build and deployment** and choose **GitHub Actions** as the source.
4. Open **Actions** and wait for the `Deploy study website to GitHub Pages` workflow to finish. If necessary, manually run it with **Run workflow**.
5. Open `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/` (or check the address in Settings > Pages).

## Updating content

Edit `src/App.jsx`, commit the change on `main`, and GitHub Pages redeploys automatically.

## Run locally (optional)

Install Node.js, then run `npm install` and `npm run dev`.

## Note

Flashcard progress is currently stored in React component state only. Reloading the page resets it, and learning progress does not synchronize across devices. The site is public to anyone with the link.

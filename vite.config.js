import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// In GitHub Actions, compute the Pages path from the repository name.
// Works for both username.github.io and ordinary project repositories.
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const base = repository && !repository.endsWith('.github.io')
  ? `/${repository}/`
  : '/';

export default defineConfig({
  plugins: [react()],
  base
});

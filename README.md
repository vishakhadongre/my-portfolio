# Fix steps (run inside your project folder)

1. npm install framer-motion
2. npm install -D @tailwindcss/postcss
3. npm uninstall @tailwindcss/turbopack
4. Copy every file/folder from this zip into your project (overwrite): postcss.config.mjs, next.config.ts, app/, components/, data/
5. Delete the .next folder, then run: npm run dev

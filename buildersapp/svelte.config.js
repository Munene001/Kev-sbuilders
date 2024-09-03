import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',  // Output folder for pages
      assets: 'build', // Output folder for assets
      fallback: 'index.html', // Use 'index.html' as fallback for SPA routing
    }),
  },

  preprocess: preprocess({
    ts: true, // Enable TypeScript support if needed
  }),
};

export default config;
